import { useRouter } from "next/router";
import * as React from "react";

export type TypesHermesHooksLocale = string;

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes hooks
 * @notes [ ]
 *
 */
export function useLocale() {
  const [loc, setLoc] = React.useState<TypesHermesHooksLocale>("en");

  const { locale } = useRouter();

  React.useEffect(() => {
    //
    // @notes:
    if (locale) {
      setLoc(locale);
    }
    // end
    return;
  }, [locale]);

  return loc;
}
