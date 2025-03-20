"use client";

// IMPORTS
import { CustomDock } from "@/components/shared/custom-dock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="mt-20 mb-20">{children}</main>
      <CustomDock />
    </>
  );
}
