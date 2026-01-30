export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://www.xwolterferguson.co.uk',
    name: 'Dr Xanthe Wolter-Ferguson - Counselling Psychologist',
    description: 'Warm, evidence-based therapy for anxiety, depression, trauma, and life transitions. HCPC registered Counselling Psychologist offering in-person and online sessions.',
    url: 'https://www.xwolterferguson.co.uk',
    telephone: '+44',
    email: 'xwolterferguson@gmail.com',
    areaServed: [
      {
        '@type': 'City',
        name: 'Witney',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Oxfordshire',
        },
      },
      {
        '@type': 'City',
        name: 'Oxford',
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: 'Oxfordshire',
        },
      },
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    ],
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    medicalSpecialty: [
      'Counselling Psychology',
      'Psychotherapy',
      'CBT',
      'EMDR',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Registration',
        name: 'HCPC Registered Practitioner Psychologist',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Membership',
        name: 'British Psychological Society Member',
      },
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr Xanthe Wolter-Ferguson',
      jobTitle: 'Counselling Psychologist',
      description: 'HCPC registered Counselling Psychologist specialising in anxiety, depression, trauma, and life transitions.',
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
