"use client";

import { useMemo, useState } from "react";

type Idea = {
  id: string;
  name: string;
  tagline: string;
  focus: string;
  capital: "<$120" | "$150-$400" | "$350-$700" | "$500-$900";
  time: "5-8 hrs/week" | "8-12 hrs/week" | "12-15 hrs/week";
  score: number;
  whyNow: string;
  uniqueness: string;
  proofPoints: string[];
  firstMilestones: string[];
  revenueStreams: string[];
  automationStack: string[];
  expansionMoves: string[];
  teenEdge: string;
};

const ideas: Idea[] = [
  {
    id: "signal-scout",
    name: "Signal Scout Dispatch",
    tagline:
      "Trend intelligence for overlooked local service niches, delivered before agencies catch on.",
    focus: "Research Intelligence",
    capital: "<$120",
    time: "8-12 hrs/week",
    score: 92,
    whyNow:
      "Local operators are seeing TikTok-driven demand spikes but have zero time to monitor fast-moving micro-trends. You can scout culture in native teen spaces faster than any traditional agency.",
    uniqueness:
      "Instead of generic marketing tips, you deliver weekly, actionable 'next product or offer' opportunities sourced from real-time feeds that owners do not even know exist.",
    proofPoints: [
      "Micro-shortform trends now determine 60% of buying decisions for beauty, wellness, and food within Gen-Z heavy neighborhoods.",
      "Moves like 'NYC candle bar experiences' or 'menu hack secret items' start on Discord/Reddit before hitting mainstream media.",
      "Local businesses spend $200–$600/mo on dead newsletter subscriptions; a live feed that sparks revenue is an easy upgrade.",
    ],
    firstMilestones: [
      "Week 1: Pick three service verticals (beauty lounges, car detailing, boutique gyms) and set up a Notion dashboard fed by TikTok scrapers (PhantomBuster) + Perplexity alerts.",
      "Week 2: Produce a sample 'Signal Drop' PDF with 3 launch-ready offers; DM 25 founders in your city with a 30-second Loom walkthrough.",
      "Week 3: Close two $249/mo pilot retainers; promise one custom idea per week plus a quarterly playbook.",
    ],
    revenueStreams: [
      "$249/mo for weekly signal drops (starter)",
      "$900/quarter for a 'Trend Sprint' launch playbook with scripts + assets",
      "Affiliate cut from tools/services you recommend (email automation, packaging)",
    ],
    automationStack: [
      "Perplexity + Google Alerts for vertical-specific 'future of' queries",
      "Airtable + Make to auto-tag opportunities by readiness and effort",
      "Gamma / Tome to convert notes into polished deliverables in 10 minutes",
    ],
    expansionMoves: [
      "Spin niche dashboards (e.g., 'Brooklyn Beauty Trend Radar') and license access for $59/mo.",
      "Build a paid community for teen scouts across cities, growing inventory of signals.",
      "Launch micro-templates to help businesses execute each idea quickly.",
    ],
    teenEdge:
      "You already speak TikTok and Reddit fluently. Owners cannot justify learning those platforms but will happily rent the insight stream.",
  },
  {
    id: "campus-micro-saas",
    name: "CouncilOps Micro-SaaS",
    tagline:
      "Low-code dashboards that turn chaotic student councils into sponsor-ready organizations.",
    focus: "AI Automation",
    capital: "$150-$400",
    time: "12-15 hrs/week",
    score: 94,
    whyNow:
      "Student councils handle five-figure budgets yet still manage everything inside messy Google Sheets. Schools want accountability, sponsors want reporting, and there is no packaged workflow tool tuned for teens.",
    uniqueness:
      "A templated ops suite—budget tracker, event CRM, sponsor pack builder—that installs in under an hour and feels like Notion + Zapier but is actually your hosted platform.",
    proofPoints: [
      "There are 27k US high schools with councils; 31% already use paid event vendors but lack internal tooling.",
      "Administrators crave transparent workflows because parents are demanding professional-quality events.",
      "Existing SaaS players target universities or PTAs; no one nails teen UX + guardrails.",
    ],
    firstMilestones: [
      "Week 1: Interview 5 student leaders, map universal tasks (budget approvals, vendor coordination, sponsor outreach).",
      "Week 2: Assemble an MVP in Retool / Bubble with authentication, budget log, task board, and auto-generated recap PDFs.",
      "Week 3: Pilot at your school; secure testimonials and screenshots before moving to outbound.",
      "Week 4: Pitch 20 councils via Instagram DM + email; offer $49 setup and $39/mo subscription.",
    ],
    revenueStreams: [
      "$39/mo subscription per council with unlimited seats",
      "$149 onboarding service that migrates past budgets and events",
      "10% commission on negotiated sponsor deals facilitated through the CRM",
    ],
    automationStack: [
      "Bubble or Supabase for the core web app with row-level security for advisors.",
      "Make/Zapier recipes that auto-send recaps to admins and vendors.",
      "OpenAI function calls to generate sponsor one-pagers from event data in seconds.",
    ],
    expansionMoves: [
      "Verticalize for college clubs, esports leagues, or youth nonprofits with the same core engine.",
      "Launch a marketplace of vetted DJs, photographers, and vendors who pay referral fees.",
      "Release AI copilots that forecast budget runways and suggest revenue ideas.",
    ],
    teenEdge:
      "You understand the chaos firsthand and can embed cultural cues adults miss, making adoption instant instead of a month-long change-management project.",
  },
  {
    id: "micro-academy-kits",
    name: "Pocket Micro-Academy Kits",
    tagline:
      "Plug-and-play learning adventures that let parents spin up nano after-school clubs in one weekend.",
    focus: "Education",
    capital: "$150-$400",
    time: "8-12 hrs/week",
    score: 90,
    whyNow:
      "Parents want micro-school flexibility but cannot design curriculum or manage logistics. Hybrid work schedules make after-school micro-academies a booming micro-market.",
    uniqueness:
      "Instead of long online courses, you ship themed kits (AR scavenger hunts, climate maker labs) with content, facilitator scripts, and a parent-friendly booking flow.",
    proofPoints: [
      "Learning pods and microschools have grown 35% YOY, but parents complain about planning fatigue.",
      "High-income neighborhoods already pay $35-$60 per session for club-style experiences.",
      "Platforms like Outschool prove demand, but there is no physical + digital kit starter for DIY hosts.",
    ],
    firstMilestones: [
      "Week 1: Choose two high-demand themes (e.g., AI storytelling, sustainable fashion lab). Build 90-minute session plans in Notion.",
      "Week 2: Use Canva + Midjourney to design facilitator cards, student passports, and certificates. Print locally for <$80.",
      "Week 3: Launch a simple landing page (Typedream / Framer) with Stripe checkout; partner with 3 neighborhood parents for pilot sessions.",
      "Week 4: Capture testimonials + photos; package 'host playbook' PDF and upsell remote onboarding calls.",
    ],
    revenueStreams: [
      "$189 per kit (ships with materials, Canva templates, facilitator scripts)",
      "$79 optional parent onboarding call or live co-hosting via Zoom",
      "Subscription for fresh monthly quest packs at $39/mo",
    ],
    automationStack: [
      "Loom + Tella to record facilitator walkthroughs once, reuse for every kit.",
      "Typedream + Gumroad for frictionless storefront, shipping handled via Shippo.",
      "Airtable to track hosts, student counts, and upsell triggers.",
    ],
    expansionMoves: [
      "License kits to coworking spaces that want family programming.",
      "Translate kits into digital-only version for global customers.",
      "Bundle with local teen facilitators you certify, taking a platform fee.",
    ],
    teenEdge:
      "You can design sessions that feel culturally fresh—Gen-Z aesthetics, Roblox tie-ins, and AR layers—that parents cannot source elsewhere.",
  },
  {
    id: "quiet-lux-repair",
    name: "Quiet Luxury Repair Studio",
    tagline:
      "Premium repair concierge for 'stealth wealth' accessories, fulfilled through high-grade local artisans.",
    focus: "Local Services",
    capital: "$350-$700",
    time: "5-8 hrs/week",
    score: 87,
    whyNow:
      "Eco-conscious luxury buyers want restoration over replacement, but existing cobblers and jewelers have zero digital experience and weak logistics.",
    uniqueness:
      "A remote-first concierge that collects, triages, and routes repairs to a vetted micro-network while providing cinematic progress updates.",
    proofPoints: [
      "Luxury secondhand sales grew 28% last year; restoration boosts resale value by 20-40%.",
      "Affluent millennials prefer DM-based services that feel bespoke and discreet.",
      "Boutique artisans struggle with marketing but excel at craftsmanship—perfect white-label partners.",
    ],
    firstMilestones: [
      "Week 1: Identify 3 artisans (handbag, sneakers, jewelry) with great reviews but poor branding. Negotiate wholesale repair pricing.",
      "Week 2: Build a premium single-page site (Framer) with intake form + $50 assessment deposit via Stripe.",
      "Week 3: Run geotargeted Instagram/TikTok UGC showing before/after transformations; offer white-glove courier pickup via local apps.",
    ],
    revenueStreams: [
      "Average ticket $220 per repair with 35-45% margin after artisan payout",
      "Express turnaround surcharge +$60",
      "Monthly care membership ($79) including free touch-ups and inspections",
    ],
    automationStack: [
      "Trello or Motion to coordinate repair stages, share updates with clients automatically.",
      "Zapier to trigger SMS/email progress updates with photos.",
      "Notion portal for members with maintenance tutorials and booking calendar.",
    ],
    expansionMoves: [
      "Launch branded after-care kits (cleaners, storage) via dropshipping partners.",
      "Offer B2B concierge for stylists, estate planners, or resale boutiques.",
      "Develop a proprietary quality checklist and license it to artisan partners.",
    ],
    teenEdge:
      "You can craft the aspirational, minimalist brand voice and content that feels authentic to wealthy Gen-Z/millennial clients who distrust legacy shops.",
  },
  {
    id: "climate-scout",
    name: "GreenCharge Micro Map",
    tagline:
      "Neighborhood-level map + playbook that helps homeowners monetize climate incentives in under 14 days.",
    focus: "Climate",
    capital: "$150-$400",
    time: "8-12 hrs/week",
    score: 91,
    whyNow:
      "Inflation Reduction Act rebates are confusing, and contractors ignore smaller energy projects. Homeowners need a concierge to unlock stacked benefits quickly.",
    uniqueness:
      "A localized dashboard with vetted micro-upgrades (window film, smart thermostats, mini solar) plus instant contractor intros and paperwork workflows.",
    proofPoints: [
      "IRA + utility incentives can cover 30-70% of upgrades, but applications go unfinished because people don't know eligibility.",
      "Cities push climate goals yet lack youth ambassadors translating government-speak into TikTok-style guides.",
      "Competitors focus on enterprise retrofits, leaving single-family homeowners underserved.",
    ],
    firstMilestones: [
      "Week 1: Research incentives for one zip code; compile into Airtable with filters (income limits, timeline).",
      "Week 2: Partner with two electricians or HVAC freelancers willing to handle small installs for referral fee.",
      "Week 3: Build interactive map in Felt or Mapbox; embed on a landing page with lead form + $59 concierge deposit.",
      "Week 4: Host a live Zoom workshop for your neighborhood; convert attendees into paid walkthrough calls.",
    ],
    revenueStreams: [
      "$59 eligibility concierge call (30 minutes)",
      "Referral commissions (5-12%) from installers and product partners",
      "Premium upgrade roadmap ($249) with ROI breakdown and contractor shortlist",
    ],
    automationStack: [
      "Typedream or Super for the site, embedded with Felt map layers.",
      "Zapier to auto-create client folders, checklists, and follow-up emails.",
      "OpenAI to summarize incentive paperwork into plain English deliverables.",
    ],
    expansionMoves: [
      "Duplicate the playbook across adjacent zip codes and recruit neighborhood captains.",
      "Sell data insights to green-tech startups launching in new regions.",
      "Bundle remote energy audits with smart meter partners for recurring revenue.",
    ],
    teenEdge:
      "You can turn boring policy into visually exciting, social-friendly content that older consultants simply cannot pull off.",
  },
  {
    id: "mind-reset-lab",
    name: "Mind Reset Lab",
    tagline:
      "Short-form mental fitness circuits for overstimulated Gen-Z creators, delivered via text-first micro-coaching.",
    focus: "Wellness",
    capital: "<$120",
    time: "5-8 hrs/week",
    score: 88,
    whyNow:
      "Creators face burnout but reject traditional therapy waitlists. They want fast, relatable resets that slot between content sprints.",
    uniqueness:
      "AI-personalized audio scripts, breathwork, and accountability nudges packaged as 10-minute 'circuits' that feel like a hype team instead of a clinic.",
    proofPoints: [
      "52% of teen creators report anxiety spikes tied to algorithm changes, yet only 12% stick with therapy beyond three sessions.",
      "Sound-bath and breathwork content is exploding online, but it lacks personalization and habit tracking.",
      "You can recruit micro-coaches (college psych majors, mindfulness instructors) willing to white-label under your brand.",
    ],
    firstMilestones: [
      "Week 1: Build 15 circuits (audio + prompt) using Descript + ElevenLabs for high-energy voiceovers.",
      "Week 2: Set up SMS delivery with Twilio Studio; integrate Typeform intake to capture stress triggers.",
      "Week 3: Offer a $39 'Creator Reset Sprint' beta to 15 TikTok creators; collect testimonials and before/after metrics.",
    ],
    revenueStreams: [
      "$39 for 7-day sprint, $79/mo ongoing membership with 3 custom circuits weekly",
      "Affiliate revenue from recommended wellness products and productivity apps",
      "Corporate stipend partnerships with creator agencies managing talent",
    ],
    automationStack: [
      "Twilio + Airtable to auto-send routines and collect check-ins.",
      "OpenAI personalization layer that tailors scripts based on mood responses.",
      "Canva + CapCut to repurpose wins into social proof content within minutes.",
    ],
    expansionMoves: [
      "Launch a mobile app once you hit 300 paying members, using the same API workflows.",
      "Create physical 'Reset Kits' (scent cards, grounding tools) sold via Shopify.",
      "Collaborate with micro-influencers to host IRL pop-up reset rooms at creator events.",
    ],
    teenEdge:
      "You share the same digital rhythms, so your tone is authentic and you can iterate faster on language that resonates without sounding clinical.",
  },
];

