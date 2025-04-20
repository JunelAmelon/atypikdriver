import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Atypik Driver',
  description: 'Découvrez nos services de transport adapté pour enfants neuro-atypiques. Solutions pour parents et opportunités pour chauffeurs.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}