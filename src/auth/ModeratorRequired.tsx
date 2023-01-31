import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../shared/hooks/useAuth";

type ModeratorRequiredProps = {
  children: JSX.Element;
};

const ModeratorRequired: React.FunctionComponent<ModeratorRequiredProps> = ({
  children,
}) => {
  const {
    auth: { user },
  } = useAuth();

  return user?.role === "moderator" || "user" ? (
    children
  ) : (
    <Navigate to={"/"} replace />
  );
};

export default ModeratorRequired;
