import React, { useCallback, useState } from "react";
import css from "./index.module.css";
import Step from "components/@corp/Step";

interface Props {
  items: Array<{
    title: string;
    id: string;
    render: (index: number) => React.ReactNode;
  }>;
  current: number;
}

const Wizard = (props: Props) => {
  const { current, items } = props;
  
  return (
    <div className={css.wizard}>
      <Step steps={items.map((item) => ({ title: item.title }))} current={current} />
      {props.items[props.current]?.render?.(props.current)}
    </div>
  );
};

export default Wizard;
