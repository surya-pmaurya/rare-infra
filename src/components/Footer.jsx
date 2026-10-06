import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/assets/logos/x6.jpeg"
                alt="rare infra"
                className="h-11 w-11 rounded-full bg-white object-contain"
              />
              <div>
                <div className="font-display text-2xl font-extrabold">
                  rare infra
                </div>
                <div className="text-[10px] uppercase tracking-[.25em] text-white/40">
                  rare biz group
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
              {company.description}
            </p>
            <div className="mt-7 flex gap-3">
              <a
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 hover:border-accent hover:text-white"
                href="#"
              >
                LinkedIn
              </a>
              <a
                className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/70 hover:border-accent hover:text-white"
                href="#"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              Explore
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/65">
              {["About", "Projects", "Gallery", "Clients", "Contact"].map(
                (x) => (
                  <Link
                    key={x}
                    to={`/${x.toLowerCase()}`}
                    className="hover:text-white"
                  >
                    {x}
                  </Link>
                ),
              )}
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              Contact us
            </div>
            <div className="mt-5 space-y-4 text-sm text-white/65">
              <div className="flex gap-3">
                <Phone size={17} className="mt-0.5 shrink-0" />
                <div>
                  {company.phone.map((p) => (
                    <div key={p}>{p}</div>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={17} className="mt-0.5 shrink-0" />
                <span>{company.email}</span>
              </div>
              <div className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0" />
                <span>Bengaluru · Hyderabad</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-accent"
            >
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} rare infra / rare biz group. All rights
            reserved.
          </span>
          <span>Construction · Retail · Hospitality · Interiors</span>
        </div>
      </div>
    </footer>
  );
}
