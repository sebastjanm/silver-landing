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
    title: "Physical silver held in your name | NakupSrebra.com",
    description: "Physical silver in your name, in an insured Swiss vault. Free consultation.",
  },

  // Chapter 1
  chapter1: {
    headline: "From Raw Ore to Coin",
    subheadline: "Silver has been used as money for thousands of years, from antiquity to today. People have used it to store value throughout history.",
    timelineCaption: "Thousands of years on, silver is still valued",
    imageAlt: "Illustration: silver bars",
  },

  // Chapter 2
  chapter2: {
    headline: "What Have You Saved?",
    subheadline: "Money left sitting in an account tends to lose purchasing power over time.",
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

  // Chapter 3
  chapter3: {
    headline: "Something Real",
    body1: "Most wealth today exists only as an entry on a screen.",
    body2: "Silver is a physical metal held in your name.",
    imageAlt: "Illustration: silver coin at rest",
  },

  // Chapter 4
  chapter4: {
    headline: "Kept Safe",
    imageAlt: "Illustration: security vault",
    pillar1Title: "Swiss vault",
    pillar1Description: "Insured and monitored",
    pillar2Title: "Ownership certificate",
    pillar2Description: "In your name, verifiable",
    pillar3Title: "Delivery on request",
    pillar3Description: "Physical delivery to your door if you wish",
  },

  // Chapter 5
  chapter5: {
    headline: "When Would You Sell?",
    subheadline: "When you need the money. You can sell any time, all or part.",
    whenLabel: "When",
    whenValue: "You decide",
    howMuchLabel: "How much",
    howMuchValue: "You decide",
    whyLabel: "Why",
    whyValue: "Your decision",
    footer: "Money usually reaches your account within a few business days. You see all costs upfront.",
  },

  // Chapter 6
  chapter6: {
    headline: "Getting Started",
    step1Title: "A free call",
    step1Description: "A 15-minute call, no obligation. Tell me what you'd like to achieve and ask whatever's on your mind.",
    step2Title: "A tailored proposal",
    step2Description: "Based on our conversation, I'll prepare a proposal that fits your goals. You decide whether to proceed.",
    step3Title: "Secure ownership",
    step3Description: "When you decide, we arrange the purchase. Your metal is stored in a Swiss vault in your name, and you receive an ownership certificate.",
  },

  // Chapter 7
  chapter7: {
    headline: "Next Steps",
    subheadline: "If you're ready, let's talk. If you'd rather take your time, start with the guide.",
    readyTitle: "Ready to talk?",
    readyDescription: "A free 15-minute consultation",
    readyCta: "Book a consultation",
    readyFooter: "",
    notReadyTitle: "Need more time?",
    notReadyDescription: "Read the guide at your own pace, no pressure",
    notReadyCta: "Free guide",
    notReadyFooter: "Sent by email",
  },

  // Email capture
  emailCapture: {
    headline: "Free Guide",
    description: "Download: \u201cHow to Start Investing in Silver\u201d",
    label: "Your email address",
    placeholder: "name@example.com",
    buttonIdle: "Send",
    buttonSending: "Sending...",
    buttonError: "Error. Try again.",
    trustPoint1: "No spam",
    trustPoint2: "Unsubscribe anytime",
  },

  // Consultation page
  consultation: {
    title: "Free Consultation | NakupSrebra.com",
    description: "Book a free 15-minute consultation about silver investment.",
    eyebrow: "Free consultation",
    headline: "Free Consultation",
    subheadline: "A 15-minute conversation about your goals and a savings plan in precious metals. There's no obligation.",
    widgetHeadline: "Book your appointment",
    widgetDescription: "Choose a time that works for you",
    cta1: "Choose a consultation time",
    cta2: "Open in new tab",
    iframeTitle: "Book your consultation",
    trustPoint1: "Free",
    trustPoint2: "15 minutes",
    divider: "or",
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
    text: "Consultation",
  },

  // Performance disclaimer
  disclaimer: {
    source: "Source: LBMA prices in EUR, Oct 2006–Oct 2026 (gold and silver, 20 years); HICP inflation 1999–Sep 2026 (EUR purchasing power loss, 27 years). Data as of 19 Oct 2026.",
    legal: "Legal notice: Past performance is not a guide to future results. Precious metal prices fluctuate and can go down as well as up.",
  },

  // Timeline
  timeline: {
    points: [
      { label: "Antiquity", year: "3000 BC" },
      { label: "Roman Empire", year: "100 AD" },
      { label: "Middle Ages", year: "1200" },
      { label: "Today", year: "2026" },
    ],
  },

  // Schema.org
  schema: {
    description: "Physical silver and gold. Swiss storage, free consultation.",
    consultationHeadline: "Free consultation about silver investment",
    consultationDescription: "Book a free 15-minute consultation.",
  },
};
