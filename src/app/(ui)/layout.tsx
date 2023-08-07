"use client";

import { Header } from "@/components/general/Header";
import { globalStyles } from "../styles";
import { MajorsProvider, useMajorsContext } from "../context/majors";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const majors = useMajorsContext();
  globalStyles();

  return (
    <MajorsProvider value={majors}>
      <Header />
      <main>{children}</main>
      <footer>Copywright</footer>
    </MajorsProvider>
  );
}
