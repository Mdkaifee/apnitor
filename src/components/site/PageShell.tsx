import type { ReactNode } from "react";

import { Reveal, RisingText } from "./motion-primitives";

/** Shared inner-page hero: floating aura, eyebrow, serif headline, lede. */
export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-dawn px-6 pt-40 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 size-[26rem] rounded-full bg-sage/60 blur-3xl float-slow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 size-80 rounded-full bg-blush/60 blur-3xl float-medium"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="text-eyebrow text-primary">{eyebrow}</span>
        </Reveal>
        <h1 className="mt-6 text-balance text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
          <RisingText text={title} />
        </h1>
        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">{lede}</p>
        </Reveal>
        {children ? <Reveal delay={0.35}>{children}</Reveal> : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between"
      }
    >
      <Reveal>
        <div>
          {eyebrow ? <span className="text-eyebrow text-primary">{eyebrow}</span> : null}
          <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">{title}</h2>
        </div>
      </Reveal>
      {lede ? (
        <Reveal delay={0.12}>
          <p
            className={
              align === "center"
                ? "mt-5 text-pretty text-muted-foreground"
                : "max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground"
            }
          >
            {lede}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
