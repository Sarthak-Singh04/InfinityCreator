import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InfinityConvert: Convert Images, Videos, & Audio for Free',
  description: `Discover the ease of media conversion with InfinityConvert – your go-to tool for transforming images, audio, and videos for free. Experience limitless creativity without any restrictions. Start your seamless conversion journey today!`,
  creator: 'SOUHAIL BEN-LHACHEMI',
  keywords:
    'image converter, video converter, audio converter, free media conversion, easy file converter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}
