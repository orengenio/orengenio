import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy — OrenGen Worldwide",
  description: "OrenGen Worldwide refund and cancellation policy for services and products.",
}

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

    .policy-section {
      margin-bottom: 40px;
    }

    .policy-section h2 {
      font-family: 'League Spartan', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--oren-orange);
      margin-bottom: 16px;
      margin-top: 40px;
    }

    .policy-section h3 {
      font-family: 'League Spartan', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: var(--foreground);
      margin-bottom: 12px;
      margin-top: 24px;
    }

    .policy-section p {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: var(--oren-sub);
      margin-bottom: 16px;
    }

    .policy-section ul, .policy-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }

    .policy-section li {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: var(--oren-sub);
      margin-bottom: 8px;
    }

    .policy-section strong {
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

    .info-box {
      background: var(--oren-close);
      border: 1px solid var(--oren-line-subtle);
      padding: 24px;
      margin: 24px 0;
      border-radius: 8px;
    }

    .info-box h3 {
      margin-top: 0;
      color: var(--oren-orange);
    }

    .info-box p {
      margin-bottom: 8px;
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

    .table-wrapper {
      overflow-x: auto;
      margin: 24px 0;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      background: var(--oren-close);
      border: 1px solid var(--oren-line-subtle);
    }

    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid var(--oren-line-subtle);
      font-family: 'Canva Sans', sans-serif;
      font-size: 14px;
    }

    th {
      background: rgba(204, 85, 0, 0.2);
      color: var(--foreground);
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .page-header {
        padding: 60px 20px 40px;
      }

      .content-wrapper {
        padding: 0 20px 60px;
      }

      .policy-section h2 {
        font-size: 20px;
      }

      .policy-section h3 {
        font-size: 16px;
      }
    }
  
  </style>

<!-- HEADER -->
  <header class="page-header">
    <h1>Refund <span class="orange">Policy</span></h1>
    <p>Transparency in our refund practices and your right of rescission.</p>
    <p class="meta">Effective Date: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Policy Overview:</strong> OrenGen Worldwide LLC operates a no-refund policy for services rendered. However, we honor your legal right of rescission within the specified timeframe, provided services have not been accessed, activated, or used.</p>
    </div>

    <!-- 1. GENERAL POLICY -->
    <section class="policy-section">
      <h2>1. General No-Refund Policy</h2>
      <p>All sales of OrenGen services, software licenses, subscriptions, and custom solutions are <strong>final and non-refundable</strong> once services have been delivered, accessed, or activated.</p>
      <p>This policy applies to:</p>
      <ul>
        <li>Monthly and annual subscription plans</li>
        <li>One-time setup fees and implementation charges</li>
        <li>Custom development and consulting services</li>
        <li>Software licenses and access credentials</li>
        <li>Training sessions and onboarding services</li>
        <li>Third-party service integrations and add-ons</li>
      </ul>
      <p>By purchasing any OrenGen service, you acknowledge and agree to this no-refund policy.</p>
    </section>

    <!-- 2. RIGHT OF RESCISSION -->
    <section class="policy-section">
      <h2>2. Right of Rescission</h2>
      <p>We honor your <strong>legal right of rescission</strong>, which allows you to cancel your purchase and receive a full refund under specific conditions.</p>

      <h3>2.1 Rescission Period</h3>
      <p>You have <strong>three (3) business days</strong> from the date of purchase to exercise your right of rescission. The rescission period begins at the time of:</p>
      <ul>
        <li>Payment confirmation for digital services and subscriptions</li>
        <li>Contract execution for custom development agreements</li>
        <li>Invoice payment for enterprise services</li>
      </ul>

      <h3>2.2 Eligibility Requirements</h3>
      <p>To qualify for a refund under the right of rescission, <strong>ALL</strong> of the following conditions must be met:</p>
      <ul>
        <li><strong>No Access:</strong> You have not logged into any OrenGen platform, system, or service</li>
        <li><strong>No Activation:</strong> Services have not been activated, configured, or deployed</li>
        <li><strong>No Usage:</strong> No API calls, data processing, email sending, or system utilization has occurred</li>
        <li><strong>No Credentials Used:</strong> Access credentials (usernames, passwords, API keys) have not been used or shared</li>
        <li><strong>No Custom Work Initiated:</strong> Custom development, design, or implementation work has not commenced</li>
        <li><strong>No Data Uploaded:</strong> You have not uploaded client data, contacts, files, or content to our systems</li>
        <li><strong>Within Timeframe:</strong> Request is made within three (3) business days of purchase</li>
      </ul>

      <h3>2.3 What Constitutes "Use"</h3>
      <p>Any of the following actions are considered "use" and will disqualify you from exercising right of rescission:</p>
      <ul>
        <li>Logging into your account dashboard or control panel</li>
        <li>Accessing API documentation or developer resources</li>
        <li>Downloading software, files, or resources</li>
        <li>Attending scheduled onboarding or training sessions</li>
        <li>Receiving custom configuration or setup assistance</li>
        <li>Testing features, sending test emails, or making trial API calls</li>
        <li>Connecting third-party integrations</li>
        <li>Granting team member access or creating sub-accounts</li>
      </ul>
    </section>

    <!-- 3. HOW TO REQUEST RESCISSION -->
    <section class="policy-section">
      <h2>3. How to Exercise Right of Rescission</h2>
      <p>To request a refund under right of rescission, follow these steps:</p>
      
      <h3>Step 1: Submit Written Request</h3>
      <p>Send an email to <a href="mailto:support@orengen.io">support@orengen.io</a> with the subject line: <strong>"Right of Rescission Request"</strong></p>
      
      <h3>Step 2: Include Required Information</h3>
      <p>Your request must include:</p>
      <ul>
        <li>Full name and account email address</li>
        <li>Order/invoice number and purchase date</li>
        <li>Service(s) purchased</li>
        <li>Confirmation that no access, activation, or use has occurred</li>
        <li>Reason for cancellation (optional but appreciated)</li>
      </ul>

      <h3>Step 3: Verification Process</h3>
      <p>Our team will verify that:</p>
      <ul>
        <li>The request is received within the 3-business-day window</li>
        <li>No system logs show account access or service usage</li>
        <li>All eligibility requirements are met</li>
      </ul>
      <p><strong>Processing Time:</strong> Rescission requests are reviewed within 2-5 business days. Approved refunds are processed within 7-10 business days to the original payment method.</p>
    </section>

    <!-- 4. NON-REFUNDABLE ITEMS -->
    <section class="policy-section">
      <h2>4. Non-Refundable Items and Services</h2>
      <p>The following are <strong>non-refundable under all circumstances</strong>, including right of rescission:</p>

      <h3>4.1 Immediately Delivered Digital Products</h3>
      <ul>
        <li>Downloadable software where files have been accessed</li>
        <li>Digital templates, documents, or resources that have been downloaded</li>
        <li>License keys that have been revealed or activated</li>
      </ul>

      <h3>4.2 Completed Services</h3>
      <ul>
        <li>Custom development work where coding/design has commenced</li>
        <li>Consulting sessions that have been scheduled or attended</li>
        <li>Training sessions that have occurred</li>
        <li>Strategy calls or implementation planning meetings</li>
      </ul>

      <h3>4.3 Third-Party Costs</h3>
      <ul>
        <li>Domain registration fees paid to registrars</li>
        <li>SSL certificates from certificate authorities</li>
        <li>Third-party software licenses (e.g., white-labeled CRM platforms)</li>
        <li>Cloud hosting or infrastructure costs already incurred</li>
        <li>Payment processing fees (typically 2.9% + $0.30 per transaction)</li>
      </ul>

      <h3>4.4 Partial Service Periods</h3>
      <ul>
        <li>Prorated refunds for unused subscription time are not provided</li>
        <li>If you cancel mid-billing cycle, you retain access until period end but no refund is issued</li>
      </ul>
    </section>

    <!-- 5. SUBSCRIPTION CANCELLATIONS -->
    <section class="policy-section">
      <h2>5. Subscription Cancellations</h2>
      <h3>5.1 How to Cancel</h3>
      <p>You may cancel your subscription at any time by:</p>
      <ul>
        <li>Emailing <a href="mailto:support@orengen.io">support@orengen.io</a> with your cancellation request</li>
        <li>Using the cancellation option in your account dashboard (if available)</li>
        <li>Contacting your account manager (for enterprise clients)</li>
      </ul>

      <h3>5.2 Cancellation Takes Effect</h3>
      <p>Cancellations take effect at the end of your current billing period. You will retain access to services until that date.</p>

      <h3>5.3 No Refunds for Current Period</h3>
      <p>Canceling a subscription does <strong>not</strong> result in a refund for the current billing cycle. You have already been charged for services through the end of the period.</p>

      <h3>5.4 Reactivation</h3>
      <p>Canceled accounts may be reactivated within 30 days by contacting support. After 30 days, account data may be deleted and a new setup may be required.</p>
    </section>

    <!-- 6. SERVICE FAILURES AND DISPUTES -->
    <section class="policy-section">
      <h2>6. Service Failures and Dispute Resolution</h2>
      <h3>6.1 Service Issues</h3>
      <p>If you experience technical problems, service outages, or performance issues:</p>
      <ul>
        <li><strong>Contact Support First:</strong> Email <a href="mailto:support@orengen.io">support@orengen.io</a> immediately</li>
        <li><strong>Allow Resolution Time:</strong> We will make reasonable efforts to resolve issues within 48-72 hours</li>
        <li><strong>Document Issues:</strong> Provide screenshots, error messages, and detailed descriptions</li>
      </ul>

      <h3>6.2 Service Level Agreement (SLA) Violations</h3>
      <p>Enterprise clients with dedicated SLA agreements may be eligible for service credits (not cash refunds) if uptime or performance guarantees are not met. Refer to your service agreement for SLA terms.</p>

      <h3>6.3 Dispute Resolution</h3>
      <p>If you believe you are entitled to a refund due to exceptional circumstances:</p>
      <ul>
        <li>Submit a formal dispute to <a href="mailto:support@orengen.io">support@orengen.io</a></li>
        <li>Include documentation supporting your claim</li>
        <li>Our management team will review within 5-7 business days</li>
        <li>Decisions are made on a case-by-case basis at OrenGen's sole discretion</li>
      </ul>
    </section>

    <!-- 7. CHARGEBACKS AND PAYMENT DISPUTES -->
    <section class="policy-section">
      <h2>7. Chargebacks and Payment Disputes</h2>
      <h3>7.1 Contact Us First</h3>
      <p>Before filing a chargeback or payment dispute with your bank or credit card company, please contact us at <a href="mailto:support@orengen.io">support@orengen.io</a>. Most issues can be resolved directly and quickly.</p>

      <h3>7.2 Consequences of Chargebacks</h3>
      <p>Filing an unauthorized chargeback may result in:</p>
      <ul>
        <li>Immediate suspension of all services</li>
        <li>Permanent account termination</li>
        <li>Collection efforts for outstanding balances plus chargeback fees</li>
        <li>Prohibition from future use of OrenGen services</li>
      </ul>

      <h3>7.3 Fraudulent Chargebacks</h3>
      <p>We actively contest fraudulent chargebacks and will provide evidence of service delivery, access logs, and contract terms to payment processors and financial institutions.</p>
    </section>

    <!-- 8. SPECIAL CIRCUMSTANCES -->
    <section class="policy-section">
      <h2>8. Special Circumstances and Exceptions</h2>
      <h3>8.1 Duplicate Charges</h3>
      <p>If you are accidentally charged twice for the same service, the duplicate charge will be refunded immediately upon verification.</p>

      <h3>8.2 Billing Errors</h3>
      <p>If there is a clear billing error on our part (wrong amount charged, service not ordered, etc.), we will issue a full refund promptly.</p>

      <h3>8.3 Service Discontinuation</h3>
      <p>If OrenGen discontinues a service you have prepaid for (annual subscriptions, long-term contracts), we will provide:</p>
      <ul>
        <li>Minimum 60 days advance notice</li>
        <li>Prorated refund for unused time, OR</li>
        <li>Migration assistance to alternative solutions</li>
      </ul>

      <h3>8.4 Force Majeure</h3>
      <p>Refunds are not provided for service interruptions caused by circumstances beyond our control, including natural disasters, war, government actions, or third-party infrastructure failures.</p>

      <h3>8.5 Goodwill Exceptions</h3>
      <p>In rare cases, OrenGen may issue refunds or credits as a goodwill gesture. Such decisions are made at management's sole discretion and do not set precedent for future requests.</p>
    </section>

    <!-- 9. MONEY-BACK GUARANTEE (IF APPLICABLE) -->
    <section class="policy-section">
      <h2>9. Money-Back Guarantee (Limited Services Only)</h2>
      <p>Select services may be offered with a satisfaction guarantee. Terms include:</p>
      <ul>
        <li>Specific guarantee period (e.g., 30 days, 60 days)</li>
        <li>Defined performance criteria that must be met</li>
        <li>Required documentation of issues</li>
        <li>Good-faith effort to utilize services as intended</li>
      </ul>
      <p>If your service includes a money-back guarantee, specific terms will be outlined in your purchase agreement or service description. Not all services qualify.</p>
    </section>

    <!-- 10. REFUND PROCESSING -->
    <section class="policy-section">
      <h2>10. Refund Processing and Timeline</h2>
      <h3>10.1 Approved Refunds</h3>
      <p>When a refund is approved:</p>
      <ul>
        <li><strong>Processing Time:</strong> 7-10 business days from approval</li>
        <li><strong>Method:</strong> Refunded to original payment method</li>
        <li><strong>Confirmation:</strong> Email notification sent when processed</li>
      </ul>

      <h3>10.2 Bank Processing Time</h3>
      <p>After OrenGen processes your refund, your bank or credit card company may take an additional 3-7 business days to post the credit to your account. This is outside our control.</p>

      <h3>10.3 Partial Refunds</h3>
      <p>In cases where only part of a charge is eligible for refund (e.g., unused services minus completed work), partial refunds will be calculated based on:</p>
      <ul>
        <li>Hours of service delivered</li>
        <li>Resources consumed</li>
        <li>Third-party costs incurred</li>
        <li>Setup and onboarding completed</li>
      </ul>
    </section>

    <!-- 11. CONTACT FOR REFUND REQUESTS -->
    <div class="contact-info">
      <h3>How to Request a Refund</h3>
      <p>For all refund requests, rescission notices, or billing inquiries:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "Refund Request" or "Right of Rescission"<br>
        <strong>Include:</strong> Order number, purchase date, detailed reason
      </p>
      <p>
        <strong>Mailing Address:</strong><br>
        OrenGen Worldwide LLC<br>
        1812 Open Range Drive<br>
        Mansfield, Texas 76063
      </p>
      <p><strong>Response Time:</strong> All refund requests are reviewed within 2-5 business days.</p>
    </div>

    <!-- 12. MODIFICATIONS TO POLICY -->
    <section class="policy-section">
      <h2>12. Modifications to This Policy</h2>
      <p>OrenGen reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes constitutes acceptance of the modified policy.</p>
      <p>For significant policy changes, we will provide notice via:</p>
      <ul>
        <li>Email to registered account holders</li>
        <li>In-app notifications</li>
        <li>Website banner announcements</li>
      </ul>
    </section>

    <div class="highlight-box">
      <p><strong>Questions?</strong> If you have questions about our Refund Policy or need clarification on any terms, please contact our support team at <a href="mailto:support@orengen.io">support@orengen.io</a>. We're here to help.</p>
    </div>

  </div>
` }} />
  );
}
