import { Link } from "@tanstack/react-router";

import ctaImage from "@/assets/cta-abstract.jpg";
import { Magnetic, Parallax, Reveal } from "./motion-primitives";

export function CtaBand() {
  return (
    <section className="px-6 pb-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl border border-border shadow-float">
        <Parallax distance={50} className="absolute inset-0">
          <img
            src={ctaImage}
            alt=""
            aria-hidden
            loading="lazy"
            width={1600}
            height={912}
            className="h-[130%] w-full object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-background/55 backdrop-blur-[2px]" />
        <div className="relative px-8 py-24 text-center sm:px-16">
          <Reveal>
            <span className="text-eyebrow text-primary">Start the conversation</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-4xl leading-tight sm:text-6xl">
              Ready to build something extraordinary?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-muted-foreground">
              Partner with a development team that prioritises your business outcomes. 93% of our
              clients come back for the next project.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnetic>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-bloom transition-transform duration-500 hover:scale-[1.04]"
                >
                  Schedule a consultation
                </Link>
              </Magnetic>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card/70 px-7 py-4 text-sm font-medium transition-colors duration-500 hover:border-primary hover:text-primary"
              >
                View portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const columns = [
  {
    title: "Company",
    items: [
      { label: "About us", to: "/about-us" as const },
      { label: "Services", to: "/services" as const },
      { label: "Technologies", to: "/technologies" as const },
      { label: "Case studies", to: "/portfolio" as const },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Contact us", to: "/contact" as const },
      { label: "Staff augmentation", to: "/services" as const },
      { label: "Engagement models", to: "/services" as const },
      { label: "Industries", to: "/" as const },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex size-7 items-center justify-center">
                <span className="absolute inset-0 rounded-full surface-clay spin-slow" />
                <span className="relative size-2 rounded-full bg-primary" />
              </span>
              <span className="font-display text-2xl">Apnitor Solutions</span>
            </div>
            <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
              Expert software engineering for the modern enterprise. We turn complex challenges into
              seamless digital experiences.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-eyebrow text-muted-foreground">{column.title}</h3>
              <ul className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <li key={`${column.title}-${item.label}`}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="h-px w-0 bg-primary transition-all duration-500 group-hover:w-4" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2017&ndash;2026 Apnitor Solutions. All rights reserved.</p>
          <p>Software development &amp; IT consulting since 2017 &middot; English (US)</p>
        </div>
      </div>
    </footer>
  );
}
