import { Metadata } from "next";
import { MajorsProvider } from "./context/majors";
import { fetchAllMajors } from "@/api";
import { getCssText } from "../../stitches.config";

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
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <MajorsProvider value={majors}>{children}</MajorsProvider>
      </body>
    </html>
  );
}
