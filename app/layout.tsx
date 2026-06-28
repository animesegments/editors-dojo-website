import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "../components/LoadingScreen";
import CustomCursor from "../components/CustomCursor";

export const metadata: Metadata = {
  title: {
    default: "editorsdojo | Premium Short-Form Video Editing",
    template: "%s | editorsdojo",
  },
  description: "Discipline. Precision. Craftsmanship. The world's most refined short-form video editing portfolio.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded text-sm z-[10000]">Skip to main content</a>
        <LoadingScreen />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}