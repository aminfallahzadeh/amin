"use client";

// IMPORTS
import { CustomDock } from "@/components/shared/custom-dock";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>

      <CustomDock />
    </div>
  );
}
