import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "OrenGen Worldwide — Choose Your Infrastructure",
  description:
    "Choose your implementation path: deploy high-velocity AI agents on the OrenGen SaaS platform, or architect total technical sovereignty with self-hosted, NIST-aligned infrastructure.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "OrenGen Worldwide — Choose Your Infrastructure",
    description:
      "Deploy high-velocity AI agents on the OrenGen SaaS platform, or architect total technical sovereignty with self-hosted, NIST-aligned infrastructure.",
    url: "https://orengen.io/",
  },
};

export default function Home() {
  return (
    <div className={styles.root}>
      <nav className={styles.topbar}>
        <div className={styles.wrap}>
          <div className={styles.navInner}>
            <Link href="/" className={styles.brandText} aria-label="OrenGen Worldwide home">
              ORENGEN<span>WORLDWIDE</span>
            </Link>
            <div className={styles.credsTop}>CAGE: 12XC1 • UEI: RX16QFYT6YM5</div>
          </div>
        </div>
      </nav>

      <header className={styles.hero}>
        <div className={styles.wrap}>
          <h1>The Architecture of Autonomy.</h1>
          <p>
            Choose your implementation path: Deploy high-velocity AI agents or
            architect total technical sovereignty.
          </p>
        </div>
      </header>

      <main className={styles.wrap}>
        <div className={styles.pathGrid}>
          <section className={`${styles.card} ${styles.pathSaas}`}>
            <div>
              <span className={`${styles.cardLabel} ${styles.saasLabel}`}>
                Operational SaaS
              </span>
              <h2>OrenGen Platform</h2>
              <p>
                Deploy our suite of specialized AI products to modernize your
                existing workflows instantly.
              </p>
              <ul className={styles.featureList}>
                <li>
                  <span>
                    <strong>OrenAgents:</strong> Autonomous Workforce
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Buy-Lingual™ Agents:</strong> Global Communication
                  </span>
                </li>
                <li>
                  <span>
                    <strong>OrenNexus:</strong> Integrated Ecosystems
                  </span>
                </li>
                <li>
                  <span>Rapid Software-as-a-Service Deployment</span>
                </li>
              </ul>
            </div>
            <Link href="/platform" className={`${styles.btn} ${styles.btnSaas}`}>
              Enter SaaS Platform
            </Link>
          </section>

          <section className={`${styles.card} ${styles.pathEnterprise}`}>
            <div>
              <span className={`${styles.cardLabel} ${styles.entLabel}`}>
                Sovereign Infrastructure
              </span>
              <h2>The &ldquo;No-Rent&rdquo; Build</h2>
              <p>
                Architect self-hosted, NIST-aligned AI ecosystems designed for
                absolute institutional control.
              </p>
              <ul className={styles.featureList}>
                <li>
                  <span>Self-Hosted LLM Infrastructure</span>
                </li>
                <li>
                  <span>Anthropic-Native RAG Frameworks</span>
                </li>
                <li>
                  <span>Zero-Vendor Lock-in Architecture</span>
                </li>
                <li>
                  <span>Federal &amp; Enterprise Governance</span>
                </li>
              </ul>
            </div>
            <Link
              href="/orenconsulting"
              className={`${styles.btn} ${styles.btnEnt}`}
            >
              Architect My Infrastructure
            </Link>
          </section>
        </div>
      </main>

      <footer className={styles.footerLegal}>
        <div className={styles.wrap}>
          <div className={styles.credBadges}>
            <span>SAM.GOV REGISTERED</span>
            <span>BLACK-OWNED SDB</span>
            <span>NIST-ALIGNED GOVERNANCE</span>
            <span>CLAUDE-OPTIMIZED</span>
          </div>

          <div className={styles.complianceBlock}>
            <p>
              <strong>SMS &amp; Mobile Communications:</strong> By submitting a
              phone number to OrenGen Worldwide LLC, you agree to receive
              recurring automated SMS/MMS messages from us at the number
              provided. Message frequency varies. Message and data rates may
              apply. Reply STOP to cancel or HELP for help. Consent is not a
              condition of purchase.
            </p>
            <p>
              No mobile information will be shared with third parties or
              affiliates for marketing or promotional purposes. All other
              categories exclude text messaging originator opt-in data and
              consent; this information will not be shared with any third
              parties. See our Privacy Policy, Terms of Service §13A, and AI
              Communications Opt-In for full details.
            </p>
          </div>

          <nav className={styles.legalLinks} aria-label="Legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/ai-sms-opt-in">SMS &amp; AI Call Opt-In</Link>
            <Link href="/ai-communications-opt-in">AI Communications Opt In</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
            <a
              href="https://status.orengen.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site Status
            </a>
          </nav>

          <p className={styles.copyright}>
            © 2026 OrenGen Worldwide LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
