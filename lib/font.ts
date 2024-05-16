import { Bebas_Neue, Inter, Poppins } from "next/font/google"

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: "400",
})
