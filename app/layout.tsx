import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font--jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elbrit Life Science",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${jost.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
