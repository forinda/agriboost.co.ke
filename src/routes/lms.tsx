import { RouteObject } from "react-router-dom";

export const LmsRoutes: RouteObject = {
    path: "/lms",
    children: [
        {
            path: "/lms",
            element: <div>lms</div>,
        },
    ]
}

export default LmsRoutes;