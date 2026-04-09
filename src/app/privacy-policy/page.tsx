import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Privacy Policy — OrenGen Worldwide",
  description: "How OrenGen Worldwide collects, uses, and protects your personal information.",
}

const html = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Roboto:wght@300;400;500;600;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

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

    .privacy-section { margin-bottom: 40px; }
    .privacy-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 800;
      color: #0B1D3A;
      margin-bottom: 16px;
      margin-top: 40px;
      padding-left: 16px;
      border-left: 4px solid #CC5500;
    }
    .privacy-section h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #0F2847;
      margin-bottom: 12px;
      margin-top: 24px;
    }
    .privacy-section p {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 16px;
    }
    .privacy-section ul, .privacy-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }
    .privacy-section li {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 8px;
    }
    .privacy-section li::marker {
      color: #CC5500;
    }
    .privacy-section strong {
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

.table-wrapper {
  overflow-x: auto;
  margin: 24px 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
}
th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #E5E7EB;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #374151;
  vertical-align: top;
}
th {
  background: #F0F4FA;
  color: #0B1D3A;
  font-weight: 600;
}

    @media (max-width: 768px) {
      .page-header { padding: 100px 20px 40px; }
      .content-wrapper { padding: 32px 16px 60px; }
      .privacy-section h2 { font-size: 20px; }
      .privacy-section h3 { font-size: 16px; }
  table { font-size: 12px; }
  th, td { padding: 8px; }
    }
  </style>

