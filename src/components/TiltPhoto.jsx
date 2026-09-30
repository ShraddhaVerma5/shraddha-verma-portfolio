import { useRef, useState } from "react";
import profile from "../assets/profile.jpg";
import { profile as info } from "../data/profile";
import "./TiltPhoto.css";

export default function TiltPhoto() {
  const ref = useRef(null);
  const [tf, setTf] = useState("");

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTf(`perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.03)`);
  };

  return (
    <div className="photo">
      <div className="photo__glow" aria-hidden="true" />
      <div ref={ref} className="photo__frame" onPointerMove={onMove} onPointerLeave={() => setTf("")} style={tf ? { transform: tf } : undefined}>
        <img src={profile} alt="Portrait of Shraddha Verma" width="660" height="1025" className="photo__img" fetchpriority="high" decoding="async" />
        <div className="photo__badge fm">{info.location}</div>
      </div>
      <div className="photo__ring" aria-hidden="true" />
    </div>
  );
}
