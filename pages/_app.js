import * as React from "react";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import Head from "next/head";

// Chakra includes a color mode feature that,
// provides light mode and dark mode functionality
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// Breakpoints for responsive design
const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const theme = extendTheme({
  config,
  breakpoints,
  fonts: {
    body: `'Outfit', sans-serif`,
    heading: `'Outfit', sans-serif`,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Head>
        <title>Google Translation</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
