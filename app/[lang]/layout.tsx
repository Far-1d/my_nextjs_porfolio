import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../components/theme-provider";
import { Locale, i18n } from '@/i18n.config';

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["arabic"]});

export const metadata: Metadata = {
  title: "Farid's porfolio",
  description: "Simple Modern porfolio",
};

export async function generateStaticParams(){
  return i18n.locales.map(locale => ({lang: locale}))
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {lang: Locale}
}>) {
  return (
    <>
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
      </head>
      <body className={`${params.lang === "fa" ? rubik.className : inter.className}`}>
        <header lang={params.lang}/>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
    </>
  );
}
