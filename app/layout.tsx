import "./globals.css"

import Footer from "@/components/footer"
import Header from "@/components/header"
import ThemeSwitch from "@/components/theme-switch"
import ActiveSectionContextProvider from "@/context/active-section-context"
import ThemeContextProvider from "@/context/theme-context"
import { bebas, inter, poppins } from "@/lib/font"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "react-hot-toast"

export const metadata = {
  title: "Hakan Okay | Software Developer",
  description:
    "Hakan Okay is a Software Developer with 3 years of experience in Data Science/Engineering and Web Development. He loves Python, SQL, React, Airflow and BigQuery",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.variable} ${inter.className}  ${bebas.variable} relative bg-gray-50 pt-28 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        {/*  <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#cc3538] sm:w-[68.75rem]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Toaster position="top-right" />
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
