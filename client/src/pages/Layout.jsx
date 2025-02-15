import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex">

        <div className="bg-gray-200 flex-auto w-1/4 h-screen">
          <Sidebar />
        </div>

        <div className="flex-auto w-3/4 h-screen ">
          <Outlet />

        </div>
      </div>

    </>
  )
};

export default Layout;