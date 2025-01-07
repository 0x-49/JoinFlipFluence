import React from 'react'

const features = [
  {
    title: '200-Mile Radius Search',
    description: 'Find hidden clearance deals at any Walmart store within 200 miles of your location',
    icon: '🎯'
  },
  {
    title: 'Real-Time Stock Alerts',
    description: 'Get instant notifications when new hidden clearance deals are discovered near you',
    icon: '🔔'
  },
  {
    title: 'Expert Deal Guidance',
    description: 'Our moderators help you locate the exact items and verify clearance prices',
    icon: '👥'
  },
  {
    title: 'Massive Savings',
    description: 'Members regularly save 50-90% off retail prices on TVs, tools, vacuums, and more',
    icon: '💰'
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
