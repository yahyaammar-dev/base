'use client'
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import cn from "classnames";
import "@/styles/globals.css";
import store from "../redux/store";
import { Provider } from 'react-redux';


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </Provider>
    </html>
  );
}
