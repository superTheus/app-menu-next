import '@/styles/styles.css';
import '@/components/header/header.css';
import '@/components/search-input/style.css';
import '@/pages/home/home.css';
import '@/components/CategoryCard/index.css';
import '@/components/HamburguerCard/index.css';
import '@/components/ButtonBell/index.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
