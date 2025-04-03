import React from "react";
import SidebarNavLinks from "./SidebarNavLinks";

const Sidebar = () => {
  return (
    <aside className="w-full  h-26 shadow-md md:w-52 md:h-full">
      <div className="pt-8 pr-2 flex grow flex-row justify-between space-x-2 md:flex-col">
        <SidebarNavLinks />
      </div>
    </aside>
  );
};

export default Sidebar;
