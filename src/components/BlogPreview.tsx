"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "@/data/blog-posts";

const CATEGORY_COLORS: Record<string, string> = {
  "AI Automation": "#3b6caa",
  "CRM & Sales": "#CC5500",
  "Email & Deliverability": "#0e7490",
  "Web & Design": "#5b4fcf",
  "Government Contracting": "#374151",
  "Business Strategy": "#16a34a",
  "Fractional Leadership": "#CC5500",
};

export function BlogPreview() {
  const filtered = posts
    .filter((p) => p.category !== "Fractional Leadership")
    .slice(0, 3);

  if (filtered.length === 0) return null;

  return (
    <section className="blog-preview-section">
      <div className="blog-preview-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="blog-preview-header"
        >
          <div className="blog-preview-eyebrow">
            <span className="blog-preview-dot" />
            Latest Insights
          </div>
          <h2 className="blog-preview-title">
            Strategy &amp; Intelligence from <span className="accent">the OrenGen Team</span>
          </h2>
          <p className="blog-preview-sub">
            AI automation, CRM strategy, and operational frameworks — built for executives who move fast.
          </p>
        </motion.div>

        <div className="blog-preview-grid">
          {filtered.map((post, i) => {
            const accentColor = CATEGORY_COLORS[post.category] || "#CC5500";
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="blog-preview-card" style={{ borderTopColor: accentColor }}>
                  <div className="blog-preview-card-top">
                    <span
                      className="blog-preview-category"
                      style={{ color: accentColor, background: `${accentColor}12`, borderColor: `${accentColor}25` }}
                    >
                      {post.category}
                    </span>
                    <h3 className="blog-preview-card-title">{post.title}</h3>
                    <p className="blog-preview-card-excerpt">{post.excerpt}</p>
                  </div>
                  <div className="blog-preview-card-footer">
                    <div className="blog-preview-card-meta">
                      <span className="blog-preview-card-author">{post.author}</span>
                      <span className="blog-preview-card-date">{post.date} &middot; {post.readTime} read</span>
                    </div>
                    <span className="blog-preview-card-read" style={{ color: accentColor }}>Read &rarr;</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="blog-preview-cta"
        >
          <Link href="/blog" className="blog-preview-cta-btn">
            View All Insights &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
