import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="border border-slate-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <span className="text-xs uppercase text-slate-500">
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
