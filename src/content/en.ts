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
    title: "Millennia-Tested Store of Value | NakupSrebra.com",
    description: "Silver has held value for millennia. Physical, tangible, yours. Secure Swiss vault, VAT-free, no lock-in. Free consultation.",
  },

  // Chapter 1
  chapter1: {
    headline: "From Stone to Coin",
    subheadline: "Silver served as money for millennia. From ancient civilizations to today. It's not a trend. It's a time-tested store of value.",
    timelineCaption: "Millennia later, silver still holds value",
    imageAlt: "Illustration: silver bars",
  },

  // Chapter 2
  chapter2: {
    headline: "What Have You Saved?",
    subheadline: "Money in a bank account loses purchasing power. Every year. Quietly. Unnoticed.",
    goldLabel: "Gold",
    goldValue: "+699%",
    goldPeriod: "Oct 2006 – Oct 2026",
    silverLabel: "Silver",
    silverValue: "+489%",
    silverPeriod: "Oct 2006 – Oct 2026",
    eurLabel: "EUR purchasing power",
    eurValue: "−35%",
    eurPeriod: "Inflation, 1999–Sep 2026",
  },

  // Chapter 3
  chapter3: {
    headline: "Something You Can Hold",
    body1: "Money is a number on a screen. Stocks are an entry in a ledger. Crypto is code.",
    body2: "Silver, you can hold in your hands. It's physical. It's yours. In your name.",
    imageAlt: "Illustration: silver coin at rest",
  },

  // Chapter 4
  chapter4: {
    headline: "Kept Safe",
    imageAlt: "Illustration: security vault",
    pillar1Title: "Swiss vault",
    pillar1Description: "Insured, monitored, secure",
    pillar2Title: "Ownership certificate",
    pillar2Description: "In your name, verifiable",
    pillar3Title: "VAT-free",
    pillar3Description: "Investment silver, no tax",
    pillar4Title: "Delivery on request",
    pillar4Description: "Physical delivery to your door if you wish",
  },

  // Chapter 5
  chapter5: {
    headline: "When Would You Sell?",
    subheadline: "When you need the money. No questions. No penalties. No waiting.",
    whenLabel: "When",
    whenValue: "You decide",
    howMuchLabel: "How much",
    howMuchValue: "You decide",
    whyLabel: "Why",
    whyValue: "No explanation needed",
    footer: "A few days to sell. Money in your account. No hidden costs.",
  },

  // Chapter 6
  chapter6: {
    headline: "How You Start",
    step1Title: "A free conversation",
    step1Description: "15 minutes. No pressure. No selling. Get to know me, tell me about your goals, ask anything.",
    step2Title: "A tailored proposal",
    step2Description: "Based on our conversation, I'll prepare a proposal: how much, why, how. Transparent. No hidden costs. You decide whether to proceed.",
    step3Title: "Secure ownership",
    step3Description: "When you decide, we arrange the purchase. The metals go into a Swiss vault in your name. You get a certificate. You can check the balance anytime.",
  },

  // Chapter 7
  chapter7: {
    headline: "Start Today",
    subheadline: "Two ways. A conversation for those who are ready. A guide for those who need time.",
    readyTitle: "For those ready",
    readyDescription: "Free consultation, 15 minutes, no obligation",
    readyCta: "Book a consultation",
    readyFooter: "Free, no commitment",
    notReadyTitle: "For those who need time",
    notReadyDescription: "Read the guide at your own pace, no pressure",
    notReadyCta: "Free guide",
    notReadyFooter: "Email, no spam",
  },

  // Email capture
  emailCapture: {
    headline: "Free Guide",
    description: "Download: \"How to Start Investing in Silver\"",
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
    eyebrow: "Start now",
    headline: "Free Consultation",
    subheadline: "A 15-minute conversation about your goals and precious metals saving strategy. No pressure. No obligation.",
    widgetHeadline: "Book your appointment",
    widgetDescription: "Choose a time that works for you",
    cta1: "Choose a consultation time",
    cta2: "Open in new tab",
    iframeTitle: "Book your consultation",
    trustPoint1: "No obligation",
    trustPoint2: "No sales pressure",
    trustPoint3: "15 minutes of your time",
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
    source: "Source: LBMA prices in EUR, Oct 2006–Oct 2026 (gold and silver, 20 years); HICP inflation 1999–Sep 2026 (EUR purchasing power loss). Data as of 19 Oct 2026.",
    legal: "Legal notice: Past returns do not guarantee future results. Precious metal prices fluctuate and can fall or rise.",
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
    description: "Physical silver and gold. Swiss storage, VAT-free, free consultation.",
    consultationHeadline: "Free consultation about silver investment",
    consultationDescription: "Book a free 15-minute consultation.",
  },
};
