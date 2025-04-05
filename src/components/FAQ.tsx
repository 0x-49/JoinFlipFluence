'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Script from 'next/script'; // Import Script for JSON-LD

// Define FAQ data structure (optional but good practice)
interface FaqItem {
  question: string;
  answer: string;
}

// Define FAQ data BEFORE the component
const faqs: FaqItem[] = [
    {
      question: "What is hidden clearance and how does it work?",
      answer: "Hidden clearance refers to items marked down significantly in a store's internal system, often without an updated shelf tag. This means an item might scan at a much lower price (50-90% off or more!) than displayed. FlipFluence provides specialized tools and community insights to help you identify, locate, and verify these hidden deals, including price errors and penny items, primarily at Walmart but also other retailers."
    },
    {
      question: "How does the 200-mile radius search work?",
      answer: "Our proprietary tools aggregate inventory data, allowing members to check potential hidden clearance prices and estimated stock levels at Walmart stores within a 200-mile radius. This helps you plan strategic sourcing trips and target stores with the best opportunities, saving you time and gas on potentially fruitless journeys."
    },
    {
      question: "Are these deals available nationwide?",
      answer: "Yes! Hidden clearance deals are available across all 50 states. While specific items and prices may vary by location, our tools help you find the best deals in your area. Our moderators regularly post nationwide deals that members can find at their local stores."
    },
    {
      question: "How often are new deals posted?",
      answer: "We post multiple new deals daily! Our community is active 24/7, and our moderators constantly update members with the latest hidden clearance finds. You'll get instant notifications for high-value deals like TVs, tools, vacuums, and more."
    },
    {
      question: "Do I need any special equipment or apps?",
      answer: "Primarily your smartphone! You'll need it to access our Discord community, deal alerts, and potentially use retailer apps (like the Walmart app) for in-store scanning. We provide access to our specialized web-based tools and guides upon joining. No other special equipment is required."
    },
    {
      question: "What kind of tools does FlipFluence provide besides deal alerts?",
      answer: "Beyond real-time deal alerts, we offer inventory checking tools (within the 200-mile radius for Walmart), historical price tracking insights, profit calculation aids, educational guides for various marketplaces (Amazon, eBay), and a supportive Discord community for strategy sharing and Q&A."
    },
    {
      question: "How much can I typically save?",
      answer: "Savings typically range from 50% to over 90% off retail prices. We consistently see members finding high-value items like $399 TVs for $99, $300 vacuums for $47, expensive tools for under $100, and occasionally even penny items. Success depends on your activity level and location, but the potential for significant savings and profit is substantial."
    },
    {
      question: "What support do you provide?",
      answer: "We offer comprehensive support including: detailed onboarding guides, a highly active Discord community for peer-to-peer help, knowledgeable moderators who verify deals and answer questions, step-by-step reselling strategies, and personalized advice during optional one-on-one onboarding calls for new members."
    },
    {
      question: "Is FlipFluence suitable for beginners with no reselling experience?",
      answer: "Absolutely! Many of our members start with zero experience. Our onboarding process, beginner-friendly guides, supportive community, and readily available moderator help are designed to get newcomers up to speed quickly, finding deals and learning the basics of retail arbitrage."
    },
    {
      question: "Can I use FlipFluence just for personal savings, not reselling?",
      answer: "Yes! A significant portion of our members join primarily to find amazing deals for personal use, saving hundreds or thousands on electronics, household items, gifts, and more. While we provide reselling guidance, using the deals for personal savings is a perfectly valid and popular way to benefit from FlipFluence."
    },
     {
      question: "How accurate is the stock level information?",
      answer: "Our stock level information, particularly for Walmart hidden clearance, combines data from various sources including retailer APIs (where available) and member reports. While we strive for high accuracy to reduce wasted trips, inventory systems can have delays. We always recommend verifying in-store, but our tools provide a significant advantage over manual searching. Accuracy is generally very good but always subject to the YMMV principle."
    },
    {
      question: "What makes FlipFluence different from free deal groups or other paid communities?",
      answer: "FlipFluence differentiates itself through: 1) Proprietary tools like the 200-mile radius checker and verified stock info. 2) A higher degree of deal verification by moderators. 3) A structured, supportive community focused on both deals and education. 4) Comprehensive onboarding and ongoing support. While free groups exist, they often lack the verification, tools, and structured support that accelerate success and savings."
    },
    {
      question: "Can I cancel my membership anytime?",
      answer: "Yes! We believe in the value we provide. Membership is managed through Whop, and you can easily cancel anytime via your Whop dashboard. There are no long-term contracts or hidden fees. We also offer a satisfaction guarantee for new members (details on the sign-up page)."
    }
];

export function FAQ() {
  // Generate JSON-LD data inside the component
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    // Use a fragment to wrap the script and the Accordion
    <>
      {/* Add JSON-LD script here */}
      <Script
        id="faq-structured-data" // Give it a unique ID
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}