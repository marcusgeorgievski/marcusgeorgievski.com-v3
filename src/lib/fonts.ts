// Google fonts

import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

// Local fonts

import localFont from "next/font/local";

export const xp = localFont({
  src: "../../public/PixelOperator.ttf",
  display: "swap",
});
