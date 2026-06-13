import type { Metadata } from 'next';
import { Prose } from '@/components/Prose';
import { SITE_NAME } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${SITE_NAME} — a movie information and review platform that helps you discover films, read reviews, watch trailers and find download links.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <Prose title="About Us" subtitle={`Get to know ${SITE_NAME}.`}>
      <p>
        Welcome to {SITE_NAME}, your friendly home for discovering movies from around the world. We
        built this platform for one simple reason: finding great films and reliable information
        about them should be easy, fast and completely free. Whether you are hunting for the latest
        blockbuster, a hidden indie gem, a classic from decades past or a binge-worthy web series,
        our goal is to put everything you need in one clean, cinematic place.
      </p>
      <p>
        {SITE_NAME} is a movie information and review platform. We are not a streaming service and we
        do not host any video files ourselves. Instead, we focus on what we do best — curating rich,
        accurate details about each title. On every movie page you will find a full overview and
        review, cast and crew information, runtime and language details, genre tags, an honest
        rating and an embedded trailer so you can preview the film before you decide. Where download
        links exist, we collect and organise links that point to external third-party sources, so
        you can quickly see what quality options are available.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to make movie discovery effortless and enjoyable for everyone. The world of
        cinema is enormous, and it is easy to feel overwhelmed by endless catalogues and confusing
        interfaces. We cut through the noise with a mobile-first, distraction-free design, helpful
        categories, powerful search and editorial-style movie pages that read like a proper article
        rather than a dry database entry. We believe information should be beautiful, useful and
        accessible on any device — from a phone on the bus to a big screen at home.
      </p>
      <h2>What You Can Do Here</h2>
      <ul>
        <li>Browse trending titles, latest releases and top-rated favourites on the homepage.</li>
        <li>Explore movies by category — Hollywood, Bollywood, Action, Horror, Sci-Fi and more.</li>
        <li>Read full reviews and detailed information written and curated by our team.</li>
        <li>Watch official trailers embedded directly on each movie page.</li>
        <li>Filter and sort the full library by year, language, quality and rating.</li>
        <li>Find external download links organised by quality (480p, 720p and 1080p).</li>
      </ul>
      <h2>A Note on Content</h2>
      <p>
        We take a careful, good-faith approach to the content we list. {SITE_NAME} does not upload,
        store or distribute any copyrighted media. All download links direct users to external
        websites that we neither own nor control, and all movie information is provided strictly for
        reference and discovery purposes. If you are a rights holder and believe a link infringes
        your copyright, please review our DMCA page — we respond to every valid notice promptly.
      </p>
      <p>
        Thank you for visiting {SITE_NAME}. We are constantly adding new titles and improving the
        experience, and we would love to hear from you. If you have feedback, a request or a
        question, head over to our contact page and say hello.
      </p>
    </Prose>
  );
}
