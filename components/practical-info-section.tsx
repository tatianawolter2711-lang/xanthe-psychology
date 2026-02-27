export function PracticalInfoSection() {
  return (
    <section id="practical" className="py-32 md:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-normal text-stone-800 mb-6">
              Practical Information
            </h2>
          </div>

          <div className="border border-stone-200 rounded-lg p-8 md:p-10 bg-stone-50">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-serif font-normal text-stone-800 mb-3">
                  Sessions
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Sessions are 50 minutes and typically take place weekly or fortnightly, depending on what works best for you. I offer in-person appointments in Witney and Oxford, as well as online sessions via a secure video platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-normal text-stone-800 mb-3">
                  Fees
                </h3>
                <p className="text-stone-700 leading-relaxed mb-2">
                  Individual therapy: £110 per session
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  I offer a limited number of reduced-fee spaces for those experiencing financial hardship. Please get in touch to discuss.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-normal text-stone-800 mb-3">
                  Insurance
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  I am recognised by major private health insurers including Bupa, AXA Health, Aviva and Vitality. For clients using insurance, session numbers and payment arrangements are set by the insurer, and invoices are submitted directly where applicable. Please ensure authorisation has been arranged before the first appointment. I am happy to answer any questions about using insurance cover.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-normal text-stone-800 mb-3">
                  Confidentiality
                </h3>
                <p className="text-stone-700 leading-relaxed">
                  Everything you share in therapy is confidential, except in rare circumstances where there is a risk of serious harm to yourself or others. I adhere to the ethical guidelines of the HCPC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

