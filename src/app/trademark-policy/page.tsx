import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Trademark Policy — OrenGen Worldwide",
  description: "OrenGen trademark usage guidelines and intellectual property protection.",
}

const html = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Roboto:wght@300;400;500;600;700&display=swap');

    .legal-page * { margin: 0; padding: 0; box-sizing: border-box; }

    .page-header {
      padding: 120px 20px 60px;
      text-align: center;
      background: linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%);
      position: relative;
      overflow: hidden;
    }
    .page-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(204,85,0,0.08) 1px, transparent 1px);
      background-size: 40px 40px;
      opacity: 0.5;
      pointer-events: none;
    }
    .page-header::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 80px;
      background: linear-gradient(to bottom, transparent, #FFFFFF);
      pointer-events: none;
    }
    .page-header h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(32px, 5vw, 52px);
      font-weight: 900;
      line-height: 1.1;
      margin: 0 0 16px 0;
      color: #F0F4FA;
      letter-spacing: -0.02em;
      position: relative;
      z-index: 1;
    }
    .page-header h1 .orange { color: #CC5500; }
    .page-header p {
      font-family: 'Roboto', sans-serif;
      font-size: clamp(14px, 2vw, 17px);
      color: rgba(210, 225, 245, 0.6);
      margin: 0 0 8px 0;
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 1;
    }
    .page-header .meta {
      font-size: 13px;
      color: rgba(210, 225, 245, 0.4);
      position: relative;
      z-index: 1;
    }

    .content-wrapper {
      max-width: 900px;
      margin: 0 auto;
      padding: 48px 24px 80px;
      background: #FFFFFF;
    }

    .trademark-section { margin-bottom: 40px; }
    .trademark-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 800;
      color: #0B1D3A;
      margin-bottom: 16px;
      margin-top: 40px;
      padding-left: 16px;
      border-left: 4px solid #CC5500;
    }
    .trademark-section h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #0F2847;
      margin-bottom: 12px;
      margin-top: 24px;
    }
    .trademark-section p {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 16px;
    }
    .trademark-section ul, .trademark-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }
    .trademark-section li {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 8px;
    }
    .trademark-section li::marker {
      color: #CC5500;
    }
    .trademark-section strong {
      color: #0B1D3A;
      font-weight: 600;
    }

    .highlight-box {
      background: #FFF7ED;
      border-left: 4px solid #CC5500;
      padding: 20px 24px;
      margin: 24px 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .highlight-box p { margin-bottom: 0; color: #374151; }

    .warning-box {
      background: #FFF7ED;
      border: 2px solid #CC5500;
      padding: 20px 24px;
      margin: 24px 0;
      border-radius: 8px;
    }
    .warning-box h3 { margin-top: 0; color: #CC5500; }

    .info-box {
      background: #F0F4FA;
      border: 1px solid #D1DAE6;
      padding: 24px;
      margin: 24px 0;
      border-radius: 8px;
    }
    .info-box h3 { margin-top: 0; color: #0B1D3A; }

    .contact-info {
      background: #F8F9FA;
      border-left: 4px solid #CC5500;
      padding: 24px;
      margin: 40px 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .contact-info h3 { margin-top: 0; color: #0B1D3A; font-family: 'Playfair Display', serif; }
    .contact-info p { margin-bottom: 8px; }

    a { color: #CC5500; text-decoration: none; }
    a:hover { text-decoration: underline; }

.trademark-list-box {
  background: #F0F4FA;
  border: 1px solid #D1DAE6;
  padding: 24px;
  margin: 24px 0;
  border-radius: 8px;
}
.trademark-list-box h3 {
  margin-top: 0;
  color: #0B1D3A;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  margin-bottom: 16px;
}
.trademark-list-box ul {
  margin-left: 0;
  list-style: none;
}
.trademark-list-box li {
  padding: 8px 0;
  border-bottom: 1px solid #E5E7EB;
}
.trademark-list-box li:last-child {
  border-bottom: none;
}

    @media (max-width: 768px) {
      .page-header { padding: 100px 20px 40px; }
      .content-wrapper { padding: 32px 16px 60px; }
      .trademark-section h2 { font-size: 20px; }
      .trademark-section h3 { font-size: 16px; }
    }
  </style>

<!-- HEADER -->
  <header class="page-header">
    <h1>Trademark <span class="orange">Policy</span></h1>
    <p>Guidelines for using OrenGen's trademarks, service marks, and brand assets.</p>
    <p class="meta">Last Updated: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Protecting Our Brand:</strong> OrenGen Worldwide LLC owns valuable trademarks and service marks that distinguish our products and services. This Trademark Policy explains how you may (and may not) use our trademarks, logos, and other brand assets.</p>
    </div>

    <!-- 1. INTRODUCTION -->
    <section class="trademark-section">
      <h2>1. Introduction and Ownership</h2>
      <p>OrenGen Worldwide LLC ("OrenGen," "we," "us," or "our") is the owner of various trademarks, service marks, trade names, logos, slogans, and other brand identifiers (collectively, "OrenGen Trademarks" or "Marks") used in connection with our AI-powered automation systems, software, and services.</p>
      
      <p>These trademarks are valuable intellectual property assets that represent the quality, reputation, and goodwill associated with OrenGen and our products. Unauthorized use of our trademarks can dilute their value, create consumer confusion, and infringe upon our legal rights.</p>

      <p>This Trademark Policy governs the use of OrenGen Trademarks by third parties, including customers, partners, affiliates, resellers, and the general public. By using any OrenGen Trademark, you agree to comply with this policy and all applicable trademark laws.</p>
    </section>

    <!-- 2. ORENGEN TRADEMARKS -->
    <section class="trademark-section">
      <h2>2. OrenGen Trademarks and Brand Assets</h2>
      <p>The following are trademarks, service marks, and brand identifiers owned by OrenGen Worldwide LLC:</p>

      <div class="trademark-list-box">
        <h3>Primary Trademarks</h3>
        <ul>
          <li><strong>OrenGen™</strong> - Company name and primary brand identifier</li>
          <li><strong>OrenGen Worldwide™</strong> - Full company name and service mark</li>
          <li><strong>Buy-Lingual™ AI-Agents</strong> - Multilingual AI virtual employee technology and service mark</li>
          <li><strong>"Built to Disrupt. Designed to Deliver."™</strong> - Company tagline and slogan</li>
        </ul>
      </div>

      <h3>2.1 Additional Brand Assets</h3>
      <p>In addition to word marks, OrenGen owns the following brand assets:</p>
      <ul>
        <li><strong>OrenGen Logos:</strong> All graphic logos, symbols, and design marks featuring the OrenGen name or brand elements</li>
        <li><strong>Product Names:</strong> Names of our AI agents, software products, services, and technology platforms</li>
        <li><strong>Visual Identity:</strong> Color schemes, typography, design elements, and trade dress associated with OrenGen</li>
        <li><strong>Domain Names:</strong> OrenGen.io and related domain names</li>
        <li><strong>Social Media Handles:</strong> @OrenGen and related social media identifiers</li>
      </ul>

      <h3>2.2 Trademark Status</h3>
      <p>OrenGen Trademarks may be:</p>
      <ul>
        <li><strong>Registered Trademarks (®):</strong> Marks registered with the United States Patent and Trademark Office (USPTO) or foreign trademark offices</li>
        <li><strong>Common Law Trademarks (™):</strong> Unregistered marks protected by common law trademark rights through use in commerce</li>
        <li><strong>Service Marks (℠):</strong> Marks used to identify services rather than physical products</li>
      </ul>
      <p>All OrenGen Trademarks are protected by applicable trademark laws regardless of registration status.</p>
    </section>

    <!-- 3. TRADEMARK USAGE RULES -->
    <section class="trademark-section">
      <h2>3. General Trademark Usage Rules</h2>
      <p>When using OrenGen Trademarks with permission, you must follow these mandatory guidelines:</p>

      <h3>3.1 Proper Trademark Form</h3>
      <ul>
        <li><strong>Use Exact Form:</strong> Always use OrenGen Trademarks in their exact form as shown in this policy. Do not abbreviate, hyphenate, or modify the spelling</li>
        <li><strong>Capitalize Properly:</strong> "OrenGen" must always be written with capital "O" and "G". "Buy-Lingual" must maintain its hyphen and capitalization</li>
        <li><strong>Include Trademark Symbol:</strong> Use the appropriate trademark symbol (™, ®, or ℠) on the first or most prominent use of the mark</li>
        <li><strong>Never Pluralize:</strong> Trademarks are adjectives modifying a noun. Use "OrenGen systems" not "OrenGens"</li>
        <li><strong>Never Make Possessive:</strong> Use "the features of OrenGen" not "OrenGen's features"</li>
        <li><strong>Never Use as a Verb:</strong> Don't say "We OrenGenned our business" or similar verb forms</li>
        <li><strong>Never Use as a Noun:</strong> Say "OrenGen platform" or "OrenGen services," not just "OrenGen" standing alone</li>
      </ul>

      <h3>3.2 Trademark Notice</h3>
      <p>Include a trademark attribution notice whenever you use OrenGen Trademarks prominently:</p>
      <p><em>Example: "OrenGen™ and Buy-Lingual™ are trademarks of OrenGen Worldwide LLC. All rights reserved."</em></p>

      <h3>3.3 Visual Presentation</h3>
      <ul>
        <li><strong>Distinguish from Text:</strong> Set trademarks apart from surrounding text using capitalization, bold, italics, or different font</li>
        <li><strong>Don't Alter Logos:</strong> Never change colors, proportions, orientation, or elements of OrenGen logos</li>
        <li><strong>Maintain Clear Space:</strong> Leave adequate white space around logos to ensure visibility and impact</li>
        <li><strong>Minimum Size:</strong> Never reproduce logos below the minimum size that maintains legibility</li>
      </ul>

      <h3>3.4 Accurate Representation</h3>
      <ul>
        <li>Use trademarks only to accurately describe OrenGen products or services</li>
        <li>Never create false association or endorsement by OrenGen</li>
        <li>Do not imply partnership, sponsorship, or affiliation without written agreement</li>
        <li>Do not use trademarks in a way that disparages OrenGen or damages our reputation</li>
      </ul>
    </section>

    <!-- 4. PERMITTED USES -->
    <section class="trademark-section">
      <h2>4. Permitted Uses of OrenGen Trademarks</h2>
      <p>You may use OrenGen Trademarks <strong>without prior written permission</strong> in the following limited circumstances:</p>

      <h3>4.1 Nominative Fair Use (Referential Use)</h3>
      <p>You may refer to OrenGen and our products using our trademarks when:</p>
      <ul>
        <li><strong>Truthful Statements:</strong> Making factual, truthful statements about OrenGen products or services you use or resell</li>
        <li><strong>Compatibility:</strong> Indicating that your product or service is compatible with or works with OrenGen products</li>
        <li><strong>Comparisons:</strong> Making legitimate comparative statements or reviews</li>
        <li><strong>News and Commentary:</strong> Reporting news, writing articles, or providing commentary about OrenGen</li>
      </ul>
      <p><strong>Requirements:</strong></p>
      <ul>
        <li>Use only the minimum necessary to identify OrenGen or our products</li>
        <li>Do not use our logos or other graphic marks</li>
        <li>Include a disclaimer that you are not affiliated with, sponsored by, or endorsed by OrenGen</li>
        <li>Do not create confusion about the source of your products or services</li>
      </ul>

      <h3>4.2 Authorized Resellers and Partners</h3>
      <p>If you have a written reseller, partner, or affiliate agreement with OrenGen, you may use our trademarks as specifically permitted in your agreement, subject to:</p>
      <ul>
        <li>Compliance with usage guidelines provided to you</li>
        <li>Approval of all marketing materials featuring OrenGen Trademarks</li>
        <li>Accurate representation of your relationship with OrenGen</li>
        <li>Cessation of use upon termination of the agreement</li>
      </ul>

      <h3>4.3 Customers and Service Users</h3>
      <p>As an OrenGen customer, you may:</p>
      <ul>
        <li>Truthfully state that you use OrenGen products or services</li>
        <li>Display OrenGen badges or "Powered by" marks if provided by us</li>
        <li>Include our name in your client list or case studies (if publicly disclosed)</li>
      </ul>
      <p>You may NOT:</p>
      <ul>
        <li>Imply endorsement, sponsorship, or partnership beyond your customer relationship</li>
        <li>Use OrenGen logos without express written permission</li>
        <li>Create the impression that your content is produced or approved by OrenGen</li>
      </ul>
    </section>

    <!-- 5. PROHIBITED USES -->
    <section class="trademark-section">
      <h2>5. Prohibited Uses of OrenGen Trademarks</h2>
      <p>The following uses of OrenGen Trademarks are <strong>strictly prohibited</strong> without express written permission from OrenGen:</p>

      <h3>5.1 Company Names and Business Identifiers</h3>
      <ul>
        <li><strong>Business Names:</strong> Using OrenGen Trademarks as or in your company name, trade name, or doing-business-as (DBA) name</li>
        <li><strong>Product/Service Names:</strong> Using our marks as names for your own products or services</li>
        <li><strong>Domain Names:</strong> Registering domain names that include OrenGen Trademarks or confusingly similar variations</li>
        <li><strong>Social Media:</strong> Using our marks in social media handles, usernames, or page names without authorization</li>
        <li><strong>App Names:</strong> Naming applications, software, or mobile apps using OrenGen Trademarks</li>
      </ul>

      <h3>5.2 Misleading or Confusing Uses</h3>
      <ul>
        <li>Creating confusion about affiliation, endorsement, sponsorship, or approval by OrenGen</li>
        <li>Implying that you are OrenGen or that your business is part of OrenGen</li>
        <li>Suggesting that OrenGen has created, approved, or endorsed your content</li>
        <li>Using marks in a way that suggests OrenGen is the source of your products or services</li>
      </ul>

      <h3>5.3 Modification and Alteration</h3>
      <ul>
        <li>Altering, modifying, or creating variations of OrenGen Trademarks</li>
        <li>Combining our marks with other words or elements to create new marks</li>
        <li>Changing colors, fonts, or design elements of our logos</li>
        <li>Creating composite marks that incorporate OrenGen Trademarks</li>
        <li>Abbreviating or creating acronyms from our marks</li>
      </ul>

      <h3>5.4 Merchandise and Products</h3>
      <ul>
        <li>Manufacturing, selling, or distributing merchandise bearing OrenGen Trademarks (t-shirts, mugs, stickers, etc.) without a licensing agreement</li>
        <li>Using our marks on promotional items or giveaways</li>
        <li>Incorporating our marks into your product packaging or labeling</li>
      </ul>

      <h3>5.5 Disparaging or Harmful Uses</h3>
      <ul>
        <li>Using OrenGen Trademarks in connection with unlawful, obscene, defamatory, or offensive content</li>
        <li>Associating our marks with adult content, gambling, tobacco, firearms, or illegal activities</li>
        <li>Using marks in a manner that damages OrenGen's reputation or goodwill</li>
        <li>Making false or misleading statements about OrenGen products or services</li>
      </ul>

      <h3>5.6 Advertising and SEO Practices</h3>
      <ul>
        <li><strong>Paid Search:</strong> Bidding on OrenGen Trademarks as keywords in paid search campaigns without permission</li>
        <li><strong>Meta Tags:</strong> Using our marks in meta tags, hidden text, or other SEO tactics to mislead search engines</li>
        <li><strong>Ad Copy:</strong> Using trademarks in advertising copy to create false association</li>
      </ul>
    </section>

    <!-- 6. BUY-LINGUAL SPECIFIC GUIDELINES -->
    <section class="trademark-section">
      <h2>6. Buy-Lingual™ AI-Agents: Special Guidelines</h2>
      <p>Buy-Lingual™ is a proprietary trademark of OrenGen Worldwide LLC designating our multilingual AI virtual employee technology and services. Additional guidelines apply:</p>

      <h3>6.1 Proper Usage</h3>
      <ul>
        <li><strong>Correct Form:</strong> Always write as "Buy-Lingual™ AI-Agents" with hyphen and capitalization</li>
        <li><strong>Trademark Symbol:</strong> Include ™ symbol on first or prominent use</li>
        <li><strong>Descriptive Use:</strong> Use as an adjective: "Buy-Lingual AI-Agent technology" or "Buy-Lingual services"</li>
        <li><strong>Never Generic:</strong> Do not use "buy-lingual" (lowercase) as a generic term for multilingual AI</li>
      </ul>

      <h3>6.2 Prohibited Variations</h3>
      <p>Do NOT use any of the following:</p>
      <ul>
        <li>"Bi-Lingual AI" or "Bilingual AI" (without "Buy")</li>
        <li>"BuyLingual" (no hyphen)</li>
        <li>"Buy Lingual" (space instead of hyphen)</li>
        <li>"buy-lingual" (lowercase)</li>
        <li>"BL" or other abbreviations</li>
      </ul>

      <h3>6.3 Competitive Use</h3>
      <p>Competitors and third parties may NOT:</p>
      <ul>
        <li>Use "Buy-Lingual" to describe their own multilingual AI products</li>
        <li>Advertise on the keyword "Buy-Lingual" in search campaigns</li>
        <li>Create derivative marks based on "Buy-Lingual"</li>
        <li>Suggest their products are "Buy-Lingual-compatible" without authorization</li>
      </ul>
    </section>

    <!-- 7. REQUESTING PERMISSION -->
    <section class="trademark-section">
      <h2>7. Requesting Permission to Use OrenGen Trademarks</h2>
      <p>If you wish to use OrenGen Trademarks in a manner not expressly permitted by this policy, you must obtain prior written permission from OrenGen.</p>

      <h3>7.1 How to Request Permission</h3>
      <p>Submit a written request to <a href="mailto:support@orengen.io">support@orengen.io</a> with subject line "Trademark Use Request" including:</p>
      <ul>
        <li>Your full legal name or company name</li>
        <li>Contact information (email, phone, address)</li>
        <li>Detailed description of intended use</li>
        <li>Specific marks you wish to use</li>
        <li>Mock-ups or examples of proposed usage</li>
        <li>Duration of intended use</li>
        <li>Geographic scope of use</li>
        <li>Media or channels where marks will appear</li>
      </ul>

      <h3>7.2 Review Process</h3>
      <ul>
        <li>OrenGen will review requests within 15-30 business days</li>
        <li>We may request additional information or modifications</li>
        <li>Approval is at OrenGen's sole discretion</li>
        <li>We may impose conditions, restrictions, or quality control requirements</li>
        <li>Permission may be revoked at any time</li>
      </ul>

      <h3>7.3 Licensing Agreements</h3>
      <p>For ongoing or commercial use of OrenGen Trademarks, we may require a formal trademark license agreement that includes:</p>
      <ul>
        <li>Scope and duration of license</li>
        <li>Quality control standards</li>
        <li>Approval rights for materials</li>
        <li>Royalties or fees (if applicable)</li>
        <li>Termination provisions</li>
        <li>Indemnification and liability terms</li>
      </ul>
    </section>

    <!-- 8. ENFORCEMENT -->
    <section class="trademark-section">
      <h2>8. Enforcement and Violations</h2>
      <p>OrenGen actively monitors and enforces our trademark rights to protect our brand and prevent consumer confusion.</p>

      <h3>8.1 Our Enforcement Rights</h3>
      <p>If you violate this Trademark Policy or infringe our trademark rights, OrenGen may:</p>
      <ul>
        <li>Send a cease-and-desist letter demanding immediate cessation of infringing use</li>
        <li>Revoke any permission or license previously granted</li>
        <li>Demand destruction or modification of infringing materials</li>
        <li>Pursue legal action including injunctive relief and monetary damages</li>
        <li>Report violations to domain registrars, hosting providers, or platform operators</li>
        <li>File complaints with trademark offices or governmental authorities</li>
        <li>Seek recovery of attorneys' fees and costs</li>
      </ul>

      <h3>8.2 Legal Consequences</h3>
      <p>Trademark infringement can result in:</p>
      <ul>
        <li><strong>Civil Liability:</strong> Damages, profits, and statutory damages up to $2,000,000 per mark under the Lanham Act</li>
        <li><strong>Injunctions:</strong> Court orders prohibiting future use of infringing marks</li>
        <li><strong>Destruction of Materials:</strong> Court-ordered destruction of infringing products, packaging, and materials</li>
        <li><strong>Criminal Penalties:</strong> In cases of counterfeiting, criminal fines and imprisonment may apply</li>
      </ul>

      <h3>8.3 Good Faith and Cooperation</h3>
      <p>We prefer to resolve trademark issues cooperatively. If you receive a notice from OrenGen regarding trademark use:</p>
      <ul>
        <li>Respond promptly and professionally</li>
        <li>Cease the objectionable use immediately</li>
        <li>Work with us to find an acceptable alternative</li>
        <li>Provide proof of compliance when requested</li>
      </ul>
      <p>Most issues can be resolved amicably without litigation if addressed quickly and in good faith.</p>
    </section>

    <!-- 9. REPORTING VIOLATIONS -->
    <section class="trademark-section">
      <h2>9. Reporting Trademark Violations</h2>
      <p>If you become aware of unauthorized use of OrenGen Trademarks or potential trademark infringement, please report it to us.</p>

      <h3>9.1 How to Report</h3>
      <p>Email <a href="mailto:support@orengen.io">support@orengen.io</a> with subject line "Trademark Violation Report" and include:</p>
      <ul>
        <li>Description of the infringing use</li>
        <li>URL or location where infringement appears</li>
        <li>Screenshots or documentation of the violation</li>
        <li>Contact information of the infringing party (if known)</li>
        <li>Any other relevant information</li>
      </ul>

      <h3>9.2 Our Response</h3>
      <ul>
        <li>We will investigate reported violations</li>
        <li>We may request additional information from you</li>
        <li>We will take appropriate action based on our assessment</li>
        <li>We may not disclose specific enforcement actions taken</li>
      </ul>
    </section>

    <!-- 10. CHANGES TO POLICY -->
    <section class="trademark-section">
      <h2>10. Changes to This Trademark Policy</h2>
      <p>OrenGen reserves the right to modify this Trademark Policy at any time. Changes will be effective immediately upon posting to our website.</p>

      <h3>10.1 Notification</h3>
      <ul>
        <li>The "Last Updated" date at the top of this page will reflect changes</li>
        <li>Material changes may be communicated via email or website notice</li>
        <li>Continued use of OrenGen Trademarks after changes constitutes acceptance</li>
      </ul>

      <h3>10.2 Ongoing Compliance</h3>
      <p>You are responsible for regularly reviewing this policy to ensure compliance with current guidelines. Previous permission or licenses remain subject to the current version of this policy unless otherwise specified in writing.</p>
    </section>

    <!-- WARNING BOX -->
    <div class="warning-box">
      <h3>⚠️ Important Legal Notice</h3>
      <p><strong>Unauthorized use of OrenGen Trademarks is prohibited and may result in legal action.</strong> This policy does not grant any license or permission to use OrenGen Trademarks except as explicitly stated. All rights not expressly granted are reserved by OrenGen Worldwide LLC.</p>
      <p>Failure to comply with this Trademark Policy may result in immediate termination of any permission or license, cessation of your use of OrenGen services, and legal action including claims for trademark infringement, unfair competition, and dilution.</p>
    </div>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Trademark Inquiries and Permissions</h3>
      <p>For questions about this Trademark Policy or to request permission to use OrenGen Trademarks:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "Trademark Inquiry" or "Trademark Use Request"<br>
        <strong>Mail:</strong> OrenGen Worldwide LLC<br>
        Attn: Trademark Counsel<br>
        1812 Open Range Drive<br>
        Mansfield, Texas 76063
      </p>
      <p><strong>Response Time:</strong> Trademark inquiries are typically reviewed within 15-30 business days.</p>
    </div>

    <div class="highlight-box">
      <p><strong>Trademark Attribution:</strong> OrenGen™, Buy-Lingual™ AI-Agents, and "Built to Disrupt. Designed to Deliver."™ are trademarks of OrenGen Worldwide LLC. All other trademarks, service marks, and trade names referenced on this website are the property of their respective owners.</p>
    </div>

  </div>
`

export default function Page() {
  return (
    <div className="pt-24 pb-12 legal-page" dangerouslySetInnerHTML={{ __html: `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Roboto:wght@300;400;500;600;700&display=swap');

    .legal-page * { margin: 0; padding: 0; box-sizing: border-box; }

    .page-header {
      padding: 120px 20px 60px;
      text-align: center;
      background: linear-gradient(165deg, #081628 0%, #0B1D3A 30%, #0F2847 60%, #0D2240 100%);
      position: relative;
      overflow: hidden;
    }
    .page-header::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(204,85,0,0.08) 1px, transparent 1px);
      background-size: 40px 40px;
      opacity: 0.5;
      pointer-events: none;
    }
    .page-header::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 80px;
      background: linear-gradient(to bottom, transparent, #FFFFFF);
      pointer-events: none;
    }
    .page-header h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(32px, 5vw, 52px);
      font-weight: 900;
      line-height: 1.1;
      margin: 0 0 16px 0;
      color: #F0F4FA;
      letter-spacing: -0.02em;
      position: relative;
      z-index: 1;
    }
    .page-header h1 .orange { color: #CC5500; }
    .page-header p {
      font-family: 'Roboto', sans-serif;
      font-size: clamp(14px, 2vw, 17px);
      color: rgba(210, 225, 245, 0.6);
      margin: 0 0 8px 0;
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      z-index: 1;
    }
    .page-header .meta {
      font-size: 13px;
      color: rgba(210, 225, 245, 0.4);
      position: relative;
      z-index: 1;
    }

    .content-wrapper {
      max-width: 900px;
      margin: 0 auto;
      padding: 48px 24px 80px;
      background: #FFFFFF;
    }

    .trademark-section { margin-bottom: 40px; }
    .trademark-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 800;
      color: #0B1D3A;
      margin-bottom: 16px;
      margin-top: 40px;
      padding-left: 16px;
      border-left: 4px solid #CC5500;
    }
    .trademark-section h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #0F2847;
      margin-bottom: 12px;
      margin-top: 24px;
    }
    .trademark-section p {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 16px;
    }
    .trademark-section ul, .trademark-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }
    .trademark-section li {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 8px;
    }
    .trademark-section li::marker {
      color: #CC5500;
    }
    .trademark-section strong {
      color: #0B1D3A;
      font-weight: 600;
    }

    .highlight-box {
      background: #FFF7ED;
      border-left: 4px solid #CC5500;
      padding: 20px 24px;
      margin: 24px 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .highlight-box p { margin-bottom: 0; color: #374151; }

    .warning-box {
      background: #FFF7ED;
      border: 2px solid #CC5500;
      padding: 20px 24px;
      margin: 24px 0;
      border-radius: 8px;
    }
    .warning-box h3 { margin-top: 0; color: #CC5500; }

    .info-box {
      background: #F0F4FA;
      border: 1px solid #D1DAE6;
      padding: 24px;
      margin: 24px 0;
      border-radius: 8px;
    }
    .info-box h3 { margin-top: 0; color: #0B1D3A; }

    .contact-info {
      background: #F8F9FA;
      border-left: 4px solid #CC5500;
      padding: 24px;
      margin: 40px 0;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .contact-info h3 { margin-top: 0; color: #0B1D3A; font-family: 'Playfair Display', serif; }
    .contact-info p { margin-bottom: 8px; }

    a { color: #CC5500; text-decoration: none; }
    a:hover { text-decoration: underline; }

.trademark-list-box {
  background: #F0F4FA;
  border: 1px solid #D1DAE6;
  padding: 24px;
  margin: 24px 0;
  border-radius: 8px;
}
.trademark-list-box h3 {
  margin-top: 0;
  color: #0B1D3A;
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  margin-bottom: 16px;
}
.trademark-list-box ul {
  margin-left: 0;
  list-style: none;
}
.trademark-list-box li {
  padding: 8px 0;
  border-bottom: 1px solid #E5E7EB;
}
.trademark-list-box li:last-child {
  border-bottom: none;
}

    @media (max-width: 768px) {
      .page-header { padding: 100px 20px 40px; }
      .content-wrapper { padding: 32px 16px 60px; }
      .trademark-section h2 { font-size: 20px; }
      .trademark-section h3 { font-size: 16px; }
    }
  </style>

<!-- HEADER -->
  <header class="page-header">
    <h1>Trademark <span class="orange">Policy</span></h1>
    <p>Guidelines for using OrenGen's trademarks, service marks, and brand assets.</p>
    <p class="meta">Last Updated: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Protecting Our Brand:</strong> OrenGen Worldwide LLC owns valuable trademarks and service marks that distinguish our products and services. This Trademark Policy explains how you may (and may not) use our trademarks, logos, and other brand assets.</p>
    </div>

    <!-- 1. INTRODUCTION -->
    <section class="trademark-section">
      <h2>1. Introduction and Ownership</h2>
      <p>OrenGen Worldwide LLC ("OrenGen," "we," "us," or "our") is the owner of various trademarks, service marks, trade names, logos, slogans, and other brand identifiers (collectively, "OrenGen Trademarks" or "Marks") used in connection with our AI-powered automation systems, software, and services.</p>
      
      <p>These trademarks are valuable intellectual property assets that represent the quality, reputation, and goodwill associated with OrenGen and our products. Unauthorized use of our trademarks can dilute their value, create consumer confusion, and infringe upon our legal rights.</p>

      <p>This Trademark Policy governs the use of OrenGen Trademarks by third parties, including customers, partners, affiliates, resellers, and the general public. By using any OrenGen Trademark, you agree to comply with this policy and all applicable trademark laws.</p>
    </section>

    <!-- 2. ORENGEN TRADEMARKS -->
    <section class="trademark-section">
      <h2>2. OrenGen Trademarks and Brand Assets</h2>
      <p>The following are trademarks, service marks, and brand identifiers owned by OrenGen Worldwide LLC:</p>

      <div class="trademark-list-box">
        <h3>Primary Trademarks</h3>
        <ul>
          <li><strong>OrenGen™</strong> - Company name and primary brand identifier</li>
          <li><strong>OrenGen Worldwide™</strong> - Full company name and service mark</li>
          <li><strong>Buy-Lingual™ AI-Agents</strong> - Multilingual AI virtual employee technology and service mark</li>
          <li><strong>"Built to Disrupt. Designed to Deliver."™</strong> - Company tagline and slogan</li>
        </ul>
      </div>

      <h3>2.1 Additional Brand Assets</h3>
      <p>In addition to word marks, OrenGen owns the following brand assets:</p>
      <ul>
        <li><strong>OrenGen Logos:</strong> All graphic logos, symbols, and design marks featuring the OrenGen name or brand elements</li>
        <li><strong>Product Names:</strong> Names of our AI agents, software products, services, and technology platforms</li>
        <li><strong>Visual Identity:</strong> Color schemes, typography, design elements, and trade dress associated with OrenGen</li>
        <li><strong>Domain Names:</strong> OrenGen.io and related domain names</li>
        <li><strong>Social Media Handles:</strong> @OrenGen and related social media identifiers</li>
      </ul>

      <h3>2.2 Trademark Status</h3>
      <p>OrenGen Trademarks may be:</p>
      <ul>
        <li><strong>Registered Trademarks (®):</strong> Marks registered with the United States Patent and Trademark Office (USPTO) or foreign trademark offices</li>
        <li><strong>Common Law Trademarks (™):</strong> Unregistered marks protected by common law trademark rights through use in commerce</li>
        <li><strong>Service Marks (℠):</strong> Marks used to identify services rather than physical products</li>
      </ul>
      <p>All OrenGen Trademarks are protected by applicable trademark laws regardless of registration status.</p>
    </section>

    <!-- 3. TRADEMARK USAGE RULES -->
    <section class="trademark-section">
      <h2>3. General Trademark Usage Rules</h2>
      <p>When using OrenGen Trademarks with permission, you must follow these mandatory guidelines:</p>

      <h3>3.1 Proper Trademark Form</h3>
      <ul>
        <li><strong>Use Exact Form:</strong> Always use OrenGen Trademarks in their exact form as shown in this policy. Do not abbreviate, hyphenate, or modify the spelling</li>
        <li><strong>Capitalize Properly:</strong> "OrenGen" must always be written with capital "O" and "G". "Buy-Lingual" must maintain its hyphen and capitalization</li>
        <li><strong>Include Trademark Symbol:</strong> Use the appropriate trademark symbol (™, ®, or ℠) on the first or most prominent use of the mark</li>
        <li><strong>Never Pluralize:</strong> Trademarks are adjectives modifying a noun. Use "OrenGen systems" not "OrenGens"</li>
        <li><strong>Never Make Possessive:</strong> Use "the features of OrenGen" not "OrenGen's features"</li>
        <li><strong>Never Use as a Verb:</strong> Don't say "We OrenGenned our business" or similar verb forms</li>
        <li><strong>Never Use as a Noun:</strong> Say "OrenGen platform" or "OrenGen services," not just "OrenGen" standing alone</li>
      </ul>

      <h3>3.2 Trademark Notice</h3>
      <p>Include a trademark attribution notice whenever you use OrenGen Trademarks prominently:</p>
      <p><em>Example: "OrenGen™ and Buy-Lingual™ are trademarks of OrenGen Worldwide LLC. All rights reserved."</em></p>

      <h3>3.3 Visual Presentation</h3>
      <ul>
        <li><strong>Distinguish from Text:</strong> Set trademarks apart from surrounding text using capitalization, bold, italics, or different font</li>
        <li><strong>Don't Alter Logos:</strong> Never change colors, proportions, orientation, or elements of OrenGen logos</li>
        <li><strong>Maintain Clear Space:</strong> Leave adequate white space around logos to ensure visibility and impact</li>
        <li><strong>Minimum Size:</strong> Never reproduce logos below the minimum size that maintains legibility</li>
      </ul>

      <h3>3.4 Accurate Representation</h3>
      <ul>
        <li>Use trademarks only to accurately describe OrenGen products or services</li>
        <li>Never create false association or endorsement by OrenGen</li>
        <li>Do not imply partnership, sponsorship, or affiliation without written agreement</li>
        <li>Do not use trademarks in a way that disparages OrenGen or damages our reputation</li>
      </ul>
    </section>

    <!-- 4. PERMITTED USES -->
    <section class="trademark-section">
      <h2>4. Permitted Uses of OrenGen Trademarks</h2>
      <p>You may use OrenGen Trademarks <strong>without prior written permission</strong> in the following limited circumstances:</p>

      <h3>4.1 Nominative Fair Use (Referential Use)</h3>
      <p>You may refer to OrenGen and our products using our trademarks when:</p>
      <ul>
        <li><strong>Truthful Statements:</strong> Making factual, truthful statements about OrenGen products or services you use or resell</li>
        <li><strong>Compatibility:</strong> Indicating that your product or service is compatible with or works with OrenGen products</li>
        <li><strong>Comparisons:</strong> Making legitimate comparative statements or reviews</li>
        <li><strong>News and Commentary:</strong> Reporting news, writing articles, or providing commentary about OrenGen</li>
      </ul>
      <p><strong>Requirements:</strong></p>
      <ul>
        <li>Use only the minimum necessary to identify OrenGen or our products</li>
        <li>Do not use our logos or other graphic marks</li>
        <li>Include a disclaimer that you are not affiliated with, sponsored by, or endorsed by OrenGen</li>
        <li>Do not create confusion about the source of your products or services</li>
      </ul>

      <h3>4.2 Authorized Resellers and Partners</h3>
      <p>If you have a written reseller, partner, or affiliate agreement with OrenGen, you may use our trademarks as specifically permitted in your agreement, subject to:</p>
      <ul>
        <li>Compliance with usage guidelines provided to you</li>
        <li>Approval of all marketing materials featuring OrenGen Trademarks</li>
        <li>Accurate representation of your relationship with OrenGen</li>
        <li>Cessation of use upon termination of the agreement</li>
      </ul>

      <h3>4.3 Customers and Service Users</h3>
      <p>As an OrenGen customer, you may:</p>
      <ul>
        <li>Truthfully state that you use OrenGen products or services</li>
        <li>Display OrenGen badges or "Powered by" marks if provided by us</li>
        <li>Include our name in your client list or case studies (if publicly disclosed)</li>
      </ul>
      <p>You may NOT:</p>
      <ul>
        <li>Imply endorsement, sponsorship, or partnership beyond your customer relationship</li>
        <li>Use OrenGen logos without express written permission</li>
        <li>Create the impression that your content is produced or approved by OrenGen</li>
      </ul>
    </section>

    <!-- 5. PROHIBITED USES -->
    <section class="trademark-section">
      <h2>5. Prohibited Uses of OrenGen Trademarks</h2>
      <p>The following uses of OrenGen Trademarks are <strong>strictly prohibited</strong> without express written permission from OrenGen:</p>

      <h3>5.1 Company Names and Business Identifiers</h3>
      <ul>
        <li><strong>Business Names:</strong> Using OrenGen Trademarks as or in your company name, trade name, or doing-business-as (DBA) name</li>
        <li><strong>Product/Service Names:</strong> Using our marks as names for your own products or services</li>
        <li><strong>Domain Names:</strong> Registering domain names that include OrenGen Trademarks or confusingly similar variations</li>
        <li><strong>Social Media:</strong> Using our marks in social media handles, usernames, or page names without authorization</li>
        <li><strong>App Names:</strong> Naming applications, software, or mobile apps using OrenGen Trademarks</li>
      </ul>

      <h3>5.2 Misleading or Confusing Uses</h3>
      <ul>
        <li>Creating confusion about affiliation, endorsement, sponsorship, or approval by OrenGen</li>
        <li>Implying that you are OrenGen or that your business is part of OrenGen</li>
        <li>Suggesting that OrenGen has created, approved, or endorsed your content</li>
        <li>Using marks in a way that suggests OrenGen is the source of your products or services</li>
      </ul>

      <h3>5.3 Modification and Alteration</h3>
      <ul>
        <li>Altering, modifying, or creating variations of OrenGen Trademarks</li>
        <li>Combining our marks with other words or elements to create new marks</li>
        <li>Changing colors, fonts, or design elements of our logos</li>
        <li>Creating composite marks that incorporate OrenGen Trademarks</li>
        <li>Abbreviating or creating acronyms from our marks</li>
      </ul>

      <h3>5.4 Merchandise and Products</h3>
      <ul>
        <li>Manufacturing, selling, or distributing merchandise bearing OrenGen Trademarks (t-shirts, mugs, stickers, etc.) without a licensing agreement</li>
        <li>Using our marks on promotional items or giveaways</li>
        <li>Incorporating our marks into your product packaging or labeling</li>
      </ul>

      <h3>5.5 Disparaging or Harmful Uses</h3>
      <ul>
        <li>Using OrenGen Trademarks in connection with unlawful, obscene, defamatory, or offensive content</li>
        <li>Associating our marks with adult content, gambling, tobacco, firearms, or illegal activities</li>
        <li>Using marks in a manner that damages OrenGen's reputation or goodwill</li>
        <li>Making false or misleading statements about OrenGen products or services</li>
      </ul>

      <h3>5.6 Advertising and SEO Practices</h3>
      <ul>
        <li><strong>Paid Search:</strong> Bidding on OrenGen Trademarks as keywords in paid search campaigns without permission</li>
        <li><strong>Meta Tags:</strong> Using our marks in meta tags, hidden text, or other SEO tactics to mislead search engines</li>
        <li><strong>Ad Copy:</strong> Using trademarks in advertising copy to create false association</li>
      </ul>
    </section>

    <!-- 6. BUY-LINGUAL SPECIFIC GUIDELINES -->
    <section class="trademark-section">
      <h2>6. Buy-Lingual™ AI-Agents: Special Guidelines</h2>
      <p>Buy-Lingual™ is a proprietary trademark of OrenGen Worldwide LLC designating our multilingual AI virtual employee technology and services. Additional guidelines apply:</p>

      <h3>6.1 Proper Usage</h3>
      <ul>
        <li><strong>Correct Form:</strong> Always write as "Buy-Lingual™ AI-Agents" with hyphen and capitalization</li>
        <li><strong>Trademark Symbol:</strong> Include ™ symbol on first or prominent use</li>
        <li><strong>Descriptive Use:</strong> Use as an adjective: "Buy-Lingual AI-Agent technology" or "Buy-Lingual services"</li>
        <li><strong>Never Generic:</strong> Do not use "buy-lingual" (lowercase) as a generic term for multilingual AI</li>
      </ul>

      <h3>6.2 Prohibited Variations</h3>
      <p>Do NOT use any of the following:</p>
      <ul>
        <li>"Bi-Lingual AI" or "Bilingual AI" (without "Buy")</li>
        <li>"BuyLingual" (no hyphen)</li>
        <li>"Buy Lingual" (space instead of hyphen)</li>
        <li>"buy-lingual" (lowercase)</li>
        <li>"BL" or other abbreviations</li>
      </ul>

      <h3>6.3 Competitive Use</h3>
      <p>Competitors and third parties may NOT:</p>
      <ul>
        <li>Use "Buy-Lingual" to describe their own multilingual AI products</li>
        <li>Advertise on the keyword "Buy-Lingual" in search campaigns</li>
        <li>Create derivative marks based on "Buy-Lingual"</li>
        <li>Suggest their products are "Buy-Lingual-compatible" without authorization</li>
      </ul>
    </section>

    <!-- 7. REQUESTING PERMISSION -->
    <section class="trademark-section">
      <h2>7. Requesting Permission to Use OrenGen Trademarks</h2>
      <p>If you wish to use OrenGen Trademarks in a manner not expressly permitted by this policy, you must obtain prior written permission from OrenGen.</p>

      <h3>7.1 How to Request Permission</h3>
      <p>Submit a written request to <a href="mailto:support@orengen.io">support@orengen.io</a> with subject line "Trademark Use Request" including:</p>
      <ul>
        <li>Your full legal name or company name</li>
        <li>Contact information (email, phone, address)</li>
        <li>Detailed description of intended use</li>
        <li>Specific marks you wish to use</li>
        <li>Mock-ups or examples of proposed usage</li>
        <li>Duration of intended use</li>
        <li>Geographic scope of use</li>
        <li>Media or channels where marks will appear</li>
      </ul>

      <h3>7.2 Review Process</h3>
      <ul>
        <li>OrenGen will review requests within 15-30 business days</li>
        <li>We may request additional information or modifications</li>
        <li>Approval is at OrenGen's sole discretion</li>
        <li>We may impose conditions, restrictions, or quality control requirements</li>
        <li>Permission may be revoked at any time</li>
      </ul>

      <h3>7.3 Licensing Agreements</h3>
      <p>For ongoing or commercial use of OrenGen Trademarks, we may require a formal trademark license agreement that includes:</p>
      <ul>
        <li>Scope and duration of license</li>
        <li>Quality control standards</li>
        <li>Approval rights for materials</li>
        <li>Royalties or fees (if applicable)</li>
        <li>Termination provisions</li>
        <li>Indemnification and liability terms</li>
      </ul>
    </section>

    <!-- 8. ENFORCEMENT -->
    <section class="trademark-section">
      <h2>8. Enforcement and Violations</h2>
      <p>OrenGen actively monitors and enforces our trademark rights to protect our brand and prevent consumer confusion.</p>

      <h3>8.1 Our Enforcement Rights</h3>
      <p>If you violate this Trademark Policy or infringe our trademark rights, OrenGen may:</p>
      <ul>
        <li>Send a cease-and-desist letter demanding immediate cessation of infringing use</li>
        <li>Revoke any permission or license previously granted</li>
        <li>Demand destruction or modification of infringing materials</li>
        <li>Pursue legal action including injunctive relief and monetary damages</li>
        <li>Report violations to domain registrars, hosting providers, or platform operators</li>
        <li>File complaints with trademark offices or governmental authorities</li>
        <li>Seek recovery of attorneys' fees and costs</li>
      </ul>

      <h3>8.2 Legal Consequences</h3>
      <p>Trademark infringement can result in:</p>
      <ul>
        <li><strong>Civil Liability:</strong> Damages, profits, and statutory damages up to $2,000,000 per mark under the Lanham Act</li>
        <li><strong>Injunctions:</strong> Court orders prohibiting future use of infringing marks</li>
        <li><strong>Destruction of Materials:</strong> Court-ordered destruction of infringing products, packaging, and materials</li>
        <li><strong>Criminal Penalties:</strong> In cases of counterfeiting, criminal fines and imprisonment may apply</li>
      </ul>

      <h3>8.3 Good Faith and Cooperation</h3>
      <p>We prefer to resolve trademark issues cooperatively. If you receive a notice from OrenGen regarding trademark use:</p>
      <ul>
        <li>Respond promptly and professionally</li>
        <li>Cease the objectionable use immediately</li>
        <li>Work with us to find an acceptable alternative</li>
        <li>Provide proof of compliance when requested</li>
      </ul>
      <p>Most issues can be resolved amicably without litigation if addressed quickly and in good faith.</p>
    </section>

    <!-- 9. REPORTING VIOLATIONS -->
    <section class="trademark-section">
      <h2>9. Reporting Trademark Violations</h2>
      <p>If you become aware of unauthorized use of OrenGen Trademarks or potential trademark infringement, please report it to us.</p>

      <h3>9.1 How to Report</h3>
      <p>Email <a href="mailto:support@orengen.io">support@orengen.io</a> with subject line "Trademark Violation Report" and include:</p>
      <ul>
        <li>Description of the infringing use</li>
        <li>URL or location where infringement appears</li>
        <li>Screenshots or documentation of the violation</li>
        <li>Contact information of the infringing party (if known)</li>
        <li>Any other relevant information</li>
      </ul>

      <h3>9.2 Our Response</h3>
      <ul>
        <li>We will investigate reported violations</li>
        <li>We may request additional information from you</li>
        <li>We will take appropriate action based on our assessment</li>
        <li>We may not disclose specific enforcement actions taken</li>
      </ul>
    </section>

    <!-- 10. CHANGES TO POLICY -->
    <section class="trademark-section">
      <h2>10. Changes to This Trademark Policy</h2>
      <p>OrenGen reserves the right to modify this Trademark Policy at any time. Changes will be effective immediately upon posting to our website.</p>

      <h3>10.1 Notification</h3>
      <ul>
        <li>The "Last Updated" date at the top of this page will reflect changes</li>
        <li>Material changes may be communicated via email or website notice</li>
        <li>Continued use of OrenGen Trademarks after changes constitutes acceptance</li>
      </ul>

      <h3>10.2 Ongoing Compliance</h3>
      <p>You are responsible for regularly reviewing this policy to ensure compliance with current guidelines. Previous permission or licenses remain subject to the current version of this policy unless otherwise specified in writing.</p>
    </section>

    <!-- WARNING BOX -->
    <div class="warning-box">
      <h3>⚠️ Important Legal Notice</h3>
      <p><strong>Unauthorized use of OrenGen Trademarks is prohibited and may result in legal action.</strong> This policy does not grant any license or permission to use OrenGen Trademarks except as explicitly stated. All rights not expressly granted are reserved by OrenGen Worldwide LLC.</p>
      <p>Failure to comply with this Trademark Policy may result in immediate termination of any permission or license, cessation of your use of OrenGen services, and legal action including claims for trademark infringement, unfair competition, and dilution.</p>
    </div>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Trademark Inquiries and Permissions</h3>
      <p>For questions about this Trademark Policy or to request permission to use OrenGen Trademarks:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "Trademark Inquiry" or "Trademark Use Request"<br>
        <strong>Mail:</strong> OrenGen Worldwide LLC<br>
        Attn: Trademark Counsel<br>
        1812 Open Range Drive<br>
        Mansfield, Texas 76063
      </p>
      <p><strong>Response Time:</strong> Trademark inquiries are typically reviewed within 15-30 business days.</p>
    </div>

    <div class="highlight-box">
      <p><strong>Trademark Attribution:</strong> OrenGen™, Buy-Lingual™ AI-Agents, and "Built to Disrupt. Designed to Deliver."™ are trademarks of OrenGen Worldwide LLC. All other trademarks, service marks, and trade names referenced on this website are the property of their respective owners.</p>
    </div>

  </div>
` }} />
  );
}
