import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="flex">

        <div className="bg-gray-200 flex-auto w-[20%] h-screen">
          <Sidebar />
        </div>

        <div className="flex-auto w-[80%] h-screen ">
          <Outlet />

        </div>
      </div>

    </>
  )
};

export default Layout;