import { Metadata } from "next";
import { Inter } from "next/font/google";

import { fetchAllMajors } from "@/api";
import StyledComponentsRegistry from "@/lib/registry";

import { MajorsProvider } from "./context/majors";

export const metadata: Metadata = {
  title: "CalculaECO",
  description: "Ferramenta de cálculo de C.R",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const majors = await fetchAllMajors();

  return (
    <html lang="en" className={inter.variable}>
      <head></head>
      <body>
        <StyledComponentsRegistry>
          <MajorsProvider value={majors}>{children}</MajorsProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
