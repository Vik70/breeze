import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Breeze",
  description: "Freight Forwarding Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <footer className="bg-slate-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                  <div className="mb-4">
                    <div className="text-white text-2xl font-bold">BREEZE</div>
                    <div className="text-cyan-400 text-sm tracking-wider">FREIGHT SERVICES</div>
                  </div>
                  <p className="text-slate-400 max-w-md">
                    Your trusted partner for specialized freight forwarding solutions worldwide. Excellence in logistics,
                    delivered with the speed of Breeze.
                  </p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Services</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li>
                      <Link href="/services/automotive" className="hover:text-cyan-400">
                        Automotive Transport
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/aerospace" className="hover:text-cyan-400">
                        Aerospace Logistics
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/perishables" className="hover:text-cyan-400">
                        Cold Chain
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/dangerous-goods" className="hover:text-cyan-400">
                        Dangerous Goods
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/pharmaceuticals" className="hover:text-cyan-400">
                        Pharmaceuticals
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/ship-spares" className="hover:text-cyan-400">
                        Ship Spares
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/white-glove" className="hover:text-cyan-400">
                        White Glove
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/artwork" className="hover:text-cyan-400">
                        Artwork
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/events" className="hover:text-cyan-400">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-slate-400">
                    <li>+1 (555) 123-4567</li>
                    <li>info@breezefreight.com</li>
                    <li>24/7 Support</li>
                    <li>Global Coverage</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
                <p>&copy; 2025 Breeze Freight Services. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
