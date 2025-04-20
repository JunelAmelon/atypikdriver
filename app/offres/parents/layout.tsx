import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offre Parents | Atypik Driver',
  description: 'Un service de transport adapté et bienveillant pour les enfants neuro-atypiques.',
};

export default function ParentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}