<!-- HEADER -->
  <header class="page-header">
    <h1>Privacy <span class="orange">Policy</span></h1>
    <p>How we collect, use, protect, and respect your personal information.</p>
    <p class="meta">Last Updated: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Your Privacy Matters:</strong> OrenGen Worldwide LLC is committed to protecting your privacy and ensuring transparency in how we handle your personal information. This Privacy Policy explains our data practices in compliance with GDPR, CCPA, and other applicable privacy laws.</p>
    </div>

    <!-- 1. INTRODUCTION -->
    <section class="privacy-section">
      <h2>1. Introduction and Scope</h2>
      <p>This Privacy Policy describes how OrenGen Worldwide LLC ("OrenGen," "we," "us," or "our") collects, uses, discloses, and protects personal information when you:</p>
      <ul>
        <li>Visit our website at <a href="https://orengen.io">https://orengen.io</a></li>
        <li>Use our AI-powered automation systems and services</li>
        <li>Interact with our AI agents, chatbots, or communication systems</li>
        <li>Engage with our marketing, sales, or support teams</li>
        <li>Subscribe to our newsletters or communications</li>
        <li>Participate in webinars, events, or training sessions</li>
      </ul>
      <p>This Privacy Policy applies to all personal information collected through our services, websites, applications, and communications, regardless of how you access them.</p>
    </section>

    <!-- 2. COMPANY INFORMATION -->
    <section class="privacy-section">
      <h2>2. Data Controller Information</h2>
      <p><strong>Legal Entity:</strong> OrenGen Worldwide LLC<br>
      <strong>Address:</strong> 1812 Open Range Drive, Mansfield, Texas 76063<br>
      <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
      <strong>Data Protection Officer:</strong> Available upon request at <a href="mailto:support@orengen.io">support@orengen.io</a></p>
      <p>For residents of the European Economic Area (EEA), United Kingdom, or Switzerland, OrenGen acts as the data controller for personal information collected through our services.</p>
    </section>

    <!-- 3. INFORMATION WE COLLECT -->
    <section class="privacy-section">
      <h2>3. Information We Collect</h2>
      
      <h3>3.1 Information You Provide Directly</h3>
      <p>We collect information you voluntarily provide when you:</p>
      <ul>
        <li><strong>Create an Account:</strong> Name, email address, company name, job title, phone number, billing address, payment information</li>
        <li><strong>Use Our Services:</strong> Communications content, customer data, contact lists, files uploaded to our systems</li>
        <li><strong>Contact Us:</strong> Support inquiries, feedback, survey responses, event registrations</li>
        <li><strong>Subscribe:</strong> Email address and communication preferences</li>
        <li><strong>Make Purchases:</strong> Billing information, payment method details (processed by secure third-party providers)</li>
      </ul>

      <h3>3.2 Information Collected Automatically</h3>
      <p>When you access our services, we automatically collect:</p>
      <ul>
        <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers</li>
        <li><strong>Usage Data:</strong> Pages viewed, features accessed, time spent on pages, click patterns, navigation paths</li>
        <li><strong>Location Data:</strong> General geographic location based on IP address (not precise GPS coordinates)</li>
        <li><strong>Cookies and Tracking:</strong> Session cookies, persistent cookies, web beacons, analytics data (see Section 9)</li>
        <li><strong>Log Data:</strong> Server logs, error reports, system diagnostics, API calls</li>
      </ul>

      <h3>3.3 Information from Third Parties</h3>
      <p>We may receive information about you from:</p>
      <ul>
        <li><strong>Business Partners:</strong> Referral partners, affiliate marketers, integration partners</li>
        <li><strong>Data Providers:</strong> Business intelligence services, contact verification services, lead enrichment tools</li>
        <li><strong>Public Sources:</strong> Publicly available business information, social media profiles (when relevant to business relationships)</li>
        <li><strong>Social Media Platforms:</strong> If you choose to connect your social accounts or interact with our social media</li>
      </ul>

      <h3>3.4 AI System Interactions</h3>
      <p>When you interact with our AI agents and automated systems, we collect:</p>
      <ul>
        <li>Conversation transcripts and chat logs</li>
        <li>Voice recordings (if using voice-enabled AI services)</li>
        <li>User preferences and interaction patterns</li>
        <li>Feedback on AI responses and performance metrics</li>
      </ul>
    </section>

    <!-- 4. HOW WE USE YOUR INFORMATION -->
    <section class="privacy-section">
      <h2>4. How We Use Your Information</h2>
      <p>We use collected information for the following purposes:</p>

      <h3>4.1 Service Delivery and Operations</h3>
      <ul>
        <li>Provide, maintain, and improve our AI-powered services</li>
        <li>Process transactions and manage subscriptions</li>
        <li>Authenticate users and prevent unauthorized access</li>
        <li>Deliver customer support and respond to inquiries</li>
        <li>Train and optimize AI models for better performance</li>
      </ul>

      <h3>4.2 Communication</h3>
      <ul>
        <li>Send service notifications, updates, and important announcements</li>
        <li>Provide technical support and troubleshooting assistance</li>
        <li>Send marketing communications (with your consent where required)</li>
        <li>Conduct surveys and gather feedback</li>
      </ul>

      <h3>4.3 Business Operations</h3>
      <ul>
        <li>Analyze usage patterns to improve service quality</li>
        <li>Develop new features and services</li>
        <li>Conduct internal research and analytics</li>
        <li>Ensure security and prevent fraud</li>
        <li>Comply with legal obligations and enforce our terms</li>
      </ul>

      <h3>4.4 Marketing and Personalization</h3>
      <ul>
        <li>Personalize your experience and content</li>
        <li>Recommend relevant features or services</li>
        <li>Deliver targeted advertising (where permitted)</li>
        <li>Measure marketing campaign effectiveness</li>
      </ul>

      <h3>4.5 Legal Basis for Processing (GDPR)</h3>
      <p>For EEA, UK, and Swiss residents, we process personal data based on:</p>
      <ul>
        <li><strong>Contract Performance:</strong> Processing necessary to provide services you've requested</li>
        <li><strong>Legitimate Interests:</strong> Business operations, fraud prevention, service improvement</li>
        <li><strong>Legal Obligations:</strong> Compliance with applicable laws and regulations</li>
        <li><strong>Consent:</strong> Marketing communications and optional data processing (you may withdraw consent anytime)</li>
      </ul>
    </section>

    <!-- 5. DATA SHARING AND DISCLOSURE -->
    <section class="privacy-section">
      <h2>5. How We Share Your Information</h2>
      <p>We do not sell your personal information. We may share information with:</p>

      <h3>5.1 Service Providers</h3>
      <p>Third-party vendors who perform services on our behalf:</p>
      <ul>
        <li>Cloud hosting and infrastructure providers (AWS, Google Cloud, Cloudflare)</li>
        <li>Payment processors (Stripe, PayPal)</li>
        <li>Email delivery services (SendGrid, Amazon SES)</li>
        <li>Analytics platforms (Google Analytics, Mixpanel)</li>
        <li>Customer support tools (Zendesk, Intercom)</li>
        <li>CRM and marketing automation platforms</li>
      </ul>
      <p>These providers are contractually obligated to protect your data and use it only for specified purposes.</p>

      <h3>5.2 Business Partners</h3>
      <ul>
        <li>Integration partners when you connect third-party services</li>
        <li>Affiliate or referral partners (with your consent)</li>
        <li>White-label resellers (for their client service delivery)</li>
      </ul>

      <h3>5.3 Legal and Compliance</h3>
      <p>We may disclose information when required by law or to:</p>
      <ul>
        <li>Comply with legal processes, court orders, or government requests</li>
        <li>Enforce our Terms and Conditions</li>
        <li>Protect our rights, property, or safety</li>
        <li>Detect, prevent, or address fraud and security issues</li>
        <li>Protect the rights and safety of our users or the public</li>
      </ul>

      <h3>5.4 Business Transfers</h3>
      <p>In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the acquiring entity. You will be notified of any such change.</p>

      <h3>5.5 With Your Consent</h3>
      <p>We may share information with third parties when you provide explicit consent or direct us to do so.</p>
    </section>

    <!-- 6. DATA RETENTION -->
    <section class="privacy-section">
      <h2>6. Data Retention</h2>
      <p>We retain personal information for as long as necessary to:</p>
      <ul>
        <li>Provide services and maintain your account</li>
        <li>Comply with legal, tax, and accounting obligations (typically 7 years)</li>
        <li>Resolve disputes and enforce agreements</li>
        <li>Maintain business records and analytics</li>
      </ul>

      <h3>Retention Periods by Data Type:</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Active account data</td>
              <td>Duration of account plus 90 days</td>
            </tr>
            <tr>
              <td>Billing and transaction records</td>
              <td>7 years (tax/legal requirement)</td>
            </tr>
            <tr>
              <td>Marketing communications</td>
              <td>Until unsubscribe + 30 days</td>
            </tr>
            <tr>
              <td>Support tickets and communications</td>
              <td>3 years from last interaction</td>
            </tr>
            <tr>
              <td>AI interaction logs</td>
              <td>90 days to 1 year (for training/improvement)</td>
            </tr>
            <tr>
              <td>Website analytics</td>
              <td>26 months (Google Analytics default)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Upon account deletion, we will delete or anonymize your personal data within 90 days, except where longer retention is required by law.</p>
    </section>

    <!-- 7. DATA SECURITY -->
    <section class="privacy-section">
      <h2>7. Data Security Measures</h2>
      <p>We implement industry-standard security measures to protect your information:</p>

      <h3>7.1 Technical Safeguards</h3>
      <ul>
        <li>Encryption of data in transit (TLS/SSL) and at rest (AES-256)</li>
        <li>Secure authentication and password hashing (bcrypt)</li>
        <li>Regular security audits and penetration testing</li>
        <li>Intrusion detection and prevention systems</li>
        <li>Firewall protection and DDoS mitigation</li>
      </ul>

      <h3>7.2 Administrative Safeguards</h3>
      <ul>
        <li>Employee background checks and security training</li>
        <li>Strict access controls and principle of least privilege</li>
        <li>Confidentiality agreements with all personnel</li>
        <li>Incident response and data breach notification procedures</li>
      </ul>

      <h3>7.3 Physical Safeguards</h3>
      <ul>
        <li>Data centers with 24/7 security monitoring</li>
        <li>Redundant infrastructure and backup systems</li>
        <li>Environmental controls and disaster recovery plans</li>
      </ul>

      <h3>7.4 Limitations</h3>
      <p>While we take reasonable measures to protect your data, no system is completely secure. We cannot guarantee absolute security against unauthorized access, hardware/software failures, or other factors beyond our control.</p>
    </section>

    <!-- 8. YOUR PRIVACY RIGHTS -->
    <section class="privacy-section">
      <h2>8. Your Privacy Rights</h2>
      
      <h3>8.1 Rights for All Users</h3>
      <ul>
        <li><strong>Access:</strong> Request a copy of personal information we hold about you</li>
        <li><strong>Correction:</strong> Update or correct inaccurate information</li>
        <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
        <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
        <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
      </ul>

      <h3>8.2 GDPR Rights (EEA, UK, Switzerland Residents)</h3>
      <p>If you are located in the European Economic Area, United Kingdom, or Switzerland, you have additional rights:</p>
      <ul>
        <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
        <li><strong>Right to Restriction:</strong> Request limitation of processing in certain circumstances</li>
        <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing at any time</li>
        <li><strong>Right to Lodge Complaint:</strong> File a complaint with your local data protection authority</li>
      </ul>

      <h3>8.3 CCPA/CPRA Rights (California Residents)</h3>
      <p>California residents have the right to:</p>
      <ul>
        <li>Know what personal information is collected, used, shared, or sold</li>
        <li>Delete personal information (subject to exceptions)</li>
        <li>Opt-out of the sale of personal information (we do not sell personal information)</li>
        <li>Non-discrimination for exercising privacy rights</li>
        <li>Correct inaccurate personal information</li>
        <li>Limit use and disclosure of sensitive personal information</li>
      </ul>

      <h3>8.4 How to Exercise Your Rights</h3>
      <p>To exercise any of these rights, contact us at:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a> with subject line "Privacy Rights Request"</li>
        <li><strong>Include:</strong> Your name, email address, specific request, and verification information</li>
      </ul>
      <p>We will respond to verified requests within 30 days (45 days for complex requests). We may require additional information to verify your identity before processing requests.</p>
    </section>

    <!-- 9. COOKIES AND TRACKING -->
    <section class="privacy-section">
      <h2>9. Cookies and Tracking Technologies</h2>
      
      <h3>9.1 What Are Cookies?</h3>
      <p>Cookies are small text files stored on your device that help us recognize your browser and remember information about your visit.</p>

      <h3>9.2 Types of Cookies We Use</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Cookie Type</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Essential Cookies</strong></td>
              <td>Required for website functionality, authentication, security</td>
              <td>Session or up to 1 year</td>
            </tr>
            <tr>
              <td><strong>Performance Cookies</strong></td>
              <td>Collect anonymous usage statistics, error reporting</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td><strong>Functional Cookies</strong></td>
              <td>Remember preferences, language settings, customization</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td><strong>Marketing Cookies</strong></td>
              <td>Track advertising effectiveness, deliver targeted ads</td>
              <td>Up to 2 years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>9.3 Third-Party Tracking</h3>
      <p>We use third-party analytics and advertising services:</p>
      <ul>
        <li><strong>Google Analytics:</strong> Website usage analytics (<a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>)</li>
        <li><strong>Google Ads:</strong> Advertising and remarketing (<a href="https://policies.google.com/technologies/ads" target="_blank">Opt-Out</a>)</li>
        <li><strong>Facebook Pixel:</strong> Social media advertising (<a href="https://www.facebook.com/privacy/explanation" target="_blank">Privacy Policy</a>)</li>
        <li><strong>LinkedIn Insight Tag:</strong> B2B advertising (<a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">Privacy Policy</a>)</li>
      </ul>

      <h3>9.4 Managing Cookies</h3>
      <p>You can control cookies through:</p>
      <ul>
        <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
        <li><strong>Opt-Out Tools:</strong> <a href="http://optout.aboutads.info/" target="_blank">DAA Opt-Out</a> | <a href="http://optout.networkadvertising.org/" target="_blank">NAI Opt-Out</a></li>
        <li><strong>Do Not Track:</strong> We honor DNT browser signals where technically feasible</li>
      </ul>
      <p><strong>Note:</strong> Disabling essential cookies may limit website functionality.</p>
    </section>

    <!-- 10. INTERNATIONAL DATA TRANSFERS -->
    <section class="privacy-section">
      <h2>10. International Data Transfers</h2>
      <p>OrenGen is based in the United States. If you access our services from outside the U.S., your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate.</p>
      
      <h3>10.1 Safeguards for International Transfers</h3>
      <p>For transfers from the EEA, UK, or Switzerland, we rely on:</p>
      <ul>
        <li>Standard Contractual Clauses approved by the European Commission</li>
        <li>Adequacy decisions for certain jurisdictions</li>
        <li>Your explicit consent where required</li>
      </ul>

      <h3>10.2 Data Protection Standards</h3>
      <p>We ensure that data transferred internationally receives protections comparable to those required under GDPR and other applicable laws.</p>
    </section>

    <!-- 11. CHILDREN'S PRIVACY -->
    <section class="privacy-section">
      <h2>11. Children's Privacy</h2>
      <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
      <p>If you believe we have inadvertently collected information from a child under 18, please contact us immediately at <a href="mailto:support@orengen.io">support@orengen.io</a>, and we will promptly delete such information.</p>
      <p><strong>COPPA Compliance:</strong> We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect data from children under 13.</p>
    </section>

    <!-- 12. DO NOT SELL MY INFORMATION -->
    <section class="privacy-section">
      <h2>12. Do Not Sell My Personal Information (CCPA/CPRA)</h2>
      <p><strong>We do not sell your personal information.</strong></p>
      <p>OrenGen does not sell, rent, or trade personal information to third parties for monetary or other valuable consideration. We only share data with service providers, as described in Section 5, under strict contractual obligations.</p>
      <p>California residents: If you have questions about how we handle your information, contact us at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </section>

    <!-- 13. THIRD-PARTY LINKS -->
    <section class="privacy-section">
      <h2>13. Third-Party Websites and Services</h2>
      <p>Our website and services may contain links to third-party websites, applications, or services that are not operated by OrenGen. This Privacy Policy does not apply to third-party sites.</p>
      <p>We are not responsible for the privacy practices or content of external sites. We encourage you to review the privacy policies of any third-party services you access.</p>
    </section>

    <!-- 14. CALIFORNIA SHINE THE LIGHT -->
    <section class="privacy-section">
      <h2>14. California "Shine the Light" Law</h2>
      <p>California Civil Code Section 1798.83 allows California residents to request information about disclosure of personal information to third parties for direct marketing purposes.</p>
      <p>Because we do not share personal information with third parties for their direct marketing purposes, we are exempt from this requirement. However, you may still contact us with questions at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </section>

    <!-- 15. CHANGES TO PRIVACY POLICY -->
    <section class="privacy-section">
      <h2>15. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>
      
      <h3>15.1 Notification of Changes</h3>
      <p>Material changes will be communicated via:</p>
      <ul>
        <li>Email notification to registered users</li>
        <li>Prominent notice on our website</li>
        <li>In-app notifications</li>
      </ul>

      <h3>15.2 Effective Date</h3>
      <p>The "Last Updated" date at the top of this policy indicates when it was last revised. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.</p>

      <h3>15.3 Previous Versions</h3>
      <p>Previous versions of this Privacy Policy are available upon request at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </section>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Contact Us About Privacy</h3>
      <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "Privacy Inquiry" or "Privacy Rights Request"<br>
        <strong>Mail:</strong> OrenGen Worldwide LLC, Attn: Privacy Officer<br>
        1812 Open Range Drive, Mansfield, Texas 76063
      </p>
      <p><strong>Response Time:</strong> We respond to privacy inquiries within 30 days.</p>
      <p><strong>EU Representative:</strong> For GDPR-related inquiries from the EEA, UK, or Switzerland, contact us at the email above with "GDPR Request" in the subject line.</p>
    </div>

    <div class="highlight-box">
      <p><strong>Your Trust Matters:</strong> Protecting your privacy is fundamental to how we operate. If you have any questions or concerns about our privacy practices, we're here to help. Contact us at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </div>

  </div>
`

export default function Page() {
  return (
    <div className="pt-24 pb-12" dangerouslySetInnerHTML={{ __html: `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Roboto:wght@300;400;500;600;700&display=swap');

    * { margin: 0; padding: 0; box-sizing: border-box; }

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

    .privacy-section { margin-bottom: 40px; }
    .privacy-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 800;
      color: #0B1D3A;
      margin-bottom: 16px;
      margin-top: 40px;
      padding-left: 16px;
      border-left: 4px solid #CC5500;
    }
    .privacy-section h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #0F2847;
      margin-bottom: 12px;
      margin-top: 24px;
    }
    .privacy-section p {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 16px;
    }
    .privacy-section ul, .privacy-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }
    .privacy-section li {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 8px;
    }
    .privacy-section li::marker {
      color: #CC5500;
    }
    .privacy-section strong {
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

.table-wrapper {
  overflow-x: auto;
  margin: 24px 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
}
th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #E5E7EB;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #374151;
  vertical-align: top;
}
th {
  background: #F0F4FA;
  color: #0B1D3A;
  font-weight: 600;
}

    @media (max-width: 768px) {
      .page-header { padding: 100px 20px 40px; }
      .content-wrapper { padding: 32px 16px 60px; }
      .privacy-section h2 { font-size: 20px; }
      .privacy-section h3 { font-size: 16px; }
  table { font-size: 12px; }
  th, td { padding: 8px; }
    }
  </style>

