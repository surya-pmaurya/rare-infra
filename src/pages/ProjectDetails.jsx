import { ArrowLeft, ArrowUpRight, Check, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/siteData";
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
    <main className="bg-paper pt-20">
      <section className="relative min-h-[560px] overflow-hidden bg-ink text-white">
        <img
          src={p.image}
          alt={p.title}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="container-site relative flex min-h-[560px] items-end pb-14">
          <div>
            <Link
              to="/projects"
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/65 hover:text-white"
            >
              <ArrowLeft size={16} />
              All projects
            </Link>
            <div className="eyebrow">{p.category}</div>
            <h1 className="mt-3 max-w-4xl font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
              {p.title}
            </h1>
            <div className="mt-5 flex items-center gap-2 text-sm text-white/70">
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
          <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">
            {p.summary}
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {p.details.map((d) => (
              <div
                key={d}
                className="flex items-start gap-3 rounded-2xl bg-white p-4"
              >
                <span className="rounded-full bg-accent p-1 text-white">
                  <Check size={13} />
                </span>
                <span className="text-sm font-semibold">{d}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] bg-ink p-8 text-white sm:p-10">
          <div className="text-xs font-bold uppercase tracking-[.22em] text-accent">
            Need something similar?
          </div>
          <h3 className="mt-4 font-display text-3xl font-extrabold">
            Let’s discuss your next space.
          </h3>
          <p className="mt-4 text-sm leading-6 text-white/55">
            Share your brief and the team can explore an integrated solution.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-black"
          >
            Contact us <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
