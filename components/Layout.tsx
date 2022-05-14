import React from "react";
import Bottombar from "./Bottombar/Bottombar";
import Sidebar from "./Sidebar/Sidebar";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div>
        <Sidebar />
        <main className="sm:ml-[90px] xl:ml-[220px]">
          {children}
        </main>
        <Bottombar />
      </div>

    </div>
  )
}

export default Layout