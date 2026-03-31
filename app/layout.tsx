import type {Metadata} from 'next';
import { Manrope, Oswald } from 'next/font/google';
import './globals.css'; // Global styles

const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Barbearia Dom Vitom | A Melhor de Paciência RJ',
  description: 'Cortes de respeito, cerveja gelada, música ao vivo e clima de lazer. A melhor barbearia de Paciência, RJ.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${manrope.variable} ${oswald.variable}`}>
      <body className="bg-[#0a0a0a] text-[#e5e2e1] antialiased selection:bg-[#be1e2d] selection:text-[#e5e2e1] overflow-x-hidden bg-noise" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
