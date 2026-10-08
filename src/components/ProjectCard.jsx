import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`group overflow-hidden rounded-md bg-white shadow-soft ${featured ? "lg:col-span-2" : ""}`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="image-hover block overflow-hidden"
      >
        <div className={featured ? "aspect-[16/8]" : "aspect-[4/3]"}>
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[10px] font-bold uppercase tracking-[.22em] text-accent">
            {project.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-black/45">
            <MapPin size={13} />
            {project.location}
          </span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-black/55">
          {project.summary}
        </p>
        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold hover:text-accent"
        >
          View project <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
