import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export function Layout() {
  return (
    <div className=" w-screen h-screen bg-Purple200 flex items-center justify-center">
      <div className="w-contactUsdevWidth h-contactUsdevHeight flex bg-white rounded-3xl p-5 ">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}
