import Reveal from "./Reveal";
import Tag from "./Tag";

export default function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 70} style={{ height: "100%" }}>
      <article className="card proj__card">
        <div className="proj__head">
          <h3 className="proj__title fd">{project.title}</h3>
          <span className="proj__date fm">{project.date}</span>
        </div>
        <p className="proj__desc">{project.desc}</p>
        <div className="proj__stack">{project.stack.map((s) => <Tag key={s} variant="project">{s}</Tag>)}</div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="proj__link fm" aria-label={`${project.title} on GitHub (opens in new tab)`}>↗ GitHub</a>
      </article>
    </Reveal>
  );
}
