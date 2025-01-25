import { Geist, Geist_Mono, Karla } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Engineering India YCCE",
  description: "Designed by Website Team at Engineering India YCCE",
};

const navItems = [
  {
    name: "Our Event",
    to: "/event",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Team",
    to: "/team",
  },
  {
    name: "Blogs",
    to: "/blogs",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/logo.png"
          className="w-12 h-auto"
          type="image"
        />
      </head>
      <body className={`${karla.className} antialiased bg-gray-200`}>
        <Navbar navItems={navItems} />
        <div className="w-full min-h-screen mt-12">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
