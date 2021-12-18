import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import xw from 'xwind';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={xw`XWIND_BASE XWIND_GLOBAL`} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
