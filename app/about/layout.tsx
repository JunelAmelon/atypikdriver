import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos | Atypik Driver',
  description: 'Découvrez notre histoire et notre mission pour le transport adapté des enfants neuro-atypiques.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}