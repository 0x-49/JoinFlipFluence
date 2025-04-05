'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { VideoCarousel } from '@/components/VideoCarousel';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 px-4 md:px-6 lg:px-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/50 pointer-events-none" />
          <div className="container mx-auto relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/images/Logo.jpg"
                    alt="FlipFluence Logo"
                    fill
                    className="object-contain rounded-lg shadow-lg"
                    priority
                  />
                </div>
                <span className="text-foreground">
                  FlipFluence
                </span>
              </div>
              <span className="text-foreground">
                Unlock Hidden Walmart Clearance Deals!
              </span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-foreground/90">
              Join FlipFluence, the premier <span className="font-semibold text-foreground">reselling community</span>, and discover <span className="font-semibold text-foreground">hidden Walmart clearance deals</span> like $399 TVs for $99, $300 vacuums for $47, and even <span className="font-semibold text-foreground">penny items</span>! Master <span className="font-semibold text-foreground">retail arbitrage</span> and <span className="font-semibold text-foreground">online arbitrage</span> with access to our exclusive <span className="font-semibold text-foreground">deal-finding tools</span>, expert strategies, and supportive community focused on <span className="font-semibold text-foreground">money-making opportunities</span>.
            </p>
            <Link 
              href="https://whop.com/flipfluence/?a=digitalartlab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
              >
                Join FlipFluence Today! 🚀
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">No commitment required - cancel anytime</p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Features />
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <VideoCarousel />
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Comparison />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4">
            <Testimonials />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <FAQ />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 text-center bg-primary/5">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">🔥 Ready to Start Finding Hidden Deals? 🔥</h2>
            <p className="text-xl mb-8">Join thousands of smart shoppers who are saving big with FlipFluence!</p>
            <Link 
              href="https://whop.com/flipfluence/?a=digitalartlab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
              >
                Start Saving Today! 🚀
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">No commitment required - cancel anytime</p>
          </div>
        </section>

      </main>
      {/* Footer is now handled by RootLayout (src/app/layout.tsx) */}
    </>
  );
}
