import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactBanner() {
  return (
    <div className="rounded-[2rem] bg-ink p-8 text-paper sm:p-10">
      <div className="text-xs font-bold uppercase tracking-[.22em] text-accent">
        Need something similar?
      </div>
      <h3 className="mt-6 font-display text-3xl font-extrabold">
        Let’s discuss your space.
      </h3>
      <p className="mt-6 text-sm leading-6 text-paper/55">
        Share your brief and the team can explore an integrated solution. Whether it’s a turnkey project, civil work, interior work or a combination of all, we can help you plan and execute your next space.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-paper transition-transform hover:-translate-y-0.5 hover:bg-accent-hover hover:text-paper-contrast"
      >
        Let's Talk <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}
