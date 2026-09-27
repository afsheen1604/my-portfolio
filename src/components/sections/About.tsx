import { useEffect, useRef, useState } from "react";
import aboutPic from "../../assets/images/about-pic.jpg";

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(300);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const updateSize = () => setSize(el.offsetHeight);
    updateSize();

    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start"
    >
      <img
        src={aboutPic}
        alt="About photo"
        style={{ width: 250, height: size }}
        className="flex-shrink-0 rounded-lg object-cover border-2 border-neon-blue/30 shadow-[0_0_30px_rgba(0,212,255,0.15)]"
      />
      <div
        ref={cardRef}
        className="flex-1 bg-bg-soft/60 border border-neon-violet/20 rounded-xl p-6"
      >
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-violet to-neon-pink bg-clip-text text-transparent">
          About
        </h2>
        <p className="text-slate-400 leading-relaxed">
          Software Engineer with a year of production experience building and
          modernizing enterprise applications at MAQ Software, where I work
          across Angular, React, and .NET on large-scale platform migrations and
          analytics tools. I'm a B.Tech graduate from IIITDM Jabalpur, and
          outside of work I spend time on competitive programming — I've solved
          1,000+ problems across LeetCode, Codeforces, and CodeChef, and was a
          semi-finalist at Google's Girl Hackathon 2023. Lately I've been
          focused on AI-assisted and agentic software development, building
          spec-driven workflows and exploring how AI tools can speed up real
          engineering work.
        </p>
      </div>
    </section>
  );
}
