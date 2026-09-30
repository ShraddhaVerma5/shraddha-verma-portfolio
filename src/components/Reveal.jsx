import { useReveal } from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, className = "", style }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--d": `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
