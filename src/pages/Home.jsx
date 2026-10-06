import { ArrowDown, ArrowUpRight, Check, Play } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import {
  company,
  gallery,
  partnerLogos,
  projects,
  services,
  stats,
  testimonials,
} from "../data/siteData";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[760px] overflow-hidden bg-ink text-white">
        <img
          src="/assets/images/hero.jpg"
          alt="rare infra project"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="container-site relative flex min-h-[760px] items-end pb-20 pt-32 sm:pb-24">
          <div className="max-w-4xl reveal">
            <div className="eyebrow">
              End-to-end solutions · Bengaluru · Hyderabad
            </div>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[.98] tracking-[-.04em] sm:text-7xl lg:text-[6.5rem]">
              Building spaces
              <br />
              <span className="text-accent">with purpose.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              {company.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary gap-2">
                Explore projects <ArrowUpRight size={17} />
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"
              >
                Discover rare infra
              </Link>
            </div>
          </div>
        </div>
        <a
          href="#about"
          className="absolute bottom-7 right-7 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[.25em] text-white/45 lg:flex"
        >
          Scroll to explore <ArrowDown size={14} />
        </a>
      </section>

      <section id="about" className="bg-paper py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-black image-hover">
            <img
              src="/assets/images/about.jpg"
              alt="rare infra workspace"
              className="aspect-[4/5] h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur">
              <div className="font-display text-2xl font-extrabold">
                TRUST + QUALITY
              </div>
              <div className="mt-1 text-xs text-black/50">
                The purpose of rare infra
              </div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About rare infra"
              title="Varied aspirations. One integrated team."
              text={company.description}
            />
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              <div className="border-t border-black/10 pt-5">
                <div className="font-display text-xl font-extrabold">
                  Vision
                </div>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  {company.vision}
                </p>
              </div>
              <div className="border-t border-black/10 pt-5">
                <div className="font-display text-xl font-extrabold">
                  Mission
                </div>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  {company.mission}
                </p>
              </div>
            </div>
            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Integrity",
                "Responsibility",
                "Commitment",
                "Quality",
                "EHS",
              ].map((v) => (
                <span
                  key={v}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l border-white/10 pl-5">
              <div className="font-display text-4xl font-extrabold text-accent sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[.12em] text-white/45">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="Built across verticals."
              text="From construction and interiors to retail and hospitality, rare infra brings design, planning, execution and project management together."
            />
            <Link to="/contact" className="btn-dark shrink-0 gap-2">
              Discuss your project <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-soft"
              >
                <div className="image-hover aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold uppercase tracking-[.22em] text-accent">
                    0{i + 1}
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-extrabold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">
                    {s.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ebe8e2] py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects that speak for themselves."
              text="A showcase of residential, plotting, corporate, retail and hospitality work described in the company profile."
            />
            <Link to="/projects" className="btn-dark shrink-0 gap-2">
              View all projects <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <ProjectCard key={p.slug} project={p} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="The rare difference"
              title="A holistic realty solution."
              text="From designing and detailing to colour psychology, energy saving, environmental design, materials, project management, QA, QS and F&S development."
            />
            <ul className="mt-8 space-y-4 text-sm text-black/65">
              {[
                "Knowledge, expertise and commitment",
                "Turnkey solutions from transaction to completion",
                "Quality-centric project delivery",
                "Responsible and experienced professionals",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-accent p-1 text-white">
                    <Check size={13} />
                  </span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div className="image-hover overflow-hidden rounded-3xl">
              <img
                src="/assets/gallery/164.jpeg"
                alt="Interior"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="space-y-3 pt-10 sm:space-y-5 sm:pt-16">
              <div className="image-hover overflow-hidden rounded-3xl">
                <img
                  src="/assets/gallery/166.jpeg"
                  alt="Corporate interior"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <SectionHeading
              light
              eyebrow="Our people & principles"
              title="Trust is built into the work."
              text="rare infra is striving to become a brand for trust and quality, guided by integrity, responsibility and commitment."
            />
            <div className="grid gap-5 sm:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote
                  key={t.role}
                  className="rounded-3xl border border-white/10 bg-white/[.03] p-6"
                >
                  <div className="text-accent">“</div>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {t.quote}
                  </p>
                  <footer className="mt-6 border-t border-white/10 pt-4">
                    <div className="text-xs font-bold">{t.name}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[.18em] text-white/35">
                      {t.role}
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <div className="container-site">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Experience"
              title="A glimpse of the work."
            />
            <Link
              to="/gallery"
              className="hidden text-sm font-bold hover:text-accent sm:inline-flex"
            >
              Open gallery <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.slice(0, 8).map((src, i) => (
              <Link
                key={src}
                to="/gallery"
                className={`image-hover overflow-hidden rounded-2xl ${i === 0 || i === 5 ? "sm:col-span-2" : ""}`}
              >
                <img
                  src={src}
                  alt={`rare infra work ${i + 1}`}
                  className="aspect-[4/3] h-full w-full object-cover"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ebe8e2] py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Trusted relationships"
            title="Experience across brands & sectors."
          />
          <div className="mt-10 grid grid-cols-3 items-center gap-3 sm:grid-cols-5 lg:grid-cols-7">
            {partnerLogos.slice(0, 14).map((src, i) => (
              <div
                key={src + i}
                className="flex h-24 items-center justify-center rounded-2xl bg-white p-4"
              >
                <img
                  src={src}
                  alt="Partner brand"
                  className="max-h-14 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 text-white sm:py-20">
        <div className="container-site flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-[.24em] text-white/60">
              Have a project in mind?
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let’s build something rare.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:-translate-y-0.5"
          >
            Get in touch <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
