import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation'; // Import notFound

// This component renders individual blog posts.
// It receives the 'slug' from the URL parameters.

// Placeholder function to get post data - replace with actual data fetching
async function getPostData(slug: string) {
  // In a real app, fetch data based on slug from CMS, markdown, DB, etc.
  if (slug === 'how-to-find-hidden-walmart-clearance-deals') {
    return {
      title: "How to Find Hidden Walmart Clearance Deals: A Beginner's Guide",
      content: `
        <article class="prose dark:prose-invert max-w-none">
          <p>Finding hidden clearance deals at Walmart can feel like a treasure hunt. These aren't your typical advertised sales; they're often items marked down significantly in-store without much fanfare. Here's how you can start uncovering these bargains:</p>

          <h2>1. Understand the Lingo</h2>
          <ul>
            <li><strong>Hidden Clearance:</strong> Items discounted in the store's system but not always marked clearly on the shelf.</li>
            <li><strong>Penny Items:</strong> Products that have reached their final markdown and ring up for just $0.01. These are rare!</li>
            <li><strong>YMMV (Your Mileage May Vary):</strong> Deals can be highly location-specific. What's on clearance in one store might be full price in another.</li>
          </ul>

          <h2>2. Use Scanning Tools (Like the Walmart App)</h2>
          <p>The official Walmart app is your best friend. Use its barcode scanner feature while in-store:</p>
          <ul>
            <li>Scan items that look out of place, are dusty, or seem like seasonal leftovers.</li>
            <li>Check end caps and dedicated clearance aisles, but don't stop there – hidden deals can be anywhere.</li>
            <li>The app price often reflects the store's system price, even if the shelf tag is wrong.</li>
          </ul>

          <h2>3. Learn Clearance Tag Colors & Patterns (Varies by Store)</h2>
          <p>While not always consistent, some stores use specific tag colors or formats for different levels of clearance. Pay attention to tags that look different from the standard ones.</p>

          <h2>4. Join Communities (Like FlipFluence!)</h2>
          <p>Deal-finding communities like FlipFluence are invaluable. Members share real-time finds, stock levels, and tips specific to different locations. This saves you time and helps you target the best opportunities.</p>

          <h2>5. Be Persistent and Patient</h2>
          <p>Finding the best hidden deals takes time and effort. Visit stores regularly, scan consistently, and don't get discouraged if you don't find amazing deals every trip.</p>

          <p>By using these strategies, you'll be well on your way to finding those incredible hidden Walmart clearance deals!</p>
        </article>
      `,
      description: "Learn the basics of finding hidden Walmart clearance deals, including using scanning tools, understanding lingo, and leveraging communities like FlipFluence.",
    };
  }
  // Handle case where post is not found
  return null;
}

// Generate metadata dynamically based on the post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | FlipFluence Blog`,
    description: post.description,
    // Add Open Graph data specific to the blog post if desired
  };
}

// The Page component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    // Trigger the 404 page
    notFound();
  }

  return (
    // The layout component (src/app/blog/[slug]/layout.tsx) wraps this
    <div dangerouslySetInnerHTML={{ __html: post.content }} />
  );
}