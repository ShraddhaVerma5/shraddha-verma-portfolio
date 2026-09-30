// Vercel serverless function: keeps the Anthropic key on the server.
import { RESUME_CONTEXT } from "./_resume.js";

const MODEL = "claude-haiku-4-5-20251001";
const MAX_MESSAGES = 12;
const MAX_CHARS = 500;
const hits = new Map(); // best-effort per-instance rate limit
const WINDOW_MS = 60_000;
const MAX_HITS = 12;

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

function validate(messages) {
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) return null;
  const clean = [];
  for (const m of messages) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") return null;
    const content = m.content.trim().slice(0, MAX_CHARS);
    if (!content) return null;
    clean.push({ role: m.role, content });
  }
  if (clean[0].role !== "user" || clean[clean.length - 1].role !== "user") return null;
  return clean;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ error: "Assistant unavailable" });

  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (limited(ip)) return res.status(429).json({ error: "Too many requests" });

  const messages = validate(req.body?.messages);
  if (!messages) return res.status(400).json({ error: "Invalid request" });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15_000);
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 300, system: RESUME_CONTEXT, messages }),
    });
    if (!r.ok) return res.status(502).json({ error: "Upstream error" });
    const data = await r.json();
    const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("").trim();
    return res.status(200).json({ text });
  } catch {
    return res.status(502).json({ error: "Upstream error" });
  } finally {
    clearTimeout(timer);
  }
}
