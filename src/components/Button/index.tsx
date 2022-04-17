import React from "react";
import css from "./index.module.css";
import omit from "lodash/omit";

type Type = "success" | "error";

type Size = "sm";

interface Props {
  className?: string;
  children?: any;
  size?: Size;
  type?: Type;
}

const Button = (props: Props & React.HTMLProps<HTMLButtonElement>) => {
  const { className = "", size, type } = props;

  const buttonClassName = `
    ${css.button} 
    ${size ? css[size] : ""}
    ${type ? css[type] : ""}
    ${className}
  `;

  return <button {...omit(props, ["className", "size", "type"])} className={buttonClassName} />;
};

export default Button;
