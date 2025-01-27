import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import '../styles/globals.css';
import Header from './Header';

export const metadata: Metadata = {
  title: '3k mantenimiento profesional',
  description:
    'El mejor aliado para mantener el crecimiento de tu negocio en orden',
};

const inter = Jost({
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
        className={`${inter.variable} bg-slate-100  text-slate-900 font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
