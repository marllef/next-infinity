import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: any }>) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Infinity Blog</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
