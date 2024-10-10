import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { UserDataProvider } from "@/providers/UserDataProvider";

const neueMontreal = localFont({
  src: [
    {
      path: "./fonts/PPNeueMontreal-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kitt",
  description: "Business Travel Reimagined",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} antialiased font-neueMontreal`}
      >
        <UserDataProvider>{children}</UserDataProvider>
      </body>
    </html>
  );
}
