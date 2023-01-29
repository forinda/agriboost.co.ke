import { RouteObject } from "react-router-dom";

export const ShopRoutes: RouteObject = {
    path: "/shop",
    children: [
        {
            path: "/shop",
            element: <div>shop</div>,
        },
    ]
}

export default ShopRoutes;