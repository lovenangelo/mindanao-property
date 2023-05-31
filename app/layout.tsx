import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "./providers/UserProvider";
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
    
    <html lang="en" data-theme="mytheme">
      <body className={inter.className} >
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
