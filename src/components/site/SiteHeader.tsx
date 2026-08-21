import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useState } from "react";

import { Magnetic } from "./motion-primitives";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technologies", label: "Technologies" },
  { to: "/portfolio", label: "Portfolio" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 120], [0, 18]);
  const shadow = useTransform(
    scrollY,
    [0, 120],
    ["0 0 0 rgba(0,0,0,0)", "0 18px 40px -28px rgba(90,60,40,0.35)"],
  );

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6"
    >
      <motion.nav
        style={{
          backdropFilter: useTransform(blur, (b) => `blur(${b}px) saturate(150%)`),
          boxShadow: shadow,
        }}
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border border-border/70 bg-card/70 px-5 py-3"
      >
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative flex size-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full surface-clay transition-transform duration-700 group-hover:rotate-180" />
            <span className="relative size-2 rounded-full bg-primary" />
          </span>
          <span className="font-display text-xl tracking-tight">Apnitor</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-secondary"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative">{link.label}</span>
                </>
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden sm:inline-block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-500 hover:bg-primary"
            >
              Let&rsquo;s talk
              <span
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
          </Magnetic>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 flex-col items-center justify-center gap-1.5 rounded-full border border-border md:hidden"
          >
            <span
              className={cn(
                "h-px w-4 bg-foreground transition-transform duration-300",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-4 bg-foreground transition-transform duration-300",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl surface-glass p-4 md:hidden"
          >
            <div className="flex flex-col">
              {[...links, { to: "/contact", label: "Contact" } as const].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
