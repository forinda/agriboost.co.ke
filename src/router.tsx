import IndexErrorPage from "./errors/IndexErrorPage";
import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./routes/admin";
import BaseRoutes from "./routes/base";
import LmsRoutes from "./routes/lms";
import ShopRoutes from "./routes/shop";
import SocialRoutes from "./routes/social";

const router = createBrowserRouter([
  {
    errorElement: <IndexErrorPage />,
    children: [BaseRoutes, AdminRoutes, LmsRoutes, ShopRoutes, SocialRoutes],
  },
]);

export default router;
