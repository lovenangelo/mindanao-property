import { Icons } from "@/components/icons"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Mindanao Property",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
      disabled: false,
    },
    {
      title: "Pricing",
      href: "/pricing",
      disabled: false,
    },
    {
      title: "Properties",
      href: "/properties",
      disabled: false,
    },
    {
      title: "Sign In",
      href: "/auth",
      disabled: false,
    },
  ],
  authNav: [
    {
      title: "Sign out",
      href: null,
      disabled: false,
    },
  ],
  sideBarNav: [
    // {
    //   title: "Overview",
    //   href: "/overview",
    //   disabled: false,
    //   icon: Icons.overview,
    // },
    {
      title: "Properties",
      href: "/properties",
      disabled: false,
      icon: Icons.property,
    },
    // {
    //   title: "Reports",
    //   href: "/reports",
    //   disabled: false,
    //   icon: Icons.analytics,
    // },
    // {
    //   title: "Notifications",
    //   href: "/notifications",
    //   disabled: false,
    //   icon: Icons.notification,
    // },
    // {
    //   title: "Chat",
    //   href: "/message",
    //   disabled: false,
    //   icon: Icons.chat,
    // },
    {
      title: "Account",
      href: "/account",
      disabled: false,
      icon: Icons.account,
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
