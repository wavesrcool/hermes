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
export type TypesHermesDraftsOrigin = {
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
export const HermesDraftsOrigin: React.FC<TypesHermesDraftsOrigin> = ({
  basis,
}: TypesHermesDraftsOrigin) => {
  const { t } = useTranslation(basis.dictionary);

  const HermesDrawerShape = useShape(ofHermesDrawerShape);

  return (
    <>
      <Head>
        <title>{`${t(`common:`, `hermes.earth`)}`}</title>
      </Head>

      <div
        className={`flex flex-col w-full bg-base-100 h-screen overflow-hidden`}
      >
        <HermesNavigation basis={{ ...basis }} />

        <div className={`flex flex-col w-full max-lg:px-4 px-72 pt-8`}>
          <div className={`flex flex-col w-full`}>
            <div className={`flex flex-row w-full`}>
              <p className={"font-mono font-medium text-md"}>{"Drafts"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`text-lime-400 text-red-400`} />
      {HermesDrawerShape.visible ? <HermesDrawer basis={{ ...basis }} /> : null}
    </>
  );
};
