import Reat, { lazy } from "react"
import Home from "../views/Home"
const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page301 = lazy(() => import("../views/Page301"))

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
                path: "/page3/page301",
                element: withLoadingComponent(<Page301 />)
            },
            {
                path: "/user",
                element: withLoadingComponent(<User />)
            },
        ]
    },
    {
        path: "*",
        element: <Navigate to="/page1" />
    }


]

export default routes