import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-neon-blue via-neon-violet to-neon-pink bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="space-y-6">
        {experience.map((item) => (
          <div
            key={item.company + item.role}
            className="bg-bg-soft/60 border border-neon-violet/20 rounded-xl overflow-hidden hover:border-neon-blue/50 transition-colors"
          >
            <div className="bg-gradient-to-r from-neon-blue/10 via-neon-violet/10 to-transparent border-b border-neon-violet/20 p-6">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-base font-bold text-bg bg-gradient-to-r from-neon-blue to-neon-violet rounded-full px-4 py-1.5 shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                      {item.company}
                    </span>
                    {item.location && (
                      <span className="text-sm text-slate-300 flex items-center gap-1">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-4 h-4 text-neon-pink"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block text-sm font-bold text-white bg-bg border border-neon-violet/40 rounded-full px-4 py-1.5">
                    {item.startDate} – {item.endDate}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2">
                {item.description.map((d, i) => (
                  <li
                    key={i}
                    className="text-slate-300 text-sm leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-neon-blue"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              {item.technologies && item.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-slate-300 bg-bg border border-slate-700 rounded-full px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
