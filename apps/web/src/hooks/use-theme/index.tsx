import { TypesHermesThemes } from "@hermes-web-types/themes/TypesHermesThemes";
import * as React from "react";

export type TypesHermesHooksTheme = {
  0: TypesHermesThemes;
  1: React.Dispatch<React.SetStateAction<TypesHermesThemes>>;
};

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes hooks
 * @notes [ ]
 *
 */
export function useTheme(): TypesHermesHooksTheme {
  const [theme, setTheme] = React.useState<TypesHermesThemes>("light");

  React.useEffect(() => {
    const { body } = document;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    0: theme,
    1: setTheme,
  };
}
