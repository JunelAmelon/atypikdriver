import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offre Chauffeurs | Atypik Driver',
  description: 'Rejoignez notre équipe de chauffeurs et donnez du sens à votre métier.',
};

export default function DriversLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}