<!-- HEADER -->
  <header class="page-header">
    <h1>Privacy <span class="orange">Policy</span></h1>
    <p>How we collect, use, protect, and respect your personal information.</p>
    <p class="meta">Last Updated: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Your Privacy Matters:</strong> OrenGen Worldwide LLC is committed to protecting your privacy and ensuring transparency in how we handle your personal information. This Privacy Policy explains our data practices in compliance with GDPR, CCPA, and other applicable privacy laws.</p>
    </div>

    <!-- 1. INTRODUCTION -->
    <section class="privacy-section">
      <h2>1. Introduction and Scope</h2>
      <p>This Privacy Policy describes how OrenGen Worldwide LLC ("OrenGen," "we," "us," or "our") collects, uses, discloses, and protects personal information when you:</p>
      <ul>
        <li>Visit our website at <a href="https://orengen.io">https://orengen.io</a></li>
        <li>Use our AI-powered automation systems and services</li>
        <li>Interact with our AI agents, chatbots, or communication systems</li>
        <li>Engage with our marketing, sales, or support teams</li>
        <li>Subscribe to our newsletters or communications</li>
        <li>Participate in webinars, events, or training sessions</li>
      </ul>
      <p>This Privacy Policy applies to all personal information collected through our services, websites, applications, and communications, regardless of how you access them.</p>
    </section>

    <!-- 2. COMPANY INFORMATION -->
    <section class="privacy-section">
      <h2>2. Data Controller Information</h2>
      <p><strong>Legal Entity:</strong> OrenGen Worldwide LLC<br>
      <strong>Address:</strong> 1812 Open Range Drive, Mansfield, Texas 76063<br>
      <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
      <strong>Data Protection Officer:</strong> Available upon request at <a href="mailto:support@orengen.io">support@orengen.io</a></p>
      <p>For residents of the European Economic Area (EEA), United Kingdom, or Switzerland, OrenGen acts as the data controller for personal information collected through our services.</p>
    </section>

    <!-- 3. INFORMATION WE COLLECT -->
    <section class="privacy-section">
      <h2>3. Information We Collect</h2>
      
      <h3>3.1 Information You Provide Directly</h3>
      <p>We collect information you voluntarily provide when you:</p>
      <ul>
        <li><strong>Create an Account:</strong> Name, email address, company name, job title, phone number, billing address, payment information</li>
        <li><strong>Use Our Services:</strong> Communications content, customer data, contact lists, files uploaded to our systems</li>
        <li><strong>Contact Us:</strong> Support inquiries, feedback, survey responses, event registrations</li>
        <li><strong>Subscribe:</strong> Email address and communication preferences</li>
        <li><strong>Make Purchases:</strong> Billing information, payment method details (processed by secure third-party providers)</li>
      </ul>

      <h3>3.2 Information Collected Automatically</h3>
      <p>When you access our services, we automatically collect:</p>
      <ul>
        <li><strong>Device Information:</strong> IP address, browser type and version, operating system, device identifiers</li>
        <li><strong>Usage Data:</strong> Pages viewed, features accessed, time spent on pages, click patterns, navigation paths</li>
        <li><strong>Location Data:</strong> General geographic location based on IP address (not precise GPS coordinates)</li>
        <li><strong>Cookies and Tracking:</strong> Session cookies, persistent cookies, web beacons, analytics data (see Section 9)</li>
        <li><strong>Log Data:</strong> Server logs, error reports, system diagnostics, API calls</li>
      </ul>

      <h3>3.3 Information from Third Parties</h3>
      <p>We may receive information about you from:</p>
      <ul>
        <li><strong>Business Partners:</strong> Referral partners, affiliate marketers, integration partners</li>
        <li><strong>Data Providers:</strong> Business intelligence services, contact verification services, lead enrichment tools</li>
        <li><strong>Public Sources:</strong> Publicly available business information, social media profiles (when relevant to business relationships)</li>
        <li><strong>Social Media Platforms:</strong> If you choose to connect your social accounts or interact with our social media</li>
      </ul>

      <h3>3.4 AI System Interactions</h3>
      <p>When you interact with our AI agents and automated systems, we collect:</p>
      <ul>
        <li>Conversation transcripts and chat logs</li>
        <li>Voice recordings (if using voice-enabled AI services)</li>
        <li>User preferences and interaction patterns</li>
        <li>Feedback on AI responses and performance metrics</li>
      </ul>
    </section>

    <!-- 4. HOW WE USE YOUR INFORMATION -->
    <section class="privacy-section">
      <h2>4. How We Use Your Information</h2>
      <p>We use collected information for the following purposes:</p>

      <h3>4.1 Service Delivery and Operations</h3>
      <ul>
        <li>Provide, maintain, and improve our AI-powered services</li>
        <li>Process transactions and manage subscriptions</li>
        <li>Authenticate users and prevent unauthorized access</li>
        <li>Deliver customer support and respond to inquiries</li>
        <li>Train and optimize AI models for better performance</li>
      </ul>

      <h3>4.2 Communication</h3>
      <ul>
        <li>Send service notifications, updates, and important announcements</li>
        <li>Provide technical support and troubleshooting assistance</li>
        <li>Send marketing communications (with your consent where required)</li>
        <li>Conduct surveys and gather feedback</li>
      </ul>

      <h3>4.3 Business Operations</h3>
      <ul>
        <li>Analyze usage patterns to improve service quality</li>
        <li>Develop new features and services</li>
        <li>Conduct internal research and analytics</li>
        <li>Ensure security and prevent fraud</li>
        <li>Comply with legal obligations and enforce our terms</li>
      </ul>

      <h3>4.4 Marketing and Personalization</h3>
      <ul>
        <li>Personalize your experience and content</li>
        <li>Recommend relevant features or services</li>
        <li>Deliver targeted advertising (where permitted)</li>
        <li>Measure marketing campaign effectiveness</li>
      </ul>

      <h3>4.5 Legal Basis for Processing (GDPR)</h3>
      <p>For EEA, UK, and Swiss residents, we process personal data based on:</p>
      <ul>
        <li><strong>Contract Performance:</strong> Processing necessary to provide services you've requested</li>
        <li><strong>Legitimate Interests:</strong> Business operations, fraud prevention, service improvement</li>
        <li><strong>Legal Obligations:</strong> Compliance with applicable laws and regulations</li>
        <li><strong>Consent:</strong> Marketing communications and optional data processing (you may withdraw consent anytime)</li>
      </ul>
    </section>

    <!-- 5. DATA SHARING AND DISCLOSURE -->
    <section class="privacy-section">
      <h2>5. How We Share Your Information</h2>
      <p>We do not sell your personal information. We may share information with:</p>

      <h3>5.1 Service Providers</h3>
      <p>Third-party vendors who perform services on our behalf:</p>
      <ul>
        <li>Cloud hosting and infrastructure providers (AWS, Google Cloud, Cloudflare)</li>
        <li>Payment processors (Stripe, PayPal)</li>
        <li>Email delivery services (SendGrid, Amazon SES)</li>
        <li>Analytics platforms (Google Analytics, Mixpanel)</li>
        <li>Customer support tools (Zendesk, Intercom)</li>
        <li>CRM and marketing automation platforms</li>
      </ul>
      <p>These providers are contractually obligated to protect your data and use it only for specified purposes.</p>

      <h3>5.2 Business Partners</h3>
      <ul>
        <li>Integration partners when you connect third-party services</li>
        <li>Affiliate or referral partners (with your consent)</li>
        <li>White-label resellers (for their client service delivery)</li>
      </ul>

      <h3>5.3 Legal and Compliance</h3>
      <p>We may disclose information when required by law or to:</p>
      <ul>
        <li>Comply with legal processes, court orders, or government requests</li>
        <li>Enforce our Terms and Conditions</li>
        <li>Protect our rights, property, or safety</li>
        <li>Detect, prevent, or address fraud and security issues</li>
        <li>Protect the rights and safety of our users or the public</li>
      </ul>

      <h3>5.4 Business Transfers</h3>
      <p>In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred to the acquiring entity. You will be notified of any such change.</p>

      <h3>5.5 With Your Consent</h3>
      <p>We may share information with third parties when you provide explicit consent or direct us to do so.</p>
    </section>

    <!-- 6. DATA RETENTION -->
    <section class="privacy-section">
      <h2>6. Data Retention</h2>
      <p>We retain personal information for as long as necessary to:</p>
      <ul>
        <li>Provide services and maintain your account</li>
        <li>Comply with legal, tax, and accounting obligations (typically 7 years)</li>
        <li>Resolve disputes and enforce agreements</li>
        <li>Maintain business records and analytics</li>
      </ul>

      <h3>Retention Periods by Data Type:</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Data Type</th>
              <th>Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Active account data</td>
              <td>Duration of account plus 90 days</td>
            </tr>
            <tr>
              <td>Billing and transaction records</td>
              <td>7 years (tax/legal requirement)</td>
            </tr>
            <tr>
              <td>Marketing communications</td>
              <td>Until unsubscribe + 30 days</td>
            </tr>
            <tr>
              <td>Support tickets and communications</td>
              <td>3 years from last interaction</td>
            </tr>
            <tr>
              <td>AI interaction logs</td>
              <td>90 days to 1 year (for training/improvement)</td>
            </tr>
            <tr>
              <td>Website analytics</td>
              <td>26 months (Google Analytics default)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Upon account deletion, we will delete or anonymize your personal data within 90 days, except where longer retention is required by law.</p>
    </section>

    <!-- 7. DATA SECURITY -->
    <section class="privacy-section">
      <h2>7. Data Security Measures</h2>
      <p>We implement industry-standard security measures to protect your information:</p>

      <h3>7.1 Technical Safeguards</h3>
      <ul>
        <li>Encryption of data in transit (TLS/SSL) and at rest (AES-256)</li>
        <li>Secure authentication and password hashing (bcrypt)</li>
        <li>Regular security audits and penetration testing</li>
        <li>Intrusion detection and prevention systems</li>
        <li>Firewall protection and DDoS mitigation</li>
      </ul>

      <h3>7.2 Administrative Safeguards</h3>
      <ul>
        <li>Employee background checks and security training</li>
        <li>Strict access controls and principle of least privilege</li>
        <li>Confidentiality agreements with all personnel</li>
        <li>Incident response and data breach notification procedures</li>
      </ul>

      <h3>7.3 Physical Safeguards</h3>
      <ul>
        <li>Data centers with 24/7 security monitoring</li>
        <li>Redundant infrastructure and backup systems</li>
        <li>Environmental controls and disaster recovery plans</li>
      </ul>

      <h3>7.4 Limitations</h3>
      <p>While we take reasonable measures to protect your data, no system is completely secure. We cannot guarantee absolute security against unauthorized access, hardware/software failures, or other factors beyond our control.</p>
    </section>

    <!-- 8. YOUR PRIVACY RIGHTS -->
    <section class="privacy-section">
      <h2>8. Your Privacy Rights</h2>
      
      <h3>8.1 Rights for All Users</h3>
      <ul>
        <li><strong>Access:</strong> Request a copy of personal information we hold about you</li>
        <li><strong>Correction:</strong> Update or correct inaccurate information</li>
        <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
        <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
        <li><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
      </ul>

      <h3>8.2 GDPR Rights (EEA, UK, Switzerland Residents)</h3>
      <p>If you are located in the European Economic Area, United Kingdom, or Switzerland, you have additional rights:</p>
      <ul>
        <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
        <li><strong>Right to Restriction:</strong> Request limitation of processing in certain circumstances</li>
        <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing at any time</li>
        <li><strong>Right to Lodge Complaint:</strong> File a complaint with your local data protection authority</li>
      </ul>

      <h3>8.3 CCPA/CPRA Rights (California Residents)</h3>
      <p>California residents have the right to:</p>
      <ul>
        <li>Know what personal information is collected, used, shared, or sold</li>
        <li>Delete personal information (subject to exceptions)</li>
        <li>Opt-out of the sale of personal information (we do not sell personal information)</li>
        <li>Non-discrimination for exercising privacy rights</li>
        <li>Correct inaccurate personal information</li>
        <li>Limit use and disclosure of sensitive personal information</li>
      </ul>

      <h3>8.4 How to Exercise Your Rights</h3>
      <p>To exercise any of these rights, contact us at:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a> with subject line "Privacy Rights Request"</li>
        <li><strong>Include:</strong> Your name, email address, specific request, and verification information</li>
      </ul>
      <p>We will respond to verified requests within 30 days (45 days for complex requests). We may require additional information to verify your identity before processing requests.</p>
    </section>

    <!-- 9. COOKIES AND TRACKING -->
    <section class="privacy-section">
      <h2>9. Cookies and Tracking Technologies</h2>
      
      <h3>9.1 What Are Cookies?</h3>
      <p>Cookies are small text files stored on your device that help us recognize your browser and remember information about your visit.</p>

      <h3>9.2 Types of Cookies We Use</h3>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Cookie Type</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Essential Cookies</strong></td>
              <td>Required for website functionality, authentication, security</td>
              <td>Session or up to 1 year</td>
            </tr>
            <tr>
              <td><strong>Performance Cookies</strong></td>
              <td>Collect anonymous usage statistics, error reporting</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td><strong>Functional Cookies</strong></td>
              <td>Remember preferences, language settings, customization</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td><strong>Marketing Cookies</strong></td>
              <td>Track advertising effectiveness, deliver targeted ads</td>
              <td>Up to 2 years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>9.3 Third-Party Tracking</h3>
      <p>We use third-party analytics and advertising services:</p>
      <ul>
        <li><strong>Google Analytics:</strong> Website usage analytics (<a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>)</li>
        <li><strong>Google Ads:</strong> Advertising and remarketing (<a href="https://policies.google.com/technologies/ads" target="_blank">Opt-Out</a>)</li>
        <li><strong>Facebook Pixel:</strong> Social media advertising (<a href="https://www.facebook.com/privacy/explanation" target="_blank">Privacy Policy</a>)</li>
        <li><strong>LinkedIn Insight Tag:</strong> B2B advertising (<a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">Privacy Policy</a>)</li>
      </ul>

      <h3>9.4 Managing Cookies</h3>
      <p>You can control cookies through:</p>
      <ul>
        <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or delete cookies</li>
        <li><strong>Opt-Out Tools:</strong> <a href="http://optout.aboutads.info/" target="_blank">DAA Opt-Out</a> | <a href="http://optout.networkadvertising.org/" target="_blank">NAI Opt-Out</a></li>
        <li><strong>Do Not Track:</strong> We honor DNT browser signals where technically feasible</li>
      </ul>
      <p><strong>Note:</strong> Disabling essential cookies may limit website functionality.</p>
    </section>

    <!-- 10. INTERNATIONAL DATA TRANSFERS -->
    <section class="privacy-section">
      <h2>10. International Data Transfers</h2>
      <p>OrenGen is based in the United States. If you access our services from outside the U.S., your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate.</p>
      
      <h3>10.1 Safeguards for International Transfers</h3>
      <p>For transfers from the EEA, UK, or Switzerland, we rely on:</p>
      <ul>
        <li>Standard Contractual Clauses approved by the European Commission</li>
        <li>Adequacy decisions for certain jurisdictions</li>
        <li>Your explicit consent where required</li>
      </ul>

      <h3>10.2 Data Protection Standards</h3>
      <p>We ensure that data transferred internationally receives protections comparable to those required under GDPR and other applicable laws.</p>
    </section>

    <!-- 11. CHILDREN'S PRIVACY -->
    <section class="privacy-section">
      <h2>11. Children's Privacy</h2>
      <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
      <p>If you believe we have inadvertently collected information from a child under 18, please contact us immediately at <a href="mailto:support@orengen.io">support@orengen.io</a>, and we will promptly delete such information.</p>
      <p><strong>COPPA Compliance:</strong> We comply with the Children's Online Privacy Protection Act (COPPA) and do not knowingly collect data from children under 13.</p>
    </section>

    <!-- 12. DO NOT SELL MY INFORMATION -->
    <section class="privacy-section">
      <h2>12. Do Not Sell My Personal Information (CCPA/CPRA)</h2>
      <p><strong>We do not sell your personal information.</strong></p>
      <p>OrenGen does not sell, rent, or trade personal information to third parties for monetary or other valuable consideration. We only share data with service providers, as described in Section 5, under strict contractual obligations.</p>
      <p>California residents: If you have questions about how we handle your information, contact us at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </section>

    <!-- 13. THIRD-PARTY LINKS -->
    <section class="privacy-section">
      <h2>13. Third-Party Websites and Services</h2>
      <p>Our website and services may contain links to third-party websites, applications, or services that are not operated by OrenGen. This Privacy Policy does not apply to third-party sites.</p>
      <p>We are not responsible for the privacy practices or content of external sites. We encourage you to review the privacy policies of any third-party services you access.</p>
    </section>

    <!-- 14. CALIFORNIA SHINE THE LIGHT -->
    <section class="privacy-section">
      <h2>14. California "Shine the Light" Law</h2>
      <p>California Civil Code Section 1798.83 allows California residents to request information about disclosure of personal information to third parties for direct marketing purposes.</p>
      <p>Because we do not share personal information with third parties for their direct marketing purposes, we are exempt from this requirement. However, you may still contact us with questions at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </section>

    <!-- 15. CHANGES TO PRIVACY POLICY -->
    <section class="privacy-section">
      <h2>15. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.</p>
      
      <h3>15.1 Notification of Changes</h3>
      <p>Material changes will be communicated via:</p>
      <ul>
        <li>Email notification to registered users</li>
        <li>Prominent notice on our website</li>
        <li>In-app notifications</li>
      </ul>

      <h3>15.2 Effective Date</h3>
      <p>The "Last Updated" date at the top of this policy indicates when it was last revised. Your continued use of our services after changes become effective constitutes acceptance of the updated policy.</p>

      <h3>15.3 Previous Versions</h3>
      <p>Previous versions of this Privacy Policy are available upon request at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </section>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Contact Us About Privacy</h3>
      <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "Privacy Inquiry" or "Privacy Rights Request"<br>
        <strong>Mail:</strong> OrenGen Worldwide LLC, Attn: Privacy Officer<br>
        1812 Open Range Drive, Mansfield, Texas 76063
      </p>
      <p><strong>Response Time:</strong> We respond to privacy inquiries within 30 days.</p>
      <p><strong>EU Representative:</strong> For GDPR-related inquiries from the EEA, UK, or Switzerland, contact us at the email above with "GDPR Request" in the subject line.</p>
    </div>

    <div class="highlight-box">
      <p><strong>Your Trust Matters:</strong> Protecting your privacy is fundamental to how we operate. If you have any questions or concerns about our privacy practices, we're here to help. Contact us at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </div>

  </div>
` }} />
  );
}
