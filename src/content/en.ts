/**
 * English content dictionary
 * Native English copy written for English readers
 */

import type { Content } from "./sl";

export const en: Content = {
  // Navigation
  nav: {
    price: "Price",
    blog: "Blog",
    guide: "Guide",
    consultation: "Consultation",
  },

  // Footer
  footer: {
    copyright: "© {year} NakupSrebra.com",
    priceLink: "Silver price",
    blogLink: "Blog (Slovenian only)",
    guideLink: "Guide",
    legalNotice: "Information on this page is not financial advice. Consult a professional.",
  },

  // Homepage metadata
  home: {
    title: "Silver without 22% VAT: buying with storage in Switzerland",
    description: "You don't buy anything from us. In 15 minutes you'll learn how buying silver with storage in Switzerland works, what it costs and whether it's worth it for you at all. Free, with no obligation.",
  },

  // Hero
  hero: {
    headlineLead: "Silver without 22% VAT.",
    headlineRest: "We'll explain how it works.",
    subheadline: "You don't buy anything from us. In 15 minutes you'll learn how buying with storage in Switzerland works, what it costs and whether it's worth it for you at all. You buy directly from an established dealer, and the dealer pays us a commission for it.",
    cta: "Book a free call",
    ctaNote: "The call is free and comes with no obligation.",
    guideLink: "Not ready for a call yet? Start with the free guide.",
    imageAlt: "Silver bars and coins on a dark stone surface",
    facts: [
      "We sell nothing.",
      "You pay the dealer directly.",
      "No money goes through this site.",
    ],
  },

  // How the DDV works
  ddv: {
    headline: "Why this purchase carries no VAT",
    body1: "If you buy silver for delivery in Slovenia, the price includes 22% Slovenian VAT (DDV).",
    body2: "If you buy it and keep it in a customs warehouse in Switzerland, you pay no Slovenian VAT. Switzerland is not in the EU, and the silver stays there until you decide otherwise.",
    catchTitle: "The catch",
    catchBody: "If you take delivery in Slovenia, the 22% VAT is due at that point. Only silver that stays in the customs warehouse is free of it.",
  },

  // Worked example
  example: {
    headline: "An example with €10,000",
    withDdvLabel: "Price including 22% VAT",
    withDdvMetal: "€8,197",
    withDdvMetalLabel: "buys silver",
    withDdvTax: "€1,803",
    withDdvTaxLabel: "goes to VAT",
    withoutDdvLabel: "Without VAT",
    withoutDdvMetal: "€10,000",
    withoutDdvMetalLabel: "buys silver",
    takeaway: "Without VAT, the same money buys 22% more metal.",
    note: "This is before the dealer's premium and storage costs. Storage has a cost. You get all costs in writing before you buy, and we go through them together on the call.",
  },

  // Commission disclosure
  earning: {
    headline: "How we earn",
    body1: "The dealer pays us a commission on purchases by people we refer.",
    body2: "You pay the dealer directly. No money ever goes through this site. We sell nothing.",
  },

  // Storage
  storage: {
    headline: "Where your silver is",
    body: "The silver you buy from the dealer is stored in Switzerland and held in your name.",
    imageAlt: "A vault lined with rows of safe deposit boxes",
    pillar1Title: "Swiss vault",
    pillar1Description: "Insured and monitored.",
    pillar2Title: "Ownership certificate",
    pillar2Description: "In your name and verifiable.",
    pillar3Title: "Delivery on request",
    pillar3Description: "Available whenever you want it. Delivery to Slovenia means paying 22% VAT.",
  },

  // Steps
  steps: {
    headline: "How it works",
    step1Title: "A free call",
    step1Description: "15 minutes, no obligation. Tell us what you'd like to know and ask whatever's on your mind.",
    step2Title: "Costs in writing",
    step2Description: "You get all costs in writing before you buy. You decide whether to go ahead.",
    step3Title: "Buying from the dealer",
    step3Description: "If you decide to buy, you do so directly from the dealer and pay the dealer. Your silver is stored in Switzerland in your name, and you receive an ownership certificate.",
  },

  // Past performance
  performance: {
    headline: "Silver over the last 20 years",
    subheadline: "These figures show the past, not the future. The price also fell sharply along the way.",
    goldLabel: "Gold",
    goldValue: "+699%",
    goldPeriod: "20 years (Oct 2006–Oct 2026)",
    silverLabel: "Silver",
    silverValue: "+489%",
    silverPeriod: "20 years (Oct 2006–Oct 2026)",
    eurLabel: "EUR purchasing power",
    eurValue: "−35%",
    eurPeriod: "27 years (1999–Sep 2026)",
  },

  // When it is not worth it
  notWorth: {
    headline: "When it isn't worth it",
    items: [
      {
        title: "You'll need the money soon.",
        body: "When you sell, the price may be lower than when you bought, and there are costs as well.",
      },
      {
        title: "You can't live with large price swings.",
        body: "Silver prices can fall sharply. Nobody can know in advance whether or when they will recover.",
      },
      {
        title: "You want the silver at home anyway.",
        body: "Delivery to Slovenia means paying 22% VAT, so the main advantage of this purchase is gone.",
      },
    ],
    closing: "If we find on the call that it isn't worth it for you, we'll tell you.",
  },

  // FAQ (rendered on the page and as FAQPage JSON-LD)
  faq: {
    headline: "Questions and answers",
    items: [
      {
        question: "Why pay 22% more?",
        answer: "When you buy silver with VAT, 22% is added to the price of the metal. Out of €10,000, €1,803 goes to VAT. If the silver stays in a customs warehouse in Switzerland, you don't pay that VAT and the same money buys 22% more metal, before the dealer's premium and storage costs. This only holds for as long as the silver stays there.",
      },
      {
        question: "What if I want the silver at home?",
        answer: "You can have it delivered. On delivery in Slovenia, 22% VAT is due, so the advantage of buying without VAT is gone at that point. If you already know you want the silver at home, this route probably isn't right for you.",
      },
      {
        question: "How do I sell, and what does it cost?",
        answer: "You sell through the dealer, at any time, all of it or part of it. The money usually reaches your account within a few business days. You get the selling costs in writing before you buy, and we go through them together on the call. We don't quote amounts here because the dealer sets them.",
      },
      {
        question: "What does storage cost?",
        answer: "Storage has a cost, and you also pay the dealer's premium. You get both amounts in writing before you buy, and we go through them together on the call.",
      },
      {
        question: "Is the silver really mine?",
        answer: "Yes. The silver is held in your name, and you receive an ownership certificate that you can verify.",
      },
      {
        question: "Who is behind this?",
        answer: "NakupSrebra.com is an information site. We explain how buying silver with storage in Switzerland works and refer people to an established dealer. We sell nothing and store nothing. On the call we tell you which dealer you would be buying from, so you can check them yourself before you decide.",
      },
      {
        question: "How do you make money?",
        answer: "The dealer pays us a commission on purchases by people we refer. If you don't buy anything, we don't earn anything.",
      },
      {
        question: "Does the money go through you?",
        answer: "No. You pay the dealer directly. No money ever goes through this site, and you can't pay us for anything.",
      },
      {
        question: "Do I have to decide after the call?",
        answer: "No. The call is free and comes with no obligation. You can decide later, or not at all.",
      },
    ],
  },

  // Closing
  closing: {
    headline: "Next steps",
    subheadline: "If you're ready, let's talk. If you'd rather take your time, start with the guide.",
    readyTitle: "Ready to talk?",
    readyDescription: "15 minutes, free, with no obligation.",
    notReadyTitle: "Need more time?",
    notReadyDescription: "Read the guide at your own pace. We'll send it by email.",
  },

  // Email capture
  emailCapture: {
    headline: "Free Guide",
    description: "“How to Start Investing in Silver”",
    label: "Your email address",
    placeholder: "name@example.com",
    buttonIdle: "Send the guide",
    buttonSending: "Sending...",
    buttonError: "Error. Try again.",
    trustPoint1: "No spam",
    trustPoint2: "Unsubscribe anytime",
  },

  // Consultation page
  consultation: {
    title: "Free call about silver without VAT",
    description: "In 15 minutes you'll learn how buying silver with storage in Switzerland works, what it costs and whether it's worth it for you at all. Free, with no obligation. We sell nothing.",
    headlineLead: "Silver without 22% VAT.",
    headlineRest: "We'll explain how it works.",
    subheadline: "In 15 minutes you'll learn how buying with storage in Switzerland works, what it costs and whether it's worth it for you at all. The call is free and comes with no obligation.",
    widgetHeadline: "Choose a time",
    widgetDescription: "When you click the button, a calendar with free slots opens here.",
    cta1: "Book a free call",
    cta2: "Open the calendar in a new tab",
    iframeTitle: "Book a free call",
    agendaHeadline: "What happens in the 15 minutes",
    agenda: [
      "Tell us what you'd like to know and ask whatever's on your mind.",
      "We explain how buying with storage in Switzerland works and when 22% VAT is due.",
      "We go through the costs: the dealer's premium, storage and selling. You get them in writing before you buy.",
      "Together we work out whether it's worth it for you at all. If it isn't, we'll tell you.",
    ],
    termsHeadline: "What to know before the call",
    terms: [
      {
        title: "No obligation",
        body: "You don't have to decide anything after the call.",
      },
      {
        title: "You buy directly from the dealer",
        body: "You buy from an established dealer, not from us. We sell nothing.",
      },
      {
        title: "How we earn",
        body: "The dealer pays us a commission on purchases by people we refer.",
      },
      {
        title: "No money goes through this site",
        body: "You pay the dealer directly. You can't pay us for anything.",
      },
    ],
    guideIntro: "Not ready for a call yet? Start with the guide.",
  },

  // Price ticker
  priceTicker: {
    label: "Current prices:",
    silver: "Silver",
    gold: "Gold",
    unit: "€/oz",
    updated: "Updated: {date}",
  },

  // Sticky CTA
  stickyCta: {
    text: "Free call",
  },

  // Performance disclaimer
  disclaimer: {
    source: "Source: LBMA prices in EUR, Oct 2006–Oct 2026 (gold and silver, 20 years); HICP inflation 1999–Sep 2026 (EUR purchasing power loss, 27 years). Data as of 19 Oct 2026.",
    legal: "Legal notice: Past performance is not a guide to future results. Precious metal prices fluctuate and can go down as well as up.",
  },

  // Schema.org
  schema: {
    description: "We explain how buying silver with storage in Switzerland works, without 22% VAT. We sell nothing. You buy directly from an established dealer, and the dealer pays us a commission.",
    consultationHeadline: "Free call about buying silver without 22% VAT",
    consultationDescription: "A 15-minute call on how buying with storage in Switzerland works, what it costs and whether it's worth it for you at all. No obligation.",
  },
};
