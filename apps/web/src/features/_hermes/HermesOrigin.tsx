import { HermesDrawer } from "@hermes-web-features/_hermes/drawer/HermesDrawer";
import { HermesNavigation } from "@hermes-web-features/_hermes/navigation/HermesNavigation";
import { useHermesGraph0001Query } from "@hermes-web-library/graph/hooks";
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

  const {
    data: g0001d,
    loading: g0001l,
    error: g0001e,
  } = useHermesGraph0001Query({
    variables: {
      figure: {
        locale: "en",
      },
    },
  });

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
          {g0001l ? (
            <div className={`flex flex-col w-full space-y-2`}>
              <div className={`flex flex-row w-full justify-center`}>
                <svg
                  className={`animate-spin h-8 w-8 text-blue-300`}
                  xmlns={"http://www.w3.org/2000/svg"}
                  fill={"white"}
                  viewBox={"0 0 24 24"}
                >
                  <circle
                    className={"opacity-5"}
                    cx={"12"}
                    cy={"12"}
                    r={"10"}
                    stroke={"currentColor"}
                    strokeWidth={"1"}
                  />
                  <path
                    className={"opacity-75"}
                    fill={"currentColor"}
                    d={
                      "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }
                  />
                </svg>
              </div>
              <div className={`flex flex-row w-full justify-center`}>
                <p className={"font-mono font-medium text-md"}>
                  {"loading..."}
                </p>
              </div>
            </div>
          ) : null}
          {g0001e ? (
            <div className={`flex flex-col w-full`}>
              <div className={`flex flex-row w-full`}>
                <p className={"font-mono font-medium text-md"}>
                  <span className={`font-bold`}>
                    {`${t(`glossary`, `Error`)}: `}
                  </span>
                  {`${g0001e.name}`}
                </p>
              </div>

              <div className={`flex flex-row w-full`}>
                <p className={"font-mono font-medium text-md"}>
                  <span className={`font-bold`}>
                    {`${t(`glossary`, `Message`)}: `}
                  </span>
                  {`${g0001e.message}${
                    g0001e.message === "Failed to fetch"
                      ? ` - Server is likely not running.`
                      : ``
                  }`}
                </p>
              </div>
            </div>
          ) : null}
          {!g0001l && !g0001e && g0001d && g0001d.HermesGraph0001 ? (
            <div className={`flex flex-col w-full space-y-4`}>
              <div className={`flex flex-row w-full`}>
                <p className={"font-mono font-medium text-md"}>
                  {`${t(`glossary:`, `Request`)}:`}
                </p>
              </div>
              <div className={`flex flex-row w-full`}>
                <p className={"font-mono font-medium text-md"}>
                  {`${t(`glossary:`, `- pass`)}:`}
                  <span
                    className={`font-bold text-${
                      g0001d.HermesGraph0001.pass ? `lime-400` : `red-400`
                    }`}
                  >{` ${g0001d.HermesGraph0001.pass}`}</span>
                </p>
              </div>

              <div className={`flex flex-row w-full`}>
                <p className={"font-mono font-medium text-md"}>
                  {`${t(`glossary:`, `- error`)}:`}
                  <span
                    className={`font-bold text-${
                      g0001d.HermesGraph0001.message ? `lime-400` : `red-400`
                    }`}
                  >{` ${g0001d.HermesGraph0001.message}`}</span>
                </p>
              </div>

              <div className={`flex flex-row w-full`}>
                <p className={"font-mono font-medium text-md"}>
                  {`${t(`glossary:`, `- timestamp`)}:`}
                  <span
                    className={`font-bold`}
                  >{` ${g0001d.HermesGraph0001.timestamp}`}</span>
                </p>
              </div>

              <div className={`flex flex-row w-full`}>
                <p className={"font-mono font-medium text-md truncate"}>
                  {`${t(`glossary:`, `- hash`)}:`}
                  <span
                    className={`font-bold `}
                  >{` ${g0001d.HermesGraph0001.hash}`}</span>
                </p>
              </div>

              <div className={`flex flex-row w-full pt-8`}>
                <p className={"font-mono font-medium text-md"}>
                  {`${t(`glossary:`, `Messages`)}:`}
                </p>
              </div>

              {g0001d.HermesGraph0001.data &&
              g0001d.HermesGraph0001.data.list ? (
                <div className={`flex flex-col w-full`}>
                  {g0001d.HermesGraph0001.data.list.map((thread) => {
                    return (
                      <div key={thread.key} className={`flex flex-col w-full`}>
                        {JSON.stringify(thread)}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className={`flex flex-row w-full`}>
                  <p className={"font-mono font-medium text-md"}>
                    {"- No messages."}
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div className={`text-lime-400 text-red-400`} />
      {HermesDrawerShape.visible ? <HermesDrawer basis={{ ...basis }} /> : null}
    </>
  );
};
