import { AppContext } from "@state-provider";
import React from "react";

const useAuth = () => {
  const { state, dispatch } = React.useContext(AppContext);
  const {
    persistedState: { auth },
  } = state;

  return { auth, dispatch };
};

export default useAuth;
