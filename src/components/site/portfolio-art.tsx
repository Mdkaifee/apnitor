import type { ReactElement } from "react";

import { cn } from "@/lib/utils";

export type ArtKind =
  "skincare" | "fitness" | "golf" | "location" | "house" | "ledger" | "blocks" | "car" | "panels";

const accent: Record<ArtKind, string> = {
  skincare: "var(--blush)",
  fitness: "var(--sage)",
  golf: "var(--primary)",
  location: "var(--chart-4)",
  house: "var(--clay)",
  ledger: "var(--sage)",
  blocks: "var(--primary)",
  car: "var(--chart-4)",
  panels: "var(--blush)",
};

function Glow({ id, color }: { id: string; color: string }) {
  return (
    <radialGradient id={id} cx="35%" cy="28%" r="80%">
      <stop offset="0%" stopColor="color-mix(in oklab, white 60%, transparent)" />
      <stop offset="45%" stopColor={color} />
      <stop offset="100%" stopColor="color-mix(in oklab, var(--ink) 22%, transparent)" />
    </radialGradient>
  );
}

function Skincare({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 96 96" className="size-full">
      <defs>
        <Glow id={id} color={accent.skincare} />
      </defs>
      <ellipse cx="48" cy="80" rx="20" ry="4" fill="var(--ink)" opacity="0.08" />
      <rect x="33" y="38" width="30" height="38" rx="12" fill={`url(#${id})`} />
      <rect x="41" y="24" width="14" height="16" rx="5" fill={`url(#${id})`} opacity="0.92" />
      <ellipse cx="48" cy="22" rx="9" ry="5" fill="var(--ink)" opacity="0.75" />
      <circle cx="72" cy="34" r="4" fill="var(--sage)" opacity="0.8" className="float-fast" />
      <circle cx="66" cy="52" r="2.6" fill="var(--sage)" opacity="0.6" />
      <ellipse cx="41" cy="47" rx="5" ry="3.4" fill="white" opacity="0.5" />
    </svg>
  );
}

function Fitness({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 96 96" className="size-full">
      <defs>
        <Glow id={id} color={accent.fitness} />
      </defs>
      <path
        d="M14 60 C 30 30, 66 30, 82 60"
        fill="none"
        stroke={accent.fitness}
        strokeOpacity="0.35"
        strokeWidth="2.5"
      />
      <ellipse cx="48" cy="72" rx="22" ry="4" fill="var(--ink)" opacity="0.08" />
      <rect x="40" y="42" width="16" height="10" rx="3" fill={`url(#${id})`} />
      <circle cx="30" cy="47" r="13" fill={`url(#${id})`} />
      <circle cx="66" cy="47" r="13" fill={`url(#${id})`} />
      <ellipse cx="25" cy="42" rx="3.6" ry="2.4" fill="white" opacity="0.5" />
    </svg>
  );
}

function Golf({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 96 96" className="size-full">
      <defs>
        <Glow id={id} color={accent.golf} />
      </defs>
      <line
        x1="70"
        y1="20"
        x2="70"
        y2="58"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      <path d="M70 20 L84 27 L70 34 Z" fill="var(--sage)" opacity="0.7" />
      <ellipse cx="48" cy="70" rx="20" ry="4" fill="var(--ink)" opacity="0.08" />
      <path d="M36 68 L60 68 L52 58 L44 58 Z" fill="var(--clay)" opacity="0.6" />
      <circle cx="42" cy="46" r="17" fill={`url(#${id})`} />
      <circle cx="37" cy="40" r="1.6" fill="white" opacity="0.7" />
      <circle cx="45" cy="38" r="1.6" fill="white" opacity="0.7" />
      <circle cx="41" cy="47" r="1.6" fill="white" opacity="0.7" />
      <circle cx="49" cy="46" r="1.6" fill="white" opacity="0.7" />
      <ellipse cx="36" cy="39" rx="4.5" ry="3" fill="white" opacity="0.4" />
    </svg>
  );
}

function Location({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 96 96" className="size-full">
      <defs>
        <Glow id={id} color={accent.location} />
      </defs>
      <circle
        cx="48"
        cy="72"
        r="18"
        fill="none"
        stroke={accent.location}
        strokeOpacity="0.25"
        strokeWidth="2"
      />
      <circle
        cx="48"
        cy="72"
        r="10"
        fill="none"
        stroke={accent.location}
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      <path
        d="M48 20 C 34 20, 25 31, 25 44 C 25 60, 48 78, 48 78 C 48 78, 71 60, 71 44 C 71 31, 62 20, 48 20 Z"
        fill={`url(#${id})`}
      />
      <circle cx="48" cy="44" r="9" fill="white" opacity="0.85" />
      <circle cx="48" cy="44" r="4.5" fill={accent.location} />
    </svg>
  );
}

function House({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 96 96" className="size-full">
      <defs>
        <Glow id={id} color={accent.house} />
      </defs>
      <ellipse cx="42" cy="76" rx="24" ry="4" fill="var(--ink)" opacity="0.08" />
      <path d="M22 46 L46 26 L70 46 V72 H22 Z" fill={`url(#${id})`} />
      <rect x="38" y="54" width="16" height="18" rx="2" fill="white" opacity="0.5" />
      <circle cx="66" cy="66" r="9" fill="var(--primary)" opacity="0.85" />
      <rect x="73" y="63" width="10" height="4" rx="2" fill="var(--primary)" opacity="0.85" />
      <rect x="80" y="63" width="2.4" height="6" fill="var(--primary)" opacity="0.85" />
    </svg>
  );
}

