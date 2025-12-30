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
  description:
    "Sandeep Vashishtha - Full Stack Developer and Open Source Contributor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* --- JSON-LD Person Schema for Google SEO --- */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sandeep Vashishtha",
              "url": "https://www.sandeepvashishtha.tech",
              "sameAs": [
                "https://www.linkedin.com/in/SandeepVashishtha",
                "https://x.com/vsandeep_11",
                "https://github.com/SandeepVashishtha",
                "https://leetcode.com/u/sandeepvashishtha/"
              ],
              "jobTitle": "Software Engineer",
              "alumniOf": "Chandigarh University",
              "description": "Software Engineer skilled in Java, Spring Boot, React, and full-stack development. Open-source contributor with projects in scalable systems and cloud-native applications."
            }
          `,
          }}
        />
      </head>

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
