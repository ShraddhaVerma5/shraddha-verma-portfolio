import Section from "./Section";
import Reveal from "./Reveal";
import { stats } from "../data/profile";
import "./About.css";

export default function About() {
  return (
    <Section id="about" eyebrow="about" title="Results-oriented, detail-first">
      <div className="about">
        <Reveal>
          <p>I'm a Computer Science graduate (CGPA 8.33, 2025) and Web Developer with hands-on experience across web development, Java-based systems, WordPress and SEO. I enjoy solving real production problems — from fixing responsive layouts and migrating WordPress sites to improving technical SEO and site performance.</p>
          <p>My toolkit spans HTML5, CSS3, JavaScript and React on the front end, Java, JSP, Servlets and JDBC with MySQL on the back end, plus WordPress, On-Page SEO and Technical SEO. I focus on building responsive, maintainable and search-friendly web experiences.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="about__stats">
            {stats.map(([num, label]) => (
              <div key={label} className="card card--lift about__stat">
                <div className="fd about__num">{num}</div>
                <div className="fm about__label">{label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
