"use client";

import { Preflight,ThemeProvider, x } from "@xstyled/styled-components";

import { Header } from "@/components/general/Header";

import { theme } from "../../xstyled.config";
import { GlobalStyle } from "../styles";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <Header />
      <x.main display="flex" flexDirection="column" alignItems="center">
        {children}
      </x.main>
      <footer>Copywright</footer>
    </ThemeProvider>
  );
}
