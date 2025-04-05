import React from 'react';
import { Card } from '@/components/ui/card';

// Define testimonials data structure (optional but good practice)
interface Testimonial {
  name: string;
  location: string;
  quote: string;
  savings: string;
  rating: number;
}

// Define testimonials data BEFORE the component
const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Texas",
    quote: "Found a 55\" TV for $99 at my local Walmart thanks to FlipFluence! The 200-mile radius search is a game-changer - I never miss a deal now.",
    savings: "Saved $300",
    rating: 5
  },
  {
    name: "Mike R.",
    location: "Florida",
    quote: "The Milwaukee tool deals are insane! Got a $527 nail gun for $88. The moderators helped me verify the price and find it in stock. Best investment ever!",
    savings: "Saved $439",
    rating: 5
  },
  {
    name: "Jennifer L.",
    location: "California",
    quote: "I was skeptical about hidden clearance, but FlipFluence made it so easy! Found multiple vacuums marked down from $279 to $47. The community is amazing!",
    savings: "Saved $232",
    rating: 5
  },
  {
    name: "David K.",
    location: "New York",
    quote: "The penny deals are real! Found several items for just 1¢ using FlipFluence's tools. The membership paid for itself in my first week!",
    savings: "Saved $200+",
    rating: 5
  },
  {
    name: "Alex P.",
    location: "Ohio",
    quote: "Great side hustle opportunity to make extra money while scoring personal deals too. Very happy with the professional atmosphere here.",
    savings: "Extra Income",
    rating: 4
  },
  {
    name: "Maria G.",
    location: "Arizona",
    quote: "This group has been GREAT at helping me find deals in my area. They have a good team that is always available and ready to help.",
    savings: "Personal Savings",
    rating: 5
  },
   {
    name: "Chris B.",
    location: "Illinois",
    quote: "The deals are great, and you can't put a price on the knowledge gained. The community is also very friendly and helpful when you have questions.",
    savings: "Knowledge & Deals",
    rating: 5
  },
  {
    name: "Jessica T.",
    location: "Georgia",
    quote: "FF has been a game changer. Not only to make extra money but for personal use! They have everything from store deals to food deals to all kind of hacks! It's a one stop shop!!!",
    savings: "Game Changer",
    rating: 5
  }
];

export const Testimonials = () => {
  // Generate JSON-LD data inside the component
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList", // Use ItemList to contain multiple reviews
    "itemListElement": testimonials.map((testimonial, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": testimonial.name
        },
        "reviewBody": testimonial.quote,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": testimonial.rating // Use the rating from data
        },
        "itemReviewed": {
          "@type": "Organization", // Or potentially Service if more specific
          "name": "FlipFluence",
          "url": "https://joinflipfluence.com"
        }
        // Consider adding 'datePublished' if available
      }
    }))
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
      {/* Add JSON-LD script here */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">⭐ Member Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="p-6">
              <div className="space-y-4">
                <div className="text-primary font-bold text-xl">{testimonial.savings}</div>
                <p className="text-muted-foreground">"{testimonial.quote}"</p>
                <div className="pt-4 border-t">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Thousands of Smart Shoppers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10k+</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50k+</div>
              <div className="text-muted-foreground">Deals Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$1M+</div>
              <div className="text-muted-foreground">Member Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
