import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header, { HeaderAnimated } from "@/components/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

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
          enableSystem
          disableTransitionOnChange
        >
          <main className="max-w-[1100px] px-6 md:px-8 lg:px-10 pt-4 pb-12 mx-auto h-[300vh] relative">
            <HeaderAnimated />
            {/* <Header /> */}

            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
``;
