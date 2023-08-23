import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { JSX, PropsWithChildren } from 'react';

import { ClientProviders } from './client-providers';
import { Navbar } from './nav/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'Carsties',
};

export default function RootLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <Navbar />
          <main className="container mx-auto px-5 pt-10">{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
