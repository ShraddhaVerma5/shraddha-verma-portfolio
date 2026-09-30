import Reveal from "./Reveal";
import Tag from "./Tag";

export default function ExperienceItem({ item, index }) {
  return (
    <Reveal delay={index * 70} className="exp__item">
      <span className="exp__node" aria-hidden="true" />
      <div className="exp__hash fm">commit {item.hash}</div>
      <div className="exp__head">
        <h3 className="exp__role fd">{item.role}</h3>
        <span className="exp__date fm">{item.date}</span>
      </div>
      <div className="exp__org fm">{item.org}</div>
      <ul className="exp__list">
        {item.bullets.map((b) => <li key={b}><span className="fm" aria-hidden="true">+</span>{b}</li>)}
      </ul>
      <div className="exp__stack">{item.stack.map((s) => <Tag key={s} variant="stack">{s}</Tag>)}</div>
    </Reveal>
  );
}
