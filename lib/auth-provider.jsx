"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  // Mock sign in function - in a real app, this would authenticate with a backend
  const signIn = () => {
    setUser({
      id: "1",
      name: "Admin User",
      email: "admin@arcadeportal.com",
      isAdmin: true,
    })
  }

  const signOut = () => {
    setUser(null)
  }

  // Check for existing session on mount
  useEffect(() => {
    // For demo purposes, auto-sign in as admin
    signIn()
  }, [])

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

