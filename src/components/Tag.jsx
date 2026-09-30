import "./Tag.css";

export default function Tag({ children, variant = "skill" }) {
  return <span className={`tag tag--${variant} fm`}>{children}</span>;
}
