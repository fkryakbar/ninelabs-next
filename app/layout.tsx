import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
