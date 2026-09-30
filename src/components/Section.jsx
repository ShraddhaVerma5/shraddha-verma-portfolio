import SectionHeading from "./SectionHeading";

export default function Section({ id, eyebrow, title, sub, band = false, children }) {
  return (
    <section id={id} className={`section ${band ? "section--band" : ""}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} sub={sub} />
        {children}
      </div>
    </section>
  );
}
