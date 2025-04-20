import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Atypik Driver',
  description: 'Trouvez les réponses à vos questions sur notre service de transport adapté pour enfants neuro-atypiques.',
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}