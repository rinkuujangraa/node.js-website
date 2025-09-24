import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      role?: string
    }
  }

  interface User {
    role?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string
  }
}

// Microsoft Advertising UET tracking
declare global {
  interface Window {
    uetq: any[]
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}
