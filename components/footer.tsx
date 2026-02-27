import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <p className="text-stone-600 text-sm leading-relaxed">
            Dr Xanthe Wolter-Ferguson | HCPC registered Counselling Psychologist
          </p>
          <Link
            href="/privacy"
            className="text-stone-500 text-sm hover:text-stone-700 underline"
          >
            Privacy Notice
          </Link>
        </div>
      </div>
    </footer>
  )
}
