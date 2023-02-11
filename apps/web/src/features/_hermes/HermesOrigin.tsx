import { HermesDrawer } from "@hermes-web-features/_hermes/drawer/HermesDrawer";
import { HermesNavigation } from "@hermes-web-features/_hermes/navigation/HermesNavigation";
import { ofHermesDrawerShape } from "@hermes-web-shapes/hermes/drawer/HermesDrawerShape";
import { useShape } from "@hermes-web-shapes/hooks";
import { TypesHermesBasis } from "@hermes-web-types/basis/TypesHermesBasis";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import * as React from "react";

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes feature legend
 * @notes [ ]
 *
 */
export type TypesHermesOrigin = {
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
export const HermesOrigin: React.FC<TypesHermesOrigin> = ({
  basis,
}: TypesHermesOrigin) => {
  const { t } = useTranslation(basis.dictionary);

  const HermesDrawerShape = useShape(ofHermesDrawerShape);

  return (
    <>
      <Head>
        <title>{`${t(`common:`, `hermes.art`)}`}</title>
      </Head>

      <div className={`flex flex-col w-full bg-base-100 h-screen`}>
        <HermesNavigation basis={{ ...basis }} />
        <p className={"font-sans font-medium text-base"}>{"hermes"}</p>
      </div>
      {HermesDrawerShape.visible ? <HermesDrawer basis={{ ...basis }} /> : null}
    </>
  );
};
