import React from "react";

interface Props {
  icon: React.ReactNode;
  tooltip?: React.ReactNode;
  onClick?: () => any;
}

const SideBarIcon = ({ icon, tooltip = "tooltip :sparking:", onClick }: Props) => {
  return (
    <div className="sidebar-icon group" onClick={onClick}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{tooltip}</span>
    </div>
  );
};

export default SideBarIcon;
