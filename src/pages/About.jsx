import { Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { company, services, stats } from "../data/siteData";
export default function About() {
  return (
    <main className="bg-paper pt-28">
      <section className="container-site py-16 sm:py-24">
        <div className="max-w-4xl">
          <div className="eyebrow">About rare infra</div>
          <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
            A complete solution from{" "}
            <span className="text-accent">inception to completion.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base leading-8 text-black/60">
            The company profile describes expertise
            spanning construction, interior, retail and hospitality, backed by
            experienced professionals and a commitment to client aspirations.
          </p>
        </div>
      </section>
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="container-site grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl font-extrabold text-accent">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[.12em] text-white/45">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container-site grid gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Vision"
            title="World-class products & services."
            text={company.vision}
          />
          <div className="mt-10">
            <SectionHeading
              eyebrow="Mission"
              title="Timeliness, quality and trust."
              text={company.mission}
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src="/assets/gallery/240.jpeg"
            alt="Hospitality interior"
            className="h-full min-h-[460px] w-full object-cover"
          />
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Key values"
            title="The principles behind the work."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Integrity", "Responsibility", "Commitment", "Quality"].map(
              (x, i) => (
                <div key={x} className="rounded-md border border-black/10 p-7">
                  <div className="text-5xl font-display font-extrabold text-accent">
                    0{i + 1}
                  </div>
                  <h3 className="mt-8 font-display text-xl font-extrabold">
                    {x}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">
                    A value highlighted in the company profile and reflected in
                    its approach to client work.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
      <section className="container-site py-20 sm:py-28">
        <SectionHeading
          eyebrow="Capabilities"
          title="Verticals we work across."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-md bg-white p-7 shadow-soft">
              <h3 className="font-display text-2xl font-extrabold">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/55">{s.text}</p>
              <div className="mt-6 space-y-2 text-xs text-black/55">
                <div className="flex gap-2">
                  <Check size={14} className="text-accent" />
                  Integrated planning
                </div>
                <div className="flex gap-2">
                  <Check size={14} className="text-accent" />
                  Execution support
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
