import React from "react";
import { RouteObject } from "react-router-dom";
import FullPageLoader from "@shared-comps/FullPageLoader";
const AdminBaseErrorElement = React.lazy(
  () => import("@admin-pages/errors/AdminBaseErrorElement")
);
const AdminRequired = React.lazy(() => import("@base-auth/AdminRequired"));
const AdminSettings = React.lazy(
  () => import("@admin-pages/views/AdminSettings")
);
const AdminProducts = React.lazy(
  () => import("@admin-pages/views/AdminProducts")
);
const AdminCourses = React.lazy(
  () => import("@admin-pages/views/AdminCourses")
);
const AdminUsers = React.lazy(() => import("@admin-pages/views/AdminUsers"));
const AdminBase = React.lazy(() => import("@admin-pages/views/AdminBase"));
const AdminAnalytics = React.lazy(
  () => import("@admin-pages/views/AdminAnalytics")
);
const AdminPayments = React.lazy(
  () => import("@admin-pages/views/AdminPayments")
);
const AdminOrders = React.lazy(
  () => import("@admin-pages/views/AdminOrders")
);
const AdminRoles = React.lazy(() => import("@admin-pages/views/AdminRoles"));
export const AdminRoutes: RouteObject = {
  path: "/admin",
  element: (
    <React.Suspense fallback={<FullPageLoader />}>
      <AdminRequired>
        <AdminBase />
      </AdminRequired>
    </React.Suspense>
  ),
  errorElement: <AdminBaseErrorElement />,
  children: [
    {
      path: "/admin",
      element: <AdminAnalytics />,
      id: "admin-analytics",
    },
    {
      path: "/admin/payments",
      element: <AdminPayments />,
      // loader: AdminPaymentsLoader,
    },
    {
      path: "/admin/orders",
      element: <AdminOrders />,
    },
    {
      path: "/admin/products",
      element: <AdminProducts />,
    },
    {
      path: "/admin/courses",
      element: <AdminCourses />,
    },
    {
      path: "/admin/settings",
      element: <AdminSettings />,
    },
    {
      path: "/admin/users",
      element: <AdminUsers />,
    },
    {
      path: "/admin/roles",
      element: <AdminRoles />,
    },
  ],
};

export default AdminRoutes;
