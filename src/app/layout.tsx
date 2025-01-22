import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: '3k mantenimiento profesional',
  description:
    'El mejor aliado para mantener el crecimiento de tu negocio en orden',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-white text-blac`}
      >
        {children}
      </body>
    </html>
  );
}
