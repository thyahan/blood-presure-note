import React from "react";
import css from "./index.module.css";
import { FaAngleDown } from "react-icons/fa";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className={css.header}>
      <div className={css["header-group"]}>
        <div className={css["company-info"]}>
          <p>บริษัท ทรู บิสิเนส จำกัด</p>
          <p>เปลี่ยนบริษัท</p>
        </div>
        <div className="w-1 m-3 border-r-2 border-gray-100"></div>
        <div className={css["user-info"]}>
          <p>Lennert Nijenbijvank</p>
          <p>Head Admin</p>
          <div className={css["user-info-icon"]}>
            <FaAngleDown size={22} color={"red"} />
          </div>
        </div>
      </div>
      <div className={css.breadcrumb}>
        <div className={css["breadcrumb-parent"]}>{"บิล & จ่าย"}</div>
        <div className={css["breadcrumb-child"]}>ประวัติการชำระค่าบริการ</div>
      </div>
    </div>
  );
};

export default Header;
