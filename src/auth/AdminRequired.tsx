import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "@shared-hooks/useAuth";
import LoginRequired from "@base-auth/LoginRequired";

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
