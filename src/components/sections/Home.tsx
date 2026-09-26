import { useEffect, useState } from "react";
import profilePic from "../../assets/images/profile-pic.jpg";

const NAME = "Shaik Nida Afsheen";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount >= NAME.length) return;
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), 60);
    return () => clearTimeout(timer);
  }, [visibleCount]);

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-6 px-6 py-20"
    >
      <img
        src={profilePic}
        alt="Profile photo"
        className="w-40 h-40 rounded-full object-cover border-4 border-neon-blue/40 shadow-[0_0_40px_rgba(0,212,255,0.25)]"
      />
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 flex flex-wrap justify-center">
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-300 ease-out bg-gradient-to-r from-neon-blue via-neon-violet to-neon-pink bg-clip-text text-transparent hover:scale-125 hover:-translate-y-1"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform:
                  i < visibleCount
                    ? "translateY(0) rotateX(0deg)"
                    : "translateY(20px) rotateX(90deg)",
                transitionDelay: `${i * 20}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-xl text-slate-400">
          Software Engineer — AI & Agentic Systems • Full Stack • Frontend
        </p>
      </div>
    </section>
  );
}
