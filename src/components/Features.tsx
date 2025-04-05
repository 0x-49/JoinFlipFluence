import React from 'react'

const features = [
  {
    title: '200-Mile Radius Search',
    description: 'Check hidden clearance prices & estimated stock at Walmart stores within 200 miles. Plan efficient sourcing trips!',
    icon: '🗺️' // Changed icon
  },
  {
    title: 'Real-Time Deal Alerts',
    description: 'Instant notifications via Discord for verified hidden clearance, price errors, and massive markdowns discovered by our team & community.',
    icon: '🔔'
  },
   {
    title: 'Verification Tools',
    description: 'Proprietary systems help verify stock levels and prices before you go, minimizing wasted trips and maximizing efficiency.',
    icon: '✅' // New Feature
  },
  {
    title: 'Penny Deal Finder',
    description: 'Get alerted to ultra-rare penny items - products ringing up for just $0.01 due to inventory glitches.',
    icon: '🪙' // New Feature
  },
  {
    title: 'Thriving Community',
    description: 'Access our active Discord server for knowledge sharing, peer support, strategy discussions, and celebrating wins together.',
    icon: '💬' // New Feature
  },
  {
    title: 'Expert Guidance & Support',
    description: 'Knowledgeable moderators verify deals, answer questions, and provide support. Access detailed guides and optional 1-on-1 onboarding.',
    icon: '🧑‍🏫' // Enhanced description & icon
  },
  {
    title: 'Reselling Education',
    description: 'Learn effective retail & online arbitrage strategies for platforms like Amazon and eBay to turn deals into profit.',
    icon: '📈' // New Feature
  },
  {
    title: 'Massive Savings Potential',
    description: 'Unlock deals saving 50-90%+ off retail on high-value items like electronics, tools, home goods, and more.',
    icon: '💰' // Enhanced title
  }
]

const stats = [
  {
    value: '75%+',
    label: 'Average Savings'
  },
  {
    value: '200mi',
    label: 'Search Radius'
  },
  {
    value: '24/7',
    label: 'Deal Alerts'
  },
  {
    value: '1000s',
    label: 'Active Members'
  }
]

export const Features = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-muted/30">
      {/* Stats */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">✨ Why Choose FlipFluence?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6 bg-background rounded-lg shadow-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
