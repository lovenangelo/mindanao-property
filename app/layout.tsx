import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "./providers/UserProvider";
import Footer from "./components/Footer";
import AuthenticatedLayout from "./authenticated-components/AuthenticatedLayout";

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
          <AuthenticatedLayout>{children}</AuthenticatedLayout>
        </UserProvider>
        <hr />
      </body>
    </html>
  );
}
