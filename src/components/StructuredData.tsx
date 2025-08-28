import React from 'react';

const StructuredData = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Fernhardt's Masonry",
    "logo": "https://www.fernhardtsmasonry.ca/logo.png",
    "image": "https://www.fernhardtsmasonry.ca/logo.png",
    "telephone": "(627) 513-6173",
    "email": "fernhardts.masonry@gmail.com",
    "url": "https://www.fernhardtsmasonry.ca",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Main St",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "postalCode": "V5K 1A1",
      "addressCountry": "CA"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Vancouver"
      },
      {
        "@type": "City",
        "name": "Burnaby"
      },
      {
        "@type": "City", 
        "name": "North Vancouver"
      },
      {
        "@type": "City",
        "name": "West Vancouver"
      },
      {
        "@type": "City",
        "name": "Richmond"
      },
      {
        "@type": "City",
        "name": "Surrey"
      },
      {
        "@type": "City",
        "name": "Delta"
      },
      {
        "@type": "City",
        "name": "New Westminster"
      },
      {
        "@type": "City",
        "name": "Coquitlam"
      },
      {
        "@type": "City",
        "name": "Port Coquitlam"
      },
      {
        "@type": "City",
        "name": "Port Moody"
      },
      {
        "@type": "City",
        "name": "Langley"
      },
      {
        "@type": "City",
        "name": "Maple Ridge"
      },
      {
        "@type": "City",
        "name": "Pitt Meadows"
      },
      {
        "@type": "City",
        "name": "Victoria"
      },
      {
        "@type": "City",
        "name": "Nanaimo"
      },
      {
        "@type": "City",
        "name": "Parksville"
      },
      {
        "@type": "Place",
        "name": "Salt Spring Island"
      },
      {
        "@type": "Place",
        "name": "Bowen Island"
      },
      {
        "@type": "Place",
        "name": "Galiano Island"
      },
      {
        "@type": "Place",
        "name": "Vancouver Island"
      },
      {
        "@type": "Place",
        "name": "Gulf Islands"
      }
    ],
    "priceRange": "$$",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brick Repointing",
          "description": "Professional mortar removal and replacement to restore structural integrity and appearance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Veneer & Façade Repair",
          "description": "Stone and brick façade restoration with colour matching and moisture management"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Spalling & Crack Repair",
          "description": "Expert repair of damaged masonry surfaces and structural crack remediation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Steps & Walkways",
          "description": "Restoration and installation of masonry steps, walkways, and paver systems"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Chimney Repair",
          "description": "Complete chimney repair, rebuilding, and maintenance for safety and efficiency"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom & Island Projects",
          "description": "Specialized projects throughout Vancouver Island and Gulf Islands with custom solutions"
        }
      }
    ],
    "openingHours": [
      "Mo-Fr 07:00-17:00",
      "Sa 08:00-16:00"
    ],
    "description": "Professional masonry repair and restoration services in Vancouver and the Lower Mainland. Specializing in brick repointing, stone façade repair, steps and pavers with 15+ years experience."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve the entire Lower Mainland including Vancouver, Burnaby, Richmond, Surrey, and surrounding cities. We also take on custom projects throughout Vancouver Island and Gulf Islands including Victoria, Nanaimo, Salt Spring Island, and other island communities."
        }
      },
      {
        "@type": "Question",
        "name": "What is your minimum call-out fee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum service call fee ranges from $250–$400 depending on location and project scope. For Vancouver Island and Gulf Island projects, additional travel and overnight accommodation costs may apply, which will be discussed upfront."
        }
      },
      {
        "@type": "Question",
        "name": "How do you structure your pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer three pricing models: hourly rates ($40–$300/hr depending on complexity), per square foot pricing ($3–$65/sq ft based on work type), and flat project rates. Add 20–40% for difficult access, scaffolding requirements, or special material matching needs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Virtual estimates using photos and project details are provided free of charge. On-site diagnostic visits may be billed at our standard rate, but this cost will be credited towards your project if you proceed with the work."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default StructuredData;