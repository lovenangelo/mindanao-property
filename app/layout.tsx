import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "./providers/UserProvider";
import Nav from "./components/Nav";

import Newsletter from "./components/Newsletter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mindanao Property",
  description: "Real estate application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <Nav />
          {children}
          <Newsletter />
        </UserProvider>
      </body>
    </html>
  );
}
