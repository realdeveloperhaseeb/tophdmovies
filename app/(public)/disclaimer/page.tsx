import type { Metadata } from 'next';
import { Prose } from '@/components/Prose';
import { SITE_NAME } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: `${SITE_NAME} disclaimer — this site is for informational purposes only and does not host, upload or distribute any copyrighted content.`,
  alternates: { canonical: '/disclaimer' },
};

export default function DisclaimerPage() {
  return (
    <Prose title="Disclaimer" subtitle="Please read carefully before using this website.">
      <p>
        The information provided by {SITE_NAME} (“we”, “us” or “our”) on this website is for general
        informational and reference purposes only. By accessing and using {SITE_NAME}, you
        acknowledge that you have read, understood and agreed to this disclaimer in full. If you do
        not agree, please discontinue use of the website.
      </p>

      <h2>Informational Purposes Only</h2>
      <p>
        All content published on {SITE_NAME} — including movie titles, overviews, reviews, ratings,
        cast and crew details, trailers and quality information — is provided strictly for
        informational and discovery purposes. While we make reasonable efforts to keep the
        information accurate and up to date, we make no representations or warranties of any kind,
        express or implied, about the completeness, accuracy, reliability or availability of any
        information on the site. Any reliance you place on such information is therefore strictly at
        your own risk.
      </p>

      <h2>We Do Not Host or Distribute Content</h2>
      <p>
        {SITE_NAME} does not host, upload, store, stream or distribute any copyrighted content,
        movies, video files or media of any kind on its servers. We are an indexing and information
        platform. Where download or streaming links appear, they point exclusively to third-party
        external websites that are owned and operated by other parties. We do not produce, control,
        monitor or guarantee any of the content hosted on those external sources.
      </p>

      <h2>External Links Are Beyond Our Control</h2>
      <p>
        This website contains links to external websites that are not provided or maintained by, or
        in any way affiliated with, {SITE_NAME}. Please be aware that we have no control over the
        nature, content, availability, legality or safety of those external sites. The inclusion of
        any link does not necessarily imply a recommendation or endorsement of the views expressed
        within them. External links may change, expire or become unavailable at any time without
        notice.
      </p>

      <h2>Access at Your Own Risk</h2>
      <p>
        When you choose to follow a link to a third-party website, you do so entirely at your own
        risk. We strongly recommend using reputable, up-to-date security software and exercising
        caution when interacting with any external site. {SITE_NAME} will not be liable for any
        loss, damage, infection or harm of any kind — including, without limitation, loss of data or
        damage to your device — arising from your use of, or reliance on, any external content or
        links accessed through this website.
      </p>

      <h2>Copyright and Fair Use</h2>
      <p>
        We respect intellectual property rights and do not condone copyright infringement. All movie
        information is presented for reference and commentary. Trademarks, posters, images and
        related materials remain the property of their respective owners and are used here only to
        identify the titles being described. If you are a rights holder and have a concern, please
        review our <a href="/dmca">DMCA policy</a> and contact us; we respond to all valid notices
        promptly.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        The content on {SITE_NAME} should not be considered professional or legal advice. It is your
        responsibility to ensure that your use of any third-party content complies with the laws and
        regulations applicable in your country or region.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to this disclaimer and agree to its terms. We
        reserve the right to update or change this disclaimer at any time, and your continued use of
        the site constitutes acceptance of any revisions.
      </p>
    </Prose>
  );
}
