import { useState } from "react";
import { FaHome, FaSistrix, FaCreditCard, FaDesktop, FaExpand } from "react-icons/fa";
import SideBarIcon from "./SideBarIcon";

const SideBar = () => {
  const [expand, setExpand] = useState(false);
  const className = expand ? "sidebar-expand" : "";

  return (
    <div className={`sidebar ${className}`}>
      <SideBarIcon icon={<FaHome size={22} />} />
      <SideBarIcon icon={<FaSistrix size={22} />} />
      <SideBarIcon icon={<FaCreditCard size={22} />} />
      <SideBarIcon icon={<FaDesktop size={22} />} />
      <SideBarIcon icon={<FaExpand size={22} />} onClick={() => setExpand((prev) => !prev)} />
    </div>
  );
};

export default SideBar;
