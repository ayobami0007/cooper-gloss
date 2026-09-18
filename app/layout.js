import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartProviderShell from "@/components/CartProviderShell";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata = {
  title: "Cooper Gloss — Lip Gloss & Beauty",
  description:
    "Cooper Gloss is a Nigerian lip-gloss and beauty brand. Shop products and learn lip-gloss-making.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="font-body">
        <CartProviderShell>
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </CartProviderShell>
      </body>
    </html>
  );
}
