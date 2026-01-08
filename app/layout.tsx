import './globals.css';
import type { Metadata } from 'next';
import { baloo, quicksand } from '@/lib/fonts';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Atypik Driver | Transport bienveillant pour enfants neuro-atypiques',
  description: 'Atypik Driver est une plateforme de transport collaborative dédiée aux enfants neuro-atypiques, offrant sécurité, bienveillance et adaptation.',
  icons: {
    icon: '/images/logos/logo-atypik.png',
    shortcut: '/images/logos/logo-atypik.png',
    apple: '/images/logos/logo-atypik.png',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${baloo.variable} ${quicksand.variable}`}>
      <body className="bg-background text-text min-h-screen flex flex-col">
        <Providers>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}