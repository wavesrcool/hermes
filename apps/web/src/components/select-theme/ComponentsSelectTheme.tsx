import { useTheme } from "@hermes-web-hooks/use-theme";
import { capitalizeFirst } from "@hermes-web-library/utils/capitalizeFirst";
import { capitalizeWords } from "@hermes-web-library/utils/capitalizeWords";
import { TypesHermesBasis } from "@hermes-web-types/basis/TypesHermesBasis";
import { TypesHermesThemes } from "@hermes-web-types/themes/TypesHermesThemes";
import { TypesHermesThemesList } from "@hermes-web-types/themes/_list/TypesHermesThemesList";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesComponentsSelectTheme = {
  basis: TypesHermesBasis;
};

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes feature
 * @notes [ ]
 *
 */
export const ComponentsSelectTheme: React.FC<TypesComponentsSelectTheme> = ({
  basis,
}: TypesComponentsSelectTheme) => {
  const { t } = useTranslation(basis.dictionary);

  const { 0: th, 1: setth } = useTheme();

  const lcComponentsSelectTheme = React.useCallback(
    (sth: string) => {
      //
      // @notes:

      let theme: TypesHermesThemes | undefined;

      TypesHermesThemesList.map((lth) => {
        if (lth === sth) {
          theme = lth;
        }
        return;
      });

      if (theme) {
        setth(theme);
      }

      // end
      return;
    },
    [setth]
  );

  return (
    <select
      className={"select select-bordered rounded-full"}
      data-choose-theme
      onChange={({ target: { value } }) => lcComponentsSelectTheme(value)}
    >
      <option disabled selected>
        {t(`glossary:themes`, capitalizeFirst(`themes`))}
      </option>

      {TypesHermesThemesList.map((li) => (
        <option key={li} value={li} selected={li === th}>
          {t(`common:themes.${li}`, capitalizeWords(li))}
        </option>
      ))}
    </select>
  );
};
