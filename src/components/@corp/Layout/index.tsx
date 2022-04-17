import React from "react";
import Header from "components/@corp/Header";
import css from "./index.module.css";

interface Props {
  children: any;
}

const Layout = (props: Props) => {
  return (
    <div className={css.layout}>
      <div className={css.sidebar}>menu sidebar</div>
      <div className={css.container}>
        <Header />
        <div className={css.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
