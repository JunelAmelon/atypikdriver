import { Baloo_2, Quicksand } from 'next/font/google';

export const baloo = Baloo_2({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-baloo',
});

export const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-quicksand',
});