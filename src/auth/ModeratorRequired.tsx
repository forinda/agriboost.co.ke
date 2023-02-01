import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../shared/hooks/useAuth";
import LoginRequired from "./LoginRequired";

type ModeratorRequiredProps = {
  children: JSX.Element;
};

const ModeratorRequired: React.FunctionComponent<ModeratorRequiredProps> = ({
  children,
}) => {
  const {
    auth: { user },
  } = useAuth();

  return (
    <LoginRequired>
      {user?.role === ("moderator" || "admin" || "developer") ? (
        children
      ) : (
        <Navigate to={"/"} replace />
      )}
    </LoginRequired>
  );
};

export default ModeratorRequired;
