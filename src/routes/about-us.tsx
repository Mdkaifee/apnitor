import { createFileRoute } from "@tanstack/react-router";

import craft from "@/assets/about-craft.jpg";
import { PageHero, SectionHeading } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/SiteFooter";
import { CountUp, Parallax, Reveal, TiltCard } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Apnitor Solutions" },
      {
        name: "description",
        content:
          "Software development and IT consulting since 2017. Apnitor Solutions builds smart software for smart people — result-oriented, flexible and transparent.",
      },
    ],
  }),
  component: AboutUs,
});

const stats = [
  { value: 9, suffix: "+", label: "Years expertise" },
  { value: 20, suffix: "+", label: "IT professionals" },
  { value: 40, suffix: "+", label: "Domains served" },
  { value: 93, suffix: "%", label: "Recurring clients" },
];

const pillars = [
  {
    t: "Result-oriented",
    b: "We optimise for your business outcomes first, then shape our process around them.",
  },
  {
    t: "Flexible",
    b: "Scope, team shape and engagement model adapt to your reality, not the other way round.",
  },
  {
    t: "Transparent",
    b: "Regular updates, honest timelines and no surprises — from kickoff to handover.",
  },
  {
    t: "Experienced",
    b: "Senior-heavy squads carrying deep history across 40+ domains and edge cases.",
  },
];

function AboutUs() {
  return (
    <div className="overflow-x-clip">
      <PageHero
        eyebrow="About Apnitor"
        title="Smart software for smart people."
        lede="Founded in 2017, Apnitor Solutions is a software development and IT consulting company that helps businesses grow through software that's a pleasure to use — and a pleasure to maintain."
      />

      {/* Stats */}
      <section className="px-6 pb-4">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-3xl border border-border bg-card/60 px-6 py-8 text-center hover-lift">
                <p className="font-display text-5xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Story + parallax image */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Reveal>
              <span className="text-eyebrow text-primary">Our story</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance text-4xl leading-tight sm:text-5xl">
                Built by engineers who got tired of software that fights its users
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                We started Apnitor with one belief: software should feel intuitive and make people
                more productive, not fight them at every click. Almost a decade later, that&rsquo;s
                still the whole mission — develop software that helps our customers grow their
                businesses, delivered by people who genuinely love the craft.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                &ldquo;We do what we love, and we do it well&rdquo; isn&rsquo;t a slogan on a wall
                here — it&rsquo;s why the same senior engineers stay on your project from kickoff to
                the fifth release.
              </p>
            </Reveal>
          </div>
          <Parallax distance={50} className="order-1 overflow-hidden rounded-4xl lg:order-2">
            <img
              src={craft}
              alt="Ceramic sculpture of interlocking hands in warm sunlight, representing craftsmanship"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-[120%] w-full rounded-4xl object-cover shadow-float"
            />
          </Parallax>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-secondary/50 px-6 py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute right-1/4 top-0 size-[26rem] rounded-full bg-blush/40 blur-3xl float-medium"
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Why choose Apnitor"
            title="Four pillars, every engagement"
            lede="They sound simple. Holding them for nine years across 100+ projects is the hard part."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, i) => (
              <Reveal key={item.t} delay={i * 0.08}>
                <TiltCard className="h-full rounded-3xl surface-paper p-7">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <p className="mt-4 font-display text-2xl">{item.t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.b}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