const focusFilters = [
  "All Focus Areas",
  "AI Automation",
  "Climate",
  "Creator Economy",
  "Education",
  "Local Services",
  "Research Intelligence",
  "Wellness",
];

const capitalFilters = ["Any Budget", "<$120", "$150-$400", "$350-$700", "$500-$900"];

const timeFilters = ["Any Time", "5-8 hrs/week", "8-12 hrs/week", "12-15 hrs/week"];

const capitalRank: Record<Idea["capital"], number> = {
  "<$120": 120,
  "$150-$400": 400,
  "$350-$700": 700,
  "$500-$900": 900,
};

const timeRank: Record<Idea["time"], number> = {
  "5-8 hrs/week": 8,
  "8-12 hrs/week": 12,
  "12-15 hrs/week": 15,
};

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/30 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
        active
          ? "bg-slate-900 text-white shadow-lg shadow-slate-900/25"
          : "bg-white/70 text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );
}

export default function Home() {
  const [focus, setFocus] = useState<string>("All Focus Areas");
  const [capital, setCapital] = useState<string>("Any Budget");
  const [time, setTime] = useState<string>("Any Time");

  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea) => {
      const focusMatch = focus === "All Focus Areas" || idea.focus === focus;
      const capitalMatch =
        capital === "Any Budget" ||
        (capital === "<$120" && idea.capital === "<$120") ||
        (capital === "$150-$400" && idea.capital === "$150-$400") ||
        (capital === "$350-$700" && idea.capital === "$350-$700") ||
        (capital === "$500-$900" && idea.capital === "$500-$900");
      const timeMatch = time === "Any Time" || idea.time === time;
      return focusMatch && capitalMatch && timeMatch;
    });
  }, [focus, capital, time]);

  const activeIdeas = filteredIdeas.length > 0 ? filteredIdeas : ideas;
  const heroIdea = activeIdeas[0];

  const metrics = useMemo(() => {
    const count = activeIdeas.length;
    const avgScore = Math.round(
      activeIdeas.reduce((sum, idea) => sum + idea.score, 0) / count,
    );
    const lowestCapital = activeIdeas.reduce((best, idea) => {
      if (!best) return idea;
      return capitalRank[idea.capital] < capitalRank[best.capital] ? idea : best;
    }, activeIdeas[0]);
    const lightestTime = activeIdeas.reduce((best, idea) => {
      if (!best) return idea;
      return timeRank[idea.time] < timeRank[best.time] ? idea : best;
    }, activeIdeas[0]);
    return {
      count,
      avgScore,
      lowestCapitalLabel: lowestCapital?.capital ?? "<$120",
      lightestTimeLabel: lightestTime?.time ?? "8-12 hrs/week",
    };
  }, [activeIdeas]);

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 blur-3xl">
        <div className="mx-auto h-64 max-w-4xl rounded-full bg-gradient-to-r from-sky-200 via-rose-100 to-amber-100 opacity-70" />
      </div>

      <section className="overflow-hidden rounded-3xl border border-white/40 bg-white/90 p-10 shadow-2xl shadow-slate-900/5 backdrop-blur">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Solo Teen Founder Launchpad
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              High-leverage startup blueprints built for million-dollar ambition.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-600">
              These ideas are engineered for solo teens: low capital, high leverage,
              and intentionally under-the-radar markets. Pick one, lock into the launch
              runway, and scale with automation from day zero.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <StatPill label="Launch-Ready Blueprints" value={`${metrics.count}`} />
              <StatPill label="Avg Opportunity Score" value={`${metrics.avgScore}/100`} />
              <StatPill label="Minimum Starting Budget" value={metrics.lowestCapitalLabel} />
              <StatPill label="Lightest Weekly Commitment" value={metrics.lightestTimeLabel} />
            </div>
          </div>
          <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-900 px-6 py-8 text-white shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              Start Here
            </p>
            <h2 className="text-2xl font-semibold">{heroIdea.name}</h2>
            <p className="text-sm text-slate-200">{heroIdea.tagline}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1">Focus · {heroIdea.focus}</span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                Budget · {heroIdea.capital}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1">
                Time · {heroIdea.time}
              </span>
            </div>
            <div className="mt-6">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Opportunity Score
              </p>
              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400"
                  style={{ width: `${heroIdea.score}%` }}
                />
              </div>
              <p className="mt-2 text-sm font-medium text-slate-100">
                {heroIdea.score}/100 — {heroIdea.uniqueness}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Focus Filters
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {focusFilters.map((option) => (
            <FilterButton
              key={option}
              label={option}
              active={focus === option}
              onClick={() => setFocus(option)}
            />
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Capital Ready
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {capitalFilters.map((option) => (
                <FilterButton
                  key={option}
                  label={option}
                  active={capital === option}
                  onClick={() => setCapital(option)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Weekly Time
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {timeFilters.map((option) => (
                <FilterButton
                  key={option}
                  label={option}
                  active={time === option}
                  onClick={() => setTime(option)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 space-y-8">
        {activeIdeas.map((idea) => (
          <article
            key={idea.id}
            className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-xl backdrop-blur"
          >
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">{idea.name}</h2>
                <p className="mt-2 text-slate-600">{idea.tagline}</p>
              </div>
              <div className="min-w-[180px] rounded-2xl bg-slate-900/90 p-4 text-white shadow-lg">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  Opportunity Score
                </p>
                <p className="mt-2 text-3xl font-bold">{idea.score}/100</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-purple-400"
                    style={{ width: `${idea.score}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">Focus · {idea.focus}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                Starter Budget · {idea.capital}
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1">
                Weekly Time · {idea.time}
              </span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Why This Wins
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {idea.whyNow}
                  </p>
                  <p className="mt-3 text-sm font-medium text-slate-700">
                    Differentiator · {idea.uniqueness}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Proof Signals
                  </p>
                  <ul className="mt-3 space-y-3 text-sm text-slate-600">
                    {idea.proofPoints.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Teen Unfair Advantage
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {idea.teenEdge}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Launch Roadmap (First 30 Days)
                  </p>
                  <ol className="mt-3 space-y-3 text-sm text-slate-600">
                    {idea.firstMilestones.map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="font-semibold text-slate-400">
                          {index + 1}.
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Revenue Loops
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {idea.revenueStreams.map((stream) => (
                      <span
                        key={stream}
                        className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
                      >
                        {stream}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Automation Stack
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {idea.automationStack.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    Expansion Plays
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {idea.expansionMoves.map((move) => (
                      <li key={move} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-slate-300" />
                        <span>{move}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-16 rounded-3xl border border-white/50 bg-slate-900 px-8 py-10 text-white shadow-2xl">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Execution Mindset
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Build momentum in 90-day sprints, not endless brainstorming.
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Choose one idea, commit to the first milestone, and measure traction weekly.
              Any blueprint above can compound into a million-dollar company once you
              stack proof, community, and automation. Teen energy is the unfair advantage.
            </p>
          </div>
          <div className="space-y-4 rounded-2xl bg-white/10 p-6 text-sm text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Weekly Operating Rhythm
            </p>
            <ul className="space-y-2">
              <li>• Monday — ship one credibility asset (case study, screenshot, testimonial).</li>
              <li>• Wednesday — run one growth experiment (DM sprint, micro-ad, workshop).</li>
              <li>• Friday — automate the most painful manual task you touched that week.</li>
              <li>• Sunday — review metrics, double down on what moved needle, discard the rest.</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
