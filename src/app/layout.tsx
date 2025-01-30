import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import '../styles/globals.css';
import Header from './Header';
import Footer from './Footer';

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
        className={`${inter.variable} bg-slate-100  font-sans`}
      >
        <div className="width-full bg-secondary flex items-center justify-center overflow-hidden">
          <h4 className='font-bold text-lg p-2 text-white'>- - Sitio en Construcción - -</h4>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
