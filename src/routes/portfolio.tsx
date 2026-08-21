import { createFileRoute } from "@tanstack/react-router";

import caseAnalytics from "@/assets/case-analytics.jpg";
import caseLogistics from "@/assets/case-logistics.jpg";
import caseMobile from "@/assets/case-mobile.jpg";
import casePool from "@/assets/case-pool.jpg";
import { PageHero } from "@/components/site/PageShell";
import { PortfolioArt, type ArtKind } from "@/components/site/portfolio-art";
import { CtaBand } from "@/components/site/SiteFooter";
import { Reveal, TiltCard } from "@/components/site/motion-primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Apnitor Solutions" },
      {
        name: "description",
        content:
          "Selected work from Apnitor Solutions — enterprise BI, fintech ledgers, service marketplaces, mobile products and industrial platforms shipped for global clients.",
      },
    ],
  }),
  component: Portfolio,
});

type Project = {
  name: string;
  category: string;
  body: string;
  image?: string;
  art?: ArtKind;
  tall?: boolean;
};

const projects: Project[] = [
  {
    name: "Cora",
    category: "Analytics",
    body: "Next-gen enterprise reporting and business intelligence suite.",
    image: caseAnalytics,
    tall: true,
  },
  {
    name: "Pool Builder",
    category: "Real estate tech",
    body: "3D visualiser and quote engine that lets homeowners design a pool and get pricing in real time.",
    image: casePool,
    tall: true,
  },
  {
    name: "Asset Management",
    category: "Logistics",
    body: "Lifecycle tracking for large-scale physical and digital assets.",
    image: caseLogistics,
  },
  {
    name: "CleanersList",
    category: "Service economy",
    body: "Hyper-local service marketplace with advanced scheduling and escrow protection.",
    image: caseMobile,
    tall: true,
  },
  {
    name: "Account Receivable",
    category: "Fintech",
    body: "Automated financial ledger system for multi-national conglomerates.",
    art: "ledger",
  },
  {
    name: "BOM Management",
    category: "Industrial",
    body: "Critical manufacturing bill of materials coordination platform.",
    art: "blocks",
  },
  {
    name: "Vehicle Marketplace",
    category: "E-commerce",
    body: "Automotive trading platform featuring real-time bidding and history verification.",
    art: "car",
  },
  {
    name: "SaaS Platforms",
    category: "Productivity",
    body: "Subscription-based software solutions optimised for enterprise team collaboration.",
    art: "panels",
  },
  {
    name: "Glowante",
    category: "Beauty & health",
    body: "Premium skincare consultation and product recommendation engine.",
    art: "skincare",
    tall: true,
  },
  {
    name: "Fitness App",
    category: "Health & wellness",
    body: "Training and habit tracking built around daily consistency rather than vanity metrics.",
    art: "fitness",
  },
  {
    name: "Golfer Caddie",
    category: "Sports tech",
    body: "A smart on-course companion for club selection, distances and shot history.",
    art: "golf",
    tall: true,
  },
  {
    name: "Right Here",
    category: "Local discovery",
    body: "Location-based discovery for events and places happening nearby, right now.",
    art: "location",
  },
  {
    name: "UnitTurn Pro",
    category: "PropTech",
    body: "Property turnover and inspection management for real estate operators.",
    art: "house",
  },
];

function Portfolio() {
  return (
    <div className="overflow-x-clip">
      <PageHero
        eyebrow="Portfolio"
        title="Selected work, thirteen ways"
        lede="Enterprise BI, fintech ledgers, service marketplaces, mobile products and industrial platforms — shipped for clients across 40+ domains."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl columns-1 gap-6 sm:columns-2 lg:columns-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.name}
              delay={(i % 6) * 0.06}
              className="mb-6 block break-inside-avoid"
            >
              <TiltCard className="overflow-hidden rounded-3xl surface-paper" intensity={6}>
                <div className="overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} — ${project.body}`}
                      loading="lazy"
                      width={1024}
                      height={project.tall ? 1280 : 768}
                      className={cn(
                        "w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110",
                        project.tall ? "aspect-[4/5]" : "aspect-4/3",
                      )}
                    />
                  ) : (
                    <PortfolioArt
                      kind={project.art!}
                      className={project.tall ? "aspect-[4/5]" : "aspect-4/3"}
                    />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-eyebrow text-primary">{project.category}</span>
                  <h3 className="mt-3 font-display text-2xl">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.body}
                  </p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
