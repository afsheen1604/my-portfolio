import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-neon-blue via-neon-violet to-neon-pink bg-clip-text text-transparent">
        Skills
      </h2>
      {skills.length === 0 && (
        <p className="text-slate-500">
          TODO: [NEEDS INPUT] — no skills data yet
        </p>
      )}
      <div className="grid sm:grid-cols-2 gap-6">
        {skills.map((cat) => (
          <div
            key={cat.category}
            className="bg-bg-soft/60 border border-neon-violet/20 rounded-xl p-6 hover:border-neon-blue/50 transition-colors"
          >
            <h3 className="text-neon-blue font-semibold mb-3">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-slate-300 bg-bg border border-slate-700 rounded-full px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
