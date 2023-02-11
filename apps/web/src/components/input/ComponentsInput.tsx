import { TypesHermesBasis } from "@hermes-web-types/basis/TypesHermesBasis";
import * as React from "react";

export type TypesComponentsInput = {
  basis: TypesHermesBasis & TypesFiguresComponentsInput;
};

export type TypesFiguresComponentsInput = {
  cl?: string;
  type?: React.HTMLInputTypeAttribute;
  change: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  value: string;
};

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes feature
 * @notes [ ]
 *
 */
export const ComponentsInput: React.FC<TypesComponentsInput> = ({
  basis,
}: TypesComponentsInput) => {
  return (
    <input
      type={basis.type || "text"}
      value={basis.value}
      disabled={basis.disabled || false}
      placeholder={basis.placeholder ? ` ${basis.placeholder}` : ``}
      className={`input ${basis.cl || ``}`}
      onChange={({ target: { value } }) => basis.change(value)}
    />
  );
};
