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
    <main className="bg-paper-contrast pt-28">
      <section className="container-site py-16 sm:py-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects across sectors, places and possibilities."
          text="A showcase of our diverse portfolio, highlighting our expertise in delivering exceptional projects across various sectors and locations."
        />

        { /* Filter buttons */ }
        <div className="mt-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${filter === c ? "bg-ink text-paper" : "border border-ink/10 bg-paper hover:border-ink/30"}`}
            >
              {c}
            </button>
          ))}
        </div>

        { /* Projects grid */ }
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
          {list.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
