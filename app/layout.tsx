import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redbean App Packager — Package Web Apps as Single-File Executables",
  description: "GUI tool to package web applications into single-file distributable executables using redbean. Upload assets, configure, download."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9a09f6ea-a44d-4762-b768-0b6ce2dd7519"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
