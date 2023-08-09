import { Metadata } from "next";
import { MajorsProvider } from "./context/majors";
import { fetchAllMajors } from "@/api";
import StyledComponentsRegistry from "@/lib/registry";

import "../globals.css";

export const metadata: Metadata = {
  title: "CalculaECO",
  description: "Ferramenta de cálculo de C.R",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const majors = await fetchAllMajors();

  return (
    <html lang="en">
      <head></head>
      <body>
        <StyledComponentsRegistry>
          <MajorsProvider value={majors}>{children}</MajorsProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
