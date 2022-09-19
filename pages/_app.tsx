import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../lib/theme/defalutTheme";
import { ThemeProvider } from "@mui/material/styles";

import { createEmotionSsrAdvancedApproach } from "tss-react/nextJs";

const {
  EmotionCacheProvider,
  withEmotionCache,
} = createEmotionSsrAdvancedApproach(
  { key: "css" } /* Argument of createCache */
);

export { withEmotionCache };
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}

export default MyApp;
