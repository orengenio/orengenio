"use client"

import { useState, useEffect, useCallback, type DragEvent, type FormEvent } from "react"

/* ──────────────────────────── types ──────────────────────────── */

interface Tier {
  mo: number
  was: number
  setup: number
  feat: string[]
}

interface Module {
  id: string
  icon: string
  name: string
  tag: "core" | "bundle" | "addon"
  desc: string
  tiers: {
    standard: Tier
    professional: Tier
    premium: Tier
  }
}

type TierKey = "standard" | "professional" | "premium"
type BillKey = "monthly" | "annual"

/* ──────────────────────────── data ──────────────────────────── */

const M: Module[] = [
  {
    id: "voice",
    icon: "\u{1F399}",
    name: "Buy-Lingual\u2122 Voice Agents",
    tag: "core",
    desc: "AI voice agents that speak any language \u2014 inbound & outbound calls, transfers, bookings, and objection handling.",
    tiers: {
      standard: {
        mo: 197,
        was: 297,
        setup: 997,
        feat: [
          "1 Buy-Lingual\u2122 AI voice agent",
          "500 minutes / month included",
          "Inbound call handling",
          "English + 1 language",
          "Basic call transfers",
          "Voicemail & transcription",
          "Business-hours routing",
          "Email call summaries",
        ],
      },
      professional: {
        mo: 397,
        was: 597,
        setup: 1997,
        feat: [
          "3 Buy-Lingual\u2122 AI voice agents",
          "2,000 minutes / month included",
          "Inbound + outbound calling",
          "5 languages supported",
          "Smart call transfers & warm handoff",
          "CRM auto-logging",
          "Appointment booking",
          "Custom voice & personality",
          "Priority support",
        ],
      },
      premium: {
        mo: 797,
        was: 1197,
        setup: 4997,
        feat: [
          "Unlimited Buy-Lingual\u2122 AI voice agents",
          "5,000 minutes / month included",
          "Full inbound + outbound + transfers",
          "29+ languages supported",
          "Objection handling & rebuttals",
          "Multi-step booking flows",
          "Real-time sentiment analysis",
          "Live supervisor dashboard",
          "Dedicated success manager",
          "Custom integrations",
        ],
      },
    },
  },
  {
    id: "employees",
    icon: "\u{1F4AC}",
    name: "AI Chat Employees",
    tag: "core",
    desc: "Conversational AI employees for website chat, SMS, and messaging \u2014 trained on your business, available 24/7.",
    tiers: {
      standard: {
        mo: 97,
        was: 147,
        setup: 497,
        feat: [
          "1 AI chat employee",
          "1,000 conversations / month",
          "Website live chat widget",
          "Basic FAQ handling",
          "Lead capture forms",
          "Business-hours auto-replies",
          "Email notifications",
        ],
      },
      professional: {
        mo: 197,
        was: 297,
        setup: 997,
        feat: [
          "3 AI chat employees",
          "5,000 conversations / month",
          "Website + SMS channels",
          "Advanced knowledge base",
          "Appointment scheduling",
          "CRM integration",
          "Custom branding",
          "Multi-language support",
          "Priority support",
        ],
      },
      premium: {
        mo: 497,
        was: 747,
        setup: 2497,
        feat: [
          "Unlimited AI chat employees",
          "Unlimited conversations",
          "All channels (web, SMS, WhatsApp, etc.)",
          "Custom AI training on your data",
          "E-commerce integration",
          "Payment collection",
          "Advanced analytics dashboard",
          "A/B conversation testing",
          "Dedicated success manager",
          "Custom integrations",
        ],
      },
    },
  },
  {
    id: "bundle",
    icon: "\u26A1",
    name: "Voice + Chat Bundle",
    tag: "bundle",
    desc: "Get both Buy-Lingual\u2122 Voice Agents and AI Chat Employees at a bundled discount \u2014 the complete AI workforce.",
    tiers: {
      standard: {
        mo: 247,
        was: 397,
        setup: 1247,
        feat: [
          "1 voice agent + 1 chat employee",
          "500 voice minutes + 1,000 chats / month",
          "Inbound calls + website chat",
          "English + 1 language",
          "Lead capture & FAQ handling",
          "Business-hours routing",
          "Email summaries & notifications",
          "Save $47/mo vs. separate",
        ],
      },
      professional: {
        mo: 497,
        was: 797,
        setup: 2497,
        feat: [
          "3 voice agents + 3 chat employees",
          "2,000 voice minutes + 5,000 chats / month",
          "Inbound + outbound + SMS",
          "5 languages supported",
          "Appointment booking + scheduling",
          "CRM auto-logging",
          "Custom voice & chat branding",
          "Priority support",
          "Save $97/mo vs. separate",
        ],
      },
      premium: {
        mo: 997,
        was: 1497,
        setup: 5997,
        feat: [
          "Unlimited voice agents + chat employees",
          "5,000 voice minutes + unlimited chats",
          "All channels & languages (29+)",
          "Objection handling + sentiment analysis",
          "Payment collection + e-commerce",
          "Live dashboards & A/B testing",
          "Dedicated success manager",
          "Custom integrations",
          "Save $297/mo vs. separate",
        ],
      },
    },
  },
  {
    id: "nexus",
    icon: "\u{1F517}",
    name: "OrenNexus CRM",
    tag: "addon",
    desc: "All-in-one CRM built for AI-first businesses \u2014 pipelines, automation, and unified inbox included.",
    tiers: {
      standard: {
        mo: 97,
        was: 147,
        setup: 97,
        feat: [
          "Up to 2,500 contacts",
          "1 sales pipeline",
          "Unified inbox (email + SMS)",
          "Basic automation workflows",
          "Task management",
          "Mobile app access",
          "Email templates",
        ],
      },
      professional: {
        mo: 247,
        was: 397,
        setup: 247,
        feat: [
          "Up to 25,000 contacts",
          "5 sales pipelines",
          "Unified inbox (all channels)",
          "Advanced automation builder",
          "Lead scoring",
          "Custom fields & tags",
          "Reporting dashboard",
          "API access",
          "Priority support",
        ],
      },
      premium: {
        mo: 497,
        was: 797,
        setup: 497,
        feat: [
          "Unlimited contacts",
          "Unlimited pipelines",
          "Omnichannel inbox + routing",
          "AI-powered lead scoring",
          "Revenue attribution",
          "Custom objects & workflows",
          "White-label options",
          "Dedicated success manager",
          "Custom integrations",
          "SLA guarantee",
        ],
      },
    },
  },
  {
    id: "web",
    icon: "\u{1F310}",
    name: "AI Website Builder",
    tag: "addon",
    desc: "AI-designed, conversion-optimized websites with built-in chat, booking, and analytics \u2014 no code required.",
    tiers: {
      standard: {
        mo: 247,
        was: 397,
        setup: 997,
        feat: [
          "5-page AI-designed website",
          "Mobile responsive",
          "Built-in chat widget",
          "Contact forms & lead capture",
          "Basic SEO optimization",
          "SSL certificate",
          "1 revision round",
        ],
      },
      professional: {
        mo: 497,
        was: 797,
        setup: 2497,
        feat: [
          "15-page AI-designed website",
          "Advanced animations & interactions",
          "Blog / content management",
          "Appointment booking integration",
          "Advanced SEO + schema markup",
          "Analytics dashboard",
          "A/B landing page testing",
          "3 revision rounds",
          "Priority support",
        ],
      },
      premium: {
        mo: 997,
        was: 1497,
        setup: 4997,
        feat: [
          "Unlimited pages",
          "Custom design & branding",
          "E-commerce / payment integration",
          "Multi-language pages",
          "Advanced analytics + heatmaps",
          "Conversion rate optimization",
          "Monthly performance reports",
          "Dedicated success manager",
          "Unlimited revisions",
          "SLA guarantee",
        ],
      },
    },
  },
  {
    id: "talk",
    icon: "\u{1F4DE}",
    name: "OrenTalk Phone System",
    tag: "addon",
    desc: "Cloud business phone system with AI call routing, recording, IVR menus, and real-time analytics.",
    tiers: {
      standard: {
        mo: 147,
        was: 247,
        setup: 1497,
        feat: [
          "1 business phone number",
          "500 minutes / month included",
          "Basic IVR menu",
          "Call recording",
          "Voicemail to email",
          "Business-hours routing",
          "Mobile & desktop apps",
        ],
      },
      professional: {
        mo: 297,
        was: 497,
        setup: 2997,
        feat: [
          "5 business phone numbers",
          "2,000 minutes / month included",
          "Multi-level IVR",
          "AI call routing & queues",
          "Call analytics dashboard",
          "Ring groups & departments",
          "CRM integration",
          "Conference calling",
          "Priority support",
        ],
      },
      premium: {
        mo: 497,
        was: 797,
        setup: 5997,
        feat: [
          "Unlimited phone numbers",
          "5,000 minutes / month included",
          "AI-powered smart routing",
          "Real-time call monitoring",
          "Custom IVR flows",
          "Advanced analytics & reporting",
          "Call whisper & barge",
          "Dedicated success manager",
          "API access",
          "SLA guarantee",
        ],
      },
    },
  },
  {
    id: "social",
    icon: "\u{1F4F1}",
    name: "AI Social Manager",
    tag: "addon",
    desc: "Automated social media scheduling, content generation, engagement, and analytics across all platforms.",
    tiers: {
      standard: {
        mo: 47,
        was: 97,
        setup: 0,
        feat: [
          "3 social accounts",
          "30 AI-generated posts / month",
          "Basic scheduling",
          "1 platform (choose Facebook, Instagram, or LinkedIn)",
          "Basic analytics",
          "Hashtag suggestions",
          "Content calendar",
        ],
      },
      professional: {
        mo: 97,
        was: 197,
        setup: 0,
        feat: [
          "10 social accounts",
          "90 AI-generated posts / month",
          "Advanced scheduling & queue",
          "All major platforms",
          "Engagement automation (likes, replies)",
          "Competitor monitoring",
          "Performance reports",
          "Content recycling",
          "Priority support",
        ],
      },
      premium: {
        mo: 197,
        was: 397,
        setup: 0,
        feat: [
          "Unlimited social accounts",
          "Unlimited AI-generated posts",
          "All platforms + TikTok & YouTube",
          "Advanced engagement AI",
          "Influencer discovery",
          "Sentiment analysis",
          "White-label reports",
          "Dedicated success manager",
          "A/B content testing",
          "SLA guarantee",
        ],
      },
    },
  },
]

