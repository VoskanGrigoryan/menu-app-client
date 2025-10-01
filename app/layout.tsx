import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Menu app",
  description: "Menu app",
};

const theme = createTheme({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}