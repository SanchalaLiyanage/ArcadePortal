import Link from "next/link"
import { Gamepad2 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 border-t bg-[#121218]/90 backdrop-blur-lg border-neon-purple/20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-neon-purple" />
              <span className="text-xl font-bold neon-text bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
                Arcade Portal
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The ultimate destination for free online games. Play instantly in your browser.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-neon-purple">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/action" className="text-muted-foreground hover:text-neon-purple">
                  Action
                </Link>
              </li>
              <li>
                <Link href="/categories/adventure" className="text-muted-foreground hover:text-neon-purple">
                  Adventure
                </Link>
              </li>
              <li>
                <Link href="/categories/puzzle" className="text-muted-foreground hover:text-neon-purple">
                  Puzzle
                </Link>
              </li>
              <li>
                <Link href="/categories/racing" className="text-muted-foreground hover:text-neon-purple">
                  Racing
                </Link>
              </li>
              <li>
                <Link href="/categories/sports" className="text-muted-foreground hover:text-neon-purple">
                  Sports
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-neon-purple">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-neon-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-neon-purple">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-neon-purple">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/developers" className="text-muted-foreground hover:text-neon-purple">
                  For Developers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-neon-purple">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-neon-purple">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-neon-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-neon-purple">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-neon-purple/20 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Arcade Portal. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-neon-purple">
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-neon-purple">
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-neon-purple">
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-neon-purple">
              <span className="sr-only">Discord</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

