import loginAction from "@base-pages/actions/loginAction";
import React from "react";
import { Outlet, RouteObject } from "react-router-dom";
// import registerAction from "@base-pages/actions/registerAction";
import FullPageLoader from "../shared/components/FullPageLoader";
const LoginRequiredNoActivation = React.lazy(
  () => import("@base-auth/LoginRequiredNoActivation")
);
const ActivateAccount = React.lazy(
  () => import("@base-pages/views/ActivateAccount")
);
const AboutUsPage = React.lazy(() => import("@base-pages/views/AboutUsPage"));
const LandingPage = React.lazy(() => import("@base-pages/views/LandingPage"));
const ContactUsPage = React.lazy(
  () => import("@base-pages/views/ContactUsPage")
);
const LoginPage = React.lazy(() => import("@base-pages/views/LoginPage"));
const RegisterPage = React.lazy(
  () => import("@base-pages/views/RegisterPage")
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
      path: "about",
      element: <AboutUsPage />,
    },
    {
      // path: "/",
      index: true,
      element: <LandingPage />,
    },
    {
      path: "contact",
      element: <ContactUsPage />,
    },
    {
      path: "profile",
      element: <div>profile</div>,
    },
    {
      path: "login",
      element: <LoginPage />,
      action: loginAction,
    },
    {
      path: "register",
      element: <RegisterPage />,
      //   action: registerAction,
    },
    {
      path: "account/activate",
      element: (
        <LoginRequiredNoActivation>
          <ActivateAccount />
        </LoginRequiredNoActivation>
      ),
    },
  ],
};

export default BaseRoutes;
