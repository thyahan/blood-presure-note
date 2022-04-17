import React, { useCallback } from "react";
import css from "./index.module.css";
import { FaCheck } from "react-icons/fa";

interface Props {
  current: number;
  steps: Array<{
    title: string;
  }>;
}

const Steps = (props: Props) => {
  const { current, steps } = props;

  const length = steps.length;

  const width = (100 / length).toFixed(0);

  const stepDoneClassName = useCallback((index: number) => (index < current ? css["step-done"] : ""), [current]);

  const stepCurrentClassName = useCallback(
    (index: number) => {
      return index === current ? css["step-current"] : "";
    },
    [current]
  );

  const renderIcon = (index: number) => {
    return index < current ? (
      <div className="w-[${width}%]">
        <FaCheck size={16} />
      </div>
    ) : (
      <span className="w-[${width}%]">{index + 1}</span>
    );
  };

  return (
    <ul className={css.steps}>
      {props.steps.map(({ title }, index) => (
        <li className={`${css.step} ${stepDoneClassName(index)} ${stepCurrentClassName(index)} w-[${width}%]`} key={index}>
          {renderIcon(index)}
          {title}
        </li>
      ))}
    </ul>
  );
};

export default Steps;
