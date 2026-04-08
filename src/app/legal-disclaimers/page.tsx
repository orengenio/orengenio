import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimers — OrenGen Worldwide",
  description: "Important disclosures regarding affiliate relationships, earnings claims, and financial products.",
};

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

    .disclaimer-section {
      margin-bottom: 40px;
    }

    .disclaimer-section h2 {
      font-family: 'League Spartan', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--oren-orange);
      margin-bottom: 16px;
      margin-top: 40px;
    }

    .disclaimer-section h3 {
      font-family: 'League Spartan', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: var(--foreground);
      margin-bottom: 12px;
      margin-top: 24px;
    }

    .disclaimer-section p {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: var(--oren-sub);
      margin-bottom: 16px;
    }

    .disclaimer-section ul, .disclaimer-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }

    .disclaimer-section li {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: var(--oren-sub);
      margin-bottom: 8px;
    }

    .disclaimer-section strong {
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
      margin-bottom: 8px;
    }

    .highlight-box p:last-child {
      margin-bottom: 0;
    }

    .critical-box {
      background: rgba(204, 85, 0, 0.2);
      border: 2px solid var(--oren-orange);
      padding: 24px;
      margin: 24px 0;
      border-radius: 8px;
    }

    .critical-box h3 {
      margin-top: 0;
      color: var(--oren-orange);
      font-family: 'League Spartan', sans-serif;
      font-size: 20px;
      margin-bottom: 12px;
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

      .disclaimer-section h2 {
        font-size: 20px;
      }

      .disclaimer-section h3 {
        font-size: 16px;
      }
    }
  
  </style>

