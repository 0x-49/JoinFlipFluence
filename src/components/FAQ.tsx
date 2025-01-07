'use client'

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is hidden clearance and how does it work?",
    answer: "Hidden clearance refers to items that are marked down significantly in Walmart's system but not reflected on shelf tags. Using our tools and guidance, you can find these incredible deals that often discount items 50-90% off their original price. Our community helps you locate and verify these deals in your area."
  },
  {
    question: "How does the 200-mile radius search work?",
    answer: "Our exclusive tools allow you to search any Walmart store within 200 miles of your location. You'll see exact stock levels, clearance prices, and store locations. This means you never miss out on deals, even if they're not available at your local store."
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
    answer: "No special equipment needed! All you need is your smartphone and our exclusive tools, which we provide access to upon joining. We'll teach you exactly how to find and verify hidden clearance prices at your local Walmart stores."
  },
  {
    question: "How much can I typically save?",
    answer: "Our members regularly save 50-90% off retail prices. For example, members have found $399 TVs for $99, $527 tools for $88, and even some items for just pennies! The key is knowing where to look and having access to our real-time alerts."
  },
  {
    question: "What support do you provide?",
    answer: "You'll get access to our active community, expert moderators, and detailed guides. We help with everything from finding your first hidden clearance deal to maximizing your savings. Plus, our moderators can help verify prices and stock levels for specific items."
  },
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes! While we're confident you'll love the savings and community, you can cancel anytime through your Whop dashboard with no hidden fees or commitments. We offer a 7-day money-back guarantee for new members."
  }
];

export function FAQ() {
  return (
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
  );
}