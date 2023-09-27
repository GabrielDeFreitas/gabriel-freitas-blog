import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import Head from 'next/head';
import Header from '@/components/Header';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
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
