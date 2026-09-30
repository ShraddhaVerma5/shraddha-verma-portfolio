import Section from "./Section";
import ExperienceItem from "./ExperienceItem";
import { experience } from "../data/experience";
import "./Experience.css";

export default function Experience() {
  return (
    <Section id="experience" band eyebrow="experience" title="Commit history" sub="A log of where I've worked and what I shipped, most recent first.">
      <div className="exp">
        {experience.map((e, i) => <ExperienceItem key={e.hash} item={e} index={i} />)}
      </div>
    </Section>
  );
}
