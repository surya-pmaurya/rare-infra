import { ArrowLeft, Check, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/siteData";
import ContactBanner from "../components/ContactBanner";
export default function ProjectDetails() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p)
    return (
      <main className="container-site min-h-[70vh] py-40">
        <h1 className="font-display text-5xl font-extrabold">
          Project not found
        </h1>
        <Link to="/projects" className="mt-6 inline-flex text-accent font-bold">
          Back to projects
        </Link>
      </main>
    );
  return (
    <main className="bg-paper-contrast pt-20">
      <section
        className="relative min-h-[620px] bg-ink text-paper bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${p.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
        <div className="container-site relative flex min-h-[560px] items-end pb-14">
          <div>
            <Link
              to="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm text-paper/75 hover:text-paper"
            >
              <ArrowLeft size={16} />
              All projects
            </Link>
            <div className="eyebrow">{p.category}</div>
            <h1 className="mt-3 max-w-4xl font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
              {p.title}
            </h1>
            <div className="mt-5 flex items-center gap-2 text-sm text-paper/70">
              <MapPin size={16} />
              {p.location}
            </div>
          </div>
        </div>
      </section>
      <section className="container-site grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_.7fr]">
        <div>
          <div className="eyebrow">Project overview</div>
          <h2 className="mt-3 font-display text-4xl font-extrabold">
            Designed around the brief. Delivered with care.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-accent">
            {p.summary}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {p.details.map((d) => (
              <div
                key={d}
                className="flex items-start gap-3 rounded-md bg-paper p-4 shadow-soft"
              >
                <span className="rounded-full bg-accent p-1 text-paper">
                  <Check size={13} />
                </span>
                <span className="text-sm font-semibold">{d}</span>
              </div>
            ))}
          </div>
        </div>
        <ContactBanner />
      </section>
    </main>
  );
}