const TIERS: TierKey[] = ["standard", "professional", "premium"]

const COMP_DATA: { name: string; min: number; max: number; highlight: boolean }[] = [
  { name: "OrenGen", min: 0.12, max: 0.14, highlight: true },
  { name: "Bland AI", min: 0.12, max: 0.14, highlight: false },
  { name: "Retell AI", min: 0.11, max: 0.15, highlight: false },
  { name: "Centerfy", min: 0.15, max: 0.15, highlight: false },
  { name: "Ringly.io", min: 0.19, max: 0.35, highlight: false },
  { name: "CallAgentAI", min: 0.08, max: 0.45, highlight: false },
  { name: "CloudTalk", min: 0.19, max: 0.49, highlight: false },
  { name: "Synthflow", min: 0.09, max: 0.58, highlight: false },
]

const USAGE_RATES = [
  { label: "Voice Inbound", rate: "$0.12/min", icon: "\u{1F4E5}" },
  { label: "Voice Outbound", rate: "$0.14/min", icon: "\u{1F4E4}" },
  { label: "SMS Outbound", rate: "$0.02/msg", icon: "\u2709\uFE0F" },
  { label: "SMS Inbound", rate: "$0.015/msg", icon: "\u{1F4E9}" },
]

const TAG_COLORS: Record<string, string> = {
  core: "#CC5500",
  bundle: "#3FCF8E",
  addon: "#5BA4F5",
}

