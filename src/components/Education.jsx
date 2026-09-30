import Section from "./Section";
import Reveal from "./Reveal";
import { education, certs } from "../data/education";
import "./Education.css";

export default function Education() {
  return (
    <Section id="education" eyebrow="education" title="Academic record">
      <Reveal>
        <ul className="edu">
          {education.map((ed) => (
            <li key={`${ed.degree}-${ed.year}`} className="edu__row">
              <div>
                <h3 className="edu__school fd">{ed.school}</h3>
                <div className="edu__degree">{ed.degree}</div>
              </div>
              <div className="edu__meta">
                <div className="edu__score fm">{ed.score}</div>
                <div className="edu__year fm">{ed.year}</div>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="certs">
        <div className="eyebrow fm"><span>//</span>certifications</div>
        <ul className="certs__grid">
          {certs.map((c) => (
            <li key={c}><Reveal><div className="card certs__item"><span className="fm" aria-hidden="true">✓</span>{c}</div></Reveal></li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
