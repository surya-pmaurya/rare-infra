import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { company } from "../data/siteData";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    // Web3Forms Configuration
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Project Enquiry from Rare Infra Website");

    const googleScriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    try {
      // Fire both requests at the exact same time
      const [web3Response] = await Promise.all([
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        }),
        fetch(googleScriptUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }),
      ]);

      const data = await web3Response.json();

      if (data.success) {
        setStatus("Message sent successfully! We will contact you soon.");
        e.target.reset();
      } else {
        setStatus("Something went wrong with the email. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("Failed to send message. Please check your connection.");
    }
  };

  return (
    <main className="bg-paper pt-28">
      <section className="container-site py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Tell us what you’re building."
              text="Reach out to us to discuss your residential, corporate, or hospitality projects."
            />
            <div className="mt-10 space-y-5">
              {/* Phone Details */}
              <div className="flex gap-4">
                <Phone className="text-accent" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/35">
                    Phone
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    {company.phone.map((num, index) => (
                      <span key={index}>
                        <a
                          href={`tel:${num.replace(/\s+/g, "")}`}
                          className="transition-colors hover:text-accent"
                        >
                          {num}
                        </a>
                        {index < company.phone.length - 1 && " · "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Details */}
              <div className="flex gap-4">
                <Mail className="text-accent" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/35">
                    Email
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    <a
                      href={`mailto:${company.email}?subject=${encodeURIComponent("Project Enquiry")}&body=${encodeURIComponent("Hello Rare Infra,\n\nI would like to discuss a project with you.")}`}
                      className="transition-colors hover:text-accent"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="flex gap-4">
                <MapPin className="text-accent" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-black/35">
                    Offices
                  </div>
                  {company.offices.map((office) => (
                    <div
                      key={office.city}
                      className="mt-1 text-sm leading-6 text-black/60"
                    >
                      <strong className="font-bold text-ink">
                        {office.city}
                      </strong>{" "}
                      — {office.address}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-6 shadow-soft sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2 hover:animate-fadeIn">
              <label className="text-xs font-bold">
                Name
                <input
                  type="text"
                  name="name" // Required for FormData
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm font-semibold outline-none transition-colors hover:border-accent focus:border-accent"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="text-xs font-bold">
                Phone
                <input
                  type="tel"
                  name="phone"
                  required
                  // The pattern enforces an optional '+' followed by 10 to 15 numbers
                  pattern="^\+?[0-9]{10,15}$"
                  title="Please enter a valid phone number (10 to 15 digits)"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^\d+]/g, "");
                  }}
                  className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm font-semibold outline-none transition-colors hover:border-accent focus:border-accent"
                  placeholder="+91  9876543210"
                  autoComplete="phone"
                />
              </label>
              <label className="text-xs font-bold sm:col-span-2">
                Email
                <input
                  type="email"
                  name="email" // Required for FormData
                  required
                  className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm font-semibold outline-none transition-colors hover:border-accent focus:border-accent"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </label>
              <label className="text-xs font-bold sm:col-span-2">
                Project type
                <select
                  name="project_type" // Required for FormData
                  className="mt-2 w-full rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm font-semibold outline-none transition-colors hover:border-accent focus:border-accent"
                >
                  <option value="Construction">Construction</option>
                  <option value="Residential">Residential</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Retail">Retail</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Plotting">Plotting</option>
                  <option value="Interior">Interior</option>
                </select>
              </label>
              <label className="text-xs font-bold sm:col-span-2">
                Message
                <textarea
                  name="message" // Required for FormData
                  required
                  rows="6"
                  className="mt-2 w-full resize-none rounded-xl border border-black/10 bg-paper px-4 py-3 text-sm font-semibold outline-none transition-colors hover:border-accent focus:border-accent"
                  placeholder="Tell us a little about your project..."
                  autoComplete="message"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="mt-6 w-full rounded-full bg-accent/90 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-accent hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "Sending..." ? "Sending..." : "Send enquiry"}
            </button>

            {/* Status Message Display */}
            {status && status !== "Sending..." && (
              <p
                className={`mt-4 text-center text-sm font-bold ${status.includes("Success") ? "text-red-600" : "text-green-600"}`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
