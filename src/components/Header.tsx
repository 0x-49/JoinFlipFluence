'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from './Logo'
import { Button } from './ui/button'
import { ThemeToggle } from './ThemeToggle'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features', scroll: true },
  { name: 'Success Stories', href: '/#testimonials', scroll: true },
  { name: 'FAQ', href: '/#faq', scroll: true },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.substring(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image
                src="https://landing-page-images-seo.s3.eu-north-1.amazonaws.com/flipfluence.jpg"
                alt="FlipFluence Logo"
                fill
                className="object-contain rounded shadow-sm"
                priority
              />
            </div>
            <span className="hidden font-bold text-foreground sm:inline-block">
              FlipFluence
            </span>
          </Link>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <ThemeToggle />
          <div className="hidden md:block">
            <Link href="https://whop.com/flipfluence/?a=digitalartlab" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="font-semibold">Join FlipFluence</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground px-2 py-1.5 rounded-md hover:bg-muted"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link 
                    href="https://whop.com/flipfluence/?a=digitalartlab" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="mt-4"
                  >
                    <Button className="w-full font-semibold">Join FlipFluence</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}