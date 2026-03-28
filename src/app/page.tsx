"use client";

import { useState } from "react";

/* ─────────────────────────── DATA ─────────────────────────── */

const DEMOS = [
  {
    name: "A1 Concreting",
    trade: "Concreting",
    url: "https://a1-concreting-mockup.vercel.app",
    gradient: "from-slate-700 to-red-600",
  },
  {
    name: "MG Landscaping",
    trade: "Landscaping",
    url: "https://mg-landscaping-mockup.vercel.app",
    gradient: "from-green-700 to-yellow-500",
  },
  {
    name: "Ry Ry Painter",
    trade: "Painting",
    url: "https://ryry-painter-mockup.vercel.app",
    gradient: "from-gray-900 to-orange-500",
  },
  {
    name: "Victoria Fencing",
    trade: "Fencing",
    url: "https://victoria-fencing-mockup.vercel.app",
    gradient: "from-teal-600 to-green-500",
  },
  {
    name: "Wilcrete Concreting",
    trade: "Concreting",
    url: "https://wilcrete-mockup.vercel.app",
    gradient: "from-gray-600 to-amber-500",
  },
];

const VARIANTS = [
  {
    category: "Hero",
    count: 5,
    items: [
      { name: "Split", desc: "Image left, copy right" },
      { name: "Centered", desc: "Full-width headline with CTA" },
      { name: "Video BG", desc: "Autoplay video background" },
      { name: "Parallax", desc: "Layered scroll depth" },
      { name: "Minimal", desc: "Clean text-only hero" },
    ],
  },
  {
    category: "Services",
    count: 5,
    items: [
      { name: "Card Grid", desc: "Icon cards in responsive grid" },
      { name: "Accordion", desc: "Expandable service details" },
      { name: "Tabs", desc: "Tabbed service categories" },
      { name: "Carousel", desc: "Swipeable service cards" },
      { name: "List", desc: "Clean numbered list layout" },
    ],
  },
  {
    category: "Testimonials",
    count: 4,
    items: [
      { name: "Carousel", desc: "Auto-rotating quotes" },
      { name: "Grid", desc: "Multi-column review cards" },
      { name: "Marquee", desc: "Infinite scroll ticker" },
      { name: "Featured", desc: "Single highlight review" },
    ],
  },
  {
    category: "CTA",
    count: 4,
    items: [
      { name: "Banner", desc: "Full-width action strip" },
      { name: "Split", desc: "Copy + form side by side" },
      { name: "Floating", desc: "Sticky bottom bar" },
      { name: "Card", desc: "Centered card with glow" },
    ],
  },
  {
    category: "About",
    count: 4,
    items: [
      { name: "Story", desc: "Timeline narrative" },
      { name: "Stats", desc: "Key numbers + bio" },
      { name: "Team", desc: "Photo grid with bios" },
      { name: "Minimal", desc: "Clean two-column layout" },
    ],
  },
];

const THEMES = [
  { name: "Slate + Red", h: 0, s: 0.65, l: 0.55, bg: "#64748B", accent: "#EF4444" },
  { name: "Green + Gold", h: 145, s: 0.5, l: 0.4, bg: "#22C55E", accent: "#EAB308" },
  { name: "Dark + Orange", h: 25, s: 0.8, l: 0.55, bg: "#1F2937", accent: "#F97316" },
  { name: "Teal + Green", h: 170, s: 0.6, l: 0.45, bg: "#14B8A6", accent: "#22C55E" },
  { name: "Gray + Amber", h: 45, s: 0.7, l: 0.55, bg: "#6B7280", accent: "#F59E0B" },
  { name: "Navy + Cyan", h: 195, s: 0.7, l: 0.5, bg: "#1E3A5F", accent: "#06B6D4" },
  { name: "Charcoal + Lime", h: 85, s: 0.75, l: 0.5, bg: "#374151", accent: "#84CC16" },
  { name: "Indigo + Rose", h: 340, s: 0.65, l: 0.6, bg: "#6366F1", accent: "#F43F5E" },
];

const FEATURES = [
  "22 config-driven section variants",
  "OKLCH colour token generator",
  "3 fluid typography scales",
  "Framer Motion + GSAP + Lenis animations",
  "Contact form with Resend + rate limiting",
  "JSON-LD SEO schema",
  "Mobile-first responsive (375px \u2013 4K)",
  "Accessibility: skip links, ARIA, reduced motion",
  "Google Analytics ready",
  "TypeScript strict mode",
  "ESLint + Tailwind v4",
];

