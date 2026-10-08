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
            The company profile describes expertise spanning construction,
            interior, retail and hospitality, backed by experienced
            professionals and a commitment to client aspirations.
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

      {/* Vision and Mission*/}
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
        <div className="overflow-hidden rounded-md border border-black/40 shadow-soft">
          <img
            src="/assets/gallery/240.jpeg"
            alt="Hospitality interior"
            className="h-full min-h-[460px] w-full object-cover"
          />
        </div>
      </section>

      {/* Key Values & Leadership */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Key values"
            title="The principles behind the work."
          />

          {/* Values Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Integrity",
                text: "Upholding complete transparency in every transaction. We ensure honest pricing, clear documentation, and ethical practices across all plotting and construction projects.",
              },
              {
                title: "Responsibility",
                text: "Taking ownership of our footprint and job site safety. We strictly adhere to building regulations and environmental standards to protect our communities and workforce.",
              },
              {
                title: "Commitment",
                text: "Dedicated to delivering on our promises. We prioritize project timelines and client satisfaction, ensuring every residential and commercial space is handed over as envisioned.",
              },
              {
                title: "Quality",
                text: "Excellence is built into our foundation. From premium construction materials to rigorous QA inspections, we deliver durable infrastructures that stand the test of time.",
              },
            ].map((val, i) => (
              <div
                key={val.title}
                className="rounded-md border border-black/10 bg-white p-7 shadow-soft"
              >
                <div className="text-5xl font-display font-extrabold text-accent">
                  0{i + 1}
                </div>
                <h3 className="mt-8 font-display text-xl font-extrabold">
                  {val.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-black/55">
                  {val.text}
                </p>
              </div>
            ))}
          </div>

          {/* Founder Details */}
          <div className="mt-16 overflow-hidden rounded-2xl border border-black/10 bg-paper p-8 shadow-sm md:p-10">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <div className="shrink-0 overflow-hidden rounded-xl border border-black/5 shadow-sm">
                <img
                  src="/assets/images/founder.jpg"
                  alt="Mr. Nirala Kant Maurya"
                  className="h-48 w-40 object-cover object-center md:h-56 md:w-48"
                />
              </div>
              <div className="text-center md:text-left pt-2">
                <h4 className="font-display text-2xl font-extrabold text-ink">
                  Mr. Nirala Kant Maurya
                </h4>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-accent">
                  Founder
                </div>
                <p className="mt-6 text-sm leading-relaxed text-black/65 md:text-base md:leading-8">
                  <strong className="font-bold text-ink">
                    Mr. Nirala Kant Maurya
                  </strong>{" "}
                  is a founder of “rare infra” and “rare biz group”. "Nirala" a name synonymous
                  with Unique and Rarer, having experience more than a 20 years
                  of success in Retailing, Constructions and Interior fit-out
                  projects in various sectors specially in Hospitality,
                  Real-Estate (Residential, Commercial & Corporate) & Retails
                  with Electricals & Electronics Engineering in educational profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="container-site py-20 sm:py-28">
        <SectionHeading
          eyebrow="Capabilities"
          title="Verticals we work across."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-md bg-white p-7 shadow-soft"
            >
              <h3 className="font-display text-2xl font-extrabold">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/55">{s.text}</p>

              {/* Dynamic Checklist */}
              <div className="mt-6 space-y-2 pt-4 text-xs text-black/55">
                {s.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <Check size={14} className="mt-0.5 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
