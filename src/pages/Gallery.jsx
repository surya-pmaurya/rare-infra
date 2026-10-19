import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { gallery } from "../data/siteData";
export default function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <main className="bg-paper-contrast pt-28">
      <section className="container-site py-16 sm:py-24">
        <SectionHeading
          eyebrow="Gallery"
          title="Spaces, details and places."
          text="A glimpse into our work, showcasing the spaces we have created and the attention to detail that defines our projects."
        />
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((src, i) => (
            <button
              key={src}
              onClick={() => setSelected(src)}
              className="image-hover mb-4 block w-full overflow-hidden rounded-2xl text-left shadow-soft"
            >
              <img
                src={src}
                alt={`rare infra gallery ${i + 1}`}
                className="h-auto w-full"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-5"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-5 top-5 rounded-full bg-paper/10 p-3 text-paper"
            aria-label="Close"
          >
            <X />
          </button>
          <img
            src={selected}
            alt="Selected gallery item"
            className="max-h-[88vh] max-w-[94vw] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
