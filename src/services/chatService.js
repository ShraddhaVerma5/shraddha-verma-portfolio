const FALLBACKS = [
  [["experience", "work", "intern"], "Shraddha has interned at GeoGo Infotech (current), Cashpor Micro Credit, HCL Technologies, and Unified Mentor — spanning web development, IT operations, and Java systems."],
  [["project"], "Her key projects include a WordPress Migration & Optimization, a Hospital Management System (Java/JDBC/MySQL), InstaSmart (Java Servlets + Oracle), and a Python Text-to-Speech Converter."],
  [["skill", "tech", "stack"], "Her toolkit includes Java, Python, C, SQL, HTML5/CSS3/JavaScript/React, MySQL/Oracle, and tools like Git, VS Code, Eclipse and IntelliJ."],
  [["education", "cgpa", "degree"], "Shraddha holds a B.Tech in Computer Science and Engineering from Ashoka Institute of Technology and Management, Varanasi, with a CGPA of 8.33 (2021-2025)."],
  [["contact", "email", "hire"], "You can reach Shraddha at vnsvermashraddha@gmail.com or +91-8303928026, or connect on LinkedIn/GitHub via the links in the footer."],
];
const DEFAULT = "I can share details on Shraddha's experience, projects, skills, and education — try asking about one of those!";

export function fallbackAnswer(question) {
  const q = question.toLowerCase();
  const hit = FALLBACKS.find(([keys]) => keys.some((k) => q.includes(k)));
  return hit ? hit[1] : DEFAULT;
}

/** history: [{role:'user'|'assistant', content}] — must start and end with 'user'. */
export async function askVaani(history, signal) {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history }),
    signal,
  });
  if (!res.ok) throw new Error(`chat ${res.status}`);
  const { text } = await res.json();
  if (!text) throw new Error("empty reply");
  return text;
}
