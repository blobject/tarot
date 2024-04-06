import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "tarot",
  description: "tarot readings",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en"><body>{children}</body></html>
}
