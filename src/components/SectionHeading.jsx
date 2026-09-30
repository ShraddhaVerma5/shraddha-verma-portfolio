import Reveal from "./Reveal";
import "./SectionHeading.css";

export default function SectionHeading({ id, eyebrow, title, sub }) {
  return (
    <Reveal className="sh">
      <div className="eyebrow fm"><span>//</span>{eyebrow}</div>
      <h2 id={id} className="sh__title fd">{title}</h2>
      {sub && <p className="sh__sub">{sub}</p>}
    </Reveal>
  );
}
