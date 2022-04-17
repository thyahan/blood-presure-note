import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: any) => any;
}
const Button = (props: Props) => {
  return <button {...props} />;
};

export default Button;
