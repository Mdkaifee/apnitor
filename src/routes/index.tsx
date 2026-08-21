import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import aiData from "@/assets/ai-data.jpg";
import finance from "@/assets/finance.jpg";
import healthcare from "@/assets/healthcare.jpg";
import heroObjects from "@/assets/hero-objects.png";
import craft from "@/assets/about-craft.jpg";
import { SectionHeading } from "@/components/site/PageShell";
import {
  CountUp,
  Magnetic,
  Parallax,
  Reveal,
  RisingText,
  TiltCard,
} from "@/components/site/motion-primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apnitor Solutions — Result-Driven Software Development" },
      {
        name: "description",
        content:
          "Apnitor Solutions architects scalable AI, web, mobile and enterprise software for global companies. 9+ years, 100+ delivered projects, 93% recurring clients.",
      },
      { property: "og:title", content: "Apnitor Solutions — Result-Driven Software Development" },
      {
        property: "og:description",
        content:
          "Scalable AI agents, custom software and enterprise platforms engineered by Apnitor Solutions.",
      },
    ],
  }),
  component: Home,
});

const hubs = [
  {
    title: "Data & AI hub",
    body: "Advanced analytics and machine learning architectures for data-driven enterprises.",
    image: aiData,
  },
  {
    title: "Finance hub",
    body: "Secure, compliant FinTech solutions and modern banking infrastructure.",
    image: finance,
  },
  {
    title: "Healthcare hub",
    body: "HIPAA-compliant healthcare systems and patient-centric digital experiences.",
    image: healthcare,
  },
  {
    title: "Staff augmentation",
    body: "Vetted engineering talent to scale your internal technical capabilities seamlessly.",
    image: craft,
  },
];

const services = [
  {
    title: "Custom software development",
    body: "Tailor-made solutions designed to solve your unique business challenges.",
  },
  {
    title: "Web development",
    body: "High-performance web applications built with modern frameworks.",
  },
  {
    title: "Mobile app development",
    body: "Native and cross-platform mobile experiences for iOS and Android.",
  },
  {
    title: "UI/UX design",
    body: "Human-centric design that prioritises usability and brand identity.",
  },
];

const industries = [
  {
    name: "Retail & E-commerce",
    body: "Commerce platforms, inventory management, POS and loyalty tooling that lifts revenue per customer.",
    points: ["E-commerce platforms", "Inventory management systems", "Customer loyalty programs"],
  },
  {
    name: "Healthcare",
    body: "EHR systems, telemedicine, medical imaging and patient management built to regulation.",
    points: ["Electronic Health Records", "Telemedicine platforms", "Medical imaging & diagnostics"],
  },
  {
    name: "Education",
    body: "Learning management, virtual classrooms and student information systems that teachers enjoy.",
    points: ["Learning management systems", "Virtual classroom platforms", "Educational mobile apps"],
  },
  {
    name: "Logistics",
    body: "Fleet tracking, warehouse management and route optimisation that removes cost per mile.",
    points: ["Fleet management systems", "Warehouse management", "Route optimisation algorithms"],
  },
  {
    name: "Manufacturing",
    body: "IoT, production management and quality control for connected smart factories.",
    points: ["IoT & smart factory", "Production management", "Supply chain optimisation"],
  },
];

const stats = [
  { value: 9, suffix: "+", label: "Years expertise" },
  { value: 20, suffix: "+", label: "IT professionals" },
  { value: 40, suffix: "+", label: "Domains served" },
  { value: 93, suffix: "%", label: "Recurring clients" },
  { value: 100, suffix: "+", label: "Projects delivered" },
];

const testimonials = [
  {
    quote:
      "Apnitor transformed our legacy systems into a modern microservices architecture within record time. Their technical depth is unparalleled.",
    name: "James Sterling",
    role: "CTO, FinFlow Tech",
  },
  {
    quote:
      "The UI/UX design they delivered significantly improved our patient engagement metrics. A truly result-driven partner.",
    name: "Sarah Chen",
    role: "Founder, HealthScale",
  },
  {
    quote:
      "Reliable, communicative, and technically brilliant. They've become an extension of our internal engineering team.",
    name: "Robert Vance",
    role: "CEO, RetailPro",
  },
];

const faqs = [
  {
    q: "How do you ensure code quality?",
    a: "Rigorous development practices: code reviews, automated testing and adherence to industry standards. Our senior developers follow structured workflows, implement scalable architectures and use modern tooling to keep code clean and reliable across the lifecycle.",
  },
  {
    q: "What technologies do you specialise in?",
    a: "Modern, high-performance technologies across web, mobile, cloud and data engineering — advanced analytics, machine learning architectures, scalable web frameworks, cross-platform mobile and secure cloud infrastructure tailored to enterprise needs.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines depend on scope and complexity. Smaller projects take a few weeks, large enterprise solutions several months. We define clear milestones with you and deliver efficiently without compromising quality.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes. We offer continuous monitoring, performance improvements, bug fixes and feature enhancements so your software stays secure, current and optimised as your business evolves.",
  },
];

