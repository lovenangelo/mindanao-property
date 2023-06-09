import "@/styles/globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/providers/toast-provider"
import { UserProvider } from "@/components/providers/user-provider"
import { SideBarNav } from "@/components/side-bar-nav"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html className={inter.className} lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <UserProvider>
              <Toaster />
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex">
                  <SideBarNav />
                  <div className="flex-1">{children}</div>
                </div>
              </div>
              <TailwindIndicator />
            </UserProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
