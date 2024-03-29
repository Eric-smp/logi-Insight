import { GlobalStyle } from "@/styles/globals";
import Head from "next/head";
import type { AppProps } from "next/app";
import { GlobalProvider } from "@/providers/Global/GlobalProvider";
import { ThemeProvider } from "styled-components";
import { themeProprietes } from "../styles/colors";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Logi-Insight</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalProvider>
        <ThemeProvider theme={themeProprietes}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalProvider>
    </>
  );
}
