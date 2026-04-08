import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Terms & Conditions — OrenGen Worldwide",
  description: "Terms and conditions governing your use of OrenGen Worldwide services.",
}

const html = `
  <style>

    @import url('https://fonts.cdnfonts.com/css/canva-sans');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--background);
      color: var(--foreground);
      font-family: 'Canva Sans', sans-serif;
      line-height: 1.6;
    }

    /* HEADER SECTION - MATCHING INDUSTRIES STYLE */
    .page-header {
      padding: 80px 20px 60px;
      text-align: center;
      background: var(--background);
    }

    .page-header h1 {
      font-family: 'League Spartan', sans-serif;
      font-size: clamp(32px, 4vw, 48px);
      font-weight: 800;
      line-height: 1.2;
      margin: 0 0 16px 0;
      color: var(--foreground);
      letter-spacing: 0.02em;
    }

    .page-header h1 .orange {
      color: var(--oren-orange);
    }

    .page-header p {
      font-family: 'Canva Sans', sans-serif;
      font-size: clamp(14px, 2vw, 16px);
      color: rgba(255, 255, 255, 0.7);
      margin: 0 0 8px 0;
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .page-header .meta {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.5);
    }

    /* CONTENT SECTION */
    .content-wrapper {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px 80px;
    }

    .terms-section {
      margin-bottom: 40px;
    }

    .terms-section h2 {
      font-family: 'League Spartan', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--oren-orange);
      margin-bottom: 16px;
      margin-top: 40px;
    }

    .terms-section h3 {
      font-family: 'League Spartan', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: var(--foreground);
      margin-bottom: 12px;
      margin-top: 24px;
    }

    .terms-section p {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 16px;
    }

    .terms-section ul, .terms-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }

    .terms-section li {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 8px;
    }

    .terms-section strong {
      color: var(--foreground);
      font-weight: 600;
    }

    .highlight-box {
      background: rgba(204, 85, 0, 0.1);
      border-left: 4px solid var(--oren-orange);
      padding: 20px;
      margin: 24px 0;
      border-radius: 4px;
    }

    .highlight-box p {
      margin-bottom: 0;
    }

    .contact-info {
      background: rgba(0, 51, 102, 0.1);
      border: 1px solid rgba(0, 51, 102, 0.3);
      padding: 24px;
      margin: 40px 0;
      border-radius: 8px;
    }

    .contact-info h3 {
      margin-top: 0;
      color: #003366;
    }

    .contact-info p {
      margin-bottom: 8px;
    }

    a {
      color: var(--oren-orange);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .page-header {
        padding: 60px 20px 40px;
      }

      .content-wrapper {
        padding: 0 20px 60px;
      }

      .terms-section h2 {
        font-size: 20px;
      }

      .terms-section h3 {
        font-size: 16px;
      }
    }
  
  </style>

<!-- HEADER -->
  <header class="page-header">
    <h1>Terms and <span class="orange">Conditions</span></h1>
    <p>Legal agreement governing the use of OrenGen's AI-powered systems and services.</p>
    <p class="meta">Last Updated: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Important Notice:</strong> By accessing or using OrenGen Worldwide LLC's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, you must not use our services.</p>
    </div>

    <!-- 1. ACCEPTANCE OF TERMS -->
    <section class="terms-section">
      <h2>1. Acceptance of Terms</h2>
      <p>These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and OrenGen Worldwide LLC ("OrenGen," "we," "us," or "our") governing your access to and use of our AI-powered automation systems, software, applications, and related services (collectively, the "Services").</p>
      <p>By registering for, accessing, or using any of our Services, you agree to comply with and be bound by these Terms, our Privacy Policy, and any additional terms applicable to specific Services.</p>
    </section>

    <!-- 2. COMPANY INFORMATION -->
    <section class="terms-section">
      <h2>2. Company Information</h2>
      <p><strong>Legal Entity:</strong> OrenGen Worldwide LLC<br>
      <strong>Address:</strong> 1812 Open Range Drive, Mansfield, Texas 76063<br>
      <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
      <strong>Business Type:</strong> Certified Minority Business Enterprise (MBE)</p>
    </section>

    <!-- 3. SERVICES DESCRIPTION -->
    <section class="terms-section">
      <h2>3. Services Description</h2>
      <p>OrenGen provides intelligent automation and AI-powered systems designed to enhance business operations, including but not limited to:</p>
      <ul>
        <li><strong>Buy-Lingual™ AI Agents:</strong> Multilingual virtual employees and AI call agents that provide customer support, sales assistance, and automated communication services</li>
        <li><strong>CRM Systems:</strong> Customer relationship management platforms, including white-labeled solutions and custom integrations</li>
        <li><strong>Web Development:</strong> Website design, development, hosting, and maintenance services</li>
        <li><strong>Lead Generation:</strong> Automated lead acquisition, qualification, and management systems</li>
        <li><strong>Email Infrastructure:</strong> Large-scale email systems, authentication protocols, deliverability optimization, and bulk email services</li>
        <li><strong>Business Automation:</strong> Custom AI-powered workflow automation, process optimization, and intelligent system integrations</li>
      </ul>
      <p>Service specifications, features, and availability may vary based on your selected plan or custom agreement. We reserve the right to modify, update, or discontinue any Service with reasonable notice.</p>
    </section>

    <!-- 4. ELIGIBILITY -->
    <section class="terms-section">
      <h2>4. Eligibility and Account Requirements</h2>
      <h3>4.1 Age and Capacity</h3>
      <p>You must be at least 18 years of age and have the legal capacity to enter into binding contracts to use our Services. If you are accessing Services on behalf of a business entity, you represent and warrant that you have the authority to bind that entity to these Terms.</p>
      
      <h3>4.2 Account Registration</h3>
      <p>To access certain Services, you must create an account and provide accurate, current, and complete information. You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>Immediately notifying us of any unauthorized access or security breach</li>
        <li>Ensuring your account information remains accurate and up-to-date</li>
      </ul>

      <h3>4.3 Prohibited Use</h3>
      <p>You may not use our Services if:</p>
      <ul>
        <li>You have previously been suspended or banned from our Services</li>
        <li>You are located in a country subject to U.S. government embargo or designated as a "terrorist supporting" country</li>
        <li>You are listed on any U.S. government list of prohibited or restricted parties</li>
      </ul>
    </section>

    <!-- 5. ACCEPTABLE USE POLICY -->
    <section class="terms-section">
      <h2>5. Acceptable Use Policy</h2>
      <p>You agree not to use our Services to:</p>
      <ul>
        <li>Violate any applicable local, state, national, or international law or regulation</li>
        <li>Infringe upon intellectual property rights of OrenGen or third parties</li>
        <li>Transmit malicious code, viruses, malware, or any harmful technology</li>
        <li>Engage in spamming, phishing, or unsolicited bulk communications that violate CAN-SPAM Act, GDPR, or other applicable regulations</li>
        <li>Attempt to gain unauthorized access to our systems, networks, or other users' accounts</li>
        <li>Interfere with or disrupt the integrity or performance of our Services</li>
        <li>Harvest or collect information about other users without their consent</li>
        <li>Use our AI systems to generate harmful, illegal, discriminatory, or misleading content</li>
        <li>Resell, sublicense, or redistribute our Services without explicit written authorization</li>
        <li>Reverse engineer, decompile, or attempt to extract source code from our proprietary systems</li>
      </ul>
    </section>

    <!-- 6. PAYMENT TERMS -->
    <section class="terms-section">
      <h2>6. Payment Terms and Billing</h2>
      <h3>6.1 Fees and Charges</h3>
      <p>You agree to pay all fees associated with your selected Services as specified in your service agreement or pricing plan. All fees are in U.S. Dollars (USD) unless otherwise stated.</p>

      <h3>6.2 Billing Cycles</h3>
      <p>Services may be billed on a subscription basis (monthly, annually, or custom terms) or as one-time fees. Recurring charges will be processed automatically using your provided payment method.</p>

      <h3>6.3 Payment Methods</h3>
      <p>We accept major credit cards, ACH transfers, wire transfers, and other payment methods as agreed upon. You authorize us to charge your payment method for all fees incurred.</p>

      <h3>6.4 Late Payments</h3>
      <p>Invoices are due within 30 days of issuance unless otherwise specified. Late payments may incur interest charges of 1.5% per month (or the maximum rate permitted by law, whichever is lower) and may result in service suspension or termination.</p>

      <h3>6.5 Refund Policy</h3>
      <p>Refunds are handled on a case-by-case basis and are generally not provided for subscription services after the service period has commenced. Custom development work and setup fees are non-refundable once work has begun. Please contact <a href="mailto:support@orengen.io">support@orengen.io</a> for refund requests.</p>

      <h3>6.6 Price Changes</h3>
      <p>We reserve the right to modify our pricing with 30 days' advance notice. Continued use of Services after price changes constitutes acceptance of new pricing.</p>
    </section>

    <!-- 7. INTELLECTUAL PROPERTY -->
    <section class="terms-section">
      <h2>7. Intellectual Property Rights</h2>
      <h3>7.1 OrenGen Property</h3>
      <p>All intellectual property rights in our Services, including but not limited to software, algorithms, AI models, designs, trademarks, logos, and proprietary technology, are owned exclusively by OrenGen Worldwide LLC or our licensors. These Terms do not grant you any ownership rights to our intellectual property.</p>

      <h3>7.2 Client Content</h3>
      <p>You retain all intellectual property rights to content you provide to us ("Client Content"). By using our Services, you grant us a limited, non-exclusive, worldwide license to use, process, store, and transmit Client Content solely to provide and improve our Services.</p>

      <h3>7.3 AI-Generated Content</h3>
      <p>Content generated by our AI systems based on your instructions may be subject to shared ownership or limited licensing terms depending on your service agreement. Custom-developed solutions may have specific intellectual property provisions outlined in separate agreements.</p>

      <h3>7.4 Feedback and Suggestions</h3>
      <p>Any feedback, suggestions, or ideas you provide regarding our Services become the property of OrenGen and may be used without compensation or attribution.</p>
    </section>

    <!-- 8. DATA PRIVACY AND SECURITY -->
    <section class="terms-section">
      <h2>8. Data Privacy and Security</h2>
      <h3>8.1 Privacy Policy</h3>
      <p>Our collection, use, and protection of your personal information are governed by our Privacy Policy, which is incorporated into these Terms by reference. We comply with applicable data protection laws including GDPR, CCPA, and other regional regulations.</p>

      <h3>8.2 Data Processing</h3>
      <p>We process data in accordance with industry-standard security practices. For enterprise clients requiring specific data handling, we offer custom Data Processing Agreements (DPAs) and Business Associate Agreements (BAAs) for HIPAA compliance.</p>

      <h3>8.3 Security Measures</h3>
      <p>We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no system is completely secure, and we cannot guarantee absolute security of data transmitted or stored through our Services.</p>
    </section>

    <!-- 9. WARRANTIES AND DISCLAIMERS -->
    <section class="terms-section">
      <h2>9. Warranties and Disclaimers</h2>
      <h3>9.1 Service Availability</h3>
      <p>While we strive for high availability, our Services are provided on an "AS IS" and "AS AVAILABLE" basis. We do not guarantee uninterrupted, error-free, or secure access to our Services.</p>

      <h3>9.2 AI System Limitations</h3>
      <p>AI-powered systems may produce errors, inaccuracies, or unexpected results. You acknowledge that:</p>
      <ul>
        <li>AI outputs should be reviewed and verified by qualified personnel before use in critical applications</li>
        <li>We are not responsible for decisions made based solely on AI-generated recommendations</li>
        <li>AI systems require ongoing training and may improve over time</li>
      </ul>

      <h3>9.3 Disclaimer of Warranties</h3>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORENGEN DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS OR ACHIEVE SPECIFIC RESULTS.</p>
    </section>

    <!-- 10. LIMITATION OF LIABILITY -->
    <section class="terms-section">
      <h2>10. Limitation of Liability</h2>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
      <ul>
        <li>ORENGEN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION, OR LOSS OF GOODWILL</li>
        <li>OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $1,000, WHICHEVER IS GREATER</li>
        <li>SOME JURISDICTIONS DO NOT ALLOW LIMITATION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THESE LIMITATIONS MAY NOT APPLY TO YOU</li>
      </ul>
    </section>

    <!-- 11. INDEMNIFICATION -->
    <section class="terms-section">
      <h2>11. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless OrenGen Worldwide LLC, its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from or related to:</p>
      <ul>
        <li>Your use or misuse of our Services</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any applicable laws or regulations</li>
        <li>Your infringement of any third-party rights</li>
        <li>Client Content you provide to our Services</li>
      </ul>
    </section>

    <!-- 12. TERMINATION -->
    <section class="terms-section">
      <h2>12. Termination</h2>
      <h3>12.1 Termination by Client</h3>
      <p>You may terminate your account and discontinue use of our Services at any time by contacting us at <a href="mailto:support@orengen.io">support@orengen.io</a>. Termination does not relieve you of obligations to pay outstanding fees.</p>

      <h3>12.2 Termination by OrenGen</h3>
      <p>We may suspend or terminate your access to our Services immediately, without prior notice, if:</p>
      <ul>
        <li>You breach these Terms or any applicable policies</li>
        <li>Your account shows signs of fraudulent or illegal activity</li>
        <li>You fail to pay fees when due</li>
        <li>We are required to do so by law or legal authority</li>
        <li>We discontinue offering Services (with reasonable notice)</li>
      </ul>

      <h3>12.3 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>Your right to access and use our Services immediately ceases</li>
        <li>We may delete your account data in accordance with our data retention policies</li>
        <li>You remain liable for all fees incurred prior to termination</li>
        <li>Provisions intended to survive termination (including intellectual property, indemnification, limitation of liability, and dispute resolution) shall continue in effect</li>
      </ul>
    </section>

    <!-- 13. SERVICE LEVEL AGREEMENT (SLA) -->
    <section class="terms-section">
      <h2>13. Service Level Agreement</h2>
      <p>Enterprise clients with dedicated service agreements may have specific uptime guarantees and support response times outlined in their contracts. Standard service availability targets 99.5% uptime for hosted services, excluding scheduled maintenance. For SLA details specific to your service tier, please refer to your service agreement or contact our team.</p>
    </section>

    <!-- 14. COMPLIANCE WITH LAWS -->
    <section class="terms-section">
      <h2>14. Legal Compliance and Export Controls</h2>
      <h3>14.1 Regulatory Compliance</h3>
      <p>You are responsible for ensuring your use of our Services complies with all applicable laws, regulations, and industry standards, including but not limited to:</p>
      <ul>
        <li>CAN-SPAM Act for email communications</li>
        <li>TCPA for telephone communications</li>
        <li>GDPR for European data protection</li>
        <li>CCPA/CPRA for California privacy rights</li>
        <li>HIPAA for healthcare information (if applicable)</li>
        <li>FTC regulations for advertising and marketing practices</li>
      </ul>

      <h3>14.2 Export Controls</h3>
      <p>Our Services and underlying technology may be subject to U.S. export controls. You may not use or export our Services in violation of U.S. export laws and regulations.</p>
    </section>

    <!-- 15. DISPUTE RESOLUTION -->
    <section class="terms-section">
      <h2>15. Dispute Resolution and Governing Law</h2>
      <h3>15.1 Governing Law</h3>
      <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.</p>

      <h3>15.2 Jurisdiction and Venue</h3>
      <p>Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Tarrant County, Texas. You consent to the personal jurisdiction and venue of such courts.</p>

      <h3>15.3 Informal Resolution</h3>
      <p>Before filing any formal legal action, you agree to first contact us at <a href="mailto:support@orengen.io">support@orengen.io</a> to attempt to resolve the dispute informally. We will make reasonable efforts to resolve disputes amicably.</p>

      <h3>15.4 Arbitration Agreement</h3>
      <p>For disputes that cannot be resolved informally, you agree that any dispute, claim, or controversy arising out of or relating to these Terms or breach thereof shall be settled by binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Tarrant County, Texas, unless otherwise agreed.</p>

      <h3>15.5 Class Action Waiver</h3>
      <p>YOU AND ORENGEN AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</p>
    </section>

    <!-- 16. FORCE MAJEURE -->
    <section class="terms-section">
      <h2>16. Force Majeure</h2>
      <p>OrenGen shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, labor disputes, government actions, internet service provider failures, or natural disasters.</p>
    </section>

    <!-- 17. MODIFICATIONS TO TERMS -->
    <section class="terms-section">
      <h2>17. Modifications to Terms</h2>
      <p>We reserve the right to modify these Terms at any time. Material changes will be communicated via:</p>
      <ul>
        <li>Email notification to your registered address</li>
        <li>Notice on our website</li>
        <li>In-app notifications</li>
      </ul>
      <p>Your continued use of our Services after the effective date of modified Terms constitutes your acceptance of the changes. If you do not agree to modified Terms, you must discontinue use of our Services.</p>
    </section>

    <!-- 18. MISCELLANEOUS -->
    <section class="terms-section">
      <h2>18. Miscellaneous Provisions</h2>
      <h3>18.1 Entire Agreement</h3>
      <p>These Terms, together with our Privacy Policy and any additional service-specific agreements, constitute the entire agreement between you and OrenGen regarding the Services and supersede all prior agreements and understandings.</p>

      <h3>18.2 Severability</h3>
      <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>

      <h3>18.3 Waiver</h3>
      <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>

      <h3>18.4 Assignment</h3>
      <p>You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign or transfer these Terms without restriction.</p>

      <h3>18.5 Third-Party Beneficiaries</h3>
      <p>These Terms do not create any third-party beneficiary rights except as expressly stated.</p>

      <h3>18.6 Language</h3>
      <p>These Terms are written in English. Any translated version is provided for convenience only. In the event of conflict, the English version shall prevail.</p>
    </section>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Contact Information</h3>
      <p><strong>Questions or Concerns?</strong></p>
      <p>If you have any questions about these Terms and Conditions, please contact us:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Address:</strong> 1812 Open Range Drive, Mansfield, Texas 76063<br>
        <strong>Website:</strong> <a href="https://orengen.io">https://orengen.io</a>
      </p>
      <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM CST</p>
    </div>

    <div class="highlight-box">
      <p><strong>Acknowledgment:</strong> BY USING ORENGEN'S SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEIR PROVISIONS.</p>
    </div>

  </div>
`

