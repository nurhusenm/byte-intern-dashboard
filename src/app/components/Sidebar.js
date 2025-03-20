import React from "react";
import SidebarNavLinks from "./SidebarNavLinks";

const Sidebar = () => {
  return (
    <aside className="w-52 h-full shadow-md">
      <div className="pt-8 pr-2">
        <SidebarNavLinks />
      </div>
    </aside>
  );
};

export default Sidebar;
