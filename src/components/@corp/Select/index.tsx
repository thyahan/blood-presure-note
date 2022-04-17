import React from "react";
import ReactSelect, { components, DropdownIndicatorProps } from "react-select";
import css from "./index.module.css";

interface Props {
  options: Array<{
    value: any;
    label: string;
  }>;
}

const Select = (props: Props) => {
  const { options } = props;

  const customStyles = {
    dropdownIndicator: (provided: any, state: any) => {
      console.log(state.selectProps.menuIsOpen);

      const rotate = state.selectProps.menuIsOpen ? { transform: "rotate(-180deg)" } : {};

      return {
        ...provided,
        ...rotate,
        "transition-property": "all",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
        "transition-duration": "150ms",
        color: "red",
        "&:hover": {
          color: "red",
          cursor: "pointer",
        },
      };
    },

    indicatorsContainer: (provided: any) => {
      return {
        ...provided,
        "transition-property": "all",
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
        "transition-duration": "150ms",
        "&:hover": {
          cursor: "pointer",
        },
      };
    },

    indicatorSeparator: (provided: any) => {
      return {
        ...provided,
        display: "none",
      };
    },
  };

  return (
    <ReactSelect
      className={css.select}
      placeholder={<span className="text-xl text-gray-800">แสดงทุกผลิตภัณฑ์</span>}
      styles={customStyles}
      closeMenuOnSelect={false}
      defaultValue={[options[1], options[2]]}
      isMulti
      options={options}
    />
  );
};

export default Select;
