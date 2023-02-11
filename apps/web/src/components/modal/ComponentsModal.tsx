import { ComponentsButton } from "@hermes-web-components/button/ComponentsButton";
import { TypesHermesBasis } from "@hermes-web-types/basis/TypesHermesBasis";
import { useTranslation } from "next-i18next";
import * as React from "react";

export type TypesComponentsModalContent = {
  title: string;
  el: JSX.Element;
};

export type TypesComponentsModal = {
  basis: TypesHermesBasis & TypesFiguresComponentsModal;
};

export type TypesFiguresComponentsModal = {
  cl?: string;
  visible: boolean;
  content: TypesComponentsModalContent;
  close: () => void;
};

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes feature
 * @notes [ ]
 *
 */
export const ComponentsModal: React.FC<TypesComponentsModal> = ({
  basis,
}: TypesComponentsModal) => {
  const { t } = useTranslation(basis.dictionary);

  const lcComponentsModalClose = React.useCallback(() => {
    //
    // @notes:
    basis.close();

    // end
    return;
  }, [basis]);

  return basis.visible ? (
    <>
      <input
        type={"checkbox"}
        className={"modal-toggle"}
        checked={basis.visible}
        readOnly
      />
      <div className={`modal`}>
        <div
          className={` modal-box border-x-[8px] border-stone-200/30 border-opacity-50 `}
        >
          <div className={`flex flex-col w-full h-120`}>
            <div className={`flex flex-col w-full h-full overflow-scroll`}>
              <div className={`flex flex-col w-full h-full `}>
                <div className={`flex flex-row w-full `}>
                  <h3 className={"font-mono font-bold text-lg"}>
                    {basis.content.title}
                  </h3>
                </div>

                <div className={`flex flex-col w-full py-8 px-4 space-y-4`}>
                  {basis.content.el}
                </div>
              </div>
            </div>
          </div>

          <div className={`flex flex-row w-full justify-end px-4`}>
            <ComponentsButton
              basis={{
                ...basis,
                text: `${t("glossary:simple.ok", "ok")}`,
                click: lcComponentsModalClose,
              }}
            />
          </div>
        </div>
      </div>
    </>
  ) : null;
};
