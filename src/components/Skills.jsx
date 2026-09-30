import Section from "./Section";
import Reveal from "./Reveal";
import Tag from "./Tag";
import { skillGroups } from "../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <Section id="skills" band eyebrow="skills" title="Toolkit" sub="What I reach for when building and shipping.">
      <div className="skills">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 60}>
            <div className="card card--lift skills__card">
              <h3 className="skills__title fm">{g.title}</h3>
              <div className="skills__tags">{g.items.map((s) => <Tag key={s}>{s}</Tag>)}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
