import { Header } from '@/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | FlipFluence',
  description: 'Read the Terms of Service for using the FlipFluence website and community.',
  robots: { // Discourage indexing of placeholder terms
    index: false,
    follow: false,
  }
};

export default function TermsOfService() {
  return (
    <>
      {/* Header might be redundant if handled by RootLayout, but included for standalone viewing */}
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-4">Welcome to FlipFluence!</p>

          <p className="mb-4">These terms and conditions outline the rules and regulations for the use of FlipFluence's Website and associated services, located at joinflipfluence.com and provided via platforms like Discord and Whop.</p>

          <p className="mb-4">By accessing this website and using our services, we assume you accept these terms and conditions. Do not continue to use FlipFluence if you do not agree to take all of the terms and conditions stated on this page.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">1. Definitions</h2>
          <p className="mb-4">[Placeholder: Define key terms like "Service", "User", "Content", "Membership"]</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">2. Use License</h2>
          <p className="mb-4">[Placeholder: Detail permissions granted to users, restrictions on use, intellectual property rights regarding FlipFluence tools and content.]</p>
          <p className="mb-4">You must not:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Republish material from FlipFluence</li>
            <li>Sell, rent or sub-license material from FlipFluence</li>
            <li>Reproduce, duplicate or copy material from FlipFluence</li>
            <li>Redistribute content from FlipFluence (unless content is specifically made for redistribution).</li>
            <li>Share your account access or FlipFluence tools/data with non-members.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-4">3. Membership and Payments</h2>
          <p className="mb-4">[Placeholder: Detail subscription terms via Whop, payment obligations, cancellation policy, refund policy (if any).]</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">4. User Conduct</h2>
          <p className="mb-4">[Placeholder: Outline expected behavior within the community (e.g., Discord), rules against harassment, spam, illegal activities.]</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">5. Disclaimers</h2>
          <p className="mb-4">The information and tools provided by FlipFluence are for informational purposes only. We do not guarantee profits or savings. Deal availability, pricing, and stock levels are subject to change and the "Your Mileage May Vary" (YMMV) principle applies. FlipFluence is not responsible for purchasing decisions made by users.</p>
          <p className="mb-4">[Placeholder: Add limitations of liability, warranty disclaimers.]</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">6. Termination</h2>
          <p className="mb-4">[Placeholder: Describe conditions under which FlipFluence may terminate a user's access.]</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">7. Governing Law</h2>
          <p className="mb-4">[Placeholder: Specify the jurisdiction whose laws govern the terms.]</p>

          <h2 className="text-2xl font-semibold mt-6 mb-4">8. Changes to Terms</h2>
          <p className="mb-4">We reserve the right to revise these terms at any time. By using this Website, you are expected to review these terms on a regular basis.</p>

          <p className="mt-8"><strong>Please replace this placeholder text with your full, legally reviewed Terms of Service.</strong></p>
        </div>
      </main>
      {/* Footer is handled by RootLayout */}
    </>
  );
}