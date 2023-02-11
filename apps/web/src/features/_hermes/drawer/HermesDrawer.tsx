import { ComponentsButton } from "@hermes-web-components/button/ComponentsButton";
import { writeHermesDrawerShapeVisibleToggle } from "@hermes-web-shapes/hermes/drawer/HermesDrawerShape";
import { useFold } from "@hermes-web-shapes/hooks";
import { TypesHermesBasis } from "@hermes-web-types/basis/TypesHermesBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesHermesDrawer = {
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
export const HermesDrawer: React.FC<TypesHermesDrawer> = ({
  basis,
}: TypesHermesDrawer) => {
  const { t } = useTranslation(basis.dictionary);

  const fold = useFold();

  const lcHermesDrawerVisibleToggle = React.useCallback(() => {
    //
    // @notes:
    fold(writeHermesDrawerShapeVisibleToggle());

    // end
    return;
  }, [fold]);

  return (
    <div
      className={`z-50 fixed top-0 left-0 flex flex-col w-80 h-screen max-md:w-full px-4 space-y-4 bg-white shadow-inner border-slate-200/30 border-r-8 max-md:border-l-8`}
    >
      <div className={`group flex flex-row w-full pt-6 `}>
        <ComponentsButton
          basis={{
            ...basis,
            cl: `btn-ghost text-slate-700 text-8xl hover:bg-transparent group-hover:text-slate-600 `,
            text: `⤺`,
            click: lcHermesDrawerVisibleToggle,
          }}
        />
      </div>
      <div className={`flex flex-col w-full space-y-4`}>
        <div className={`flex flex-row w-full px-4 pt-8`}>
          <p className={"font-mono font-regular text-3xl"}>
            {`${t(`glossary:`, `hermes drawer`)}`}
          </p>
        </div>
      </div>
    </div>
  );
};
