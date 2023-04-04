import Modal from "react-modal";
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

Modal.setAppElement('#__next');

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
