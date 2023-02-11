import { ApolloProvider } from "@apollo/client";
import { useGraph } from "@hermes-web-hooks/use-graph";
import { useTheme } from "@hermes-web-hooks/use-theme";
import shape from "@hermes-web-shapes/store";
import "@hermes-web-styles/App.css";
import "@hermes-web-styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import * as React from "react";
import { Provider as ShapesProvider } from "react-redux";
import "tailwindcss/tailwind.css";
import { themeChange } from "theme-change";

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes app
 * @notes [ ]
 *
 */
const App = ({ Component, pageProps }: AppProps) => {
  const { graph } = useGraph(pageProps);

  React.useEffect(() => {
    themeChange(false);
  }, []);

  useTheme();

  return (
    <ShapesProvider store={shape}>
      <ApolloProvider client={graph}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ShapesProvider>
  );
};

export default appWithTranslation(App);
