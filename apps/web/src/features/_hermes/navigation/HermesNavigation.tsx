import { TypesHermesBasis } from "@hermes-web-types/basis/TypesHermesBasis";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import * as React from "react";

export type TypesHermesNavigationRoutes = "send" | "drafts" | "read";

export type TypesHermesNavigation = {
  basis: TypesHermesBasis;
};

/**
 * * Hermes Documentation
 *
 * @created 01 31 2023
 * @collection web feature
 * @notes [ ]
 *
 */
export const HermesNavigation: React.FC<TypesHermesNavigation> = ({
  basis,
}: TypesHermesNavigation) => {
  const { t } = useTranslation(basis.dictionary);

  const router = useRouter();

  const lcaHermesNavigationRoutes = React.useCallback(
    async (route: TypesHermesNavigationRoutes | "") => {
      //
      // @notes:

      //
      // conditions

      // error false
      // fold()

      // loading start
      // fold()

      //
      // run
      const run = async () => {
        try {
          //
          // start

          await router.push(`/${route}`);

          //
          // end
        } catch (e) {
          //
          // catch
        } finally {
          //
          // loading stop
          // fold()
          //
          // end
        }
      };
      run();

      //
      // end
      return;
    },
    [router]
  );

  const lcaHermesNavigationRefresh = React.useCallback(async () => {
    //
    // @notes:

    //
    // conditions

    // error false
    // fold()

    // loading start
    // fold()

    //
    // run
    const run = async () => {
      try {
        //
        // start

        console.log(`run`);
        const currentroute = router.asPath;
        console.log(`@todo... refresh ${currentroute}`);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(`complete`);

        //
        // end
      } catch (e) {
        //
        // catch
      } finally {
        //
        // loading stop
        // fold()
        //
        // end
      }
    };
    run();

    //
    // end
    return;
  }, [router.asPath]);

  return (
    <div className={`flex flex-col w-full`}>
      <div
        className={`flex flex-row w-full h-12 border-2 border-neutral justify-between `}
      >
        <div
          className={`grid grid-cols-5 w-144 place-items-center divide-x-2 divide-neutral border-r-2 border-neutral `}
        >
          <div
            className={`col-span-1 flex w-full h-full justify-center items-center cursor-pointer hover:bg-neutral hover:text-white`}
            onClick={() => lcaHermesNavigationRoutes("")}
          >
            <p className={"font-sans font-semibold text-md"}>{"Hermes"}</p>
          </div>
          <div
            className={`col-span-1 flex w-full h-full justify-center items-center cursor-pointer hover:bg-neutral hover:text-white`}
            onClick={lcaHermesNavigationRefresh}
          >
            <p className={"font-sans font-medium text-md"}>
              {`${t(`glossary:`, `Refresh`)}`}
            </p>
          </div>
          <div
            className={`col-span-1 flex w-full h-full justify-center items-center cursor-pointer hover:bg-neutral hover:text-white`}
            onClick={() => lcaHermesNavigationRoutes("send")}
          >
            <p className={"font-sans font-medium text-md"}>
              {`${t(`glossary:`, `Send`)}`}
            </p>
          </div>
          <div
            className={`col-span-1 flex w-full h-full justify-center items-center cursor-pointer hover:bg-neutral hover:text-white`}
            onClick={() => lcaHermesNavigationRoutes("read")}
          >
            <p className={"font-sans font-medium text-md"}>
              {`${t(`glossary:`, `Read`)}`}
            </p>
          </div>
          <div
            className={`col-span-1 flex w-full h-full justify-center items-center cursor-pointer hover:bg-neutral hover:text-white`}
            onClick={() => lcaHermesNavigationRoutes("drafts")}
          >
            <p className={"font-sans font-medium text-md"}>
              {`${t(`glossary:`, `Drafts`)}`}
            </p>
          </div>
        </div>

        <div
          className={`flex w-12 border-l-2 border-neutral justify-center items-center cursor-pointer hover:bg-neutral hover:text-white`}
        >
          <svg
            xmlns={"http://www.w3.org/2000/svg"}
            fill={"none"}
            viewBox={"0 0 24 24"}
            strokeWidth={1.5}
            stroke={"currentColor"}
            className={"w-6 h-6"}
          >
            <path
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              d={
                "M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              }
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