<!-- HEADER -->
  <header class="page-header">
    <h1>Legal <span class="orange">Disclaimers</span></h1>
    <p>Important disclosures regarding affiliate relationships, earnings claims, and financial products.</p>
    <p class="meta">Effective Date: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Required Reading:</strong> This page contains important legal disclaimers that affect your use of OrenGen Worldwide LLC's services and your understanding of our business relationships, earnings potential, and financial product offerings. Please read carefully.</p>
    </div>

    <!-- 1. GENERAL DISCLAIMER -->
    <section class="disclaimer-section">
      <h2>1. General Disclaimer</h2>
      <p>The information provided by OrenGen Worldwide LLC ("OrenGen," "we," "us," or "our") on our website, in our services, through our communications, and in our marketing materials is for general informational and educational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>

      <h3>1.1 No Professional Advice</h3>
      <p>The content and services provided by OrenGen do not constitute professional advice of any kind, including but not limited to:</p>
      <ul>
        <li>Financial advice, investment advice, or securities recommendations</li>
        <li>Legal advice or legal opinions</li>
        <li>Tax advice or tax planning guidance</li>
        <li>Accounting or bookkeeping advice</li>
        <li>Business consulting or strategic planning services (unless explicitly contracted)</li>
        <li>Medical, health, or mental health advice</li>
      </ul>
      <p><strong>Always consult with qualified professionals (attorneys, CPAs, financial advisors, etc.) before making important business, financial, legal, or personal decisions.</strong></p>

      <h3>1.2 Use at Your Own Risk</h3>
      <p>Your use of OrenGen services and reliance on any information provided is solely at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such information by you or any visitor to our website, or by anyone who may be informed of our content.</p>
    </section>

    <!-- 2. AFFILIATE DISCLOSURE -->
    <section class="disclaimer-section">
      <h2>2. Affiliate Disclosure</h2>
      <p>OrenGen Worldwide LLC participates in various affiliate marketing programs and has affiliate relationships with third-party companies, products, and services. This means we may receive compensation when you click on links to products or services we recommend or purchase products through our affiliate links.</p>

      <h3>2.1 FTC Compliance</h3>
      <p>In accordance with the Federal Trade Commission's 16 CFR Part 255 ("Guides Concerning the Use of Endorsements and Testimonials in Advertising"), we are required to disclose our affiliate relationships and any material connections we have with products or services we recommend.</p>

      <h3>2.2 What This Means</h3>
      <p><strong>We may earn commissions or fees when you:</strong></p>
      <ul>
        <li>Click on affiliate links on our website or in our communications</li>
        <li>Purchase products or services through our referral links</li>
        <li>Sign up for services we recommend</li>
        <li>Subscribe to tools, platforms, or software we promote</li>
        <li>Enroll in courses, programs, or training we endorse</li>
      </ul>

      <h3>2.3 Affiliate Relationships Include</h3>
      <ul>
        <li><strong>Software and SaaS Products:</strong> CRM platforms, marketing automation tools, email services, and business software</li>
        <li><strong>Web Services:</strong> Hosting providers, domain registrars, CDN services, and security tools</li>
        <li><strong>Business Tools:</strong> Payment processors, analytics platforms, and productivity software</li>
        <li><strong>Educational Products:</strong> Online courses, training programs, and certification programs</li>
        <li><strong>Financial Products and Services:</strong> See detailed financial product disclaimer in Section 4</li>
      </ul>

      <h3>2.4 Our Commitment to Integrity</h3>
      <p>Despite our affiliate relationships:</p>
      <ul>
        <li>We only recommend products and services we believe provide value</li>
        <li>Our opinions are our own and are not influenced solely by potential compensation</li>
        <li>We strive to provide honest, unbiased information and reviews</li>
        <li>The price you pay is not affected by our affiliate relationship (you pay the same price whether you use our link or not)</li>
        <li>We disclose affiliate relationships clearly when recommending products</li>
      </ul>

      <h3>2.5 Third-Party Responsibility</h3>
      <p>OrenGen is not responsible for:</p>
      <ul>
        <li>The quality, performance, or reliability of third-party products or services</li>
        <li>Fulfillment, shipping, customer service, or support provided by third parties</li>
        <li>Billing issues, refunds, or disputes with third-party vendors</li>
        <li>Changes to third-party pricing, terms, or availability</li>
        <li>Privacy practices or data handling by third-party companies</li>
      </ul>
      <p>Your relationship with third-party providers is governed by their terms and conditions, not ours.</p>
    </section>

    <!-- 3. EARNINGS DISCLAIMER -->
    <section class="disclaimer-section">
      <h2>3. Earnings and Income Disclaimer</h2>
      
      <div class="critical-box">
        <h3>⚠️ CRITICAL: No Guarantee of Results</h3>
        <p><strong>ANY EARNINGS, INCOME, OR REVENUE FIGURES MENTIONED BY ORENGEN, IN TESTIMONIALS, CASE STUDIES, OR EXAMPLES ARE NOT GUARANTEES OR PROMISES OF YOUR ACTUAL EARNINGS.</strong></p>
        <p><strong>THERE IS NO GUARANTEE THAT YOU WILL EARN ANY MONEY USING OUR SERVICES, PRODUCTS, TECHNIQUES, OR IDEAS. YOUR RESULTS WILL VARY AND DEPEND ON MANY FACTORS UNIQUE TO YOU.</strong></p>
      </div>

      <h3>3.1 No Income Guarantees</h3>
      <p>OrenGen does not guarantee any specific level of income, revenue, profit, or financial results from using our services, following our advice, implementing our strategies, or deploying our AI-powered automation systems.</p>
      <p><strong>Individual results will vary significantly based on numerous factors including but not limited to:</strong></p>
      <ul>
        <li>Your individual effort, dedication, and time commitment</li>
        <li>Your existing business experience, skills, and knowledge</li>
        <li>Your industry, market conditions, and competitive landscape</li>
        <li>Your budget, resources, and financial capacity</li>
        <li>The quality of your products, services, or offers</li>
        <li>Your marketing execution and sales skills</li>
        <li>Your target audience and customer base</li>
        <li>Economic conditions and market demand</li>
        <li>Timing, seasonality, and external factors beyond your control</li>
      </ul>

      <h3>3.2 Testimonials and Case Studies</h3>
      <p>Any testimonials, case studies, examples, or success stories presented by OrenGen:</p>
      <ul>
        <li><strong>Are Not Typical:</strong> Represent exceptional results and are not typical or average outcomes</li>
        <li><strong>Are Not Guarantees:</strong> Do not guarantee you will achieve similar results</li>
        <li><strong>Are Individual Experiences:</strong> Reflect the unique circumstances, efforts, and markets of those individuals</li>
        <li><strong>May Not Be Verified:</strong> While we believe testimonials to be truthful, we cannot independently verify all claims</li>
        <li><strong>Results May Vary:</strong> Your results may be better, worse, or completely different</li>
      </ul>

      <h3>3.3 Risk of Loss</h3>
      <p><strong>Using our services involves financial risk. You may:</strong></p>
      <ul>
        <li>Lose money or fail to generate revenue</li>
        <li>Incur expenses without corresponding income</li>
        <li>Experience lower than expected results</li>
        <li>Face business challenges or setbacks</li>
        <li>Not recoup your investment in our services</li>
      </ul>
      <p><strong>Only invest time and money you can afford to lose. Never risk funds you cannot afford to lose or that are needed for essential expenses.</strong></p>

      <h3>3.4 Effort and Work Required</h3>
      <p>Success with OrenGen services requires:</p>
      <ul>
        <li>Substantial time, effort, and consistent work</li>
        <li>Learning new skills and implementing strategies</li>
        <li>Ongoing optimization and adjustment</li>
        <li>Patience and persistence through challenges</li>
        <li>Financial investment in tools, marketing, and resources</li>
      </ul>
      <p><strong>There are no "get rich quick" schemes, shortcuts, or guaranteed paths to success. Business success requires hard work, dedication, and often significant trial and error.</strong></p>

      <h3>3.5 Past Performance Not Indicative</h3>
      <p>Any past performance, results, or earnings mentioned (whether ours or our clients') are not indicative of future results. Market conditions change, competition evolves, and what worked previously may not work in the future.</p>

      <h3>3.6 FTC Income Claims Compliance</h3>
      <p>This earnings disclaimer complies with FTC requirements regarding income claims and testimonials. We are committed to honest, transparent communication about potential outcomes.</p>
    </section>

    <!-- 4. FINANCIAL PRODUCTS DISCLAIMER -->
    <section class="disclaimer-section">
      <h2>4. Financial Products and Services Disclaimer</h2>
      
      <div class="critical-box">
        <h3>⚠️ CRITICAL DISCLOSURE: Not Licensed Financial Professionals</h3>
        <p><strong>ORENGEN WORLDWIDE LLC IS NOT A LICENSED FINANCIAL ADVISOR, INVESTMENT ADVISOR, BROKER-DEALER, REGISTERED INVESTMENT ADVISOR (RIA), OR FINANCIAL PLANNER IN ANY STATE OR JURISDICTION.</strong></p>
        <p><strong>WE ARE NOT LICENSED TO PROVIDE FINANCIAL ADVICE, INVESTMENT RECOMMENDATIONS, SECURITIES ANALYSIS, OR FINANCIAL PLANNING SERVICES.</strong></p>
        <p><strong>WE DO NOT HOLD ANY SECURITIES LICENSES, FINRA REGISTRATIONS, SEC REGISTRATIONS, OR STATE FINANCIAL LICENSES.</strong></p>
      </div>

      <h3>4.1 Affiliate Relationship with Financial Products</h3>
      <p><strong>IMPORTANT: When OrenGen recommends, promotes, or provides information about financial products or services, we are acting solely as AFFILIATES, not as licensed financial professionals.</strong></p>
      <p>This means:</p>
      <ul>
        <li>We may earn affiliate commissions when you purchase or sign up for financial products through our links</li>
        <li>We are not providing personalized financial advice or recommendations specific to your situation</li>
        <li>We are not analyzing your financial circumstances, goals, or risk tolerance</li>
        <li>We are not acting in a fiduciary capacity</li>
        <li>We are sharing general educational information, not professional financial guidance</li>
      </ul>

      <h3>4.2 Types of Financial Products</h3>
      <p>Financial products and services we may have affiliate relationships with include but are not limited to:</p>
      <ul>
        <li><strong>Payment Processing:</strong> Merchant accounts, payment gateways, credit card processors</li>
        <li><strong>Business Banking:</strong> Business bank accounts, business credit cards</li>
        <li><strong>Business Financing:</strong> Business loans, lines of credit, merchant cash advances</li>
        <li><strong>Accounting Software:</strong> Bookkeeping tools, accounting platforms, tax software</li>
        <li><strong>Business Insurance:</strong> Liability insurance, professional insurance, business insurance products</li>
        <li><strong>Investment Platforms:</strong> Trading platforms, robo-advisors, investment apps (informational only)</li>
        <li><strong>Financial Education:</strong> Courses, training programs, or resources about finance, investing, or wealth building</li>
      </ul>

      <h3>4.3 Not Financial Advice</h3>
      <p><strong>Nothing provided by OrenGen constitutes:</strong></p>
      <ul>
        <li>Financial advice or investment recommendations</li>
        <li>Securities analysis or investment research</li>
        <li>Recommendations to buy, sell, or hold any security or investment</li>
        <li>Personalized financial planning or wealth management</li>
        <li>Tax advice or tax planning strategies</li>
        <li>Legal advice regarding financial transactions or structures</li>
        <li>Insurance advice or recommendations</li>
      </ul>

      <h3>4.4 Information Only, Not Advice</h3>
      <p>Any information we provide about financial topics is:</p>
      <ul>
        <li>For general educational and informational purposes only</li>
        <li>Not tailored to your individual financial situation, goals, or needs</li>
        <li>Not a substitute for professional financial advice from a licensed advisor</li>
        <li>Based on our understanding and may contain errors or omissions</li>
        <li>Subject to change without notice</li>
      </ul>

      <h3>4.5 Consult Licensed Professionals</h3>
      <p><strong>Before making any financial decisions, you MUST consult with licensed, qualified professionals:</strong></p>
      <ul>
        <li><strong>Financial Advisors:</strong> SEC-registered or state-registered investment advisors for investment guidance</li>
        <li><strong>CPAs or Tax Professionals:</strong> For tax planning and tax advice</li>
        <li><strong>Attorneys:</strong> For legal aspects of financial transactions and structures</li>
        <li><strong>Insurance Professionals:</strong> Licensed insurance agents for insurance recommendations</li>
        <li><strong>Certified Financial Planners (CFP®):</strong> For comprehensive financial planning</li>
      </ul>

      <h3>4.6 Investment Risk Disclosure</h3>
      <p>If we provide any information about investments, securities, or financial markets:</p>
      <ul>
        <li><strong>All investments involve risk</strong>, including the potential loss of principal</li>
        <li>Past performance does not guarantee future results</li>
        <li>Higher returns generally involve higher risk</li>
        <li>Diversification does not guarantee profit or protect against loss</li>
        <li>You should only invest money you can afford to lose</li>
        <li>Investment decisions should be based on your individual circumstances, risk tolerance, and goals</li>
      </ul>

      <h3>4.7 No Fiduciary Duty</h3>
      <p>OrenGen does not owe you a fiduciary duty. We are not required to act in your best interest regarding financial product recommendations. Our affiliate relationships may create conflicts of interest, as we may earn compensation for products we recommend.</p>

      <h3>4.8 Regulatory Compliance</h3>
      <p>OrenGen complies with all applicable regulations regarding the promotion of financial products, including:</p>
      <ul>
        <li>FTC disclosure requirements for affiliate relationships</li>
        <li>Prohibition against providing unlicensed financial advice</li>
        <li>SEC and FINRA regulations regarding investment advice and securities</li>
        <li>State laws governing financial services and advice</li>
      </ul>
    </section>

    <!-- 5. NO WARRANTIES -->
    <section class="disclaimer-section">
      <h2>5. No Warranties or Guarantees</h2>
      <p>OrenGen provides all information, content, services, products, and materials on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, either express or implied.</p>

      <h3>5.1 Disclaimer of Warranties</h3>
      <p>We disclaim all warranties, including but not limited to:</p>
      <ul>
        <li><strong>Merchantability:</strong> Fitness for a particular purpose</li>
        <li><strong>Accuracy:</strong> Completeness, reliability, or timeliness of information</li>
        <li><strong>Performance:</strong> Uninterrupted, error-free, or secure operation</li>
        <li><strong>Results:</strong> Specific outcomes, profits, or business success</li>
        <li><strong>Non-Infringement:</strong> Freedom from third-party rights violations</li>
      </ul>

      <h3>5.2 Changes and Updates</h3>
      <p>We reserve the right to:</p>
      <ul>
        <li>Modify, update, or discontinue services at any time without notice</li>
        <li>Change pricing, features, or functionality</li>
        <li>Correct errors or inaccuracies in content</li>
        <li>Update information to reflect current knowledge or market conditions</li>
      </ul>

      <h3>5.3 Third-Party Information</h3>
      <p>Information obtained from third-party sources (partners, affiliates, data providers) is believed to be reliable but is not independently verified. We are not responsible for errors, omissions, or changes in third-party information.</p>
    </section>

    <!-- 6. LIMITATION OF LIABILITY -->
    <section class="disclaimer-section">
      <h2>6. Limitation of Liability</h2>
      <p>To the maximum extent permitted by applicable law, OrenGen and its officers, directors, employees, agents, affiliates, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:</p>
      <ul>
        <li>Your use or inability to use our services</li>
        <li>Any reliance on information provided by OrenGen</li>
        <li>Business decisions made based on our content or services</li>
        <li>Financial losses or lack of expected revenue or profit</li>
        <li>Errors, omissions, or inaccuracies in our content</li>
        <li>Unauthorized access to or use of our servers or your data</li>
        <li>Interruption or cessation of services</li>
        <li>Bugs, viruses, or other harmful code transmitted through our services</li>
        <li>Third-party products, services, or content</li>
      </ul>
    </section>

    <!-- 7. INDEMNIFICATION -->
    <section class="disclaimer-section">
      <h2>7. Your Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless OrenGen Worldwide LLC and its officers, directors, employees, agents, affiliates, and partners from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including attorneys' fees) arising from:</p>
      <ul>
        <li>Your use of our services and any decisions or actions taken based on our information</li>
        <li>Your violation of these disclaimers or our Terms and Conditions</li>
        <li>Your violation of any third-party rights, including intellectual property or privacy rights</li>
        <li>Any misrepresentation or false statement you make to us or others</li>
      </ul>
    </section>

    <!-- 8. FORWARD-LOOKING STATEMENTS -->
    <section class="disclaimer-section">
      <h2>8. Forward-Looking Statements</h2>
      <p>Our content may contain forward-looking statements about future events, projections, expectations, or trends. These statements are based on current information and assumptions and are subject to risks and uncertainties.</p>
      <p><strong>Forward-looking statements are not guarantees and may not come to fruition due to:</strong></p>
      <ul>
        <li>Changes in market conditions or economic environment</li>
        <li>Technological changes or disruptions</li>
        <li>Regulatory or legal changes</li>
        <li>Competitive pressures</li>
        <li>Unforeseen events or circumstances</li>
      </ul>
      <p>We do not undertake any obligation to update forward-looking statements to reflect actual results or changes in assumptions.</p>
    </section>

    <!-- 9. CHANGES TO DISCLAIMERS -->
    <section class="disclaimer-section">
      <h2>9. Changes to These Disclaimers</h2>
      <p>OrenGen reserves the right to update, modify, or change these disclaimers at any time. Changes are effective immediately upon posting to our website.</p>
      <p>Your continued use of our services after changes constitutes acceptance of the updated disclaimers. We encourage you to review this page periodically.</p>
      <p>The "Effective Date" at the top of this page indicates when these disclaimers were last updated.</p>
    </section>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Questions About Disclaimers?</h3>
      <p>If you have questions about these disclaimers or need clarification:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "Disclaimers Inquiry"<br>
        <strong>Mail:</strong> OrenGen Worldwide LLC<br>
        1812 Open Range Drive<br>
        Mansfield, Texas 76063
      </p>
    </div>

    <div class="highlight-box">
      <p><strong>Final Reminder:</strong> These disclaimers are part of our legal agreement with you. By using OrenGen services, you acknowledge that you have read, understood, and agreed to these disclaimers.</p>
      <p><strong>Seek Professional Advice:</strong> Always consult with qualified licensed professionals (attorneys, CPAs, financial advisors) before making important business, financial, or legal decisions.</p>
    </div>

  </div>
` }} />
  );
}
