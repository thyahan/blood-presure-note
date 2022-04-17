import React from "react";
import css from "./index.module.css";
import { FaInfo } from "react-icons/fa";

interface Props {
  type: "success" | "warning" | "error";
  message: React.ReactNode;
}

const Alert = (props: Props) => {
  const { type, message = "" } = props;

  const renderIcon = () => {
    return (
      <div className={css.icon}>
        <FaInfo size={16} />
      </div>
    );
  };

  return (
    <div className={`${css.alert} ${css[type]}`}>
      {renderIcon()}
      <p>{message}</p>
    </div>
  );
};

export default Alert;
