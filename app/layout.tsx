import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import React from "react";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FluenciAI",
  description: "Practice your language skills with AI-powered chatbots.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{props.children}</body>
      </html>
    </ClerkProvider>
  );
}
