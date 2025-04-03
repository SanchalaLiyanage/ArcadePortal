"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { useAuth } from "@/lib/auth-provider"
import { Search, Menu, X, LogIn, LogOut, Gamepad2 } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const { user, signIn, signOut } = useAuth()

  const isActive = (path) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-neon-purple/20">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>

          <Link href="/" className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-neon-purple" />
            <span className="text-xl font-bold neon-text bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
              Arcade Portal
            </span>
          </Link>
        </div>

        <nav
          className={`${isMenuOpen ? "flex" : "hidden"} md:flex absolute md:static top-16 left-0 right-0 flex-col md:flex-row items-start md:items-center gap-4 p-4 md:p-0 bg-background md:bg-transparent border-b md:border-0`}
        >
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-neon-purple neon-text" : "text-muted-foreground hover:text-neon-purple"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/categories"
            className={`text-sm font-medium transition-colors ${isActive("/categories") ? "text-neon-purple neon-text" : "text-muted-foreground hover:text-neon-purple"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Categories
          </Link>
          <Link
            href="/popular"
            className={`text-sm font-medium transition-colors ${isActive("/popular") ? "text-neon-purple neon-text" : "text-muted-foreground hover:text-neon-purple"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Popular
          </Link>
          <Link
            href="/new"
            className={`text-sm font-medium transition-colors ${isActive("/new") ? "text-neon-purple neon-text" : "text-muted-foreground hover:text-neon-purple"}`}
            onClick={() => setIsMenuOpen(false)}
          >
            New Games
          </Link>
          {user?.isAdmin && (
            <Link
              href="/admin"
              className={`text-sm font-medium transition-colors ${isActive("/admin") ? "text-neon-purple neon-text" : "text-muted-foreground hover:text-neon-purple"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:flex items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search games..."
              className="w-[200px] pl-8 rounded-full bg-muted/50 border-neon-purple/30 focus:border-neon-purple/70 focus:ring-neon-purple/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <ModeToggle />

          {user ? (
            <Button variant="ghost" size="icon" onClick={signOut} className="hover:bg-neon-purple/20">
              <LogOut className="w-5 h-5" />
              <span className="sr-only">Sign out</span>
            </Button>
          ) : (
            <Button variant="ghost" size="icon" onClick={signIn} className="hover:bg-neon-purple/20">
              <LogIn className="w-5 h-5" />
              <span className="sr-only">Sign in</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

