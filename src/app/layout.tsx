import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "nexsus",
  description: "creative landing page ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, "w-full flex bg-white flex-col gap-3 min-h-screen relative justify-start  items-center")}>
        <div className="w-full absolute  top-0 mx-auto bg-gradient-to-b from-indigo-50/60 via-amber-100/60 to-transparent  h-[45rem] z-0"/>
        <div className="pointer-events-none fixed z-10 inset-0 flex justify-center">
          <div class="hidden h-full w-full max-w-7xl grid-cols-3 gap-3.5 px-4 lg:grid">
            <div class="border-x border-black/[0.035]"/>
            <div class="border-x border-black/[0.035]"/>
            <div class="border-x border-black/[0.035]"/>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
