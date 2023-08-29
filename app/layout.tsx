import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hakan Okay | Software Engineer",
  description:
    "Hakan Okay is a Software Engineer with 3 years of experience. He has experience in Data Science, Data Engineering and Fullstack Web Development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
