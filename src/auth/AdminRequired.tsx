import React from "react";
import { Navigate } from "react-router-dom";
import UnauthorizedPage from "../pages/admin/errors/UnauthorizedPage";
import useAuth from "../shared/hooks/useAuth";
import LoginRequired from "./LoginRequired";
import ModeratorRequired from "./ModeratorRequired";

type AdminRequiredProps = {
  children: JSX.Element;
};

const AdminRequired: React.FunctionComponent<AdminRequiredProps> = ({
  children,
}) => {
  const {
    auth: { user },
  } = useAuth();
  console.log({ role: user?.role });

  return (
    <LoginRequired>
      {user?.role === ("admin" || "developer") ? (
        children
      ) : (
        <Navigate to={"/"} replace />
      )}
    </LoginRequired>
  );
};

export default AdminRequired;
