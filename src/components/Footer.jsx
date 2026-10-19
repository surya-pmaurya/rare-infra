import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { company } from "../data/siteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "../config/socialIcons";
import { socialLinks } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/assets/logos/rareinfra.jpeg"
                alt="rare infra"
                className="h-11 w-11 rounded-full bg-paper object-contain"
              />
              <div>
                <div className="font-display text-2xl font-extrabold">
                  rare infra
                </div>
                <div className="text-[10px] uppercase tracking-[.25em] text-paper/40">
                  rare biz group
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-lg text-sm leading-7 text-paper/60">
              <span className="font-bold text-paper/70">{company.name} </span>
              {company.description}
            </p>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-gold/30 text-gold/70 transition hover:bg-gold hover:text-ink hover:border-gold hover:scale-105"
                >
                  <FontAwesomeIcon icon={socialIcons[social.name]} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-[.22em] text-accent">
              Quick links
            </div>
            <div className="mt-5 grid gap-3 text-sm text-paper/65">
              {["About", "Projects", "Gallery", "Clients", "Contact"].map(
                (x) => (
                  <Link
                    key={x}
                    to={`/${x.toLowerCase()}`}
                    className="hover:text-paper transition-colors"
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
            <div className="mt-5 space-y-4 text-sm text-paper/65">
              <div className="flex gap-3">
                <Phone size={17} className="mt-0.5 shrink-0" />
                <div>
                  {company.phone.map((num, index) => (
                    <span key={index}>
                      <a
                        href={`tel:${num.replace(/\s+/g, "")}`}
                        className="transition-colors hover:text-paper"
                      >
                        {num}
                      </a>
                      {index < company.phone.length - 1 && " · "}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={17} className="mt-0.5 shrink-0" />
                <div>
                  <a
                    href={`mailto:${company.email}?subject=${encodeURIComponent("Project Enquiry")}&body=${encodeURIComponent("Hello Rare Infra,\n\nI would like to discuss a project with you.")}`}
                    className="transition-colors hover:text-paper"
                  >
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0" />
                <div>Bengaluru · Hyderabad</div>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-paper hover:text-accent"
            >
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-6 text-sm text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © Copyright {new Date().getFullYear()} rare infra. All rights
            reserved.
          </div>
          <div>Construction · Retail · Hospitality · Interiors</div>
        </div>
      </div>
    </footer>
  );
}
