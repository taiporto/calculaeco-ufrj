"use client";

import { globalStyles } from "../styles";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  globalStyles();

  return <>{children}</>;
}
