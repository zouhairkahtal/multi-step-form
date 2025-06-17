import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="w-96 h-full  rounded-xl bg-[url('../src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat  bg-contain">
        <ul className=" w-52 pt-12 pl-8">
          <li className="mb-5">
            <div className="w-full flex  items-center ">
              <NavLink
              to={"/your-info"}
               className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "mr-5 w-10 h-10 rounded-full bg-blue200 text-blue950 flex items-center justify-center"
                    : "mr-5 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center"
                }
 
              >

              <span >
                1
              </span>
              </NavLink>
              <div>
                <span className="text-blue300">STEP 1</span>
                <h2 className="text-white font-bold">YOUR INFO</h2>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="w-full flex  items-center ">
              <NavLink
              to={"/select-plan"}
               className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "mr-5 w-10 h-10 rounded-full bg-blue200 text-blue950 flex items-center justify-center"
                    : "mr-5 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center"
                }
 
              >

              <span >
                2
              </span>
              </NavLink>
              <div>
                <span className="text-blue300">STEP 2</span>
                <h2 className="text-white font-bold">SELECT PLAN</h2>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="w-full flex  items-center ">
              <NavLink
              to={"/add-ons"}
               className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "mr-5 w-10 h-10 rounded-full bg-blue200 text-blue950 flex items-center justify-center"
                    : "mr-5 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center"
                }
 
              >

              <span >
                3
              </span>
              </NavLink>
              <div>
                <span className="text-blue300">STEP 3</span>
                <h2 className="text-white font-bold">ADD-ONS</h2>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="w-full flex  items-center ">
              <NavLink
              to={"/summary"}
               className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "mr-5 w-10 h-10 rounded-full bg-blue200 text-blue950 flex items-center justify-center"
                    : "mr-5 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center"
                }
 
              >

              <span >
                4
              </span>
              </NavLink>
              <div>
                <span className="text-blue300">STEP 4</span>
                <h2 className="text-white font-bold">SUMMARY</h2>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
    </>
  );
}

export default Nav;
