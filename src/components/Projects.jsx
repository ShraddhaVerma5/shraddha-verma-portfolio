import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import "./Projects.css";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="projects" title="Selected work" sub="Four builds spanning WordPress ops, Java systems, and Python tooling.">
      <div className="proj">
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </Section>
  );
}
