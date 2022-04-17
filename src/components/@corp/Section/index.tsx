import React from "react";
import css from "./index.module.css";

interface Props {
  children: React.ReactNode;
}

const Seaction = (props: Props) => {
  const { children } = props;

  return (
    <div className={css.section}>
      <div className={css["section-header"]}>
        <p>ใบเสร็จและประวัติการชำระค่าบริการ</p>
        <p>ธันวาคม 2563</p>
      </div>
      <div className={css["section-body"]}>
        {children}
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
        <div>Seaction</div>
      </div>
    </div>
  );
};

export default Seaction;
