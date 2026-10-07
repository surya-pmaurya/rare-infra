import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/gallery", "Gallery"],
  ["/clients", "Clients"],
  ["/contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `text-sm font-semibold transition ${isActive ? "text-accent" : "text-white/75 hover:text-white"}`;
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="container-site flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-white"
          onClick={() => setOpen(false)}
        >
          <img
            src="/assets/logos/rareinfra.png"
            alt="rare infra"
            className="h-14 w-14 rounded-full bg-neutral object-contain"
          />
          <div className="leading-none">
            <div className="font-display text-xl font-extrabold tracking-tight">
              rare infra
            </div>
            <div className="mt-1 text-[9px] uppercase tracking-[.25em] text-white/50">
              rare biz group
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([to, label]) => (
            <NavLink key={label} to={to} end={to === "/"} className={navClass}>
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary ml-2 gap-2 px-5 py-2.5">
            Let’s Talk <ArrowUpRight size={15} />
          </Link>
        </nav>
        <button
          className="rounded-full border border-white/20 p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="container-site pb-5 lg:hidden">
          <div className="rounded-2xl border border-white/10 bg-black/95 p-4 shadow-2xl">
            {links.map(([to, label]) => (
              <Link
                key={label}
                to={to}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
