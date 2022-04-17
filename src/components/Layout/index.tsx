import React from "react";
import css from "./index.module.css";
import Header from "components/Header";

interface Props {
  children: any;
  title: React.ReactNode;
}

const Layout = (props: Props) => {
  const { children, title } = props;

  return (
    <div className={css.layout}>
      <Header>{title}</Header>
      {children}
    </div>
  );
};

export default Layout;
