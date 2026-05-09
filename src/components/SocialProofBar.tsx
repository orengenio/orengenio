/**
 * Server component. Hard-coded credibility row for above-the-fold use:
 * registrations, certifications, and aggregate metrics.
 *
 * Designed to render under <Hero /> without depending on external CDNs
 * or fetched data — every value here is a verifiable government ID or a
 * static count maintained by hand.
 */

const items = [
  { label: "SAM.gov Registered", sub: "UEI: RX16QFYT6YM5" },
  { label: "CAGE Coded", sub: "12XC1" },
  { label: "TX CMBL Listed", sub: "Minority-Owned" },
  { label: "NIST-Aligned", sub: "Governance" },
];

export function SocialProofBar() {
  return (
    <section
      aria-label="Trust and credentials"
      className="border-y border-white/10 bg-black/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-5 sm:py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <div className="text-xs font-semibold tracking-wider uppercase text-burnt-orange">
              {item.label}
            </div>
            <div className="text-sm text-white/60 mt-0.5">{item.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
