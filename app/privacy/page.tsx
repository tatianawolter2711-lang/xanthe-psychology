import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Notice | Dr Xanthe Wolter-Ferguson",
  description: "Privacy Notice for Dr Xanthe Wolter-Ferguson, Counselling Psychologist.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-stone-500 hover:text-stone-700 text-sm mb-10 inline-block"
          >
            &larr; Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif font-normal text-stone-800 mb-12">
            Privacy Notice
          </h1>

          <div className="prose prose-stone max-w-none space-y-6 text-stone-700 leading-relaxed">
            <p>
              I am committed to protecting your personal information.
            </p>

            <p>
              When you make contact via this website, I may collect your name, contact details and any information you choose to share in your enquiry. This information is used solely to respond to your enquiry and, where relevant, to arrange and provide psychological therapy services.
            </p>

            <p>
              If you become a client, relevant personal and health information will be held securely for clinical, administrative and legal purposes in accordance with professional and regulatory requirements.
            </p>

            <p>
              Your information is stored securely and is not shared with third parties unless required by law, necessary for safeguarding, or with your consent. Limited anonymised information may be discussed within professional clinical supervision.
            </p>

            <p>
              Enquiry information is retained only as long as necessary. Clinical records are typically retained for seven years following the end of therapy, in line with professional guidance.
            </p>

            <p>
              Under UK data protection law, you have the right to request access to your personal data and to raise concerns about how it is handled.
            </p>

            <div className="border-t border-stone-200 pt-6 mt-8">
              <h2 className="text-xl font-serif font-normal text-stone-800 mb-4">
                Data Controller
              </h2>
              <p>
                Xanthe Wolter-Ferguson
                <br />
                <a
                  href="mailto:xwolterferguson@gmail.com"
                  className="text-stone-800 underline hover:text-stone-600"
                >
                  xwolterferguson@gmail.com
                </a>
              </p>
            </div>

            <p className="text-sm text-stone-500 mt-8">
              You may also contact the Information Commissioner&apos;s Office (
              <a
                href="https://www.ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 underline hover:text-stone-500"
              >
                www.ico.org.uk
              </a>
              ) if you have concerns about data protection.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
