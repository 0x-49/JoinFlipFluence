import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header'; // Assuming Header is reusable
// Import Footer if needed, or use RootLayout's footer

// Placeholder for blog posts - replace with actual data fetching later
const posts = [
  { slug: 'how-to-find-hidden-walmart-clearance-deals', title: 'How to Find Hidden Walmart Clearance Deals: A Beginner\'s Guide' },
  { slug: 'retail-arbitrage-strategies', title: 'Effective Retail Arbitrage Strategies for Beginners' },
  // Add more posts here as they are created
];

export default function BlogIndex() {
  return (
    <>
      {/* Consider if a specific Blog Header/Layout is needed */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">FlipFluence Blog</h1>
        <p className="text-xl mb-8 text-muted-foreground">Tips, strategies, and insights on finding hidden deals and mastering retail arbitrage.</p>
        <div className="space-y-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post.slug} className="border-b pb-6">
                <h2 className="text-2xl font-semibold mb-2">
                  <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                    {post.title}
                  </Link>
                </h2>
                {/* Add excerpt and date later */}
                <p className="text-muted-foreground mb-3">Read more about finding those hidden gems...</p>
                <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
                  Read Article &rarr;
                </Link>
              </article>
            ))
          ) : (
            <p>No blog posts yet. Check back soon!</p>
          )}
        </div>
      </main>
      {/* Footer will likely come from RootLayout */}
    </>
  );
}

// Add metadata for the blog index page
export const metadata = {
  title: 'FlipFluence Blog - Tips & Strategies for Reselling and Deal Finding',
  description: 'Explore the FlipFluence blog for expert tips, strategies, and insights on finding hidden clearance deals, retail arbitrage, and maximizing your reselling profits.',
};