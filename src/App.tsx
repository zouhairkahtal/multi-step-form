import { Layout } from "../src/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import YourInfo from "./views/YourInfo";
import SelectPlan from "./views/SelectPlan";
import AddOns from "./views/AddOns";
import Summary from "./views/Summary";
import FinishingUp from "./views/finishing-up";


function App() {
 
const router = createBrowserRouter([
    {
      path: "/",

      element: <Layout />,     
       children: [
         {
          index: true,
          element: <YourInfo/>,
        },
        {
          path: "your-info",
          element: <YourInfo/>,
        },
        {
          path: "select-plan",
          element: <SelectPlan/>,
        },
        {
          path: "add-ons",
          element: <AddOns/>,
        },
        {
          path: "summary",
          element: <Summary/>,
        },
        {
          path: "finishing-up",
          element: <FinishingUp/>,
        },
      ],
    }
  ]);
  return <RouterProvider router={router} />;

  // return (
  //   <>
  //    <div className="w-screen h-screen bg-Purple200 flex items-center justify-center">
  //       <Steps/>

  //    </div>
  //   </>
  // )
}

export default App
