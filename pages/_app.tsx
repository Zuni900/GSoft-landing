import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../lib/theme/defalutTheme";
import { ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
