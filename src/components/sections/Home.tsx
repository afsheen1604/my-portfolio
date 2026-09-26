import profilePic from "../../assets/images/profile-pic.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-6"
    >
      <img
        src={profilePic}
        alt="Profile photo"
        className="w-40 h-40 rounded-full object-cover border-4 border-slate-700"
      />
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Shaik Nida Afsheen
        </h1>
        <p className="text-xl text-slate-400">
          Software Engineer — AI & Agentic Systems • Full Stack • Frontend
        </p>
      </div>
    </section>
  );
}
