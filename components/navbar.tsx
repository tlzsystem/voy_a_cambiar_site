"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Trophy, Home, Users, Calendar, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/#inicio", label: "Inicio", icon: Home },
  { href: "/#noticias", label: "Noticias", icon: Users },
  { href: "/#calendario", label: "Calendario", icon: Calendar },
  { href: "/#plantilla", label: "Plantilla", icon: Users },
  { href: "/reglamento", label: "Reglamento", icon: BookOpen },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Trophy className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-[family-name:var(--font-bebas)] text-xl tracking-wide text-foreground">
            VOY A CAMBIAR FC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Agendar Amistoso
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              )
            })}
            <Button className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Agendar Amistoso
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
