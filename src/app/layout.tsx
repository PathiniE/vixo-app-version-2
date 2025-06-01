// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Game App',
  description: 'Mobile gaming application',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Mobile and Tablet Only - No Desktop */}
        <div className="w-full min-h-screen sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
          {children}
        </div>
        
        {/* Desktop Message - Hidden on mobile/tablet */}
        <div className="hidden xl:flex xl:fixed xl:inset-0 xl:bg-gray-800 xl:items-center xl:justify-center xl:z-50">
          <div className="text-center text-white p-8">
            <h1 className="text-2xl font-bold mb-4">Mobile App Only</h1>
            <p className="text-gray-300">This application is designed for mobile and tablet devices only.</p>
            <p className="text-gray-300 mt-2">Please access it from a mobile device or resize your browser window.</p>
          </div>
        </div>
      </body>
    </html>
  );
}