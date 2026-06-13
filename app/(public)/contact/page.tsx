import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SITE_NAME } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with the ${SITE_NAME} team — questions, feedback, advertising enquiries, DMCA notices and bug reports.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold sm:text-4xl">Contact Us</h1>
      <p className="mt-3 leading-relaxed text-white/60">
        We’d love to hear from you. Whether you have a question, some feedback, an advertising
        enquiry, a copyright concern or you’ve spotted a bug, drop us a message using the form below
        and choose the subject that best fits. Our team reads every message and aims to reply as
        quickly as possible.
      </p>

      <div className="mt-8 rounded-card border border-border bg-surface p-6">
        <ContactForm />
      </div>
    </div>
  );
}
