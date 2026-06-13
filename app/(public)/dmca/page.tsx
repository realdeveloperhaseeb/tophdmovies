import type { Metadata } from 'next';
import { Prose } from '@/components/Prose';
import { ContactForm } from '@/components/ContactForm';
import { SITE_NAME } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'DMCA Policy',
  description: `${SITE_NAME} DMCA policy — we host no files and respond to all valid takedown notices within 48 hours. Learn how to submit a request.`,
  alternates: { canonical: '/dmca' },
};

export default function DmcaPage() {
  return (
    <Prose title="DMCA Policy" subtitle="Digital Millennium Copyright Act Notice & Takedown">
      <p>
        {SITE_NAME} respects the intellectual property rights of others and expects its users to do
        the same. This page explains our position on copyright and the process for submitting a
        Digital Millennium Copyright Act (DMCA) takedown notice.
      </p>

      <h2>We Do Not Host Any Files</h2>
      <p>
        It is important to understand how {SITE_NAME} works. We are an information and indexing
        platform. We do not host, upload, store, stream or distribute any movies, video files or
        other media on our servers. Every download link displayed on this website points to
        third-party external sources that are operated entirely by other parties over whom we have
        no control. The information we publish (titles, reviews, cast details, trailers and links)
        is provided strictly for reference and discovery.
      </p>
      <p>
        Because we do not store the actual content, the most effective way to have material removed
        is to contact the website that is actually hosting the file. That said, we take copyright
        seriously and will promptly remove links from our index in response to any valid notice.
      </p>

      <h2>Submitting a DMCA Takedown Notice</h2>
      <p>
        If you are a copyright owner, or an agent authorised to act on behalf of one, and you
        believe that content linked from {SITE_NAME} infringes your copyright, you may submit a
        written notice using the form below or by emailing us. To be valid and actionable, your
        notice must include the following:
      </p>
      <ul>
        <li>
          A physical or electronic signature of the copyright owner or a person authorised to act on
          their behalf.
        </li>
        <li>
          A clear identification of the copyrighted work you claim has been infringed (for example,
          the title of the movie).
        </li>
        <li>
          The exact URL(s) on {SITE_NAME} where the allegedly infringing link appears, so we can
          locate the material.
        </li>
        <li>
          Your full contact information, including your name, address, telephone number and email
          address.
        </li>
        <li>
          A statement that you have a good-faith belief that the use of the material is not
          authorised by the copyright owner, its agent or the law.
        </li>
        <li>
          A statement, made under penalty of perjury, that the information in your notice is
          accurate and that you are the copyright owner or are authorised to act on their behalf.
        </li>
      </ul>

      <h2>Our Response Time</h2>
      <p>
        We make a good-faith effort to review and respond to all valid notices promptly. In most
        cases we will process a complete and valid request within <strong>48 hours</strong> of
        receipt. Once verified, we will remove or disable access to the relevant link(s) from our
        index. Incomplete notices that do not contain the information listed above may delay our
        response, as we may need to contact you for clarification.
      </p>

      <h2>Good-Faith Commitment</h2>
      <p>
        {SITE_NAME} is committed to complying with all valid copyright notices and to maintaining a
        respectful relationship with rights holders. Submitting false or bad-faith claims may have
        legal consequences, so please ensure your notice is accurate before sending it.
      </p>

      <h2>Submit a Request</h2>
      <p>
        Use the form below (choose <strong>DMCA</strong> as the subject) to send your notice
        directly to our team. We will acknowledge receipt and act on valid requests as described
        above.
      </p>
      <div className="not-prose mt-6 rounded-card border border-border bg-surface p-5">
        <ContactForm defaultSubject="DMCA" />
      </div>
    </Prose>
  );
}