const FAQS = [
  {
    q: "Can I use this for multiple clients?",
    a: "With the Single License, you can use it for your own client projects one at a time. The Agency License gives your whole team unlimited usage across all client projects.",
  },
  {
    q: "Do I need to know Next.js?",
    a: "Basic React and Next.js knowledge is recommended. The template is well-documented and config-driven, so you won\u2019t be writing much code from scratch \u2014 mostly adjusting a JSON config file.",
  },
  {
    q: "What about hosting?",
    a: "Each site deploys to Vercel\u2019s free tier in minutes. Connect your GitHub repo, push, and it\u2019s live. Custom domains are supported on all Vercel plans.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes \u2014 14-day money-back guarantee, no questions asked. If the template isn\u2019t right for you, we\u2019ll refund in full.",
  },
  {
    q: "Do you offer customisation?",
    a: "Absolutely. If you need bespoke features, integrations, or design work beyond the template, contact us at hello@groundworkdigitalstudio.com.au for a quote.",
  },
];

/* ─────────────────────────── COMPONENTS ─────────────────────────── */

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 3.5L5.5 10L2.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrustBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-muted" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
      <span className="w-1.5 h-1.5 rounded-full bg-teal" />
      {label}
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="font-[family-name:var(--font-heading)] text-lg font-semibold pr-4">{q}</span>
        <ChevronIcon open={open} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ── Sticky Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-border" style={{ background: "rgba(10,15,28,0.85)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-[family-name:var(--font-heading)] font-bold text-lg tracking-tight">
            Tradie<span className="text-teal">Starter</span>
          </span>
          <div className="hidden sm:flex items-center gap-8 text-sm text-text-muted">
            <a href="#demos" className="hover:text-white transition-colors">Demos</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <a href="#pricing" className="btn-teal !py-2 !px-5 !text-sm">
            Buy Now
          </a>
        </div>
      </nav>

      {/* ══════════════════ SECTION 1: HERO ══════════════════ */}
      <section className="relative pt-40 pb-28 px-6">
        <div className="hero-gradient" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium text-teal mb-8" style={{ background: "rgba(46,204,113,0.08)", border: "1px solid rgba(46,204,113,0.2)" }}>
            Premium Next.js Template
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Stop building tradie sites{" "}
            <span className="text-teal">from scratch.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
            22 section variants. 8 colour themes. One config file.{" "}
            <span className="text-white">Ship client sites in hours, not weeks.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a href="#pricing" className="btn-teal text-lg">
              Buy Now &mdash; $249
            </a>
            <a href="#demos" className="btn-outline text-lg">
              View Live Demos
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <TrustBadge label="Next.js 16" />
            <TrustBadge label="React 19" />
            <TrustBadge label="TypeScript" />
            <TrustBadge label="Tailwind v4" />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════ SECTION 2: DEMO GALLERY ══════════════════ */}
      <section id="demos" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-3">Live Demos</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mb-4">
              5 Live Sites. 5 Different Trades. <span className="text-teal">One Template.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Every site below is built from the same codebase. Different config, completely different look.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEMOS.map((demo) => (
              <a
                key={demo.name}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group overflow-hidden transition-all duration-300"
              >
                {/* Gradient preview */}
                <div className={`h-48 bg-gradient-to-br ${demo.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(0,0,0,0.4)" }}>
                    <span className="text-white font-semibold text-sm flex items-center">
                      View Demo <ArrowIcon />
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg">{demo.name}</h3>
                  <p className="text-text-muted text-sm">{demo.trade}</p>
                </div>
              </a>
            ))}
            {/* Placeholder "Your site" card */}
            <div className="glass-card flex flex-col items-center justify-center p-8 border-dashed" style={{ borderStyle: "dashed" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(46,204,113,0.1)" }}>
                <span className="text-teal text-2xl font-bold">+</span>
              </div>
              <p className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-1">Your Client&apos;s Site</p>
              <p className="text-text-muted text-sm text-center">Same template. Your brand. Your trade.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════ SECTION 3: FEATURE GRID ══════════════════ */}
      <section id="features" className="py-24 px-6 dot-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-3">Section Variants</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mb-4">
              22 Variants, <span className="text-teal">Infinite Combinations</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Mix and match sections to create a unique site for every client. No two builds look the same.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {VARIANTS.map((group) => (
              <div key={group.category} className="glass-card-static p-6">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center font-[family-name:var(--font-heading)] font-bold text-sm text-teal" style={{ background: "rgba(46,204,113,0.1)" }}>
                    {group.count}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg">{group.category}</h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                      <div>
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-text-dim text-xs">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════ SECTION 4: OKLCH COLOUR SYSTEM ══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-3">Colour System</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mb-4">
              3 Numbers. <span className="text-teal">Full Design System.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Set hue, saturation, and lightness once. The OKLCH token generator creates your entire palette &mdash; backgrounds, surfaces, borders, text, and accents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Theme swatches */}
            <div className="glass-card-static p-8">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg mb-6">8 Built-in Themes</h3>
              <div className="grid grid-cols-2 gap-4">
                {THEMES.map((theme) => (
                  <div key={theme.name} className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="swatch w-10 h-10" style={{ background: theme.bg }} />
                      <div className="swatch w-10 h-10" style={{ background: theme.accent }} />
                    </div>
                    <span className="text-sm text-text-muted">{theme.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code snippet */}
            <div className="code-block">
              <p className="text-text-dim mb-3 text-xs uppercase tracking-wider font-sans">site.config.ts</p>
              <pre className="text-sm leading-7">
                <span className="text-text-dim">{"// That's it. Seriously."}</span>{"\n"}
                <span className="text-teal">{"export const"}</span>{" "}
                <span className="text-white">{"theme"}</span>
                {" = {\n"}
                {"  "}
                <span className="text-orange-300">{"hue"}</span>
                {": "}
                <span className="text-sky-300">{"145"}</span>
                {",\n"}
                {"  "}
                <span className="text-orange-300">{"saturation"}</span>
                {": "}
                <span className="text-sky-300">{"0.5"}</span>
                {",\n"}
                {"  "}
                <span className="text-orange-300">{"lightness"}</span>
                {": "}
                <span className="text-sky-300">{"0.4"}</span>
                {",\n"}
                {"}\n\n"}
                <span className="text-text-dim">{"// Generates 20+ design tokens:"}</span>{"\n"}
                <span className="text-text-dim">{"// --bg, --surface, --border,"}</span>{"\n"}
                <span className="text-text-dim">{"// --text, --accent, --accent-hover,"}</span>{"\n"}
                <span className="text-text-dim">{"// --muted, --ring, ..."}</span>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════ SECTION 5: WHAT'S INCLUDED ══════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-3">Everything You Get</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mb-4">
              What&apos;s <span className="text-teal">Included</span>
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              Production-ready out of the box. No guesswork, no missing pieces.
            </p>
          </div>
          <div className="glass-card-static p-8 sm:p-10">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-4">
                  <span className="check-icon">
                    <CheckIcon />
                  </span>
                  <span className="text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════ SECTION 6: PRICING ══════════════════ */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mb-4">
              Simple, <span className="text-teal">One-Time</span> Pricing
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto">
              No subscriptions. No recurring fees. Buy once, build forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Single License */}
            <div className="glass-card p-8 flex flex-col transition-all duration-300">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xl mb-2">Single License</h3>
              <p className="text-text-muted text-sm mb-6">For freelancers and solo developers</p>
              <div className="mb-8">
                <span className="font-[family-name:var(--font-heading)] text-5xl font-bold">$249</span>
                <span className="text-text-muted ml-2">AUD</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Full source code",
                  "22 section variants",
                  "8 colour themes",
                  "Lifetime updates",
                  "Use on client projects",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="check-icon">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://groundworker7.gumroad.com/l/tradie-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center"
              >
                Get Single License
              </a>
            </div>

            {/* Agency License */}
            <div className="relative glass-card p-8 flex flex-col transition-all duration-300" style={{ borderColor: "rgba(46,204,113,0.3)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-teal text-navy">
                BEST VALUE
              </div>
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xl mb-2">Agency License</h3>
              <p className="text-text-muted text-sm mb-6">For teams and agencies</p>
              <div className="mb-8">
                <span className="font-[family-name:var(--font-heading)] text-5xl font-bold">$499</span>
                <span className="text-text-muted ml-2">AUD</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Everything in Single",
                  "Unlimited client projects",
                  "Full team access",
                  "Priority support",
                  "Early access to updates",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="check-icon">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://groundworker7.gumroad.com/l/tradie-starter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal text-center"
              >
                Get Agency License
              </a>
            </div>
          </div>

          <p className="text-center text-text-dim text-sm mt-8">
            14-day money-back guarantee. Prices in AUD. Includes GST where applicable.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════ SECTION 7: FAQ ══════════════════ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold mb-4">
              Common <span className="text-teal">Questions</span>
            </h2>
          </div>
          <div className="glass-card-static p-8 sm:p-10">
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════ SECTION 8: FOOTER ══════════════════ */}
      <footer className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="font-[family-name:var(--font-heading)] font-bold text-lg tracking-tight">
                Tradie<span className="text-teal">Starter</span>
              </span>
              <p className="text-text-dim text-sm mt-2">
                Built by{" "}
                <a
                  href="https://groundworkdigitalstudio.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-white transition-colors"
                >
                  Groundwork Digital Studio
                </a>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted">
              <a href="#demos" className="hover:text-white transition-colors">Demo Sites</a>
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a
                href="mailto:hello@groundworkdigitalstudio.com.au"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-10 pt-8 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p className="text-text-dim text-sm">
              &copy; 2026 Groundwork Digital Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
