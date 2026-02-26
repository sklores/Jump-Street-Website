import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import IntroOverlay from '@/components/IntroOverlay';

export const metadata: Metadata = {
  title: 'Jump Street',
  description: 'Commercial real estate and construction services by Jump Street.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <IntroOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
