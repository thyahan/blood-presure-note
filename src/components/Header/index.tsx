import React from "react";
import css from "./index.module.css";

interface Props {
  children: React.ReactNode;
}

const Header = (props: Props) => {
  return <div className={css.header}>{props.children}</div>;
};

export default Header;
