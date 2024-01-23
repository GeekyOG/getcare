import './globals.css';

import type { Metadata } from 'next';
import { Suspense } from 'react';

import Footer from '@/components/layout/footer/Footer';
import Navbar from '@/components/layout/navbar';
import matter from '@/fonts/matter';

export const metadata: Metadata = {
  title: 'Get Care',
  description: 'Discover Hope, Find Recovery, Reclaim Your Life with Us.',
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={matter.className}>
        <Navbar />
        <Suspense>
          <main className="pb-[100px] pt-[130px]">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
