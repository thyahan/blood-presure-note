import { omit } from "lodash";
import React from "react";
import css from "./index.module.scss";

interface Props {
  error?: string;
  label?: React.ReactNode;
  required?: boolean;
}

const Input = (props: Props & React.HTMLProps<HTMLInputElement>) => {
  const { error, label, required } = props;

  const inputClassName = `
    ${css.input}
    ${error ? css["error"] : ""}
    ${required ? css["required"] : ""}
  `;

  return (
    <div className={inputClassName}>
      {label && <label>{label}</label>}
      <div>
        <input {...omit(props, ["error", "label", "required"])} />
        {error && <span>{error}</span>}
      </div>
    </div>
  );
};

export default Input;
