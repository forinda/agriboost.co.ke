import React from "react";
import useAuth from "@shared-hooks/useAuth";
import AdminRequired from "@base-auth/AdminRequired";
import UnauthorizedPage from "@error-pages/UnauthorizedPage";

type DeveloperRequiredProps = {
  children: JSX.Element;
};

const DeveloperRequired: React.FunctionComponent<DeveloperRequiredProps> = ({
  children,
}) => {
  const {
    auth: { user },
  } = useAuth();
  return (
    <AdminRequired>
      {user?.role === "developer" || "admin" || "user" || "moderator" ? (
        children
      ) : (
        <UnauthorizedPage />
      )}
    </AdminRequired>
  );
};

export default DeveloperRequired;
