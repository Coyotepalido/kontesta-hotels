import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kontesta Hotels — Toda la IA que tu hotel necesita en una sola plataforma",
  description:
    "Kontesta Hotels: mensajería multiidioma 24/7, upselling inteligente de todos los servicios, gestión de reseñas automática, tareas operativas y reservas directas. Una plataforma integrada para hoteles independientes. Prueba 20 días gratis.",
  keywords: [
    "IA para hoteles",
    "chatbot hotel WhatsApp",
    "upselling hotel inteligente",
    "gestión reseñas hotel",
    "software hotel IA",
    "asistente virtual hotel",
    "Kontesta Hotels",
    "automatización hotel",
    "reservas directas hotel",
  ],
  openGraph: {
    title: "Kontesta Hotels — Toda la IA que tu hotel necesita",
    description:
      "Una plataforma. Toda la IA que tu hotel necesita. Mensajería, upselling, reseñas, tareas y reservas directas. Prueba 20 días gratis.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
