import { useMemo } from "react";
import "./FloatingSymbols.css";

const SYMBOLS = ["</>","{ }","( )","=>","&&","||","===","01","10",";","<div>","npm","git","const","return","()=>{}","#!/","CSS3","Java","React"];

export default function FloatingSymbols() {
  const items = useMemo(() => {
    const count = window.matchMedia?.("(max-width: 700px)").matches ? 12 : 24;
    return Array.from({ length: count }, (_, i) => ({
      id: i, s: SYMBOLS[i % SYMBOLS.length], left: Math.random() * 100, delay: Math.random() * 18,
      dur: 14 + Math.random() * 16, size: 12 + Math.random() * 15, dx: (Math.random() - 0.5) * 130,
    }));
  }, []);
  return (
    <div className="float" aria-hidden="true">
      {items.map((it) => (
        <span key={it.id} className="float__item fm"
          style={{ left: `${it.left}%`, fontSize: it.size, animationDuration: `${it.dur}s`, animationDelay: `${it.delay}s`, "--dx": `${it.dx}px` }}>
          {it.s}
        </span>
      ))}
    </div>
  );
}
