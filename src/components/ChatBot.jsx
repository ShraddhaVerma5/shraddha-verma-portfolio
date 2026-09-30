import { useEffect, useRef, useState } from "react";
import avatar from "../assets/avatar.webp";
import { askVaani, fallbackAnswer } from "../services/chatService";
import "./ChatBot.css";

const GREETING = "Hi, I'm Vaani 👋 Shraddha's personal assistant. Ask me anything about her experience, projects, or skills.";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ role: "assistant", text: GREETING }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [msgs, loading, open]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  async function send() {
    const q = input.trim();
    if (!q || loading) return;
    const next = [...msgs, { role: "user", text: q }];
    setMsgs(next);
    setInput("");
    setLoading(true);

    const history = next.slice(1).map((m) => ({ role: m.role, content: m.text })).slice(-10);
    while (history.length && history[0].role !== "user") history.shift();

    const controller = new AbortController();
    abortRef.current = controller;
    let reply;
    try {
      reply = await askVaani(history, controller.signal);
    } catch {
      reply = fallbackAnswer(q);
    }
    if (controller.signal.aborted) return;
    setMsgs((m) => [...m, { role: "assistant", text: reply }]);
    setLoading(false);
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); send(); }
  };

  return (
    <div className="chat">
      {open && (
        <div className="chat__panel" role="dialog" aria-label="Chat with Vaani">
          <div className="chat__head">
            <img src={avatar} alt="" width="36" height="36" className="chat__avatar" />
            <div>
              <div className="chat__name fd">Vaani</div>
              <div className="chat__status fm">● Shraddha's personal AI assistant</div>
            </div>
            <button className="chat__close" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </div>
          <div ref={scrollRef} className="chat__log" role="log" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={`chat__row chat__row--${m.role}`}>
                <div className={`chat__bubble chat__bubble--${m.role}`}>{m.text}</div>
              </div>
            ))}
            {loading && <div className="chat__typing fm">thinking…</div>}
          </div>
          <div className="chat__form">
            <input ref={inputRef} value={input} maxLength={500} onChange={(e) => setInput(e.target.value)} onKeyDown={onKeyDown} placeholder="Ask Vaani about Shraddha..." aria-label="Your question" />
            <button onClick={send} disabled={loading || !input.trim()} className="fm">Send</button>
          </div>
        </div>
      )}
      {!open && (
        <button className="chat__teaser fm" onClick={() => setOpen(true)}>Hi, I'm Vaani 👋 Ask me anything</button>
      )}
      <button className={`chat__fab ${open ? "" : "is-pulsing"}`} onClick={() => setOpen((o) => !o)} aria-label={open ? "Close chat" : "Chat with Vaani"} aria-expanded={open}>
        {open ? "×" : <img src={avatar} alt="" width="58" height="58" />}
      </button>
    </div>
  );
}
