import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { PageHero } from "@/components/site/PageShell";
import { Magnetic, Reveal, TiltCard } from "@/components/site/motion-primitives";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Apnitor Solutions" },
      {
        name: "description",
        content:
          "Tell Apnitor Solutions about your project. We respond, scope the work together and sign an NDA before anything sensitive is shared.",
      },
    ],
  }),
  component: Contact,
});

const process = [
  { t: "You reach out", b: "Send us the form — takes about ninety seconds." },
  { t: "We scope together", b: "A short call to understand goals, constraints and timeline." },
  { t: "NDA, then details", b: "We sign an NDA so you can share anything sensitive freely." },
  { t: "Proposal & kickoff", b: "Clear scope, team and timeline — then we start building." },
];

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast.success("Message received", {
        description: "We'll get back to you within one business day.",
      });
      event.currentTarget.reset();
    }, 700);
  }

  return (
    <div className="overflow-x-clip">
      <PageHero
        eyebrow="Contact"
        title="Let's build the thing you've been putting off"
        lede="Tell us what you're trying to solve. We'll come back with real questions, not a sales script."
      />

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <TiltCard className="rounded-4xl surface-paper p-8 sm:p-10" intensity={4}>
              <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-muted-foreground">Name</span>
                  <Input name="name" required placeholder="Jane Doe" className="h-12 rounded-xl" />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-muted-foreground">Company</span>
                  <Input name="company" placeholder="Acme Inc." className="h-12 rounded-xl" />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-muted-foreground">Corporate email</span>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@acme.com"
                    className="h-12 rounded-xl"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  <span className="text-muted-foreground">Phone</span>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="h-12 rounded-xl"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm sm:col-span-2">
                  <span className="text-muted-foreground">Project budget</span>
                  <Select name="budget">
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lt-25k">Under $25k</SelectItem>
                      <SelectItem value="25-50k">$25k – $50k</SelectItem>
                      <SelectItem value="50-100k">$50k – $100k</SelectItem>
                      <SelectItem value="100k-plus">$100k+</SelectItem>
                      <SelectItem value="not-sure">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                </label>
                <label className="flex flex-col gap-2 text-sm sm:col-span-2">
                  <span className="text-muted-foreground">Tell us about the project</span>
                  <Textarea
                    name="details"
                    required
                    rows={5}
                    placeholder="What are you trying to build, and what's the timeline?"
                    className="rounded-xl"
                  />
                </label>
                <div className="sm:col-span-2">
                  <Magnetic>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-colors duration-500 hover:bg-primary disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Send message"}
                    </button>
                  </Magnetic>
                </div>
              </form>
            </TiltCard>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-4xl surface-glass p-8 sm:p-10">
              <span className="text-eyebrow text-primary">What happens next</span>
              <ol className="mt-8 space-y-8">
                {process.map((step, i) => (
                  <li key={step.t} className="flex gap-5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full surface-clay font-mono text-xs text-primary-foreground float-slow">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display text-lg">{step.t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.b}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
                We respond within one business day, every time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
