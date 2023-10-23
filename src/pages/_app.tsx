import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Roboto } from 'next/font/google';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import SEO from '../../next-seo.config';
import Header from '@/components/Header';
import '@/styles/globals.css';

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <style>{`body { font-family: ${roboto}; }`}</style>
      </Head>
      <DefaultSeo {...SEO} />
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
