import SectionHeading from "../components/SectionHeading";
import { partnerLogos } from "../data/siteData";
export default function Clients() {
  return (
    <main className="bg-paper pt-28">
      <section className="container-site py-16 sm:py-24">
        <SectionHeading
          eyebrow="Experience with brands"
          title="Relationships across construction, retail & hospitality."
          text="The supplied profile lists experience with a broad range of brands and projects. Logos below are reproduced from the provided company material."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {partnerLogos.map((src, i) => (
            <div
              key={src + i}
              className="flex min-h-32 items-center justify-center rounded-md bg-white p-7 shadow-soft"
            >
              <img
                src={src}
                alt="Client or partner logo"
                className="max-h-16 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-ink py-20 text-white">
        <div className="container-site grid gap-10 md:grid-cols-3">
          <div>
            <div className="eyebrow">Retail</div>
            <div className="mt-3 font-display text-4xl font-extrabold">29+</div>
            <p className="mt-2 text-sm text-white/55">
              Stores successfully launched pan India.
            </p>
          </div>
          <div>
            <div className="eyebrow">Fit-out</div>
            <div className="mt-3 font-display text-4xl font-extrabold">
              1.89L+
            </div>
            <p className="mt-2 text-sm text-white/55">
              Sq. ft. of retail fit-out completed.
            </p>
          </div>
          <div>
            <div className="eyebrow">Hospitality</div>
            <div className="mt-3 font-display text-4xl font-extrabold">
              Multiple
            </div>
            <p className="mt-2 text-sm text-white/55">
              Civil and interior projects across hospitality destinations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
