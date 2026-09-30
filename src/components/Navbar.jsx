import { useEffect, useState } from "react";
import { navItems } from "../data/nav";
import { useScrolled } from "../hooks/useScrolled";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 860 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize); };
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <nav className="nav__bar" aria-label="Primary">
        <a href="#top" className="nav__logo fm">shraddha<span>.dev</span></a>
        <div className="nav__links fm">
          {navItems.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
        </div>
        <button className="nav__toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((o) => !o)}>
          <span className={open ? "is-open" : ""} /><span className={open ? "is-open" : ""} /><span className={open ? "is-open" : ""} />
        </button>
      </nav>
      <div id="mobile-menu" className={`nav__mobile fm ${open ? "is-open" : ""}`} hidden={!open}>
        {navItems.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>)}
      </div>
    </header>
  );
}
