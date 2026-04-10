import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Cookie Policy — OrenGen Worldwide",
  description: "How we use cookies and similar tracking technologies on our website and services.",
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

    .cookie-section { margin-bottom: 40px; }
    .cookie-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 800;
      color: #0B1D3A;
      margin-bottom: 16px;
      margin-top: 40px;
      padding-left: 16px;
      border-left: 4px solid #CC5500;
    }
    .cookie-section h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #0F2847;
      margin-bottom: 12px;
      margin-top: 24px;
    }
    .cookie-section p {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 16px;
    }
    .cookie-section ul, .cookie-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }
    .cookie-section li {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 8px;
    }
    .cookie-section li::marker {
      color: #CC5500;
    }
    .cookie-section strong {
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
      .cookie-section h2 { font-size: 20px; }
      .cookie-section h3 { font-size: 16px; }
  table { font-size: 12px; }
  th, td { padding: 8px; }
    }
  </style>

  <!-- HEADER -->
  <header class="page-header">
    <h1>Cookie <span class="orange">Policy</span></h1>
    <p>How we use cookies and similar tracking technologies on our website and services.</p>
    <p class="meta">Last Updated: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Your Control:</strong> This Cookie Policy explains how OrenGen Worldwide LLC uses cookies and similar technologies, what information we collect, and how you can manage your preferences. By continuing to use our website, you consent to our use of cookies as described in this policy.</p>
    </div>

    <!-- 1. WHAT ARE COOKIES -->
    <section class="cookie-section">
      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. Cookies are widely used to make websites work more efficiently and provide information to website owners.</p>

      <h3>1.1 How Cookies Work</h3>
      <p>When you visit a website, the server sends a cookie to your browser, which stores it on your device. The cookie contains a unique identifier and other information. When you return to the same website, your browser sends the cookie back to the server, allowing the website to recognize you and remember your preferences.</p>

      <h3>1.2 Types of Tracking Technologies</h3>
      <p>In addition to cookies, we may use similar tracking technologies, including:</p>
      <ul>
        <li><strong>Web Beacons (Pixels):</strong> Small graphic images embedded in web pages or emails to track user behavior</li>
        <li><strong>Local Storage:</strong> Browser-based storage that allows websites to store data locally on your device</li>
        <li><strong>Session Storage:</strong> Temporary storage that is cleared when you close your browser</li>
        <li><strong>Scripts and Tags:</strong> Code snippets that collect information about how you interact with our website</li>
        <li><strong>Device Fingerprinting:</strong> Techniques that identify your device based on its unique configuration</li>
      </ul>
      <p>Throughout this policy, we use the term "cookies" to refer to all these similar tracking technologies.</p>
    </section>

    <!-- 2. TYPES OF COOKIES WE USE -->
    <section class="cookie-section">
      <h2>2. Types of Cookies We Use</h2>
      <p>We use different types of cookies for various purposes:</p>

      <h3>2.1 Essential Cookies (Strictly Necessary)</h3>
      <p>These cookies are required for our website to function properly and cannot be disabled without severely affecting your user experience.</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Examples</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Authentication &amp; Security</td>
              <td>Session management, login credentials, CSRF protection, security tokens</td>
              <td>Session or up to 1 year</td>
            </tr>
            <tr>
              <td>Site Functionality</td>
              <td>Load balancing, routing, language preferences, accessibility settings</td>
              <td>Session or up to 6 months</td>
            </tr>
            <tr>
              <td>Legal Compliance</td>
              <td>Cookie consent preferences, GDPR compliance tracking</td>
              <td>Up to 1 year</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Legal Basis:</strong> These cookies are necessary for the performance of our services and do not require your consent under GDPR.</p>

      <h3>2.2 Performance and Analytics Cookies</h3>
      <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Analytics</td>
              <td>Track page views, user behavior, traffic sources, demographic data</td>
              <td>Up to 26 months</td>
            </tr>
            <tr>
              <td>Hotjar / Crazy Egg</td>
              <td>Heatmaps, session recordings, user journey analysis</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td>Mixpanel</td>
              <td>Product analytics, feature usage tracking, conversion funnels</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td>Custom Analytics</td>
              <td>Internal performance monitoring, error tracking, API usage metrics</td>
              <td>Up to 2 years</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>What We Learn:</strong> Pages visited, time spent on site, bounce rates, conversion paths, device types, browser information, referring websites.</p>

      <h3>2.3 Functional Cookies</h3>
      <p>These cookies enable enhanced functionality and personalization but are not essential to basic website operation.</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Examples</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User Preferences</td>
              <td>Language selection, currency, time zone, display preferences</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td>Personalization</td>
              <td>Remember your settings, customized dashboard views, saved filters</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td>Chat &amp; Support</td>
              <td>Live chat history, support ticket context, AI chatbot memory</td>
              <td>Session or 90 days</td>
            </tr>
            <tr>
              <td>Video &amp; Media</td>
              <td>Video player settings, playback position, volume preferences</td>
              <td>Up to 6 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2.4 Marketing and Advertising Cookies</h3>
      <p>These cookies track your browsing habits to deliver relevant advertisements and measure campaign effectiveness.</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Ads</td>
              <td>Display targeted ads, remarketing campaigns, conversion tracking</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td>Facebook Pixel</td>
              <td>Social media advertising, custom audiences, lookalike targeting</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td>LinkedIn Insight</td>
              <td>B2B advertising, professional targeting, lead generation</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td>Twitter/X</td>
              <td>Social media ads, engagement tracking, audience building</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td>Retargeting Platforms</td>
              <td>Display ads across partner networks, remarketing to site visitors</td>
              <td>Up to 1 year</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>How It Works:</strong> When you visit our website, these cookies may track your behavior and allow advertisers to show you relevant ads on other websites you visit.</p>
    </section>

    <!-- 3. FIRST-PARTY VS THIRD-PARTY COOKIES -->
    <section class="cookie-section">
      <h2>3. First-Party vs. Third-Party Cookies</h2>

      <h3>3.1 First-Party Cookies</h3>
      <p>First-party cookies are set directly by OrenGen and are only readable by our website. We use these for:</p>
      <ul>
        <li>Authentication and user session management</li>
        <li>Storing your preferences and settings</li>
        <li>Internal analytics and performance monitoring</li>
        <li>Shopping cart and transaction processing</li>
      </ul>

      <h3>3.2 Third-Party Cookies</h3>
      <p>Third-party cookies are set by external services we use on our website (e.g., Google Analytics, Facebook Pixel). These cookies can track you across multiple websites.</p>
      <p><strong>Common Third-Party Providers:</strong></p>
      <ul>
        <li><strong>Analytics:</strong> Google Analytics, Mixpanel, Segment</li>
        <li><strong>Advertising:</strong> Google Ads, Facebook, LinkedIn, Twitter/X</li>
        <li><strong>Customer Support:</strong> Intercom, Zendesk, Drift</li>
        <li><strong>Payment Processing:</strong> Stripe, PayPal</li>
        <li><strong>Content Delivery:</strong> Cloudflare, Amazon CloudFront</li>
      </ul>
      <p>Third-party cookies are governed by the privacy policies of their respective providers. We encourage you to review their policies for details on how they collect and use your information.</p>
    </section>

    <!-- 4. SESSION VS PERSISTENT COOKIES -->
    <section class="cookie-section">
      <h2>4. Session vs. Persistent Cookies</h2>

      <h3>4.1 Session Cookies</h3>
      <ul>
        <li><strong>Duration:</strong> Temporary cookies that expire when you close your browser</li>
        <li><strong>Purpose:</strong> Essential for navigation, form submissions, shopping carts</li>
        <li><strong>Storage:</strong> Stored in temporary memory and not written to hard disk</li>
      </ul>

      <h3>4.2 Persistent Cookies</h3>
      <ul>
        <li><strong>Duration:</strong> Remain on your device for a set period (days, months, or years)</li>
        <li><strong>Purpose:</strong> Remember login credentials, preferences, analytics data</li>
        <li><strong>Storage:</strong> Written to your device's hard disk and remain until expiration or manual deletion</li>
      </ul>
    </section>

    <!-- 5. WHY WE USE COOKIES -->
    <section class="cookie-section">
      <h2>5. Why We Use Cookies</h2>
      <p>We use cookies for several important purposes:</p>

      <h3>5.1 Essential Website Operation</h3>
      <ul>
        <li>Authenticate users and maintain secure sessions</li>
        <li>Remember items in your shopping cart or form inputs</li>
        <li>Prevent fraud and enhance security</li>
        <li>Balance server load for optimal performance</li>
      </ul>

      <h3>5.2 Improving User Experience</h3>
      <ul>
        <li>Remember your language and display preferences</li>
        <li>Personalize content based on your interests</li>
        <li>Save your settings and customization choices</li>
        <li>Pre-fill forms with saved information</li>
      </ul>

      <h3>5.3 Analytics and Performance</h3>
      <ul>
        <li>Understand how visitors use our website</li>
        <li>Identify popular content and features</li>
        <li>Detect and fix technical issues</li>
        <li>Measure the effectiveness of our services</li>
      </ul>

      <h3>5.4 Marketing and Advertising</h3>
      <ul>
        <li>Show relevant ads based on your interests</li>
        <li>Measure advertising campaign performance</li>
        <li>Prevent you from seeing the same ad repeatedly</li>
        <li>Build audience profiles for targeted marketing</li>
      </ul>
    </section>

    <!-- 6. MANAGING COOKIES -->
    <section class="cookie-section">
      <h2>6. How to Manage and Delete Cookies</h2>
      <p>You have several options to control and manage cookies on your device:</p>

      <h3>6.1 Browser Settings</h3>
      <p>Most web browsers allow you to control cookies through their settings. You can typically:</p>
      <ul>
        <li>View which cookies are stored on your device</li>
        <li>Delete all or specific cookies</li>
        <li>Block cookies from specific websites</li>
        <li>Block all third-party cookies</li>
        <li>Clear cookies when you close your browser</li>
        <li>Receive alerts before a cookie is stored</li>
      </ul>

      <h3>6.2 Browser-Specific Instructions</h3>
      <ul>
        <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
        <li><strong>Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data</li>
        <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
        <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
        <li><strong>Opera:</strong> Settings → Advanced → Privacy &amp; Security → Cookies</li>
      </ul>
      <p>For detailed instructions, visit your browser's help documentation or support website.</p>

      <h3>6.3 Third-Party Opt-Out Tools</h3>
      <p>You can opt-out of targeted advertising from participating companies:</p>
      <ul>
        <li><strong>Digital Advertising Alliance (DAA):</strong> <a href="http://optout.aboutads.info/" target="_blank">optout.aboutads.info</a></li>
        <li><strong>Network Advertising Initiative (NAI):</strong> <a href="http://optout.networkadvertising.org/" target="_blank">optout.networkadvertising.org</a></li>
        <li><strong>European Interactive Digital Advertising Alliance:</strong> <a href="http://www.youronlinechoices.eu/" target="_blank">youronlinechoices.eu</a></li>
        <li><strong>Google Ads Settings:</strong> <a href="https://adssettings.google.com/" target="_blank">adssettings.google.com</a></li>
        <li><strong>Facebook Ad Preferences:</strong> <a href="https://www.facebook.com/ads/preferences/" target="_blank">facebook.com/ads/preferences</a></li>
      </ul>

      <h3>6.4 Do Not Track (DNT)</h3>
      <p>Some browsers offer a "Do Not Track" (DNT) signal. While we respect privacy preferences, there is currently no industry-wide standard for how to respond to DNT signals. We honor DNT signals where technically feasible.</p>

      <h3>6.5 Mobile Devices</h3>
      <p>Mobile device operating systems provide settings to limit ad tracking:</p>
      <ul>
        <li><strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking → Disable "Allow Apps to Request to Track"</li>
        <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
      </ul>

      <h3>6.6 Consequences of Disabling Cookies</h3>
      <p><strong>Important:</strong> If you disable or delete cookies, some parts of our website may not function properly. You may experience:</p>
      <ul>
        <li>Inability to log in or maintain your session</li>
        <li>Loss of personalization and saved preferences</li>
        <li>Shopping cart items not being saved</li>
        <li>Difficulty completing forms or transactions</li>
        <li>Reduced website functionality and performance</li>
      </ul>
      <p>Essential cookies required for basic website operation cannot be disabled through our consent tool, but you can block them through your browser settings (though this may prevent you from using the website).</p>
    </section>

    <!-- 7. COOKIE CONSENT -->
    <section class="cookie-section">
      <h2>7. Cookie Consent and Your Choices</h2>

      <h3>7.1 Consent Mechanism</h3>
      <p>When you first visit our website, you will see a cookie consent banner that allows you to:</p>
      <ul>
        <li>Accept all cookies</li>
        <li>Reject non-essential cookies</li>
        <li>Customize your cookie preferences by category</li>
        <li>Learn more about our cookie practices</li>
      </ul>

      <h3>7.2 Changing Your Preferences</h3>
      <p>You can change your cookie preferences at any time by:</p>
      <ul>
        <li>Clicking the cookie settings link in our website footer</li>
        <li>Accessing cookie preferences in your account settings</li>
        <li>Contacting us at <a href="mailto:support@orengen.io">support@orengen.io</a></li>
      </ul>

      <h3>7.3 Withdrawal of Consent</h3>
      <p>You can withdraw your consent for non-essential cookies at any time without affecting the lawfulness of processing based on consent before withdrawal.</p>

      <h3>7.4 EEA, UK, and Swiss Residents</h3>
      <p>For visitors from the European Economic Area, United Kingdom, and Switzerland, we obtain explicit consent before placing non-essential cookies on your device, in compliance with the EU Cookie Directive (ePrivacy Directive) and GDPR.</p>
    </section>

    <!-- 8. COOKIES AND PERSONAL DATA -->
    <section class="cookie-section">
      <h2>8. Cookies and Personal Data</h2>
      <p>Some cookies may collect information that can be considered personal data under privacy laws such as GDPR and CCPA.</p>

      <h3>8.1 What Information Cookies May Collect</h3>
      <ul>
        <li><strong>Identifiers:</strong> IP address, device ID, browser fingerprint, user ID</li>
        <li><strong>Behavioral Data:</strong> Pages visited, links clicked, time spent on site, search queries</li>
        <li><strong>Device Information:</strong> Browser type, operating system, screen resolution, language settings</li>
        <li><strong>Location Data:</strong> General geographic location based on IP address</li>
      </ul>

      <h3>8.2 Legal Basis for Processing</h3>
      <p>We process cookie data based on:</p>
      <ul>
        <li><strong>Consent:</strong> For non-essential cookies (analytics, marketing)</li>
        <li><strong>Legitimate Interests:</strong> For security, fraud prevention, and service improvement</li>
        <li><strong>Contractual Necessity:</strong> For essential cookies required to provide services</li>
      </ul>

      <h3>8.3 Data Protection Rights</h3>
      <p>You have rights regarding personal data collected through cookies, including:</p>
      <ul>
        <li>Right to access your data</li>
        <li>Right to rectification or deletion</li>
        <li>Right to restrict processing</li>
        <li>Right to data portability</li>
        <li>Right to object to processing</li>
      </ul>
      <p>To exercise these rights, please contact us at <a href="mailto:support@orengen.io">support@orengen.io</a> or refer to our <a href="/privacy-policy">Privacy Policy</a> for more information.</p>
    </section>

    <!-- 9. CHANGES TO COOKIE POLICY -->
    <section class="cookie-section">
      <h2>9. Changes to This Cookie Policy</h2>
      <p>We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices.</p>

      <h3>9.1 How We Notify You</h3>
      <p>When we make material changes to this policy, we will:</p>
      <ul>
        <li>Update the "Last Updated" date at the top of this page</li>
        <li>Display a prominent notice on our website</li>
        <li>Request renewed consent for any new cookie types (where required by law)</li>
        <li>Send email notifications to registered users (for significant changes)</li>
      </ul>

      <h3>9.2 Your Continued Use</h3>
      <p>By continuing to use our website after changes to this Cookie Policy, you acknowledge and accept the updated terms.</p>

      <h3>9.3 Previous Versions</h3>
      <p>Previous versions of this Cookie Policy are available upon request. Contact us at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </section>

    <!-- 10. ADDITIONAL INFORMATION -->
    <section class="cookie-section">
      <h2>10. Additional Information and Resources</h2>

      <h3>10.1 Related Policies</h3>
      <p>For more information about how we collect, use, and protect your data, please review:</p>
      <ul>
        <li><a href="/privacy-policy">Privacy Policy</a> - Our comprehensive data protection practices</li>
        <li><a href="/terms">Terms and Conditions</a> - Legal terms governing service use</li>
      </ul>

      <h3>10.2 External Resources</h3>
      <p>To learn more about cookies and online privacy, visit:</p>
      <ul>
        <li><strong>All About Cookies:</strong> <a href="https://www.allaboutcookies.org/" target="_blank">allaboutcookies.org</a></li>
        <li><strong>ICC UK Cookie Guide:</strong> <a href="https://www.cookielaw.org/" target="_blank">cookielaw.org</a></li>
        <li><strong>EU Cookie Directive:</strong> <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32002L0058" target="_blank">ePrivacy Directive</a></li>
      </ul>
    </section>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Questions About Cookies?</h3>
      <p>If you have questions about our use of cookies or would like assistance managing your preferences:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "Cookie Policy Inquiry"<br>
        <strong>Mail:</strong> OrenGen Worldwide LLC<br>
        1812 Open Range Drive<br>
        Mansfield, Texas 76063
      </p>
      <p><strong>Data Protection Officer:</strong> For privacy-related concerns, contact our Data Protection Officer at <a href="mailto:support@orengen.io">support@orengen.io</a></p>
    </div>

    <div class="highlight-box">
      <p><strong>Your Privacy Matters:</strong> We are committed to transparency about how we use cookies and respecting your privacy choices. You maintain full control over non-essential cookies and can change your preferences at any time.</p>
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

    .cookie-section { margin-bottom: 40px; }
    .cookie-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 24px;
      font-weight: 800;
      color: #0B1D3A;
      margin-bottom: 16px;
      margin-top: 40px;
      padding-left: 16px;
      border-left: 4px solid #CC5500;
    }
    .cookie-section h3 {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 700;
      color: #0F2847;
      margin-bottom: 12px;
      margin-top: 24px;
    }
    .cookie-section p {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 16px;
    }
    .cookie-section ul, .cookie-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }
    .cookie-section li {
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: #374151;
      margin-bottom: 8px;
    }
    .cookie-section li::marker {
      color: #CC5500;
    }
    .cookie-section strong {
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
      .cookie-section h2 { font-size: 20px; }
      .cookie-section h3 { font-size: 16px; }
  table { font-size: 12px; }
  th, td { padding: 8px; }
    }
  </style>

  <!-- HEADER -->
  <header class="page-header">
    <h1>Cookie <span class="orange">Policy</span></h1>
    <p>How we use cookies and similar tracking technologies on our website and services.</p>
    <p class="meta">Last Updated: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Your Control:</strong> This Cookie Policy explains how OrenGen Worldwide LLC uses cookies and similar technologies, what information we collect, and how you can manage your preferences. By continuing to use our website, you consent to our use of cookies as described in this policy.</p>
    </div>

    <!-- 1. WHAT ARE COOKIES -->
    <section class="cookie-section">
      <h2>1. What Are Cookies?</h2>
      <p>Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit a website. Cookies are widely used to make websites work more efficiently and provide information to website owners.</p>

      <h3>1.1 How Cookies Work</h3>
      <p>When you visit a website, the server sends a cookie to your browser, which stores it on your device. The cookie contains a unique identifier and other information. When you return to the same website, your browser sends the cookie back to the server, allowing the website to recognize you and remember your preferences.</p>

      <h3>1.2 Types of Tracking Technologies</h3>
      <p>In addition to cookies, we may use similar tracking technologies, including:</p>
      <ul>
        <li><strong>Web Beacons (Pixels):</strong> Small graphic images embedded in web pages or emails to track user behavior</li>
        <li><strong>Local Storage:</strong> Browser-based storage that allows websites to store data locally on your device</li>
        <li><strong>Session Storage:</strong> Temporary storage that is cleared when you close your browser</li>
        <li><strong>Scripts and Tags:</strong> Code snippets that collect information about how you interact with our website</li>
        <li><strong>Device Fingerprinting:</strong> Techniques that identify your device based on its unique configuration</li>
      </ul>
      <p>Throughout this policy, we use the term "cookies" to refer to all these similar tracking technologies.</p>
    </section>

    <!-- 2. TYPES OF COOKIES WE USE -->
    <section class="cookie-section">
      <h2>2. Types of Cookies We Use</h2>
      <p>We use different types of cookies for various purposes:</p>

      <h3>2.1 Essential Cookies (Strictly Necessary)</h3>
      <p>These cookies are required for our website to function properly and cannot be disabled without severely affecting your user experience.</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Examples</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Authentication &amp; Security</td>
              <td>Session management, login credentials, CSRF protection, security tokens</td>
              <td>Session or up to 1 year</td>
            </tr>
            <tr>
              <td>Site Functionality</td>
              <td>Load balancing, routing, language preferences, accessibility settings</td>
              <td>Session or up to 6 months</td>
            </tr>
            <tr>
              <td>Legal Compliance</td>
              <td>Cookie consent preferences, GDPR compliance tracking</td>
              <td>Up to 1 year</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Legal Basis:</strong> These cookies are necessary for the performance of our services and do not require your consent under GDPR.</p>

      <h3>2.2 Performance and Analytics Cookies</h3>
      <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Analytics</td>
              <td>Track page views, user behavior, traffic sources, demographic data</td>
              <td>Up to 26 months</td>
            </tr>
            <tr>
              <td>Hotjar / Crazy Egg</td>
              <td>Heatmaps, session recordings, user journey analysis</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td>Mixpanel</td>
              <td>Product analytics, feature usage tracking, conversion funnels</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td>Custom Analytics</td>
              <td>Internal performance monitoring, error tracking, API usage metrics</td>
              <td>Up to 2 years</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>What We Learn:</strong> Pages visited, time spent on site, bounce rates, conversion paths, device types, browser information, referring websites.</p>

      <h3>2.3 Functional Cookies</h3>
      <p>These cookies enable enhanced functionality and personalization but are not essential to basic website operation.</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Examples</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User Preferences</td>
              <td>Language selection, currency, time zone, display preferences</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td>Personalization</td>
              <td>Remember your settings, customized dashboard views, saved filters</td>
              <td>Up to 1 year</td>
            </tr>
            <tr>
              <td>Chat &amp; Support</td>
              <td>Live chat history, support ticket context, AI chatbot memory</td>
              <td>Session or 90 days</td>
            </tr>
            <tr>
              <td>Video &amp; Media</td>
              <td>Video player settings, playback position, volume preferences</td>
              <td>Up to 6 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2.4 Marketing and Advertising Cookies</h3>
      <p>These cookies track your browsing habits to deliver relevant advertisements and measure campaign effectiveness.</p>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Ads</td>
              <td>Display targeted ads, remarketing campaigns, conversion tracking</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td>Facebook Pixel</td>
              <td>Social media advertising, custom audiences, lookalike targeting</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td>LinkedIn Insight</td>
              <td>B2B advertising, professional targeting, lead generation</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td>Twitter/X</td>
              <td>Social media ads, engagement tracking, audience building</td>
              <td>Up to 2 years</td>
            </tr>
            <tr>
              <td>Retargeting Platforms</td>
              <td>Display ads across partner networks, remarketing to site visitors</td>
              <td>Up to 1 year</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>How It Works:</strong> When you visit our website, these cookies may track your behavior and allow advertisers to show you relevant ads on other websites you visit.</p>
    </section>

    <!-- 3. FIRST-PARTY VS THIRD-PARTY COOKIES -->
    <section class="cookie-section">
      <h2>3. First-Party vs. Third-Party Cookies</h2>

      <h3>3.1 First-Party Cookies</h3>
      <p>First-party cookies are set directly by OrenGen and are only readable by our website. We use these for:</p>
      <ul>
        <li>Authentication and user session management</li>
        <li>Storing your preferences and settings</li>
        <li>Internal analytics and performance monitoring</li>
        <li>Shopping cart and transaction processing</li>
      </ul>

      <h3>3.2 Third-Party Cookies</h3>
      <p>Third-party cookies are set by external services we use on our website (e.g., Google Analytics, Facebook Pixel). These cookies can track you across multiple websites.</p>
      <p><strong>Common Third-Party Providers:</strong></p>
      <ul>
        <li><strong>Analytics:</strong> Google Analytics, Mixpanel, Segment</li>
        <li><strong>Advertising:</strong> Google Ads, Facebook, LinkedIn, Twitter/X</li>
        <li><strong>Customer Support:</strong> Intercom, Zendesk, Drift</li>
        <li><strong>Payment Processing:</strong> Stripe, PayPal</li>
        <li><strong>Content Delivery:</strong> Cloudflare, Amazon CloudFront</li>
      </ul>
      <p>Third-party cookies are governed by the privacy policies of their respective providers. We encourage you to review their policies for details on how they collect and use your information.</p>
    </section>

    <!-- 4. SESSION VS PERSISTENT COOKIES -->
    <section class="cookie-section">
      <h2>4. Session vs. Persistent Cookies</h2>

      <h3>4.1 Session Cookies</h3>
      <ul>
        <li><strong>Duration:</strong> Temporary cookies that expire when you close your browser</li>
        <li><strong>Purpose:</strong> Essential for navigation, form submissions, shopping carts</li>
        <li><strong>Storage:</strong> Stored in temporary memory and not written to hard disk</li>
      </ul>

      <h3>4.2 Persistent Cookies</h3>
      <ul>
        <li><strong>Duration:</strong> Remain on your device for a set period (days, months, or years)</li>
        <li><strong>Purpose:</strong> Remember login credentials, preferences, analytics data</li>
        <li><strong>Storage:</strong> Written to your device's hard disk and remain until expiration or manual deletion</li>
      </ul>
    </section>

    <!-- 5. WHY WE USE COOKIES -->
    <section class="cookie-section">
      <h2>5. Why We Use Cookies</h2>
      <p>We use cookies for several important purposes:</p>

      <h3>5.1 Essential Website Operation</h3>
      <ul>
        <li>Authenticate users and maintain secure sessions</li>
        <li>Remember items in your shopping cart or form inputs</li>
        <li>Prevent fraud and enhance security</li>
        <li>Balance server load for optimal performance</li>
      </ul>

      <h3>5.2 Improving User Experience</h3>
      <ul>
        <li>Remember your language and display preferences</li>
        <li>Personalize content based on your interests</li>
        <li>Save your settings and customization choices</li>
        <li>Pre-fill forms with saved information</li>
      </ul>

      <h3>5.3 Analytics and Performance</h3>
      <ul>
        <li>Understand how visitors use our website</li>
        <li>Identify popular content and features</li>
        <li>Detect and fix technical issues</li>
        <li>Measure the effectiveness of our services</li>
      </ul>

      <h3>5.4 Marketing and Advertising</h3>
      <ul>
        <li>Show relevant ads based on your interests</li>
        <li>Measure advertising campaign performance</li>
        <li>Prevent you from seeing the same ad repeatedly</li>
        <li>Build audience profiles for targeted marketing</li>
      </ul>
    </section>

    <!-- 6. MANAGING COOKIES -->
    <section class="cookie-section">
      <h2>6. How to Manage and Delete Cookies</h2>
      <p>You have several options to control and manage cookies on your device:</p>

      <h3>6.1 Browser Settings</h3>
      <p>Most web browsers allow you to control cookies through their settings. You can typically:</p>
      <ul>
        <li>View which cookies are stored on your device</li>
        <li>Delete all or specific cookies</li>
        <li>Block cookies from specific websites</li>
        <li>Block all third-party cookies</li>
        <li>Clear cookies when you close your browser</li>
        <li>Receive alerts before a cookie is stored</li>
      </ul>

      <h3>6.2 Browser-Specific Instructions</h3>
      <ul>
        <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
        <li><strong>Mozilla Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data</li>
        <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
        <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
        <li><strong>Opera:</strong> Settings → Advanced → Privacy &amp; Security → Cookies</li>
      </ul>
      <p>For detailed instructions, visit your browser's help documentation or support website.</p>

      <h3>6.3 Third-Party Opt-Out Tools</h3>
      <p>You can opt-out of targeted advertising from participating companies:</p>
      <ul>
        <li><strong>Digital Advertising Alliance (DAA):</strong> <a href="http://optout.aboutads.info/" target="_blank">optout.aboutads.info</a></li>
        <li><strong>Network Advertising Initiative (NAI):</strong> <a href="http://optout.networkadvertising.org/" target="_blank">optout.networkadvertising.org</a></li>
        <li><strong>European Interactive Digital Advertising Alliance:</strong> <a href="http://www.youronlinechoices.eu/" target="_blank">youronlinechoices.eu</a></li>
        <li><strong>Google Ads Settings:</strong> <a href="https://adssettings.google.com/" target="_blank">adssettings.google.com</a></li>
        <li><strong>Facebook Ad Preferences:</strong> <a href="https://www.facebook.com/ads/preferences/" target="_blank">facebook.com/ads/preferences</a></li>
      </ul>

      <h3>6.4 Do Not Track (DNT)</h3>
      <p>Some browsers offer a "Do Not Track" (DNT) signal. While we respect privacy preferences, there is currently no industry-wide standard for how to respond to DNT signals. We honor DNT signals where technically feasible.</p>

      <h3>6.5 Mobile Devices</h3>
      <p>Mobile device operating systems provide settings to limit ad tracking:</p>
      <ul>
        <li><strong>iOS:</strong> Settings → Privacy &amp; Security → Tracking → Disable "Allow Apps to Request to Track"</li>
        <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
      </ul>

      <h3>6.6 Consequences of Disabling Cookies</h3>
      <p><strong>Important:</strong> If you disable or delete cookies, some parts of our website may not function properly. You may experience:</p>
      <ul>
        <li>Inability to log in or maintain your session</li>
        <li>Loss of personalization and saved preferences</li>
        <li>Shopping cart items not being saved</li>
        <li>Difficulty completing forms or transactions</li>
        <li>Reduced website functionality and performance</li>
      </ul>
      <p>Essential cookies required for basic website operation cannot be disabled through our consent tool, but you can block them through your browser settings (though this may prevent you from using the website).</p>
    </section>

    <!-- 7. COOKIE CONSENT -->
    <section class="cookie-section">
      <h2>7. Cookie Consent and Your Choices</h2>

      <h3>7.1 Consent Mechanism</h3>
      <p>When you first visit our website, you will see a cookie consent banner that allows you to:</p>
      <ul>
        <li>Accept all cookies</li>
        <li>Reject non-essential cookies</li>
        <li>Customize your cookie preferences by category</li>
        <li>Learn more about our cookie practices</li>
      </ul>

      <h3>7.2 Changing Your Preferences</h3>
      <p>You can change your cookie preferences at any time by:</p>
      <ul>
        <li>Clicking the cookie settings link in our website footer</li>
        <li>Accessing cookie preferences in your account settings</li>
        <li>Contacting us at <a href="mailto:support@orengen.io">support@orengen.io</a></li>
      </ul>

      <h3>7.3 Withdrawal of Consent</h3>
      <p>You can withdraw your consent for non-essential cookies at any time without affecting the lawfulness of processing based on consent before withdrawal.</p>

      <h3>7.4 EEA, UK, and Swiss Residents</h3>
      <p>For visitors from the European Economic Area, United Kingdom, and Switzerland, we obtain explicit consent before placing non-essential cookies on your device, in compliance with the EU Cookie Directive (ePrivacy Directive) and GDPR.</p>
    </section>

    <!-- 8. COOKIES AND PERSONAL DATA -->
    <section class="cookie-section">
      <h2>8. Cookies and Personal Data</h2>
      <p>Some cookies may collect information that can be considered personal data under privacy laws such as GDPR and CCPA.</p>

      <h3>8.1 What Information Cookies May Collect</h3>
      <ul>
        <li><strong>Identifiers:</strong> IP address, device ID, browser fingerprint, user ID</li>
        <li><strong>Behavioral Data:</strong> Pages visited, links clicked, time spent on site, search queries</li>
        <li><strong>Device Information:</strong> Browser type, operating system, screen resolution, language settings</li>
        <li><strong>Location Data:</strong> General geographic location based on IP address</li>
      </ul>

      <h3>8.2 Legal Basis for Processing</h3>
      <p>We process cookie data based on:</p>
      <ul>
        <li><strong>Consent:</strong> For non-essential cookies (analytics, marketing)</li>
        <li><strong>Legitimate Interests:</strong> For security, fraud prevention, and service improvement</li>
        <li><strong>Contractual Necessity:</strong> For essential cookies required to provide services</li>
      </ul>

      <h3>8.3 Data Protection Rights</h3>
      <p>You have rights regarding personal data collected through cookies, including:</p>
      <ul>
        <li>Right to access your data</li>
        <li>Right to rectification or deletion</li>
        <li>Right to restrict processing</li>
        <li>Right to data portability</li>
        <li>Right to object to processing</li>
      </ul>
      <p>To exercise these rights, please contact us at <a href="mailto:support@orengen.io">support@orengen.io</a> or refer to our <a href="/privacy-policy">Privacy Policy</a> for more information.</p>
    </section>

    <!-- 9. CHANGES TO COOKIE POLICY -->
    <section class="cookie-section">
      <h2>9. Changes to This Cookie Policy</h2>
      <p>We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices.</p>

      <h3>9.1 How We Notify You</h3>
      <p>When we make material changes to this policy, we will:</p>
      <ul>
        <li>Update the "Last Updated" date at the top of this page</li>
        <li>Display a prominent notice on our website</li>
        <li>Request renewed consent for any new cookie types (where required by law)</li>
        <li>Send email notifications to registered users (for significant changes)</li>
      </ul>

      <h3>9.2 Your Continued Use</h3>
      <p>By continuing to use our website after changes to this Cookie Policy, you acknowledge and accept the updated terms.</p>

      <h3>9.3 Previous Versions</h3>
      <p>Previous versions of this Cookie Policy are available upon request. Contact us at <a href="mailto:support@orengen.io">support@orengen.io</a>.</p>
    </section>

    <!-- 10. ADDITIONAL INFORMATION -->
    <section class="cookie-section">
      <h2>10. Additional Information and Resources</h2>

      <h3>10.1 Related Policies</h3>
      <p>For more information about how we collect, use, and protect your data, please review:</p>
      <ul>
        <li><a href="/privacy-policy">Privacy Policy</a> - Our comprehensive data protection practices</li>
        <li><a href="/terms">Terms and Conditions</a> - Legal terms governing service use</li>
      </ul>

      <h3>10.2 External Resources</h3>
      <p>To learn more about cookies and online privacy, visit:</p>
      <ul>
        <li><strong>All About Cookies:</strong> <a href="https://www.allaboutcookies.org/" target="_blank">allaboutcookies.org</a></li>
        <li><strong>ICC UK Cookie Guide:</strong> <a href="https://www.cookielaw.org/" target="_blank">cookielaw.org</a></li>
        <li><strong>EU Cookie Directive:</strong> <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32002L0058" target="_blank">ePrivacy Directive</a></li>
      </ul>
    </section>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Questions About Cookies?</h3>
      <p>If you have questions about our use of cookies or would like assistance managing your preferences:</p>
      <p>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "Cookie Policy Inquiry"<br>
        <strong>Mail:</strong> OrenGen Worldwide LLC<br>
        1812 Open Range Drive<br>
        Mansfield, Texas 76063
      </p>
      <p><strong>Data Protection Officer:</strong> For privacy-related concerns, contact our Data Protection Officer at <a href="mailto:support@orengen.io">support@orengen.io</a></p>
    </div>

    <div class="highlight-box">
      <p><strong>Your Privacy Matters:</strong> We are committed to transparency about how we use cookies and respecting your privacy choices. You maintain full control over non-essential cookies and can change your preferences at any time.</p>
    </div>

  </div>
` }} />
  );
}
