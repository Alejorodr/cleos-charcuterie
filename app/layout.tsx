import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Great_Vibes, Montserrat } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});
const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-script',
  weight: '400',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cleo's Charcuterie & Oysters Co.",
  description: 'Handcrafted charcuterie boards, seafood platters & grazing tables. Locally sourced, made with love in Prince Edward Island.',
  openGraph: {
    title: "Cleo's Charcuterie & Oysters Co.",
    description: 'Simple. Beautiful. Made to Share.',
    images: ['/logo.jpg'],
    locale: 'en_CA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${greatVibes.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
