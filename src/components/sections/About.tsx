import aboutPic from "../../assets/images/about-pic.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-4xl mx-auto grid md:grid-cols-[200px_1fr] gap-8 items-start"
    >
      <img
        src={aboutPic}
        alt="About photo"
        className="w-full rounded-lg object-cover"
      />
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">About</h2>
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
