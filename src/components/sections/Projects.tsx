import { projects } from "../../data/projects";

const statusStyles: Record<string, string> = {
  live: "bg-neon-blue/15 text-neon-blue",
  "in-progress": "bg-neon-violet/15 text-neon-violet",
  planned: "bg-neon-pink/15 text-neon-pink",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-neon-blue via-neon-violet to-neon-pink bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-bg-soft/60 border border-neon-violet/20 rounded-xl p-6 hover:border-neon-blue/50 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <span
                className={`text-xs uppercase px-2 py-1 rounded-full ${
                  statusStyles[p.status] ?? "bg-slate-500/20 text-slate-400"
                }`}
              >
                {p.status}
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              {p.description || "TODO: [NEEDS INPUT]"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
