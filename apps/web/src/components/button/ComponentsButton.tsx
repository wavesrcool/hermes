import { TypesHermesBasis } from "@hermes-web-types/basis/TypesHermesBasis";
import * as React from "react";

export type TypesComponentsButton = {
  basis: TypesHermesBasis & TypesFiguresComponentsButton;
};

export type TypesFiguresComponentsButton = {
  cl?: string;
  text: string;
  click?: () => void;
};

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes feature
 * @notes [ ]
 *
 */
export const ComponentsButton: React.FC<TypesComponentsButton> = ({
  basis,
}: TypesComponentsButton) => {
  return (
    <button className={`btn ${basis.cl || ``}`} onClick={basis.click}>
      {basis.text}
    </button>
  );
};