const TIER_LABEL: Record<TierKey, string> = {
  standard: "Standard",
  professional: "Professional",
  premium: "Premium",
}

/* ──────────────────────────── helpers ──────────────────────────── */

function annualPrice(monthly: number): number {
  return Math.round(monthly * 0.83)
}

function fmt(n: number): string {
  return n.toLocaleString("en-US")
}

/* ──────────────────────────── component ──────────────────────────── */

export function KanBuilder() {
  const [engineIds, setEngineIds] = useState<string[]>([])
  const [cardTiers, setCardTiers] = useState<Record<string, TierKey>>(() => {
    const init: Record<string, TierKey> = {}
    M.forEach((m) => (init[m.id] = "standard"))
    return init
  })
  const [cardBills, setCardBills] = useState<Record<string, BillKey>>(() => {
    const init: Record<string, BillKey> = {}
    M.forEach((m) => (init[m.id] = "monthly"))
    return init
  })
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [dragId, setDragId] = useState<string | null>(null)
  const [expandedFeats, setExpandedFeats] = useState<Record<string, boolean>>({})
  const [chartAnimated, setChartAnimated] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "" })
  const [payLoading, setPayLoading] = useState(false)
  const [payError, setPayError] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setChartAnimated(true), 400)
    return () => clearTimeout(timer)
  }, [])

  /* drag & drop */
  const handleDragStart = useCallback((e: DragEvent<HTMLDivElement>, id: string) => {
    setDragId(id)
    e.dataTransfer.setData("text/plain", id)
    e.dataTransfer.effectAllowed = "move"
  }, [])

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }, [])

  const handleDropEngine = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      const id = e.dataTransfer.getData("text/plain")
      if (id && !engineIds.includes(id)) {
        setEngineIds((prev) => [...prev, id])
      }
      setDragId(null)
    },
    [engineIds],
  )

  const handleDropWarehouse = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("text/plain")
    if (id) {
      setEngineIds((prev) => prev.filter((x) => x !== id))
    }
    setDragId(null)
  }, [])

  const handleDragEnd = useCallback(() => setDragId(null), [])

  /* quick start */
  const loadQuickStart = useCallback(
    (items: { id: string; tier: TierKey }[]) => {
      const ids = items.map((i) => i.id)
      setEngineIds(ids)
      const newTiers = { ...cardTiers }
      items.forEach((i) => (newTiers[i.id] = i.tier))
      setCardTiers(newTiers)
    },
    [cardTiers],
  )

  /* summary calcs */
  const engineModules = engineIds.map((id) => M.find((m) => m.id === id)!).filter(Boolean)
  let totalSetup = 0
  let totalMonthly = 0
  engineModules.forEach((mod) => {
    const tier = mod.tiers[cardTiers[mod.id]]
    const bill = cardBills[mod.id]
    const mo = bill === "annual" ? annualPrice(tier.mo) : tier.mo
    totalMonthly += mo
    totalSetup += tier.setup
  })

  /* form submit */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      solutions: engineModules.map((mod) => ({
        id: mod.id,
        name: mod.name,
        tier: cardTiers[mod.id],
        billing: cardBills[mod.id],
        monthly:
          cardBills[mod.id] === "annual"
            ? annualPrice(mod.tiers[cardTiers[mod.id]].mo)
            : mod.tiers[cardTiers[mod.id]].mo,
        setup: mod.tiers[cardTiers[mod.id]].setup,
      })),
      totalMonthly,
      totalSetup,
      annualProjection: totalMonthly * 12,
    }
    try {
      await fetch(`${process.env.NEXT_PUBLIC_WEBHOOK_BASE_URL ?? "https://automate.orengen.io"}/webhook/orenkanbuilder`, { // pragma: allowlist secret
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    } catch {
      /* silently continue */
    }
    setSubmitted(true)
  }

  /* Stripe Checkout — "Pay Now" path. Posts the cart to /api/checkout
     and redirects the browser to the hosted Stripe Checkout URL. */
  const handlePayNow = async () => {
    if (engineModules.length === 0 || payLoading) return
    setPayError(null)
    setPayLoading(true)
    try {
      const items = engineModules.flatMap((mod) => {
        const tier = cardTiers[mod.id]
        const bill = cardBills[mod.id]
        const t = mod.tiers[tier]
        const monthly = bill === "annual" ? annualPrice(t.mo) : t.mo
        const recurring: "month" | "year" = bill === "annual" ? "year" : "month"
        const subscriptionUnit =
          bill === "annual" ? Math.round(monthly * 12 * 100) : Math.round(monthly * 100)
        const lines: { name: string; price_cents: number; qty: number; recurring?: "month" | "year" }[] = [
          {
            name: `${mod.name} \u2014 ${TIER_LABEL[tier]} (${bill === "annual" ? "Annual" : "Monthly"})`,
            price_cents: subscriptionUnit,
            qty: 1,
            recurring,
          },
        ]
        if (t.setup > 0) {
          lines.push({
            name: `${mod.name} \u2014 ${TIER_LABEL[tier]} setup (one-time)`,
            price_cents: Math.round(t.setup * 100),
            qty: 1,
          })
        }
        return lines
      })
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items,
          customer_email: formData.email || undefined,
          metadata: {
            source: "orenkanbuilder",
            company: formData.company,
            name: formData.name,
            phone: formData.phone,
          },
        }),
      })
      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; url?: string; error?: string }
        | null
      if (!res.ok || !data?.url) {
        setPayError(data?.error || "Could not start checkout. Please try again.")
        setPayLoading(false)
        return
      }
      window.location.href = data.url
    } catch {
      setPayError("Network error. Please try again.")
      setPayLoading(false)
    }
  }

  /* card renderer */
  const renderCard = (mod: Module, inEngine: boolean) => {
    const tier = cardTiers[mod.id]
    const bill = cardBills[mod.id]
    const t = mod.tiers[tier]
    const price = bill === "annual" ? annualPrice(t.mo) : t.mo
    const expanded = expandedFeats[mod.id] ?? false
    const isDragging = dragId === mod.id

    return (
      <div
        key={mod.id}
        draggable
        onDragStart={(e) => handleDragStart(e, mod.id)}
        onDragEnd={handleDragEnd}
        style={{
          background: "rgba(255,255,255,0.03)",
          border: inEngine ? "1px solid rgba(204,85,0,0.4)" : "1px solid rgba(255,255,255,0.06)",
          borderRadius: 20,
          padding: "24px 20px",
          backdropFilter: "blur(12px)",
          cursor: "grab",
          opacity: isDragging ? 0.5 : 1,
          transition: "opacity 0.2s, border-color 0.3s, transform 0.2s",
          userSelect: "none" as const,
        }}
      >
        {/* header */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 28 }}>{mod.icon}</span>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: 16,
                fontWeight: 800,
                color: "#F0F4FA",
              }}
            >
              {mod.name}
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: TAG_COLORS[mod.tag] ?? "#CC5500",
                background: (TAG_COLORS[mod.tag] ?? "#CC5500") + "15",
                padding: "2px 8px",
                borderRadius: 4,
              }}
            >
              {mod.tag}
            </span>
          </div>
        </div>

        <p
          style={{
            fontSize: 13,
            color: "rgba(210,225,245,0.45)",
            lineHeight: 1.5,
            marginBottom: 14,
          }}
        >
          {mod.desc}
        </p>

        {/* tier selector */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 12,
            background: "rgba(0,0,0,0.2)",
            borderRadius: 8,
            padding: 3,
          }}
        >
          {TIERS.map((tk) => (
            <button
              key={tk}
              onClick={() => setCardTiers((prev) => ({ ...prev, [mod.id]: tk }))}
              style={{
                flex: 1,
                padding: "6px 4px",
                fontSize: 11,
                fontWeight: tier === tk ? 700 : 500,
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                color: tier === tk ? "#fff" : "rgba(210,225,245,0.5)",
                background: tier === tk ? "#CC5500" : "transparent",
                transition: "all 0.2s",
              }}
            >
              {TIER_LABEL[tk]}
            </button>
          ))}
        </div>

        {/* billing toggle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 14,
          }}
        >
          <button
            onClick={() => setCardBills((prev) => ({ ...prev, [mod.id]: "monthly" }))}
            style={{
              fontSize: 12,
              fontWeight: bill === "monthly" ? 700 : 400,
              color: bill === "monthly" ? "#F0F4FA" : "rgba(210,225,245,0.4)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Monthly
          </button>
          <div
            onClick={() =>
              setCardBills((prev) => ({
                ...prev,
                [mod.id]: bill === "monthly" ? "annual" : "monthly",
              }))
            }
            style={{
              width: 36,
              height: 20,
              borderRadius: 10,
              background: bill === "annual" ? "#CC5500" : "rgba(255,255,255,0.15)",
              position: "relative",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 2,
                left: bill === "annual" ? 18 : 2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "#fff",
                transition: "left 0.2s",
              }}
            />
          </div>
          <button
            onClick={() => setCardBills((prev) => ({ ...prev, [mod.id]: "annual" }))}
            style={{
              fontSize: 12,
              fontWeight: bill === "annual" ? 700 : 400,
              color: bill === "annual" ? "#F0F4FA" : "rgba(210,225,245,0.4)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Annual
          </button>
          {bill === "annual" && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#3FCF8E",
                background: "rgba(63,207,142,0.12)",
                padding: "2px 8px",
                borderRadius: 4,
              }}
            >
              Save 17%
            </span>
          )}
        </div>

        {/* price */}
        <div style={{ marginBottom: 14 }}>
          <span
            style={{
              fontSize: 13,
              color: "rgba(210,225,245,0.35)",
              textDecoration: "line-through",
              marginRight: 8,
            }}
          >
            ${fmt(t.was)}/mo
          </span>
          <span style={{ fontSize: 28, fontWeight: 800, color: "#CC5500" }}>
            ${fmt(price)}
          </span>
          <span style={{ fontSize: 13, color: "rgba(210,225,245,0.4)" }}>
            /{bill === "annual" ? "mo (billed annually)" : "mo"}
          </span>
          {t.setup > 0 && (
            <div style={{ fontSize: 12, color: "rgba(210,225,245,0.3)", marginTop: 4 }}>
              One-time setup: ${fmt(t.setup)}
            </div>
          )}
        </div>

        {/* features */}
        <div
          onClick={() => setExpandedFeats((prev) => ({ ...prev, [mod.id]: !expanded }))}
          style={{ cursor: "pointer" }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "rgba(210,225,245,0.5)",
              marginBottom: 6,
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {"Features"} {expanded ? "\u25BE" : "\u25B8"}
          </div>
          {expanded && (
            <ul style={{ margin: 0, paddingLeft: 16 }}>
              {t.feat.map((f, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: 12,
                    color: "rgba(210,225,245,0.5)",
                    lineHeight: 1.7,
                  }}
                >
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }

  /* render */
  const warehouseModules = M.filter((m) => !engineIds.includes(m.id))

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%)",
        fontFamily: "var(--font-roboto), 'Roboto', sans-serif",
        color: "#F0F4FA",
        paddingBottom: 100,
      }}
    >
      {/* hero */}
      <section
        style={{
          position: "relative",
          padding: "140px 24px 60px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(204,85,0,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 24px",
              background: "rgba(204,85,0,0.1)",
              border: "1px solid rgba(204,85,0,0.25)",
              borderRadius: 999,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#CC5500",
                boxShadow: "0 0 0 3px rgba(204,85,0,0.3)",
              }}
            />
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: "#CC5500",
              }}
            >
              Drag &amp; Drop Builder
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.05,
              color: "#F0F4FA",
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Build Your Custom <span style={{ color: "#CC5500" }}>AI Engine</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(210,225,245,0.55)",
              maxWidth: 600,
              margin: "0 auto 36px",
            }}
          >
            Drag solutions from the Warehouse into your Engine. Choose tiers, toggle billing, and
            lock in your custom AI workforce.
          </p>
        </div>
      </section>

      {/* quick start */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 40px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
          }}
        >
          {[
            {
              label: "\u26A1 Starter",
              items: [
                { id: "employees", tier: "standard" as TierKey },
                { id: "nexus", tier: "standard" as TierKey },
              ],
            },
            {
              label: "\u{1F680} Growth",
              items: [
                { id: "voice", tier: "professional" as TierKey },
                { id: "employees", tier: "professional" as TierKey },
                { id: "nexus", tier: "professional" as TierKey },
              ],
            },
            {
              label: "\u{1F48E} Dominate",
              items: [
                { id: "voice", tier: "professional" as TierKey },
                { id: "employees", tier: "professional" as TierKey },
                { id: "nexus", tier: "professional" as TierKey },
              ],
            },
          ].map((pkg) => (
            <button
              key={pkg.label}
              onClick={() => loadQuickStart(pkg.items)}
              style={{
                padding: "10px 24px",
                borderRadius: 999,
                border: "1px solid rgba(204,85,0,0.3)",
                background: "rgba(204,85,0,0.08)",
                color: "#CC5500",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {pkg.label}
            </button>
          ))}
          <button
            onClick={() =>
              window.open("https://calendly.com/orengenio/30min", "_blank")
            }
            style={{
              padding: "10px 24px",
              borderRadius: 999,
              border: "1px solid rgba(204,85,0,0.3)",
              background: "linear-gradient(135deg, #CC5500, #E8762B)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {"\u{1F3E2}"} Enterprise
          </button>
        </div>
      </section>

      {/* builder columns */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
            gap: 24,
          }}
        >
          {/* warehouse */}
          <div
            onDragOver={handleDragOver}
            onDrop={handleDropWarehouse}
            style={{
              background: "rgba(255,255,255,0.015)",
              border: "2px dashed rgba(255,255,255,0.08)",
              borderRadius: 24,
              padding: 20,
              minHeight: 300,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 800,
                color: "#F0F4FA",
                marginBottom: 4,
              }}
            >
              {"\u{1F4E6}"} Solution Warehouse
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "rgba(210,225,245,0.4)",
                marginBottom: 20,
              }}
            >
              Drag solutions from here into your Engine {"\u2192"}
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {warehouseModules.map((mod) => renderCard(mod, false))}
              {warehouseModules.length === 0 && (
                <div
                  style={{
                    textAlign: "center",
                    padding: 40,
                    color: "rgba(210,225,245,0.25)",
                    fontSize: 14,
                  }}
                >
                  All solutions added to your Engine!
                </div>
              )}
            </div>
          </div>

          {/* engine */}
          <div
            onDragOver={handleDragOver}
            onDrop={handleDropEngine}
            style={{
              background: "rgba(204,85,0,0.03)",
              border: "2px dashed rgba(204,85,0,0.2)",
              borderRadius: 24,
              padding: 20,
              minHeight: 300,
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 800,
                color: "#CC5500",
                marginBottom: 4,
              }}
            >
              {"\u{1F527}"} Your AI Engine
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "rgba(210,225,245,0.4)",
                marginBottom: 20,
              }}
            >
              Drop solutions here to build your custom engine
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {engineModules.map((mod) => renderCard(mod, true))}
              {engineModules.length === 0 && (
                <div
                  style={{
                    textAlign: "center",
                    padding: 60,
                    border: "2px dashed rgba(204,85,0,0.15)",
                    borderRadius: 16,
                    color: "rgba(210,225,245,0.25)",
                    fontSize: 14,
                  }}
                >
                  {"\u2190"} Drag solutions here to get started
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* competitive chart */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 60px" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: 28,
            fontWeight: 800,
            color: "#F0F4FA",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          Voice Agent <span style={{ color: "#CC5500" }}>Cost Comparison</span>
        </h2>
        <p
          style={{
            color: "rgba(210,225,245,0.45)",
            fontSize: 15,
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          Per-minute pricing across leading AI voice platforms
        </p>
        <div style={{ display: "grid", gap: 12 }}>
          {COMP_DATA.map((c, i) => {
            const maxVal = 0.6
            const barWidth = chartAnimated ? `${(c.max / maxVal) * 100}%` : "0%"
            return (
              <div
                key={c.name}
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <div
                  style={{
                    width: 110,
                    fontSize: 13,
                    fontWeight: c.highlight ? 700 : 500,
                    color: c.highlight ? "#CC5500" : "rgba(210,225,245,0.6)",
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {c.name}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 28,
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 6,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: barWidth,
                      background: c.highlight
                        ? "linear-gradient(90deg, #CC5500, #E8762B)"
                        : "rgba(91,164,245,0.3)",
                      borderRadius: 6,
                      transition: `width 0.8s ease ${i * 0.1}s`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      paddingRight: 8,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#fff",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {c.min === c.max ? `$${c.min}` : `$${c.min}\u2013$${c.max}`}/min
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* usage rates */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 60px" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: 28,
            fontWeight: 800,
            color: "#F0F4FA",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          Usage <span style={{ color: "#CC5500" }}>Rates</span>
        </h2>
        <p
          style={{
            color: "rgba(210,225,245,0.45)",
            fontSize: 15,
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          Pay only for what you use beyond included minutes
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {USAGE_RATES.map((u) => (
            <div
              key={u.label}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 16,
                padding: "24px 20px",
                textAlign: "center",
                backdropFilter: "blur(12px)",
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 8 }}>{u.icon}</div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(210,225,245,0.5)",
                  marginBottom: 6,
                }}
              >
                {u.label}
              </div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#CC5500" }}>{u.rate}</div>
            </div>
          ))}
        </div>
      </section>

      {/* sticky summary bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(8,22,40,0.95)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(204,85,0,0.2)",
          padding: "14px 24px",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 11, color: "rgba(210,225,245,0.4)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
                Solutions
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#F0F4FA" }}>
                {engineIds.length}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(210,225,245,0.4)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
                Setup Fee
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#F0F4FA" }}>
                ${fmt(totalSetup)}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(210,225,245,0.4)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
                Monthly
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#CC5500" }}>
                ${fmt(totalMonthly)}/mo
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "rgba(210,225,245,0.4)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
                Annual Projection
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#F0F4FA" }}>
                ${fmt(totalMonthly * 12)}/yr
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              if (engineIds.length > 0) {
                setSubmitted(false)
                setModalOpen(true)
              }
            }}
            style={{
              padding: "14px 32px",
              background:
                engineIds.length > 0
                  ? "linear-gradient(135deg, #CC5500, #E8762B)"
                  : "rgba(255,255,255,0.06)",
              color: engineIds.length > 0 ? "#fff" : "rgba(210,225,245,0.3)",
              fontWeight: 700,
              fontSize: 15,
              border: "none",
              borderRadius: 12,
              cursor: engineIds.length > 0 ? "pointer" : "default",
              boxShadow: engineIds.length > 0 ? "0 4px 24px rgba(204,85,0,0.35)" : "none",
              transition: "all 0.2s",
            }}
          >
            {engineIds.length > 0
              ? `Lock In ${engineIds.length} Solution${engineIds.length > 1 ? "s" : ""} \u2014 $${fmt(totalMonthly)}/mo`
              : "Add solutions to get started"}
          </button>
        </div>
      </div>

      {/* modal */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            backdropFilter: "blur(8px)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          onClick={() => setModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(165deg, #0B1D3A, #0F2847)",
              border: "1px solid rgba(204,85,0,0.3)",
              borderRadius: 24,
              padding: "36px 32px",
              maxWidth: 580,
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "none",
                border: "none",
                color: "rgba(210,225,245,0.5)",
                fontSize: 24,
                cursor: "pointer",
                lineHeight: 1,
              }}
            >
              {"\u2715"}
            </button>

            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 64, marginBottom: 20 }}>{"\u2705"}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#F0F4FA",
                    marginBottom: 12,
                  }}
                >
                  Engine Locked In!
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    color: "rgba(210,225,245,0.55)",
                    lineHeight: 1.65,
                    maxWidth: 400,
                    margin: "0 auto",
                  }}
                >
                  Our team will reach out within 24 hours to finalize your custom AI engine
                  configuration and get you deployed.
                </p>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#F0F4FA",
                    marginBottom: 20,
                  }}
                >
                  Your AI Engine <span style={{ color: "#CC5500" }}>Summary</span>
                </h3>

                {/* line items */}
                <div style={{ marginBottom: 24 }}>
                  {engineModules.map((mod) => {
                    const tier = cardTiers[mod.id]
                    const bill = cardBills[mod.id]
                    const t = mod.tiers[tier]
                    const price = bill === "annual" ? annualPrice(t.mo) : t.mo
                    return (
                      <div
                        key={mod.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "12px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: 14,
                              fontWeight: 700,
                              color: "#F0F4FA",
                            }}
                          >
                            {mod.icon} {mod.name}
                          </div>
                          <div
                            style={{
                              fontSize: 12,
                              color: "rgba(210,225,245,0.4)",
                            }}
                          >
                            {TIER_LABEL[tier]} {"\u2022"} {bill === "annual" ? "Annual" : "Monthly"}
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div
                            style={{
                              fontSize: 16,
                              fontWeight: 700,
                              color: "#CC5500",
                            }}
                          >
                            ${fmt(price)}/mo
                          </div>
                          {t.setup > 0 && (
                            <div
                              style={{
                                fontSize: 11,
                                color: "rgba(210,225,245,0.35)",
                              }}
                            >
                              +${fmt(t.setup)} setup
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* totals */}
                <div
                  style={{
                    background: "rgba(204,85,0,0.08)",
                    borderRadius: 12,
                    padding: 16,
                    marginBottom: 24,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 12,
                    textAlign: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(210,225,245,0.4)", textTransform: "uppercase" as const }}>
                      Monthly
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#CC5500" }}>
                      ${fmt(totalMonthly)}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(210,225,245,0.4)", textTransform: "uppercase" as const }}>
                      Annual
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#F0F4FA" }}>
                      ${fmt(totalMonthly * 12)}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(210,225,245,0.4)", textTransform: "uppercase" as const }}>
                      Setup
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#F0F4FA" }}>
                      ${fmt(totalSetup)}
                    </div>
                  </div>
                </div>

                {/* contact form */}
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gap: 12, marginBottom: 20 }}>
                    {(
                      [
                        { key: "name", label: "Full Name", type: "text" },
                        { key: "email", label: "Email", type: "email" },
                        { key: "phone", label: "Phone", type: "tel" },
                        { key: "company", label: "Company", type: "text" },
                      ] as const
                    ).map((field) => (
                      <div key={field.key}>
                        <label
                          style={{
                            display: "block",
                            fontSize: 12,
                            fontWeight: 600,
                            color: "rgba(210,225,245,0.5)",
                            marginBottom: 4,
                          }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required
                          value={formData[field.key]}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              [field.key]: e.target.value,
                            }))
                          }
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: 8,
                            color: "#F0F4FA",
                            fontSize: 14,
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "grid", gap: 10 }}>
                    <button
                      type="submit"
                      style={{
                        width: "100%",
                        padding: "14px 24px",
                        background: "linear-gradient(135deg, #CC5500, #E8762B)",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: 15,
                        border: "none",
                        borderRadius: 12,
                        cursor: "pointer",
                        boxShadow: "0 4px 24px rgba(204,85,0,0.35)",
                      }}
                    >
                      Send to Sales &amp; Lock In My Engine
                    </button>
                    <button
                      type="button"
                      onClick={handlePayNow}
                      disabled={payLoading || engineModules.length === 0}
                      style={{
                        width: "100%",
                        padding: "14px 24px",
                        background:
                          payLoading || engineModules.length === 0
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(255,255,255,0.04)",
                        color:
                          payLoading || engineModules.length === 0
                            ? "rgba(210,225,245,0.45)"
                            : "#F0F4FA",
                        fontWeight: 700,
                        fontSize: 15,
                        border: "1px solid rgba(204,85,0,0.55)",
                        borderRadius: 12,
                        cursor:
                          payLoading || engineModules.length === 0 ? "not-allowed" : "pointer",
                        transition: "background 0.2s",
                      }}
                    >
                      {payLoading ? "Redirecting to Stripe\u2026" : "Pay Now with Stripe"}
                    </button>
                    {payError && (
                      <div
                        role="alert"
                        style={{
                          fontSize: 12,
                          color: "#F47C7C",
                          textAlign: "center",
                        }}
                      >
                        {payError}
                      </div>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
