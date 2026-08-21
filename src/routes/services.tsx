import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHero, SectionHeading } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/SiteFooter";
import { Magnetic, Reveal, TiltCard } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Apnitor Solutions" },
      {
        name: "description",
        content:
          "Autonomous AI agents, voice AI, product & MVP development, web & mobile apps, SaaS, ERP, cloud & DevOps, data & BI, and legacy modernisation — engaged as fixed-price, dedicated team or staff augmentation.",
      },
    ],
  }),
  component: Services,
});

const frontier = [
  {
    title: "Autonomous AI agents",
    body: "Specialised LLM-powered agents that plan, execute and learn — multi-agent systems that handle complex workflows from customer support to market analysis.",
    tags: ["LangChain", "AutoGPT", "Custom LLMs"],
  },
  {
    title: "Voice AI agents",
    body: "Sub-second latency voice interactions that sound human, built to revolutionise call centres and personal assistants.",
    tags: ["ElevenLabs", "Vapi", "Whisper"],
  },
];

const services = [
  {
    title: "Product & MVP development",
    body: "Go from concept to launch in weeks, not months, with our optimised MVP cycles.",
  },
  {
    title: "Web applications",
    body: "Scalable, responsive, performance-first web platforms built on modern architectures.",
  },
  {
    title: "Mobile apps",
    body: "Native and cross-platform mobile experiences that users love to engage with.",
  },
  {
    title: "SaaS platforms",
    body: "Multi-tenant, secure and robust software-as-a-service infrastructure development.",
  },
  {
    title: "ERP solutions",
    body: "Account receivables, account payable, enterprise asset management, fleet management and bill of materials.",
  },
  {
    title: "Cloud & DevOps",
    body: "Automated deployment pipelines and cloud-native scaling strategies.",
  },
  {
    title: "Data & BI",
    body: "Turning raw data into actionable insight through advanced visualisation and analysis.",
  },
  {
    title: "AI & automation",
    body: "Integrating intelligent automation to streamline repetitive business processes.",
  },
  {
    title: "Legacy modernisation",
    body: "Transforming outdated systems into modern, cloud-ready, high-performance architectures.",
  },
];

const models = [
  {
    title: "Fixed-price MVPs",
    body: "6–12 week delivery with clear, locked scope — ideal for validating a new product fast.",
  },
  {
    title: "Dedicated teams",
    body: "A full squad integrated into your workflow, complete with a product and tech lead.",
  },
  {
    title: "Staff augmentation",
    body: "Flexible, month-to-month scaling for specific skill gaps on your existing team.",
  },
];

function Services() {
  return (
    <div className="overflow-x-clip">
      <PageHero
        eyebrow="Services"
        title="Full-spectrum engineering, senior from day one"
        lede="From autonomous AI agents to legacy modernisation — 100+ senior developers ready to start on your project this quarter."
      />

      {/* Frontier AI */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Frontier AI"
            title="Where most of our roadmap conversations start"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {frontier.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <TiltCard className="h-full overflow-hidden rounded-4xl bg-foreground p-10 text-background shadow-float">
                  <h3 className="font-display text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-background/75">
                    {item.body}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-background/25 px-3 py-1 text-xs text-background/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Core engineering"
            title="Nine capabilities, one accountable team"
            lede="Mix and match — most engagements pull from three or four of these at once."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05}>
                <Link
                  to="/contact"
                  className="group flex h-full flex-col justify-between gap-8 rounded-3xl surface-paper p-7 hover-lift"
                >
                  <div>
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    <h3 className="mt-4 text-xl">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.body}
                    </p>
                  </div>
                  <span className="flex size-9 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:text-primary">
                    &#8599;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="relative overflow-hidden bg-secondary/50 px-6 py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/3 top-0 size-[26rem] rounded-full bg-sage/50 blur-3xl float-slow"
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            align="center"
            eyebrow="Engagement models"
            title="Choose the shape that fits your project"
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {models.map((model, i) => (
              <Reveal key={model.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-border bg-card/70 p-8 text-center transition-all duration-700 hover:-translate-y-2 hover:shadow-float">
                  <h3 className="font-display text-2xl">{model.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{model.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-14 flex justify-center">
              <Magnetic>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-colors duration-500 hover:bg-primary"
                >
                  Talk through your project
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
