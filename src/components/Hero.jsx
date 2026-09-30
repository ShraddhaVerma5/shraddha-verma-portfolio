import TypeText from "./TypeText";
import TiltPhoto from "./TiltPhoto";
import { typeWords } from "../data/profile";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero container">
      <div className="hero__grid">
        <div className="hero__copy">
          <div className="hero__type fm">
            <span className="hero__dot" aria-hidden="true" />
            <TypeText words={typeWords} />
          </div>
          <h1 className="hero__name fd">Shraddha Verma</h1>
          <div className="hero__role fm">Web Developer · Aspiring Software Developer <span className="hero__slash">/</span> B.Tech CSE, 2025</div>
          <p className="hero__bio">
            I build and ship responsive web applications — from WordPress migrations and SEO-optimized production sites to full-stack Java systems. Specializing in web development, On-Page SEO and Technical SEO, I create fast, scalable, user-friendly experiences. Currently working as a Web Developer, and looking for opportunities to grow as a Software Developer.
          </p>
          <div className="hero__cta">
            <a href="#projects" className="btn btn--primary fm">View Projects →</a>
            <a href="#contact" className="btn fm">Get in touch</a>
          </div>
        </div>
        <TiltPhoto />
      </div>
    </section>
  );
}
