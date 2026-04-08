import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Copyright Notice — OrenGen Worldwide",
  description: "Protecting intellectual property rights and DMCA compliance procedures.",
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

    .content-wrapper {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px 80px;
    }

    .copyright-section {
      margin-bottom: 40px;
    }

    .copyright-section h2 {
      font-family: 'League Spartan', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--oren-orange);
      margin-bottom: 16px;
      margin-top: 40px;
    }

    .copyright-section h3 {
      font-family: 'League Spartan', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: var(--foreground);
      margin-bottom: 12px;
      margin-top: 24px;
    }

    .copyright-section p {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 16px;
    }

    .copyright-section ul, .copyright-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }

    .copyright-section li {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 8px;
    }

    .copyright-section strong {
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

    .dmca-box {
      background: rgba(0, 51, 102, 0.1);
      border: 1px solid rgba(0, 51, 102, 0.3);
      padding: 24px;
      margin: 24px 0;
      border-radius: 8px;
    }

    .dmca-box h3 {
      margin-top: 0;
      color: #003366;
      font-family: 'League Spartan', sans-serif;
      font-size: 20px;
      margin-bottom: 16px;
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

    .warning-box {
      background: rgba(204, 85, 0, 0.2);
      border: 2px solid var(--oren-orange);
      padding: 20px;
      margin: 24px 0;
      border-radius: 8px;
    }

    .warning-box h3 {
      margin-top: 0;
      color: var(--oren-orange);
    }

    @media (max-width: 768px) {
      .page-header {
        padding: 60px 20px 40px;
      }

      .content-wrapper {
        padding: 0 20px 60px;
      }

      .copyright-section h2 {
        font-size: 20px;
      }

      .copyright-section h3 {
        font-size: 16px;
      }
    }
  </style>

  <!-- HEADER -->
  <header class="page-header">
    <h1>Copyright <span class="orange">Notice</span></h1>
    <p>Protecting intellectual property rights and DMCA compliance procedures.</p>
    <p class="meta">Effective Date: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Respecting Intellectual Property:</strong> OrenGen Worldwide LLC respects the intellectual property rights of others and expects our users to do the same. This Copyright Notice explains our copyright ownership, DMCA procedures, and how to report copyright infringement.</p>
    </div>

    <!-- 1. COPYRIGHT OWNERSHIP -->
    <section class="copyright-section">
      <h2>1. OrenGen Copyright Ownership</h2>
      <p><strong>© 2026 OrenGen Worldwide LLC. All Rights Reserved.</strong></p>

      <p>Unless otherwise stated, all content, materials, software, code, designs, graphics, logos, trademarks, and other intellectual property on OrenGen's websites, platforms, and services are owned by or licensed to OrenGen Worldwide LLC and are protected by United States and international copyright laws, trademark laws, and other intellectual property rights.</p>

      <h3>1.1 Protected Works Include:</h3>
      <ul>
        <li><strong>Software and Code:</strong> All proprietary software, source code, object code, algorithms, and technical specifications</li>
        <li><strong>AI Technology:</strong> AI models, training data, neural networks, and machine learning systems including Buy-Lingual™ AI-Agents</li>
        <li><strong>Website Content:</strong> Text, articles, blog posts, documentation, tutorials, and educational materials</li>
        <li><strong>Visual Content:</strong> Graphics, logos, icons, images, photographs, videos, and animations</li>
        <li><strong>Audio Content:</strong> Voice recordings, audio clips, sound effects, and music</li>
        <li><strong>User Interfaces:</strong> Design elements, layout, navigation, user experience (UX), and user interface (UI) designs</li>
        <li><strong>Marketing Materials:</strong> Advertisements, promotional content, brochures, presentations, and sales materials</li>
        <li><strong>Documentation:</strong> Technical documentation, API references, user guides, and help resources</li>
      </ul>

      <h3>1.2 Copyright Notice Format</h3>
      <p>OrenGen's copyright notice appears as:</p>
      <p><em>© 2026 OrenGen Worldwide LLC. All Rights Reserved.</em></p>
      <p>or</p>
      <p><em>Copyright © 2026 OrenGen Worldwide LLC</em></p>

      <h3>1.3 Reservation of Rights</h3>
      <p>All rights not expressly granted in our <a href="/termsandconditions">Terms and Conditions</a> are reserved by OrenGen. No license or right to use OrenGen's copyrighted materials is granted except as explicitly stated in writing.</p>
    </section>

    <!-- 2. USER RIGHTS AND RESTRICTIONS -->
    <section class="copyright-section">
      <h2>2. User Rights and Restrictions</h2>

      <h3>2.1 Limited License to Use</h3>
      <p>Subject to your compliance with our Terms and Conditions, OrenGen grants you a limited, non-exclusive, non-transferable, revocable license to:</p>
      <ul>
        <li>Access and use our services for their intended purpose</li>
        <li>View and download content for personal, non-commercial use</li>
        <li>Print individual pages for personal reference</li>
        <li>Share links to our publicly available content</li>
      </ul>

      <h3>2.2 Prohibited Uses</h3>
      <p>You may NOT, without express written permission from OrenGen:</p>
      <ul>
        <li><strong>Copy or Reproduce:</strong> Reproduce, duplicate, copy, or redistribute substantial portions of our content</li>
        <li><strong>Modify or Create Derivatives:</strong> Modify, adapt, translate, or create derivative works based on our materials</li>
        <li><strong>Reverse Engineer:</strong> Reverse engineer, decompile, or disassemble our software or systems</li>
        <li><strong>Commercial Use:</strong> Use our content for commercial purposes without a license</li>
        <li><strong>Remove Notices:</strong> Remove, alter, or obscure copyright notices, trademarks, or other proprietary markings</li>
        <li><strong>Frame or Mirror:</strong> Frame, mirror, or inline link to our content on other websites</li>
        <li><strong>Data Mining:</strong> Use automated tools to scrape, extract, or harvest content from our platforms</li>
        <li><strong>Resell or Redistribute:</strong> Sell, rent, lease, sublicense, or redistribute our copyrighted materials</li>
      </ul>
    </section>

    <!-- 3. USER-GENERATED CONTENT -->
    <section class="copyright-section">
      <h2>3. User-Generated Content</h2>

      <h3>3.1 Your Content Ownership</h3>
      <p>You retain ownership of any content, data, files, or materials you upload, submit, or provide through OrenGen services ("User Content"). You do not transfer ownership to OrenGen.</p>

      <h3>3.2 License Grant to OrenGen</h3>
      <p>By uploading or submitting User Content to our services, you grant OrenGen a worldwide, non-exclusive, royalty-free, sublicensable, transferable license to:</p>
      <ul>
        <li>Use, reproduce, store, and process your content to provide services</li>
        <li>Display, perform, and distribute your content as necessary for service operation</li>
        <li>Create derivative works for service improvement and AI training (anonymized/aggregated where appropriate)</li>
        <li>Backup, archive, and secure your content</li>
      </ul>
      <p>This license terminates when you delete your content or close your account, except for content that has been shared with others or used in aggregated/anonymized data.</p>

      <h3>3.3 Your Representations and Warranties</h3>
      <p>When you submit User Content, you represent and warrant that:</p>
      <ul>
        <li>You own or have necessary rights, licenses, and permissions to use and grant rights to your content</li>
        <li>Your content does not infringe copyrights, trademarks, or other intellectual property rights</li>
        <li>Your content complies with all applicable laws and our <a href="/acceptable-use">Acceptable Use Policy</a></li>
        <li>You have obtained all necessary consents and releases from individuals featured in your content</li>
      </ul>

      <h3>3.4 User Content Restrictions</h3>
      <p>You may not upload or submit content that:</p>
      <ul>
        <li>Infringes third-party copyrights, patents, trademarks, trade secrets, or other rights</li>
        <li>Contains unlicensed or unauthorized copyrighted material</li>
        <li>Violates rights of publicity or privacy</li>
        <li>Contains confidential information belonging to others</li>
      </ul>
    </section>

    <!-- 4. DMCA COMPLIANCE -->
    <section class="copyright-section">
      <h2>4. DMCA Notice and Takedown Procedure</h2>
      <p>OrenGen complies with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512. We respond to valid notices of copyright infringement and will remove or disable access to infringing material when properly notified.</p>

      <h3>4.1 Designated DMCA Agent</h3>
      <p>OrenGen's designated agent to receive notifications of claimed copyright infringement is:</p>
      <div class="dmca-box">
        <h3>DMCA Agent Contact Information</h3>
        <p>
          <strong>Name:</strong> Copyright Agent<br>
          <strong>Company:</strong> OrenGen Worldwide LLC<br>
          <strong>Address:</strong> 1812 Open Range Drive, Mansfield, Texas 76063<br>
          <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
          <strong>Subject Line:</strong> "DMCA Takedown Notice"
        </p>
      </div>

      <h3>4.2 Filing a DMCA Takedown Notice</h3>
      <p>To file a DMCA takedown notice, you must provide a written communication that includes <strong>ALL</strong> of the following elements as required by 17 U.S.C. § 512(c)(3):</p>

      <ol>
        <li><strong>Identification of Copyrighted Work:</strong> Identify the copyrighted work you claim has been infringed. If multiple works are involved, provide a representative list.</li>
        <li><strong>Identification of Infringing Material:</strong> Identify the material that you claim is infringing and provide sufficient information to locate it (e.g., specific URLs, file names, account names, timestamps).</li>
        <li><strong>Contact Information:</strong> Provide your name, address, telephone number, and email address so we can contact you.</li>
        <li><strong>Good Faith Statement:</strong> Include the following statement: <em>"I have a good faith belief that the use of the copyrighted material described above is not authorized by the copyright owner, its agent, or the law."</em></li>
        <li><strong>Accuracy Statement:</strong> Include the following statement: <em>"I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed."</em></li>
        <li><strong>Physical or Electronic Signature:</strong> Sign the notice physically or electronically (typing your full legal name constitutes an electronic signature).</li>
      </ol>

      <h3>4.3 Incomplete or Invalid Notices</h3>
      <p>DMCA notices that do not include all required elements will not be processed. We may contact you to request missing information, but we are not obligated to do so.</p>

      <h3>4.4 Our Response to Valid Notices</h3>
      <p>Upon receipt of a valid DMCA takedown notice, OrenGen will:</p>
      <ul>
        <li>Promptly remove or disable access to the allegedly infringing material</li>
        <li>Notify the user who posted the material that it has been removed</li>
        <li>Provide the user with a copy of the DMCA notice</li>
        <li>Inform the user of their right to file a counter-notification</li>
      </ul>

      <h3>4.5 Processing Timeline</h3>
      <ul>
        <li>Valid notices are typically processed within 1-3 business days</li>
        <li>Expedited processing available for urgent cases (child exploitation, identity theft, etc.)</li>
        <li>You will receive confirmation when action has been taken</li>
      </ul>
    </section>

    <!-- 5. DMCA COUNTER-NOTIFICATION -->
    <section class="copyright-section">
      <h2>5. DMCA Counter-Notification Procedure</h2>
      <p>If your content was removed due to a DMCA takedown notice and you believe the removal was improper or based on misidentification, you may file a counter-notification.</p>

      <h3>5.1 Filing a Counter-Notification</h3>
      <p>To file a DMCA counter-notification, send a written communication to our DMCA Agent (contact information above) that includes <strong>ALL</strong> of the following elements as required by 17 U.S.C. § 512(g)(3):</p>

      <ol>
        <li><strong>Your Contact Information:</strong> Your name, address, telephone number, and email address.</li>
        <li><strong>Identification of Removed Material:</strong> Identify the material that was removed and the location where it appeared before removal.</li>
        <li><strong>Good Faith Statement:</strong> Include the following statement: <em>"I swear, under penalty of perjury, that I have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled."</em></li>
        <li><strong>Consent to Jurisdiction:</strong> Include the following statement: <em>"I consent to the jurisdiction of the Federal District Court for the judicial district in which my address is located (or the Northern District of Texas if my address is outside the United States), and I will accept service of process from the person who provided the original DMCA notice or an agent of such person."</em></li>
        <li><strong>Physical or Electronic Signature:</strong> Sign the counter-notification physically or electronically.</li>
      </ol>

      <h3>5.2 Our Response to Counter-Notifications</h3>
      <p>Upon receipt of a valid counter-notification:</p>
      <ul>
        <li>We will forward a copy to the original complainant</li>
        <li>Inform them that we will restore the content in 10-14 business days</li>
        <li>Restore the content within 10-14 business days unless the complainant files a court action seeking an injunction</li>
      </ul>

      <h3>5.3 Important Warning</h3>
      <p><strong>Filing a false or bad-faith counter-notification may result in legal liability for damages, including attorneys' fees and court costs. Only file a counter-notification if you have a good faith belief that the material was removed by mistake or misidentification.</strong></p>
    </section>

    <!-- 6. REPEAT INFRINGER POLICY -->
    <section class="copyright-section">
      <h2>6. Repeat Infringer Policy</h2>
      <p>In accordance with the DMCA and other applicable laws, OrenGen has adopted a policy of terminating, in appropriate circumstances, the accounts of users who are deemed to be repeat infringers.</p>

      <h3>6.1 What Constitutes a Repeat Infringer</h3>
      <p>A repeat infringer is a user who:</p>
      <ul>
        <li>Has received two or more valid DMCA takedown notices</li>
        <li>Has been notified of the infringement and failed to remove infringing content</li>
        <li>Demonstrates a pattern of uploading or sharing copyrighted material without authorization</li>
        <li>Has had multiple pieces of content removed for copyright infringement</li>
      </ul>

      <h3>6.2 Actions We May Take</h3>
      <ul>
        <li><strong>First Violation:</strong> Warning and removal of infringing content</li>
        <li><strong>Second Violation:</strong> Temporary suspension and final warning</li>
        <li><strong>Third Violation:</strong> Permanent account termination without refund</li>
      </ul>
      <p>We reserve the right to terminate accounts immediately for egregious violations or upon receipt of a court order.</p>

      <h3>6.3 No Obligation to Monitor</h3>
      <p>OrenGen is not obligated to monitor user content for copyright infringement. We act upon valid DMCA notices and rely on copyright owners to protect their rights.</p>
    </section>

    <!-- 7. FAIR USE AND EXCEPTIONS -->
    <section class="copyright-section">
      <h2>7. Fair Use and Copyright Exceptions</h2>

      <h3>7.1 Fair Use Doctrine</h3>
      <p>U.S. copyright law permits limited use of copyrighted material without permission under the doctrine of "fair use" (17 U.S.C. § 107). Fair use may apply to:</p>
      <ul>
        <li>Commentary, criticism, and news reporting</li>
        <li>Educational and research purposes</li>
        <li>Parody and transformative works</li>
        <li>Search engines and indexing</li>
      </ul>
      <p>Fair use is determined on a case-by-case basis considering four factors:</p>
      <ol>
        <li>Purpose and character of the use (commercial vs. educational/transformative)</li>
        <li>Nature of the copyrighted work</li>
        <li>Amount and substantiality of the portion used</li>
        <li>Effect on the potential market for the original work</li>
      </ol>

      <h3>7.2 OrenGen Cannot Provide Legal Advice</h3>
      <p>OrenGen cannot determine whether a particular use constitutes fair use. If you believe your use qualifies as fair use and your content was removed, you may file a counter-notification. You may also wish to consult an attorney.</p>

      <h3>7.3 Safe Harbor Limitations</h3>
      <p>As a service provider, OrenGen qualifies for DMCA safe harbor protections (17 U.S.C. § 512) when we comply with notice-and-takedown procedures. This means we are not liable for user-posted infringing content if we respond appropriately to valid DMCA notices.</p>
    </section>

    <!-- 8. INTERNATIONAL COPYRIGHT -->
    <section class="copyright-section">
      <h2>8. International Copyright Protection</h2>
      <p>OrenGen's copyrighted works are protected internationally under:</p>
      <ul>
        <li><strong>Berne Convention:</strong> Automatic copyright protection in 180+ countries</li>
        <li><strong>WIPO Copyright Treaty:</strong> International digital copyright protections</li>
        <li><strong>Universal Copyright Convention:</strong> Additional international protections</li>
        <li><strong>Trade Agreements:</strong> USMCA, EU-US agreements, and bilateral treaties</li>
      </ul>
      <p>Copyright infringement may be prosecuted in multiple jurisdictions depending on the location of the infringer and the affected parties.</p>
    </section>

    <!-- 9. REPORTING NON-DMCA VIOLATIONS -->
    <section class="copyright-section">
      <h2>9. Reporting Other Intellectual Property Violations</h2>
      <p>For intellectual property violations that do not fall under DMCA (trademarks, patents, trade secrets, right of publicity), contact us at:</p>
      <ul>
        <li><strong>Trademark Violations:</strong> Email <a href="mailto:support@orengen.io">support@orengen.io</a> with subject "Trademark Violation"</li>
        <li><strong>Patent Violations:</strong> Email <a href="mailto:support@orengen.io">support@orengen.io</a> with subject "Patent Infringement"</li>
        <li><strong>Other IP Issues:</strong> Email <a href="mailto:support@orengen.io">support@orengen.io</a> with subject "IP Violation"</li>
      </ul>
      <p>Include detailed information about the violation, evidence, and your contact information.</p>
    </section>

    <!-- WARNING BOX -->
    <div class="warning-box">
      <h3>⚠️ Warning About False Claims</h3>
      <p><strong>Submitting a false, fraudulent, or bad-faith DMCA notice or counter-notification may result in:</strong></p>
      <ul style="margin: 16px 0 0 24px;">
        <li>Civil liability for damages, costs, and attorneys' fees under 17 U.S.C. § 512(f)</li>
        <li>Criminal penalties for perjury under 18 U.S.C. § 1621</li>
        <li>Legal action by affected parties</li>
        <li>Termination of your OrenGen account</li>
      </ul>
      <p style="margin-top: 16px;"><strong>Only file DMCA notices if you are the copyright owner or authorized to act on their behalf. Only file counter-notifications if you have a good faith belief the content was removed by mistake.</strong></p>
    </div>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Copyright and DMCA Inquiries</h3>
      <p>For copyright questions or to file DMCA notices:</p>
      <p>
        <strong>DMCA Agent:</strong> Copyright Agent<br>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "DMCA Takedown Notice" or "DMCA Counter-Notification"<br>
        <strong>Mail:</strong> OrenGen Worldwide LLC<br>
        Attn: Copyright Agent / DMCA Notices<br>
        1812 Open Range Drive<br>
        Mansfield, Texas 76063
      </p>
      <p><strong>Processing Time:</strong> Valid DMCA notices are processed within 1-3 business days.</p>
    </div>

    <div class="highlight-box">
      <p><strong>Copyright Statement:</strong> © 2026 OrenGen Worldwide LLC. All rights reserved. All content, trademarks, and data on this website are the property of OrenGen Worldwide LLC or our licensors. Unauthorized reproduction, distribution, or use is strictly prohibited.</p>
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

    .content-wrapper {
      max-width: 900px;
      margin: 0 auto;
      padding: 0 20px 80px;
    }

    .copyright-section {
      margin-bottom: 40px;
    }

    .copyright-section h2 {
      font-family: 'League Spartan', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--oren-orange);
      margin-bottom: 16px;
      margin-top: 40px;
    }

    .copyright-section h3 {
      font-family: 'League Spartan', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: var(--foreground);
      margin-bottom: 12px;
      margin-top: 24px;
    }

    .copyright-section p {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: var(--oren-sub);
      margin-bottom: 16px;
    }

    .copyright-section ul, .copyright-section ol {
      margin-left: 24px;
      margin-bottom: 16px;
    }

    .copyright-section li {
      font-family: 'Canva Sans', sans-serif;
      font-size: 15px;
      line-height: 1.8;
      color: var(--oren-sub);
      margin-bottom: 8px;
    }

    .copyright-section strong {
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

    .dmca-box {
      background: var(--oren-close);
      border: 1px solid var(--oren-line-subtle);
      padding: 24px;
      margin: 24px 0;
      border-radius: 8px;
    }

    .dmca-box h3 {
      margin-top: 0;
      color: var(--oren-orange);
      font-family: 'League Spartan', sans-serif;
      font-size: 20px;
      margin-bottom: 16px;
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

    .warning-box {
      background: rgba(204, 85, 0, 0.2);
      border: 2px solid var(--oren-orange);
      padding: 20px;
      margin: 24px 0;
      border-radius: 8px;
    }

    .warning-box h3 {
      margin-top: 0;
      color: var(--oren-orange);
    }

    @media (max-width: 768px) {
      .page-header {
        padding: 60px 20px 40px;
      }

      .content-wrapper {
        padding: 0 20px 60px;
      }

      .copyright-section h2 {
        font-size: 20px;
      }

      .copyright-section h3 {
        font-size: 16px;
      }
    }
  </style>

  <!-- HEADER -->
  <header class="page-header">
    <h1>Copyright <span class="orange">Notice</span></h1>
    <p>Protecting intellectual property rights and DMCA compliance procedures.</p>
    <p class="meta">Effective Date: January 1, 2026</p>
  </header>

  <!-- CONTENT -->
  <div class="content-wrapper">

    <div class="highlight-box">
      <p><strong>Respecting Intellectual Property:</strong> OrenGen Worldwide LLC respects the intellectual property rights of others and expects our users to do the same. This Copyright Notice explains our copyright ownership, DMCA procedures, and how to report copyright infringement.</p>
    </div>

    <!-- 1. COPYRIGHT OWNERSHIP -->
    <section class="copyright-section">
      <h2>1. OrenGen Copyright Ownership</h2>
      <p><strong>© 2026 OrenGen Worldwide LLC. All Rights Reserved.</strong></p>

      <p>Unless otherwise stated, all content, materials, software, code, designs, graphics, logos, trademarks, and other intellectual property on OrenGen's websites, platforms, and services are owned by or licensed to OrenGen Worldwide LLC and are protected by United States and international copyright laws, trademark laws, and other intellectual property rights.</p>

      <h3>1.1 Protected Works Include:</h3>
      <ul>
        <li><strong>Software and Code:</strong> All proprietary software, source code, object code, algorithms, and technical specifications</li>
        <li><strong>AI Technology:</strong> AI models, training data, neural networks, and machine learning systems including Buy-Lingual™ AI-Agents</li>
        <li><strong>Website Content:</strong> Text, articles, blog posts, documentation, tutorials, and educational materials</li>
        <li><strong>Visual Content:</strong> Graphics, logos, icons, images, photographs, videos, and animations</li>
        <li><strong>Audio Content:</strong> Voice recordings, audio clips, sound effects, and music</li>
        <li><strong>User Interfaces:</strong> Design elements, layout, navigation, user experience (UX), and user interface (UI) designs</li>
        <li><strong>Marketing Materials:</strong> Advertisements, promotional content, brochures, presentations, and sales materials</li>
        <li><strong>Documentation:</strong> Technical documentation, API references, user guides, and help resources</li>
      </ul>

      <h3>1.2 Copyright Notice Format</h3>
      <p>OrenGen's copyright notice appears as:</p>
      <p><em>© 2026 OrenGen Worldwide LLC. All Rights Reserved.</em></p>
      <p>or</p>
      <p><em>Copyright © 2026 OrenGen Worldwide LLC</em></p>

      <h3>1.3 Reservation of Rights</h3>
      <p>All rights not expressly granted in our <a href="/termsandconditions">Terms and Conditions</a> are reserved by OrenGen. No license or right to use OrenGen's copyrighted materials is granted except as explicitly stated in writing.</p>
    </section>

    <!-- 2. USER RIGHTS AND RESTRICTIONS -->
    <section class="copyright-section">
      <h2>2. User Rights and Restrictions</h2>

      <h3>2.1 Limited License to Use</h3>
      <p>Subject to your compliance with our Terms and Conditions, OrenGen grants you a limited, non-exclusive, non-transferable, revocable license to:</p>
      <ul>
        <li>Access and use our services for their intended purpose</li>
        <li>View and download content for personal, non-commercial use</li>
        <li>Print individual pages for personal reference</li>
        <li>Share links to our publicly available content</li>
      </ul>

      <h3>2.2 Prohibited Uses</h3>
      <p>You may NOT, without express written permission from OrenGen:</p>
      <ul>
        <li><strong>Copy or Reproduce:</strong> Reproduce, duplicate, copy, or redistribute substantial portions of our content</li>
        <li><strong>Modify or Create Derivatives:</strong> Modify, adapt, translate, or create derivative works based on our materials</li>
        <li><strong>Reverse Engineer:</strong> Reverse engineer, decompile, or disassemble our software or systems</li>
        <li><strong>Commercial Use:</strong> Use our content for commercial purposes without a license</li>
        <li><strong>Remove Notices:</strong> Remove, alter, or obscure copyright notices, trademarks, or other proprietary markings</li>
        <li><strong>Frame or Mirror:</strong> Frame, mirror, or inline link to our content on other websites</li>
        <li><strong>Data Mining:</strong> Use automated tools to scrape, extract, or harvest content from our platforms</li>
        <li><strong>Resell or Redistribute:</strong> Sell, rent, lease, sublicense, or redistribute our copyrighted materials</li>
      </ul>
    </section>

    <!-- 3. USER-GENERATED CONTENT -->
    <section class="copyright-section">
      <h2>3. User-Generated Content</h2>

      <h3>3.1 Your Content Ownership</h3>
      <p>You retain ownership of any content, data, files, or materials you upload, submit, or provide through OrenGen services ("User Content"). You do not transfer ownership to OrenGen.</p>

      <h3>3.2 License Grant to OrenGen</h3>
      <p>By uploading or submitting User Content to our services, you grant OrenGen a worldwide, non-exclusive, royalty-free, sublicensable, transferable license to:</p>
      <ul>
        <li>Use, reproduce, store, and process your content to provide services</li>
        <li>Display, perform, and distribute your content as necessary for service operation</li>
        <li>Create derivative works for service improvement and AI training (anonymized/aggregated where appropriate)</li>
        <li>Backup, archive, and secure your content</li>
      </ul>
      <p>This license terminates when you delete your content or close your account, except for content that has been shared with others or used in aggregated/anonymized data.</p>

      <h3>3.3 Your Representations and Warranties</h3>
      <p>When you submit User Content, you represent and warrant that:</p>
      <ul>
        <li>You own or have necessary rights, licenses, and permissions to use and grant rights to your content</li>
        <li>Your content does not infringe copyrights, trademarks, or other intellectual property rights</li>
        <li>Your content complies with all applicable laws and our <a href="/acceptable-use">Acceptable Use Policy</a></li>
        <li>You have obtained all necessary consents and releases from individuals featured in your content</li>
      </ul>

      <h3>3.4 User Content Restrictions</h3>
      <p>You may not upload or submit content that:</p>
      <ul>
        <li>Infringes third-party copyrights, patents, trademarks, trade secrets, or other rights</li>
        <li>Contains unlicensed or unauthorized copyrighted material</li>
        <li>Violates rights of publicity or privacy</li>
        <li>Contains confidential information belonging to others</li>
      </ul>
    </section>

    <!-- 4. DMCA COMPLIANCE -->
    <section class="copyright-section">
      <h2>4. DMCA Notice and Takedown Procedure</h2>
      <p>OrenGen complies with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512. We respond to valid notices of copyright infringement and will remove or disable access to infringing material when properly notified.</p>

      <h3>4.1 Designated DMCA Agent</h3>
      <p>OrenGen's designated agent to receive notifications of claimed copyright infringement is:</p>
      <div class="dmca-box">
        <h3>DMCA Agent Contact Information</h3>
        <p>
          <strong>Name:</strong> Copyright Agent<br>
          <strong>Company:</strong> OrenGen Worldwide LLC<br>
          <strong>Address:</strong> 1812 Open Range Drive, Mansfield, Texas 76063<br>
          <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
          <strong>Subject Line:</strong> "DMCA Takedown Notice"
        </p>
      </div>

      <h3>4.2 Filing a DMCA Takedown Notice</h3>
      <p>To file a DMCA takedown notice, you must provide a written communication that includes <strong>ALL</strong> of the following elements as required by 17 U.S.C. § 512(c)(3):</p>

      <ol>
        <li><strong>Identification of Copyrighted Work:</strong> Identify the copyrighted work you claim has been infringed. If multiple works are involved, provide a representative list.</li>
        <li><strong>Identification of Infringing Material:</strong> Identify the material that you claim is infringing and provide sufficient information to locate it (e.g., specific URLs, file names, account names, timestamps).</li>
        <li><strong>Contact Information:</strong> Provide your name, address, telephone number, and email address so we can contact you.</li>
        <li><strong>Good Faith Statement:</strong> Include the following statement: <em>"I have a good faith belief that the use of the copyrighted material described above is not authorized by the copyright owner, its agent, or the law."</em></li>
        <li><strong>Accuracy Statement:</strong> Include the following statement: <em>"I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed."</em></li>
        <li><strong>Physical or Electronic Signature:</strong> Sign the notice physically or electronically (typing your full legal name constitutes an electronic signature).</li>
      </ol>

      <h3>4.3 Incomplete or Invalid Notices</h3>
      <p>DMCA notices that do not include all required elements will not be processed. We may contact you to request missing information, but we are not obligated to do so.</p>

      <h3>4.4 Our Response to Valid Notices</h3>
      <p>Upon receipt of a valid DMCA takedown notice, OrenGen will:</p>
      <ul>
        <li>Promptly remove or disable access to the allegedly infringing material</li>
        <li>Notify the user who posted the material that it has been removed</li>
        <li>Provide the user with a copy of the DMCA notice</li>
        <li>Inform the user of their right to file a counter-notification</li>
      </ul>

      <h3>4.5 Processing Timeline</h3>
      <ul>
        <li>Valid notices are typically processed within 1-3 business days</li>
        <li>Expedited processing available for urgent cases (child exploitation, identity theft, etc.)</li>
        <li>You will receive confirmation when action has been taken</li>
      </ul>
    </section>

    <!-- 5. DMCA COUNTER-NOTIFICATION -->
    <section class="copyright-section">
      <h2>5. DMCA Counter-Notification Procedure</h2>
      <p>If your content was removed due to a DMCA takedown notice and you believe the removal was improper or based on misidentification, you may file a counter-notification.</p>

      <h3>5.1 Filing a Counter-Notification</h3>
      <p>To file a DMCA counter-notification, send a written communication to our DMCA Agent (contact information above) that includes <strong>ALL</strong> of the following elements as required by 17 U.S.C. § 512(g)(3):</p>

      <ol>
        <li><strong>Your Contact Information:</strong> Your name, address, telephone number, and email address.</li>
        <li><strong>Identification of Removed Material:</strong> Identify the material that was removed and the location where it appeared before removal.</li>
        <li><strong>Good Faith Statement:</strong> Include the following statement: <em>"I swear, under penalty of perjury, that I have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material to be removed or disabled."</em></li>
        <li><strong>Consent to Jurisdiction:</strong> Include the following statement: <em>"I consent to the jurisdiction of the Federal District Court for the judicial district in which my address is located (or the Northern District of Texas if my address is outside the United States), and I will accept service of process from the person who provided the original DMCA notice or an agent of such person."</em></li>
        <li><strong>Physical or Electronic Signature:</strong> Sign the counter-notification physically or electronically.</li>
      </ol>

      <h3>5.2 Our Response to Counter-Notifications</h3>
      <p>Upon receipt of a valid counter-notification:</p>
      <ul>
        <li>We will forward a copy to the original complainant</li>
        <li>Inform them that we will restore the content in 10-14 business days</li>
        <li>Restore the content within 10-14 business days unless the complainant files a court action seeking an injunction</li>
      </ul>

      <h3>5.3 Important Warning</h3>
      <p><strong>Filing a false or bad-faith counter-notification may result in legal liability for damages, including attorneys' fees and court costs. Only file a counter-notification if you have a good faith belief that the material was removed by mistake or misidentification.</strong></p>
    </section>

    <!-- 6. REPEAT INFRINGER POLICY -->
    <section class="copyright-section">
      <h2>6. Repeat Infringer Policy</h2>
      <p>In accordance with the DMCA and other applicable laws, OrenGen has adopted a policy of terminating, in appropriate circumstances, the accounts of users who are deemed to be repeat infringers.</p>

      <h3>6.1 What Constitutes a Repeat Infringer</h3>
      <p>A repeat infringer is a user who:</p>
      <ul>
        <li>Has received two or more valid DMCA takedown notices</li>
        <li>Has been notified of the infringement and failed to remove infringing content</li>
        <li>Demonstrates a pattern of uploading or sharing copyrighted material without authorization</li>
        <li>Has had multiple pieces of content removed for copyright infringement</li>
      </ul>

      <h3>6.2 Actions We May Take</h3>
      <ul>
        <li><strong>First Violation:</strong> Warning and removal of infringing content</li>
        <li><strong>Second Violation:</strong> Temporary suspension and final warning</li>
        <li><strong>Third Violation:</strong> Permanent account termination without refund</li>
      </ul>
      <p>We reserve the right to terminate accounts immediately for egregious violations or upon receipt of a court order.</p>

      <h3>6.3 No Obligation to Monitor</h3>
      <p>OrenGen is not obligated to monitor user content for copyright infringement. We act upon valid DMCA notices and rely on copyright owners to protect their rights.</p>
    </section>

    <!-- 7. FAIR USE AND EXCEPTIONS -->
    <section class="copyright-section">
      <h2>7. Fair Use and Copyright Exceptions</h2>

      <h3>7.1 Fair Use Doctrine</h3>
      <p>U.S. copyright law permits limited use of copyrighted material without permission under the doctrine of "fair use" (17 U.S.C. § 107). Fair use may apply to:</p>
      <ul>
        <li>Commentary, criticism, and news reporting</li>
        <li>Educational and research purposes</li>
        <li>Parody and transformative works</li>
        <li>Search engines and indexing</li>
      </ul>
      <p>Fair use is determined on a case-by-case basis considering four factors:</p>
      <ol>
        <li>Purpose and character of the use (commercial vs. educational/transformative)</li>
        <li>Nature of the copyrighted work</li>
        <li>Amount and substantiality of the portion used</li>
        <li>Effect on the potential market for the original work</li>
      </ol>

      <h3>7.2 OrenGen Cannot Provide Legal Advice</h3>
      <p>OrenGen cannot determine whether a particular use constitutes fair use. If you believe your use qualifies as fair use and your content was removed, you may file a counter-notification. You may also wish to consult an attorney.</p>

      <h3>7.3 Safe Harbor Limitations</h3>
      <p>As a service provider, OrenGen qualifies for DMCA safe harbor protections (17 U.S.C. § 512) when we comply with notice-and-takedown procedures. This means we are not liable for user-posted infringing content if we respond appropriately to valid DMCA notices.</p>
    </section>

    <!-- 8. INTERNATIONAL COPYRIGHT -->
    <section class="copyright-section">
      <h2>8. International Copyright Protection</h2>
      <p>OrenGen's copyrighted works are protected internationally under:</p>
      <ul>
        <li><strong>Berne Convention:</strong> Automatic copyright protection in 180+ countries</li>
        <li><strong>WIPO Copyright Treaty:</strong> International digital copyright protections</li>
        <li><strong>Universal Copyright Convention:</strong> Additional international protections</li>
        <li><strong>Trade Agreements:</strong> USMCA, EU-US agreements, and bilateral treaties</li>
      </ul>
      <p>Copyright infringement may be prosecuted in multiple jurisdictions depending on the location of the infringer and the affected parties.</p>
    </section>

    <!-- 9. REPORTING NON-DMCA VIOLATIONS -->
    <section class="copyright-section">
      <h2>9. Reporting Other Intellectual Property Violations</h2>
      <p>For intellectual property violations that do not fall under DMCA (trademarks, patents, trade secrets, right of publicity), contact us at:</p>
      <ul>
        <li><strong>Trademark Violations:</strong> Email <a href="mailto:support@orengen.io">support@orengen.io</a> with subject "Trademark Violation"</li>
        <li><strong>Patent Violations:</strong> Email <a href="mailto:support@orengen.io">support@orengen.io</a> with subject "Patent Infringement"</li>
        <li><strong>Other IP Issues:</strong> Email <a href="mailto:support@orengen.io">support@orengen.io</a> with subject "IP Violation"</li>
      </ul>
      <p>Include detailed information about the violation, evidence, and your contact information.</p>
    </section>

    <!-- WARNING BOX -->
    <div class="warning-box">
      <h3>⚠️ Warning About False Claims</h3>
      <p><strong>Submitting a false, fraudulent, or bad-faith DMCA notice or counter-notification may result in:</strong></p>
      <ul style="margin: 16px 0 0 24px;">
        <li>Civil liability for damages, costs, and attorneys' fees under 17 U.S.C. § 512(f)</li>
        <li>Criminal penalties for perjury under 18 U.S.C. § 1621</li>
        <li>Legal action by affected parties</li>
        <li>Termination of your OrenGen account</li>
      </ul>
      <p style="margin-top: 16px;"><strong>Only file DMCA notices if you are the copyright owner or authorized to act on their behalf. Only file counter-notifications if you have a good faith belief the content was removed by mistake.</strong></p>
    </div>

    <!-- CONTACT -->
    <div class="contact-info">
      <h3>Copyright and DMCA Inquiries</h3>
      <p>For copyright questions or to file DMCA notices:</p>
      <p>
        <strong>DMCA Agent:</strong> Copyright Agent<br>
        <strong>Email:</strong> <a href="mailto:support@orengen.io">support@orengen.io</a><br>
        <strong>Subject Line:</strong> "DMCA Takedown Notice" or "DMCA Counter-Notification"<br>
        <strong>Mail:</strong> OrenGen Worldwide LLC<br>
        Attn: Copyright Agent / DMCA Notices<br>
        1812 Open Range Drive<br>
        Mansfield, Texas 76063
      </p>
      <p><strong>Processing Time:</strong> Valid DMCA notices are processed within 1-3 business days.</p>
    </div>

    <div class="highlight-box">
      <p><strong>Copyright Statement:</strong> © 2026 OrenGen Worldwide LLC. All rights reserved. All content, trademarks, and data on this website are the property of OrenGen Worldwide LLC or our licensors. Unauthorized reproduction, distribution, or use is strictly prohibited.</p>
    </div>

  </div>
` }} />
  );
}
