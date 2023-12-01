import Navbar from "./NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MBA VLE Project",
  description: "Long essay website project",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 dark:text-gray-600 transition-all duration-700">
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
