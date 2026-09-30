import Reveal from "./Reveal";
import { profile } from "../data/profile";
import "./Contact.css";

const links = [
  { href: `mailto:${profile.email}`, label: `✉ ${profile.email}` },
  { href: profile.phoneHref, label: `☎ ${profile.phone}` },
  { href: profile.linkedin, label: "in/ LinkedIn", external: true },
  { href: profile.github, label: "⌥ GitHub", external: true },
];

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <Reveal>
        <div className="eyebrow fm contact__eyebrow"><span>//</span>contact</div>
        <h2 className="contact__title fd">Let's build something.</h2>
        <p className="contact__sub">Open to Software Developer roles. Reach out anytime.</p>
        <div className="contact__links">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="btn fm contact__link" {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{l.label}</a>
          ))}
        </div>
        <div className="contact__copy fm">© {new Date().getFullYear()} Shraddha Verma · built with React · {profile.location}</div>
      </Reveal>
    </footer>
  );
}
