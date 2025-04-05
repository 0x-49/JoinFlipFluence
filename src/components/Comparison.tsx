import React from 'react'
import { Check, X } from 'lucide-react'

const comparisonData = {
  regular: [
    'Limited to deals in your immediate local store',
    'Relying on inaccurate shelf tags',
    'Miss out on hidden clearance & penny deals',
    'Hours wasted manually searching & scanning',
    'No visibility into stock levels elsewhere',
    'Isolated effort, no community insights',
    'Learning curve through trial and error'
  ],
  flipfluence: [
    '200-mile radius search for Walmart deals',
    'Price & stock verification tools',
    'Access verified hidden deals & penny items',
    'Real-time Discord alerts save you time',
    'Plan efficient sourcing trips with data',
    'Thriving community support & knowledge sharing',
    'Reselling education & expert guidance'
  ]
}

export const Comparison = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">⚡ Level Up Your Deal Hunting Game</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Regular Shopping */}
          <div className="p-8 bg-muted/30 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Regular Shopping</h3>
            <ul className="space-y-4">
              {comparisonData.regular.map((item) => (
                <li key={item} className="flex items-center">
                  <X className="w-5 h-5 text-destructive mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With FlipFluence */}
          <div className="p-8 bg-primary/10 rounded-lg border-2 border-primary relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
              RECOMMENDED
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">With FlipFluence</h3>
            <ul className="space-y-4">
              {comparisonData.flipfluence.map((item) => (
                <li key={item} className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Example Savings */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">💰 Real Member Savings</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">$300</div>
              <div className="text-xl mb-1">Saved on TVs</div>
              <div className="text-sm text-muted-foreground">55" TV for just $99</div>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">$439</div>
              <div className="text-xl mb-1">Saved on Tools</div>
              <div className="text-sm text-muted-foreground">Milwaukee Nail Gun for $88</div>
            </div>
            <div className="p-6 bg-background rounded-lg shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">$232</div>
              <div className="text-xl mb-1">Saved on Vacuums</div>
              <div className="text-sm text-muted-foreground">Premium Vacuum for $47</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
