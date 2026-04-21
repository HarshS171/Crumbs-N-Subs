
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Crumbs N Subs | Best Birthday Cakes & Gourmet Subs in Jalandhar',
  description: 'Artisan bakery in Model Town, Jalandhar. Specializing in customized birthday & anniversary cakes, affordable student snacks, and gourmet sub platters for bulk orders.',
  keywords: ['Bakery Jalandhar', 'Birthday Cakes Jalandhar', 'Anniversary Cakes Punjab', 'Gourmet Subs Jalandhar', 'Bulk Food Orders Jalandhar', 'Model Town Bakery'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
