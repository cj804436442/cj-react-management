import Reat, { lazy } from "react"
import Home from "../views/Home"
const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))

const withLoadingComponent = (comp: JSX.Element) => (
    <Reat.Suspense fallback={<div>loading……</div>}>
        {comp}
    </Reat.Suspense>
)

import { Navigate } from "react-router-dom"
const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path: "/about",
                element: withLoadingComponent(<About />)
            },
            {
                path: "/user",
                element: withLoadingComponent(<User />)
            },
        ]
    }


]

export default routes