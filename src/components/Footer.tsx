'use client'

import Link from 'next/link'
import { Instagram, Phone, Mail, MapPin } from 'lucide-react'
import { TiktokIcon } from './icons/TiktokIcon'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                href="https://www.instagram.com/flipfluence_hustles/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>@flipfluence_hustles</span>
              </Link>
              <Link 
                href="https://www.tiktok.com/@flipfluence_" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <TiktokIcon className="h-5 w-5" />
                <span>@flipfluence_</span>
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                href="tel:+18006785640"
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(800) 678-5640</span>
              </Link>
              <Link 
                href="mailto:nt.shoppingforprofits@gmail.com"
                className="flex items-center space-x-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>nt.shoppingforprofits@gmail.com</span>
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Location</h3>
            <div className="flex items-start space-x-2 text-foreground/80">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-1" />
              <span>1376 US Route 1, Cape Neddick, ME 03902</span>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link 
                href="/privacy"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-foreground/60">
          <p> {new Date().getFullYear()} FlipFluence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
