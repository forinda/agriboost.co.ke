import React from "react";
import UnauthorizedPage from "../pages/admin/errors/UnauthorizedPage";
import useAuth from "../shared/hooks/useAuth";
import AdminRequired from "./AdminRequired";

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
      {user?.role === "developer" || "admin" || "user"||'moderator' ? (
        children
      ) : (
        <UnauthorizedPage />
      )}
    </AdminRequired>
  );
};

export default DeveloperRequired;
