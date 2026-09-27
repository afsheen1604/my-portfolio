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
      className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
    >
      <div>
        <p className="mb-2 text-xl text-slate-400">Hello, I'm</p>

        <h1 className="mb-4 flex flex-wrap text-4xl font-bold md:text-5xl">
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="inline-block bg-gradient-to-r from-neon-blue via-neon-violet to-neon-pink bg-clip-text text-transparent transition-all duration-300 ease-out"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform:
                  i < visibleCount ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 20}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="mb-8 text-lg font-medium tracking-wide md:text-xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-violet">
            Software Engineer
          </span>
          <span className="block text-slate-400 mt-1">
            AI & Agentic Systems • Full Stack • Frontend
          </span>
        </p>

        <div className="flex gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/nida-afsheen-shaik/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>

          <a
            href="https://github.com/afsheen1604"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-11 h-11 flex items-center justify-center rounded-full border border-neon-blue/40 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
            </svg>
          </a>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-violet text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>

          <a
            href="./resume.pdf"
            download="ShaikNidaAfsheen_Resume.pdf"
            className="px-6 py-3 rounded-full border border-neon-blue/50 text-neon-blue font-semibold hover:bg-neon-blue/10 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div
            className="absolute top-1/2 left-1/2 rounded-full -z-10"
            style={{
              width: "calc(100% + 4rem)",
              height: "calc(100% + 4rem)",
              background:
                "linear-gradient(45deg, #00d4ff, transparent, #00d4ff)",
              animation: "spinBorder 10s linear infinite",
            }}
          />
          <img
            src={profilePic}
            alt="Profile photo"
            className="w-full h-full rounded-full object-cover"
            style={{
              boxShadow: "0 0 2rem #00d4ff",
              animation: "floatImage 4s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
