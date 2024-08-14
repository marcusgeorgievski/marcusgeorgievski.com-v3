import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeaderAnimated } from "@/components/header";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/shadcn/ui/toaster";
import { inter } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Marcus Georgievski",
  description: "Marcus Georgievski",
  keywords: ["Marcus Georgievski", "Georgievski", "Software Developer"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <main className="max-w-[1100px] px-6 md:px-8 lg:px-10 pt-4  mx-auto pb-20 relative antialiased">
            <HeaderAnimated />
            {/* <Header /> */}

            {children}

            <Toaster />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
``;