function Ledger({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 96 96" className="size-full">
      <defs>
        <Glow id={id} color={accent.ledger} />
      </defs>
      <rect x="62" y="52" width="8" height="14" rx="2" fill={accent.ledger} opacity="0.4" />
      <rect x="72" y="44" width="8" height="22" rx="2" fill={accent.ledger} opacity="0.55" />
      <rect x="82" y="36" width="8" height="30" rx="2" fill={accent.ledger} opacity="0.7" />
      <ellipse cx="38" cy="60" rx="18" ry="7" fill={`url(#${id})`} />
      <ellipse cx="38" cy="52" rx="18" ry="7" fill={`url(#${id})`} />
      <ellipse cx="38" cy="44" rx="18" ry="7" fill={`url(#${id})`} />
      <ellipse cx="32" cy="41" rx="5" ry="2.2" fill="white" opacity="0.45" />
    </svg>
  );
}

function Blocks({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 96 96" className="size-full">
      <defs>
        <Glow id={id} color={accent.blocks} />
      </defs>
      <g stroke="var(--ink)" strokeOpacity="0.2" strokeDasharray="2 3" strokeWidth="1.2">
        <line x1="34" y1="34" x2="46" y2="46" />
        <line x1="62" y1="34" x2="50" y2="46" />
        <line x1="34" y1="66" x2="46" y2="54" />
        <line x1="62" y1="66" x2="50" y2="54" />
      </g>
      <rect x="42" y="40" width="12" height="12" rx="3" fill={`url(#${id})`} />
      <rect x="22" y="22" width="14" height="14" rx="3" fill={accent.blocks} opacity="0.55" />
      <rect x="60" y="22" width="14" height="14" rx="3" fill={accent.blocks} opacity="0.7" />
      <rect x="22" y="60" width="14" height="14" rx="3" fill={accent.blocks} opacity="0.7" />
      <rect x="60" y="60" width="14" height="14" rx="3" fill={accent.blocks} opacity="0.55" />
    </svg>
  );
}

function Car({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 96 96" className="size-full">
      <defs>
        <Glow id={id} color={accent.car} />
      </defs>
      <ellipse cx="48" cy="70" rx="26" ry="4" fill="var(--ink)" opacity="0.08" />
      <path
        d="M16 58 C16 52, 20 50, 26 50 L34 40 C36 37, 39 36, 43 36 H57 C61 36, 64 37, 66 40 L74 50 C80 50, 84 52, 84 58 V62 H16 Z"
        fill={`url(#${id})`}
      />
      <rect x="40" y="41" width="20" height="9" rx="2" fill="white" opacity="0.4" />
      <circle cx="32" cy="62" r="7" fill="var(--ink)" opacity="0.75" />
      <circle cx="68" cy="62" r="7" fill="var(--ink)" opacity="0.75" />
      <circle cx="32" cy="62" r="2.6" fill="white" opacity="0.7" />
      <circle cx="68" cy="62" r="2.6" fill="white" opacity="0.7" />
    </svg>
  );
}

function Panels({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 96 96" className="size-full">
      <defs>
        <Glow id={id} color={accent.panels} />
      </defs>
      <g transform="rotate(-8 34 40)">
        <rect
          x="14"
          y="24"
          width="40"
          height="30"
          rx="6"
          fill={accent.panels}
          stroke="white"
          strokeOpacity="0.6"
        />
        <rect x="21" y="34" width="22" height="3.5" rx="1.75" fill="white" opacity="0.7" />
        <rect x="21" y="41" width="14" height="3.5" rx="1.75" fill="white" opacity="0.5" />
      </g>
      <g transform="rotate(6 62 56)">
        <rect
          x="42"
          y="42"
          width="42"
          height="32"
          rx="6"
          fill={`url(#${id})`}
          stroke="white"
          strokeOpacity="0.4"
        />
        <rect x="50" y="53" width="24" height="4" rx="2" fill="white" opacity="0.65" />
        <rect x="50" y="61" width="16" height="4" rx="2" fill="white" opacity="0.45" />
      </g>
    </svg>
  );
}

const registry: Record<ArtKind, (props: { id: string }) => ReactElement> = {
  skincare: Skincare,
  fitness: Fitness,
  golf: Golf,
  location: Location,
  house: House,
  ledger: Ledger,
  blocks: Blocks,
  car: Car,
  panels: Panels,
};

/** Generative brand-art placeholder for a portfolio card that has no photo yet. */
export function PortfolioArt({ kind, className }: { kind: ArtKind; className?: string }) {
  const Icon = registry[kind];
  const id = `art-${kind}`;

  return (
    <div
      className={cn("relative flex items-center justify-center overflow-hidden bg-dawn", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-6 -top-6 size-24 rounded-full blur-2xl float-slow"
        style={{ background: accent[kind], opacity: 0.35 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -right-4 size-28 rounded-full blur-2xl float-medium"
        style={{ background: accent[kind], opacity: 0.2 }}
      />
      <div className="relative size-28 float-slow drop-shadow-[0_16px_20px_rgba(90,60,40,0.18)] sm:size-32">
        <Icon id={id} />
      </div>
    </div>
  );
}
