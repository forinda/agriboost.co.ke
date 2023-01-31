import React from "react";
import { Outlet, RouteObject } from "react-router-dom";
import loginAction from "../pages/base/actions/loginAction";
// import registerAction from "../pages/base/actions/registerAction";
import ActivateAccount from "../pages/base/views/ActivateAccount";
import FullPageLoader from "../shared/components/FullPageLoader";

const AboutUsPage = React.lazy(() => import("../pages/base/views/AboutUsPage"));
const LandingPage = React.lazy(() => import("../pages/base/views/LandingPage"));
const ContactUsPage = React.lazy(
  () => import("../pages/base/views/ContactUsPage")
);
const LoginPage = React.lazy(() => import("../pages/base/views/LoginPage"));
const RegisterPage = React.lazy(
  () => import("../pages/base/views/RegisterPage")
);

export const BaseRoutes: RouteObject = {
  path: "/",
  element: (
    <React.Suspense fallback={<FullPageLoader />}>
      <Outlet />
    </React.Suspense>
  ),
  children: [
    {
      path: "/about",
      element: <AboutUsPage />,
    },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/contact",
      element: <ContactUsPage />,
    },
    {
      path: "/profile",
      element: <div>profile</div>,
    },
    {
      path: "/login",
      element: <LoginPage />,
      action: loginAction,
    },
    {
      path: "/register",
      element: <RegisterPage />,
      //   action: registerAction,
    },
    {
      path: "account/activate",
      element: <ActivateAccount />,
    },
  ],
};

export default BaseRoutes;
