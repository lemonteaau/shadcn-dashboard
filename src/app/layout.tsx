import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shadcn Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
