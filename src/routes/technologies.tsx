import { createFileRoute } from "@tanstack/react-router";

import aiData from "@/assets/ai-data.jpg";
import { PageHero, SectionHeading } from "@/components/site/PageShell";
import { CtaBand } from "@/components/site/SiteFooter";
import { Parallax, Reveal, TiltCard } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Technologies — Apnitor Solutions" },
      {
        name: "description",
        content:
          "The stack behind Apnitor's delivery — GPT-4, Claude, LangChain, Next.js, React, FastAPI, NestJS, Flutter, React Native, AWS, Kubernetes, PostgreSQL and more.",
      },
    ],
  }),
  component: Technologies,
});

const categories = [
  {
    name: "AI & machine learning",
    items: [
      "GPT-4",
      "Claude 3",
      "Llama 3",
      "ElevenLabs",
      "Vapi",
      "Whisper",
      "Pinecone",
      "Weaviate",
      "Milvus",
      "LangChain",
      "CrewAI",
      "AutoGPT",
    ],
  },
  {
    name: "Backend",
    items: [
      "FastAPI",
      "Django",
      "Flask",
      "NestJS",
      "Express",
      "TypeORM",
      "Spring Boot",
      "Microservices",
    ],
  },
  {
    name: "Frontend & web",
    items: ["Next.js", "React", "Tailwind CSS", "Dash", "Plotly"],
  },
  {
    name: "Mobile",
    items: ["Flutter", "React Native", "Swift", "Kotlin"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS ECS", "Fargate", "ALB", "Azure", "DigitalOcean", "Docker", "Kubernetes"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "BigQuery"],
  },
];

function Technologies() {
  return (
    <div className="overflow-x-clip">
      <PageHero
        eyebrow="Technologies"
        title="Modern stack, chosen for the problem"
        lede="We stay opinionated about tooling so you don't have to be — every choice below has shipped in production across our 100+ delivered projects."
      />

      {/* AI banner */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-4xl border border-border shadow-float">
            <Parallax distance={40} className="absolute inset-0">
              <img
                src={aiData}
                alt="Abstract visualisation of data and AI systems"
                loading="lazy"
                width={1600}
                height={700}
                className="h-[130%] w-full object-cover"
              />
            </Parallax>
            <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px]" />
            <div className="relative px-8 py-16 sm:px-14">
              <span className="text-eyebrow text-primary">Currently deepest here</span>
              <h2 className="mt-4 max-w-xl text-balance text-3xl leading-tight sm:text-4xl">
                Agentic AI and voice systems are where most of our new builds start
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="By category"
            title="Six stacks, one delivery team"
            lede="Every project pulls a slice of this — never the whole board."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <Reveal key={category.name} delay={i * 0.07}>
                <TiltCard className="h-full rounded-3xl surface-paper p-7" intensity={6}>
                  <h3 className="font-display text-xl">{category.name}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground transition-colors duration-500 hover:border-primary hover:text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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
