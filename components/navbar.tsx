"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/", label: "דף הבית" },
    { href: "/gallery", label: "גלריה" },
    { href: "/contact", label: "צור קשר" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/20 bg-black/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-purple-500" />
          <span className="text-xl font-bold tracking-wider neon-text">DJs_YOLOS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-purple-400",
                pathname === link.href ? "text-purple-500" : "text-gray-300",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/contact">הזמינו עכשיו</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-300" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur-sm">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xl font-medium transition-colors hover:text-purple-400",
                  pathname === link.href ? "text-purple-500" : "text-gray-300",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-purple-600 hover:bg-purple-700 mt-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                הזמינו עכשיו
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
