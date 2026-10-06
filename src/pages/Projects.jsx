import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/siteData";
export default function Projects() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...new Set(projects.map((p) => p.category))];
  const list = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter],
  );
  return (
    <main className="bg-paper pt-28">
      <section className="container-site py-16 sm:py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects across sectors, places and possibilities."
          text="The project list below is based on the supplied rare infra company profile. Add, remove or edit projects from src/data/siteData.js."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${filter === c ? "bg-ink text-white" : "border border-black/10 bg-white hover:border-black/30"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {list.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              featured={i === 0 && list.length > 2}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
