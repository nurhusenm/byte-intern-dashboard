import React from "react";
import SidebarNavLinks from "./SidebarNavLinks";

const Sidebar = () => {
  return (
    <aside className="w-52 h-full shadow-md">
      <div className="pt-8">
        <SidebarNavLinks />
      </div>
    </aside>
  );
};

export default Sidebar;
