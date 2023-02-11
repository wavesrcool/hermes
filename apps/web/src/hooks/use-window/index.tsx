import * as React from "react";

export type TypesHermesHooksWindow = {
  0: number;
  1: number;
};

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes hooks
 * @notes [ ]
 *
 */
export function useWindow(): TypesHermesHooksWindow {
  const [wind, setWind] = React.useState<TypesHermesHooksWindow>({
    0: 0,
    1: 0,
  });

  React.useEffect(() => {
    function handleResize() {
      const w: TypesHermesHooksWindow = [window.innerWidth, window.innerHeight];
      setWind(w);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return wind;
}
