import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "StoryGen",
  description:
    "StoryGen is an interactive application for generating personalized stories. Using web technologies, StoryGen allows users to experience stories in various genres. It combines artificial intelligence language models with predefined assets to provide users with an immersive experience in storytelling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
