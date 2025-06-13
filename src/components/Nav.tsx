function Nav() {
  return (
    <>
      <div className="w-96 h-full  rounded-xl bg-[url('../src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat  bg-contain">
        <ul className=" w-52 pt-12 pl-8">
          <li className="mb-5">
            <div className="w-full flex  items-center ">
              <span className="mr-5 w-10 h-10 rounded-full bg-blue200 text-blue950 flex items-center justify-center">
                1
              </span>
              <div>
                <span className="text-blue300">STEP 1</span>
                <h2 className="text-white font-bold">YOUR INFO</h2>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="w-full flex  items-center ">
              <span className="mr-5 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center">
                2
              </span>
              <div>
                <span className="text-blue300">STEP 2</span>
                <h2 className="text-white font-bold">SELECT PLAN</h2>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="w-full flex  items-center ">
              <span className="mr-5 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center">
                3
              </span>
              <div>
                <span className="text-blue300">STEP 3</span>
                <h2 className="text-white font-bold">ADD-ONS</h2>
              </div>
            </div>
          </li>
          <li className="mb-5">
            <div className="w-full flex  items-center ">
              <span className="mr-5 w-10 h-10 rounded-full border border-white text-white flex items-center justify-center">
                4
              </span>
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
