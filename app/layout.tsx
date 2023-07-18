import Header from "@/components/HeaderComponent";
import "./globals.css";
import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";

/** Font used throughout the application */
const libreFranklin = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes of Old",
  description: "A gallery website for Jazz musicians of the 50s, 60s and 70s",
};

/** Props utilized by the RootLayout */
type RootLayoutProps = {
  children: React.ReactNode;
};

/** Shared layout throughout the entire application */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.className} bg-backgroundColorLight`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
