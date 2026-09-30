import { useEffect, useState } from "react";

export default function TypeText({ words }) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[wi % words.length];
    let t;
    if (!del && text.length < current.length) t = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
    else if (!del) t = setTimeout(() => setDel(true), 1400);
    else if (text.length > 0) t = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
    else { setDel(false); setWi((w) => w + 1); }
    return () => clearTimeout(t);
  }, [text, del, wi, words]);

  return <span aria-label={words[0]}>{text}<span className="caret" aria-hidden="true" /></span>;
}
