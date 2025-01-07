'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const videos = [
  {
    url: '42faht',
    id: 'v1_flip',
    title: 'Unlock Hidden Walmart Clearance Deals – TVs for $99!',
    description: 'Discover how to snag a $399 TV for just $99 with Walmart\'s hidden clearance! Watch as we show you how to locate these incredible deals and save big. Want to find these deals near you? Join FlipFluence to unlock your local hidden gems.'
  },
  {
    url: '6ax07t',
    id: 'v2_flip',
    title: 'Walmart Clearance: $300 Vacuums for Only $47!',
    description: 'Don\'t miss this insane clearance haul – vacuums that retail for $300 marked down to just $47! Find out how you can score these deals and more. FlipFluence members get exclusive access to hidden stock and prices.'
  },
  {
    url: 'yjae9m',
    id: 'v3_flip',
    title: 'Milwaukee Nail Gun Clearance – From $527 to $88!',
    description: 'Watch how we turned a $527 Milwaukee nail gun into an $88 steal! FlipFluence members get insider alerts to never miss deals like this. Ready to start flipping and saving?'
  },
  {
    url: 'y10vic',
    id: 'v4_flip',
    title: 'Hidden Penny Deals – Milwaukee Tool for 1 Cent!',
    description: 'Could you imagine scoring a $99 Milwaukee tool for just 1 cent? Our FlipFluence group members did exactly that! Find out how you can access penny deals and daily leads to supercharge your savings.'
  },
  {
    url: '398df9',
    id: 'v5_flip',
    title: 'Massive 75% Off Vacuum Deals – Our Most Profitable Find!',
    description: 'Score the most profitable deal of the year with vacuums at 75% off retail prices! FlipFluence members have been cashing in on this all month. Want in on these game-changing finds?'
  }
]

const ctaVariations = [
  "Join FlipFluence Today!",
  "Start Finding Hidden Deals",
  "Get Access to FlipFluence",
  "Unlock Deal Alerts Now",
  "Join the FlipFluence Community"
];

export const VideoCarousel = () => {
  const mainVideos = videos.slice(0, 4);
  const lastVideo = videos[4];

  const VideoEmbed = ({ videoId }: { videoId: string }) => (
    <div 
      dangerouslySetInnerHTML={{ 
        __html: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%">
          <iframe 
            src="https://streamable.com/e/${videoId}?" 
            frameborder="0" 
            width="100%" 
            height="100%" 
            allowfullscreen 
            style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;">
          </iframe>
        </div>`
      }} 
    />
  );

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12">🎯 Watch Real Hidden Clearance Deals</h2>
      
      {/* Main grid for first 4 videos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
        {mainVideos.map((video, index) => (
          <Card key={video.id} className="p-4 space-y-4">
            <VideoEmbed videoId={video.url} />
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{video.title}</h3>
              <p className="text-muted-foreground">{video.description}</p>
              <Link 
                href="https://whop.com/flipfluence/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full">
                  {ctaVariations[index % ctaVariations.length]}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Featured video with sales copy */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Left sales copy */}
        <div className="lg:flex flex-col justify-center space-y-8 bg-muted/30 p-8 rounded-lg">
          <div>
            <h3 className="text-2xl font-bold mb-4">🎯 Why Join FlipFluence?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Search deals within 200 miles of your location</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔔</span>
                <span>Get exact stock levels and clearance prices</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🎯</span>
                <span>Access hidden penny deals and massive markdowns</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">💰</span>
                <span>Save up to 90% off retail prices</span>
              </li>
            </ul>
          </div>
          <Link 
            href="https://whop.com/flipfluence/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="w-full">
              Start Saving Today! 🚀
            </Button>
          </Link>
        </div>

        {/* Right featured video */}
        <div className="lg:col-span-2">
          <Card className="p-4 space-y-4 h-full">
            <VideoEmbed videoId={lastVideo.url} />
            <div className="space-y-3">
              <h3 className="text-xl font-bold">{lastVideo.title}</h3>
              <p className="text-muted-foreground">{lastVideo.description}</p>
              <Link 
                href="https://whop.com/flipfluence/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full">
                  Join FlipFluence - Start Saving Today! 🎯
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
