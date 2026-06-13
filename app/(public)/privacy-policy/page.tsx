import type { Metadata } from 'next';
import { Prose } from '@/components/Prose';
import { SITE_NAME } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Read the ${SITE_NAME} privacy policy — what limited data we collect, how cookies are used, and how we protect your privacy.`,
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPage() {
  return (
    <Prose title="Privacy Policy" subtitle="Last updated: January 2026">
      <p>
        At {SITE_NAME} (“we”, “us” or “our”), your privacy matters. This Privacy Policy explains what
        information we collect when you visit our website, how we use it, and the choices you have.
        By using {SITE_NAME}, you agree to the practices described below. We have written this policy
        in plain English so it is easy to understand.
      </p>

      <h2>1. The Information We Collect</h2>
      <p>
        We have intentionally designed {SITE_NAME} to collect as little personal information as
        possible. You do not need to create an account, sign in or provide any personal details to
        browse the site, read reviews, watch trailers or use the links we list. We do not ask for,
        require or store names, addresses, payment details or any other sensitive personal data for
        general browsing.
      </p>
      <p>The only situations in which you actively provide information are:</p>
      <ul>
        <li>
          <strong>Contact form:</strong> If you choose to message us, we collect the name, email
          address, subject and message you submit, solely so we can read and respond to your
          enquiry.
        </li>
      </ul>
      <p>
        In addition, like almost all websites, our servers and analytics tools may automatically
        record limited, non-identifying technical information such as your browser type, device
        type, approximate region, referring page and the pages you view. This information is
        aggregated and used only to understand how the site is used and to improve it.
      </p>

      <h2>2. Cookies</h2>
      <p>
        Cookies are small text files stored on your device by your browser. {SITE_NAME} uses cookies
        sparingly. We may use essential cookies that are necessary for the site to function (for
        example, to remember interface preferences) and, where applicable, analytics cookies that
        help us measure traffic. We do not use cookies to build advertising profiles about you. You
        can disable or delete cookies at any time through your browser settings; the site will
        continue to work, though some preferences may not be remembered.
      </p>

      <h2>3. Analytics</h2>
      <p>
        We may use a privacy-conscious analytics service (such as Google Analytics or a similar
        tool) to collect aggregated statistics about site usage, such as the number of visitors and
        the most popular pages. These tools may set their own cookies and process data according to
        their own privacy policies. The data we receive is aggregated and is not used to personally
        identify you. If we use Google Analytics, you can opt out using Google’s official browser
        add-on.
      </p>

      <h2>4. Third-Party Links and External Sites</h2>
      <p>
        {SITE_NAME} contains links to third-party websites, including external download sources and
        embedded content such as YouTube trailers. When you click a link to an external site, you
        leave {SITE_NAME} and are subject to that website’s own privacy policy and terms. We do not
        control, and are not responsible for, the content, security or privacy practices of any
        third-party site. We strongly encourage you to read the privacy policy of every external
        website you visit.
      </p>

      <h2>5. How We Use Information</h2>
      <p>We use the limited information described above only to:</p>
      <ul>
        <li>Respond to messages you send us through the contact form.</li>
        <li>Understand general usage trends so we can improve the site and add relevant content.</li>
        <li>Maintain the security and proper functioning of the website.</li>
      </ul>

      <h2>6. Data Sharing and Selling</h2>
      <p>
        We do not sell, rent or trade your personal information to anyone, ever. We do not share the
        details you submit through the contact form with third parties except where strictly
        necessary to operate the site (for example, our hosting provider) or where required by law.
      </p>

      <h2>7. Data Retention and Security</h2>
      <p>
        We retain contact messages only for as long as is reasonably necessary to respond to and
        resolve your enquiry. We take reasonable technical and organisational measures to protect the
        information in our care. However, no method of transmission over the internet is completely
        secure, and we cannot guarantee absolute security.
      </p>

      <h2>8. Children’s Privacy</h2>
      <p>
        {SITE_NAME} is intended for a general audience and is not directed at children. We do not
        knowingly collect personal information from children. If you believe a child has provided us
        with personal information, please contact us and we will delete it.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or
        for legal reasons. When we do, we will revise the “last updated” date at the top of this
        page. We encourage you to review this page periodically.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or how your information is
        handled, please reach out through our{' '}
        <a href="/contact">contact page</a> and we will be happy to help.
      </p>
    </Prose>
  );
}
