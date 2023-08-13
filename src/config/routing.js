import Home from "../page/Home";
import Root from "../page/Root";

const routeSetting = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path:"/",
            element: <Home />
        }
      ]
    },
  ]

export default routeSetting;