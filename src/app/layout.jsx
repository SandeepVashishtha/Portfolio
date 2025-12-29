import "./globals.css";
import { Space_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import PropTypes from "prop-types";

import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata = {
  title: "Portfolio | Sandeep Vashishtha",
  description: "Sandeep Vashishtha - Full Stack Developer and Open Source Contributor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased`}>
        <div className="relative z-10 min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