export default function Page() {
  return (
    <div className="pt-24 pb-12" dangerouslySetInnerHTML={{ __html: `
  <style>

    @import url('https://fonts.cdnfonts.com/css/canva-sans');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: var(--background);
      color: var(--foreground);
      font-family: 'Canva Sans', sans-serif;
      line-height: 1.6;
    }

    /* HEADER SECTION - MATCHING INDUSTRIES STYLE */
    .page-header {
      padding: 80px 20px 60px;
      text-align: center;
      background: var(--background);
    }

    .page-header h1 {
      font-family: 'League Spartan', sans-serif;
      font-size: clamp(32px, 4vw, 48px);
      font-weight: 800;
      line-height: 1.2;
      margin: 0 0 16px 0;
      color: var(--foreground);
      letter-spacing: 0.02em;
    }

    .page-header h1 .orange {
      color: var(--oren-orange);
    }

    .page-header p {
      font-family: 'Canva Sans', sans-serif;
      font-size: clamp(14px, 2vw, 16px);
      color: var(--oren-sub);
      margin: 0 0 8px 0;
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .page-header .meta {
      font-size: 14px;
      color: var(--oren-muted);
    }

    /* CONTENT SECTION */
    .content-wrapper {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px 80px;
    }

    .terms-section {
      margin-bottom: 40px;
    }

    .terms-section h2 {
      font-family: 'League Spartan', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--oren-orange);
      margin-bottom: 16px;
      margin-top: 40px;
    }

    .terms-section h3 {
      font-family: 'League Spartan', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: var(--foreground);
      margin-bottom: 12px;
      margin-top: 24px;
    }

    .terms-section p {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: var(--oren-sub);
      margin-bottom: 16px;
    }

    .terms-section ul, .terms-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }

    .terms-section li {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: var(--oren-sub);
      margin-bottom: 8px;
    }

    .terms-section strong {
      color: var(--foreground);
      font-weight: 600;
    }

    .highlight-box {
      background: rgba(204, 85, 0, 0.1);
      border-left: 4px solid var(--oren-orange);
      padding: 20px;
      margin: 24px 0;
      border-radius: 4px;
    }

    .highlight-box p {
      margin-bottom: 0;
    }

    .contact-info {
      background: var(--oren-close);
      border: 1px solid var(--oren-line-subtle);
      padding: 24px;
      margin: 40px 0;
      border-radius: 8px;
    }

    .contact-info h3 {
      margin-top: 0;
      color: var(--oren-orange);
    }

    .contact-info p {
      margin-bottom: 8px;
    }

    a {
      color: var(--oren-orange);
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      .page-header {
        padding: 60px 20px 40px;
      }

      .content-wrapper {
        padding: 0 20px 60px;
      }

      .terms-section h2 {
        font-size: 20px;
      }

      .terms-section h3 {
        font-size: 16px;
      }
    }
  
  </style>

<!-- HEADER -->
  <header class="page-header">
    <h1>Terms and <span class="orange">Conditions</span></h1>
    <p>Legal agreement governing the use of OrenGen's AI-powered systems and services.</p>
    <p class="meta">Last Updated: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Important Notice:</strong> By accessing or using OrenGen Worldwide LLC's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, you must not use our services.</p>
    </div>

    <!-- 1. ACCEPTANCE OF TERMS -->
    <section class="terms-section">
      <h2>1. Acceptance of Terms</h2>
      <p>These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and OrenGen Worldwide LLC ("OrenGen," "we," "us," or "our") governing your access to and use of our AI-powered automation systems, software, applications, and related services (collectively, the "Services").</p>
      <p>By registering for, accessing, or using any of our Services, you agree to comply with and be bound by these Terms, our Privacy Policy, and any additional terms applicable to specific Services.</p>
    </section>

    <!-- 2. COMPANY INFORMATION -->
    <section class="terms-section">
      <h2>2. Company Information</h2>
      <p><strong>Legal Entity:</strong> OrenGen Worldwide LLC<br>
      <strong>Address:</strong> 1812 Open Range Drive, Mansfield, Texas 76063<br>
      <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
      <strong>Business Type:</strong> Certified Minority Business Enterprise (MBE)</p>
    </section>

    <!-- 3. SERVICES DESCRIPTION -->
    <section class="terms-section">
      <h2>3. Services Description</h2>
      <p>OrenGen provides intelligent automation and AI-powered systems designed to enhance business operations, including but not limited to:</p>
      <ul>
        <li><strong>Buy-Lingual™ AI Agents:</strong> Multilingual virtual employees and AI call agents that provide customer support, sales assistance, and automated communication services</li>
        <li><strong>CRM Systems:</strong> Customer relationship management platforms, including white-labeled solutions and custom integrations</li>
        <li><strong>Web Development:</strong> Website design, development, hosting, and maintenance services</li>
        <li><strong>Lead Generation:</strong> Automated lead acquisition, qualification, and management systems</li>
        <li><strong>Email Infrastructure:</strong> Large-scale email systems, authentication protocols, deliverability optimization, and bulk email services</li>
        <li><strong>Business Automation:</strong> Custom AI-powered workflow automation, process optimization, and intelligent system integrations</li>
      </ul>
      <p>Service specifications, features, and availability may vary based on your selected plan or custom agreement. We reserve the right to modify, update, or discontinue any Service with reasonable notice.</p>
    </section>

    <!-- 4. ELIGIBILITY -->
    <section class="terms-section">
      <h2>4. Eligibility and Account Requirements</h2>
      <h3>4.1 Age and Capacity</h3>
      <p>You must be at least 18 years of age and have the legal capacity to enter into binding contracts to use our Services. If you are accessing Services on behalf of a business entity, you represent and warrant that you have the authority to bind that entity to these Terms.</p>
      
      <h3>4.2 Account Registration</h3>
      <p>To access certain Services, you must create an account and provide accurate, current, and complete information. You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your account credentials</li>
        <li>All activities that occur under your account</li>
        <li>Immediately notifying us of any unauthorized access or security breach</li>
        <li>Ensuring your account information remains accurate and up-to-date</li>
      </ul>

      <h3>4.3 Prohibited Use</h3>
      <p>You may not use our Services if:</p>
      <ul>
        <li>You have previously been suspended or banned from our Services</li>
        <li>You are located in a country subject to U.S. government embargo or designated as a "terrorist supporting" country</li>
        <li>You are listed on any U.S. government list of prohibited or restricted parties</li>
      </ul>
    </section>

    <!-- 5. ACCEPTABLE USE POLICY -->
    <section class="terms-section">
      <h2>5. Acceptable Use Policy</h2>
      <p>You agree not to use our Services to:</p>
      <ul>
        <li>Violate any applicable local, state, national, or international law or regulation</li>
        <li>Infringe upon intellectual property rights of OrenGen or third parties</li>
        <li>Transmit malicious code, viruses, malware, or any harmful technology</li>
        <li>Engage in spamming, phishing, or unsolicited bulk communications that violate CAN-SPAM Act, GDPR, or other applicable regulations</li>
        <li>Attempt to gain unauthorized access to our systems, networks, or other users' accounts</li>
        <li>Interfere with or disrupt the integrity or performance of our Services</li>
        <li>Harvest or collect information about other users without their consent</li>
        <li>Use our AI systems to generate harmful, illegal, discriminatory, or misleading content</li>
        <li>Resell, sublicense, or redistribute our Services without explicit written authorization</li>
        <li>Reverse engineer, decompile, or attempt to extract source code from our proprietary systems</li>
      </ul>
    </section>

    <!-- 6. PAYMENT TERMS -->
    <section class="terms-section">
      <h2>6. Payment Terms and Billing</h2>
      <h3>6.1 Fees and Charges</h3>
      <p>You agree to pay all fees associated with your selected Services as specified in your service agreement or pricing plan. All fees are in U.S. Dollars (USD) unless otherwise stated.</p>

      <h3>6.2 Billing Cycles</h3>
      <p>Services may be billed on a subscription basis (monthly, annually, or custom terms) or as one-time fees. Recurring charges will be processed automatically using your provided payment method.</p>

      <h3>6.3 Payment Methods</h3>
      <p>We accept major credit cards, ACH transfers, wire transfers, and other payment methods as agreed upon. You authorize us to charge your payment method for all fees incurred.</p>

      <h3>6.4 Late Payments</h3>
      <p>Invoices are due within 30 days of issuance unless otherwise specified. Late payments may incur interest charges of 1.5% per month (or the maximum rate permitted by law, whichever is lower) and may result in service suspension or termination.</p>

      <h3>6.5 Refund Policy</h3>
      <p>Refunds are handled on a case-by-case basis and are generally not provided for subscription services after the service period has commenced. Custom development work and setup fees are non-refundable once work has begun. Please contact <a href="mailto:support@orengen.io">support@orengen.io</a> for refund requests.</p>

      <h3>6.6 Price Changes</h3>
      <p>We reserve the right to modify our pricing with 30 days' advance notice. Continued use of Services after price changes constitutes acceptance of new pricing.</p>
    </section>

    <!-- 7. INTELLECTUAL PROPERTY -->
    <section class="terms-section">
      <h2>7. Intellectual Property Rights</h2>
      <h3>7.1 OrenGen Property</h3>
      <p>All intellectual property rights in our Services, including but not limited to software, algorithms, AI models, designs, trademarks, logos, and proprietary technology, are owned exclusively by OrenGen Worldwide LLC or our licensors. These Terms do not grant you any ownership rights to our intellectual property.</p>

      <h3>7.2 Client Content</h3>
      <p>You retain all intellectual property rights to content you provide to us ("Client Content"). By using our Services, you grant us a limited, non-exclusive, worldwide license to use, process, store, and transmit Client Content solely to provide and improve our Services.</p>

      <h3>7.3 AI-Generated Content</h3>
      <p>Content generated by our AI systems based on your instructions may be subject to shared ownership or limited licensing terms depending on your service agreement. Custom-developed solutions may have specific intellectual property provisions outlined in separate agreements.</p>

      <h3>7.4 Feedback and Suggestions</h3>
      <p>Any feedback, suggestions, or ideas you provide regarding our Services become the property of OrenGen and may be used without compensation or attribution.</p>
    </section>

    <!-- 8. DATA PRIVACY AND SECURITY -->
    <section class="terms-section">
      <h2>8. Data Privacy and Security</h2>
      <h3>8.1 Privacy Policy</h3>
      <p>Our collection, use, and protection of your personal information are governed by our Privacy Policy, which is incorporated into these Terms by reference. We comply with applicable data protection laws including GDPR, CCPA, and other regional regulations.</p>

      <h3>8.2 Data Processing</h3>
      <p>We process data in accordance with industry-standard security practices. For enterprise clients requiring specific data handling, we offer custom Data Processing Agreements (DPAs) and Business Associate Agreements (BAAs) for HIPAA compliance.</p>

      <h3>8.3 Security Measures</h3>
      <p>We implement reasonable administrative, technical, and physical safeguards to protect your data. However, no system is completely secure, and we cannot guarantee absolute security of data transmitted or stored through our Services.</p>
    </section>

    <!-- 9. WARRANTIES AND DISCLAIMERS -->
    <section class="terms-section">
      <h2>9. Warranties and Disclaimers</h2>
      <h3>9.1 Service Availability</h3>
      <p>While we strive for high availability, our Services are provided on an "AS IS" and "AS AVAILABLE" basis. We do not guarantee uninterrupted, error-free, or secure access to our Services.</p>

      <h3>9.2 AI System Limitations</h3>
      <p>AI-powered systems may produce errors, inaccuracies, or unexpected results. You acknowledge that:</p>
      <ul>
        <li>AI outputs should be reviewed and verified by qualified personnel before use in critical applications</li>
        <li>We are not responsible for decisions made based solely on AI-generated recommendations</li>
        <li>AI systems require ongoing training and may improve over time</li>
      </ul>

      <h3>9.3 Disclaimer of Warranties</h3>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ORENGEN DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL MEET YOUR REQUIREMENTS OR ACHIEVE SPECIFIC RESULTS.</p>
    </section>

    <!-- 10. LIMITATION OF LIABILITY -->
    <section class="terms-section">
      <h2>10. Limitation of Liability</h2>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
      <ul>
        <li>ORENGEN SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST DATA, BUSINESS INTERRUPTION, OR LOSS OF GOODWILL</li>
        <li>OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR $1,000, WHICHEVER IS GREATER</li>
        <li>SOME JURISDICTIONS DO NOT ALLOW LIMITATION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THESE LIMITATIONS MAY NOT APPLY TO YOU</li>
      </ul>
    </section>

    <!-- 11. INDEMNIFICATION -->
    <section class="terms-section">
      <h2>11. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless OrenGen Worldwide LLC, its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising from or related to:</p>
      <ul>
        <li>Your use or misuse of our Services</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any applicable laws or regulations</li>
        <li>Your infringement of any third-party rights</li>
        <li>Client Content you provide to our Services</li>
      </ul>
    </section>

    <!-- 12. TERMINATION -->
    <section class="terms-section">
      <h2>12. Termination</h2>
      <h3>12.1 Termination by Client</h3>
      <p>You may terminate your account and discontinue use of our Services at any time by contacting us at <a href="mailto:support@orengen.io">support@orengen.io</a>. Termination does not relieve you of obligations to pay outstanding fees.</p>

      <h3>12.2 Termination by OrenGen</h3>
      <p>We may suspend or terminate your access to our Services immediately, without prior notice, if:</p>
      <ul>
        <li>You breach these Terms or any applicable policies</li>
        <li>Your account shows signs of fraudulent or illegal activity</li>
        <li>You fail to pay fees when due</li>
        <li>We are required to do so by law or legal authority</li>
        <li>We discontinue offering Services (with reasonable notice)</li>
      </ul>

      <h3>12.3 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>Your right to access and use our Services immediately ceases</li>
        <li>We may delete your account data in accordance with our data retention policies</li>
        <li>You remain liable for all fees incurred prior to termination</li>
        <li>Provisions intended to survive termination (including intellectual property, indemnification, limitation of liability, and dispute resolution) shall continue in effect</li>
      </ul>
    </section>

    <!-- 13. SERVICE LEVEL AGREEMENT (SLA) -->
    <section class="terms-section">
      <h2>13. Service Level Agreement</h2>
      <p>Enterprise clients with dedicated service agreements may have specific uptime guarantees and support response times outlined in their contracts. Standard service availability targets 99.5% uptime for hosted services, excluding scheduled maintenance. For SLA details specific to your service tier, please refer to your service agreement or contact our team.</p>
    </section>

    <!-- 14. COMPLIANCE WITH LAWS -->
    <section class="terms-section">
      <h2>14. Legal Compliance and Export Controls</h2>
      <h3>14.1 Regulatory Compliance</h3>
      <p>You are responsible for ensuring your use of our Services complies with all applicable laws, regulations, and industry standards, including but not limited to:</p>
      <ul>
        <li>CAN-SPAM Act for email communications</li>
        <li>TCPA for telephone communications</li>
        <li>GDPR for European data protection</li>
        <li>CCPA/CPRA for California privacy rights</li>
        <li>HIPAA for healthcare information (if applicable)</li>
        <li>FTC regulations for advertising and marketing practices</li>
      </ul>

      <h3>14.2 Export Controls</h3>
      <p>Our Services and underlying technology may be subject to U.S. export controls. You may not use or export our Services in violation of U.S. export laws and regulations.</p>
    </section>

    <!-- 15. DISPUTE RESOLUTION -->
    <section class="terms-section">
      <h2>15. Dispute Resolution and Governing Law</h2>
      <h3>15.1 Governing Law</h3>
      <p>These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.</p>

      <h3>15.2 Jurisdiction and Venue</h3>
      <p>Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Tarrant County, Texas. You consent to the personal jurisdiction and venue of such courts.</p>

      <h3>15.3 Informal Resolution</h3>
      <p>Before filing any formal legal action, you agree to first contact us at <a href="mailto:support@orengen.io">support@orengen.io</a> to attempt to resolve the dispute informally. We will make reasonable efforts to resolve disputes amicably.</p>

      <h3>15.4 Arbitration Agreement</h3>
      <p>For disputes that cannot be resolved informally, you agree that any dispute, claim, or controversy arising out of or relating to these Terms or breach thereof shall be settled by binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall take place in Tarrant County, Texas, unless otherwise agreed.</p>

      <h3>15.5 Class Action Waiver</h3>
      <p>YOU AND ORENGEN AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.</p>
    </section>

    <!-- 16. FORCE MAJEURE -->
    <section class="terms-section">
      <h2>16. Force Majeure</h2>
      <p>OrenGen shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, labor disputes, government actions, internet service provider failures, or natural disasters.</p>
    </section>

    <!-- 17. MODIFICATIONS TO TERMS -->
    <section class="terms-section">
      <h2>17. Modifications to Terms</h2>
      <p>We reserve the right to modify these Terms at any time. Material changes will be communicated via:</p>
      <ul>
        <li>Email notification to your registered address</li>
        <li>Notice on our website</li>
        <li>In-app notifications</li>
      </ul>
      <p>Your continued use of our Services after the effective date of modified Terms constitutes your acceptance of the changes. If you do not agree to modified Terms, you must discontinue use of our Services.</p>
    </section>

    <!-- 18. MISCELLANEOUS -->
    <section class="terms-section">
      <h2>18. Miscellaneous Provisions</h2>
      <h3>18.1 Entire Agreement</h3>
      <p>These Terms, together with our Privacy Policy and any additional service-specific agreements, constitute the entire agreement between you and OrenGen regarding the Services and supersede all prior agreements and understandings.</p>

      <h3>18.2 Severability</h3>
      <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>

      <h3>18.3 Waiver</h3>
      <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>

      <h3>18.4 Assignment</h3>
      <p>You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign or transfer these Terms without restriction.</p>

      <h3>18.5 Third-Party Beneficiaries</h3>
      <p>These Terms do not create any third-party beneficiary rights except as expressly stated.</p>

      <h3>18.6 Language</h3>
      <p>These Terms are written in English. Any translated version is provided for convenience only. In the event of conflict, the English version shall prevail.</p>
    </section>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Contact Information</h3>
      <p><strong>Questions or Concerns?</strong></p>
      <p>If you have any questions about these Terms and Conditions, please contact us:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Address:</strong> 1812 Open Range Drive, Mansfield, Texas 76063<br>
        <strong>Website:</strong> <a href="https://orengen.io">https://orengen.io</a>
      </p>
      <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM CST</p>
    </div>

    <div class="highlight-box">
      <p><strong>Acknowledgment:</strong> BY USING ORENGEN'S SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEIR PROVISIONS.</p>
    </div>

  </div>
` }} />
  );
}
