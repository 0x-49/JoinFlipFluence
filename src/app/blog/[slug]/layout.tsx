import React from 'react';

// This layout wraps individual blog posts.
// It inherits the main structure (Header, Footer, ThemeProvider) from the root layout.
// We can add blog-post-specific elements here later if needed (e.g., author info, related posts).
export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Render the actual blog post content */}
      {children}
    </div>
  );
}