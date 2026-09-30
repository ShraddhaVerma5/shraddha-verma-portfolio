import FloatingSymbols from "./FloatingSymbols";
import "./Background.css";

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__glow bg__glow--a" />
      <div className="bg__glow bg__glow--b" />
      <FloatingSymbols />
    </div>
  );
}
