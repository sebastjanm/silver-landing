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
    title: "Physical Silver Investment | NakupSrebra.com",
    description: "Silver has been used as money for thousands of years. Physical, tangible, yours. Secure Swiss storage. Free consultation.",
  },

  // Chapter 1
  chapter1: {
    headline: "From Raw Ore to Coin",
    subheadline: "Silver has been used as money for thousands of years, from antiquity to today. A tested store of value through history.",
    timelineCaption: "Millennia later, silver still holds value",
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
    headline: "Something You Can Hold",
    body1: "Money is a number on a screen. Stocks are an entry in a ledger. Crypto is code on a network.",
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
    pillar3Title: "Secure storage",
    pillar3Description: "Security protocols",
    pillar4Title: "Delivery on request",
    pillar4Description: "Physical delivery to your door if you wish",
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
    step1Title: "A free conversation",
    step1Description: "A 15-minute call, no obligation. Get to know me, tell me what you want to achieve, ask anything.",
    step2Title: "A tailored proposal",
    step2Description: "Based on our conversation, I'll prepare a proposal: how much, why, how. You decide whether to proceed.",
    step3Title: "Secure ownership",
    step3Description: "When you decide, we arrange the purchase. The metals go into a Swiss vault in your name. You get a certificate. You can check your holdings anytime.",
  },

  // Chapter 7
  chapter7: {
    headline: "Next Steps",
    subheadline: "Two ways. A conversation for those who are ready. A guide for those who need time.",
    readyTitle: "Ready to talk?",
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
    subheadline: "A 15-minute conversation about your goals and a savings plan in precious metals. No pressure. No obligation.",
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