const marquee = [
  "Autonomous AI agents",
  "Voice AI",
  "ERP solutions",
  "Cloud & DevOps",
  "Legacy modernisation",
  "Data & BI",
  "SaaS platforms",
  "Product & MVP",
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden bg-dawn px-6 pt-40 pb-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-20 size-[30rem] rounded-full bg-blush/50 blur-3xl drift"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-10 size-[24rem] rounded-full bg-sage/50 blur-3xl float-slow"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div style={{ y: heroY, opacity: heroFade }}>
            <Reveal>
              <span className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-4 py-1.5 text-eyebrow text-primary">
                <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                Trusted technology partner
              </span>
            </Reveal>
            <h1 className="mt-8 text-balance text-5xl leading-[1] sm:text-6xl md:text-7xl">
              <RisingText text="Result-driven software," />
              <span className="block italic text-muted-foreground">
                <RisingText text="engineered beautifully." />
              </span>
            </h1>
            <Reveal delay={0.4}>
              <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                We architect scalable, high-performance digital solutions that empower global
                enterprises to lead through innovation and technical excellence.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-colors duration-500 hover:bg-primary"
                  >
                    Speed up development
                  </Link>
                </Magnetic>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-3 rounded-full border border-foreground/15 px-7 py-4 text-sm font-medium transition-colors duration-500 hover:border-primary hover:text-primary"
                >
                  View portfolio
                  <span className="h-px w-5 bg-current transition-all duration-500 group-hover:w-8" />
                </Link>
              </div>
            </Reveal>
          </motion.div>

          <motion.div style={{ scale: heroScale }} className="relative">
            <motion.img
              src={heroObjects}
              alt="Floating ceramic and frosted glass forms representing Apnitor's engineering craft"
              width={1408}
              height={1408}
              className="relative z-10 w-full drop-shadow-[0_50px_70px_rgba(140,100,80,0.22)] float-slow"
              initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="absolute -left-4 top-10 z-20 rounded-3xl surface-glass px-5 py-4 float-fast"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <p className="font-display text-3xl">
                <CountUp value={93} suffix="%" />
              </p>
              <p className="text-xs text-muted-foreground">Recurring clients</p>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 right-2 z-20 rounded-3xl surface-glass px-5 py-4 float-medium"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <p className="font-display text-3xl">
                <CountUp value={100} suffix="+" />
              </p>
              <p className="text-xs text-muted-foreground">Senior developers</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-y border-border bg-card/60 py-6">
        <div className="flex w-max marquee-track gap-10 pr-10">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 whitespace-nowrap text-eyebrow text-muted-foreground"
            >
              {item}
              <span className="size-1.5 rounded-full bg-primary/50" />
            </span>
          ))}
        </div>
      </section>

      {/* Hubs */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Specialised hubs"
            title="Focused centres of gravity for your hardest problems"
            lede="Domain-deep teams that already know your compliance rules, data shapes and edge cases."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((hub, i) => (
              <Reveal key={hub.title} delay={i * 0.08}>
                <TiltCard className="h-full overflow-hidden rounded-3xl surface-paper">
                  <div className="overflow-hidden">
                    <img
                      src={hub.image}
                      alt={hub.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl">{hub.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{hub.body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative overflow-hidden bg-secondary/50 px-6 py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 size-[28rem] -translate-x-1/2 rounded-full bg-blush/40 blur-3xl float-medium"
        />
        <div className="relative mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Services"
            title="Our software development services"
            lede="100+ senior developers ready to start on your project this quarter."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08}>
                <Link
                  to="/services"
                  className="group flex items-start justify-between gap-8 rounded-3xl surface-paper p-8 hover-lift"
                >
                  <div>
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    <h3 className="mt-4 text-2xl">{service.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                      {service.body}
                    </p>
                  </div>
                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:text-primary">
                    &#8599;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07}>
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

      {/* Industries */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Industries we serve"
            title="Domain expertise, not generic delivery"
            lede="Advanced technology solutions tailored to the unique challenges of leading global industries."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.name} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-border bg-card/70 p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-float">
                  <h3 className="text-2xl">{industry.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {industry.body}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {industry.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-sm">
                        <span className="size-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Craft / parallax split */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Parallax distance={50} className="overflow-hidden rounded-4xl">
            <img
              src={craft}
              alt="Ceramic sculpture of interlocking hands in warm sunlight"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-[120%] w-full rounded-4xl object-cover shadow-float"
            />
          </Parallax>
          <div>
            <Reveal>
              <span className="text-eyebrow text-primary">Why Apnitor</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-balance text-4xl leading-tight sm:text-5xl">
                Technical mastery, paired with business intuition
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
                Founded in 2017, we help companies across 40+ domains reach their business goals with
                software that is a pleasure to use and a pleasure to maintain.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { t: "Result-oriented", b: "We optimise for your outcomes, then our process." },
                { t: "Flexible", b: "We adapt scope and shape to fit your reality." },
                { t: "Transparent", b: "Regular updates, no surprises, ever." },
                { t: "Experienced", b: "Senior-heavy squads with deep domain history." },
              ].map((item, i) => (
                <Reveal key={item.t} delay={0.25 + i * 0.07}>
                  <div className="rounded-2xl surface-glass p-5 hover-lift">
                    <p className="font-display text-xl">{item.t}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-secondary/50 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading align="center" eyebrow="Client voices" title="What our clients say" />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 0.1}>
                <TiltCard className="h-full rounded-3xl surface-paper p-8" intensity={7}>
                  <p className="font-display text-2xl leading-snug">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <span className="size-11 rounded-full surface-clay" />
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <span className="text-eyebrow text-primary">FAQ</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
                Frequently asked questions
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.q}
                  value={faq.q}
                  className="border-b border-border last:border-0"
                >
                  <AccordionTrigger className="py-6 text-left font-display text-xl hover:text-primary hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
