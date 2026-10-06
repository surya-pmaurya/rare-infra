import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { company } from "../data/siteData";
export default function Contact() {
  return (
    <main className="bg-paper pt-28">
      <section className="container-site py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you’re building."
              text="For the showcase version, the form is intentionally frontend-only. Connect it to your preferred email service or backend later without changing the page structure."
            />
            <div className="mt-10 space-y-5">
              <div className="flex gap-4">
                <Phone className="text-accent" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/35">
                    Phone
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    {company.phone.join(" · ")}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-accent" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/35">
                    Email
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    {company.email}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="text-accent" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/35">
                    Offices
                  </div>
                  {company.offices.map((o) => (
                    <div
                      key={o}
                      className="mt-1 text-sm leading-6 text-black/60"
                    >
                      {o}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-bold">
                Name
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="text-xs font-bold">
                Phone
                <input
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="+91 ..."
                />
              </label>
              <label className="text-xs font-bold sm:col-span-2">
                Email
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-xs font-bold sm:col-span-2">
                Project type
                <select className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:border-accent">
                  <option>Construction</option>
                  <option>Residential</option>
                  <option>Corporate</option>
                  <option>Retail</option>
                  <option>Hospitality</option>
                  <option>Plotting</option>
                  <option>Interior</option>
                </select>
              </label>
              <label className="text-xs font-bold sm:col-span-2">
                Message
                <textarea
                  rows="6"
                  className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none focus:border-accent"
                  placeholder="Tell us a little about your project..."
                />
              </label>
            </div>
            <button className="mt-6 w-full rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent">
              Send enquiry
            </button>
            <p className="mt-3 text-center text-[11px] text-black/35">
              Demo form — connect this handler to email/API when the project
              goes live.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
