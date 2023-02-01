import React from "react";
import { useNavigate } from "react-router-dom";
import { UserType } from "../../../providers/state/types";
import useAuth from "../../../shared/hooks/useAuth";
import ActivateWithOtp from "../components/account/ActivateWithOtp";
import ActivationGenerateOTP from "../components/account/ActivationGenerateOTP";

export type AccountActivationTabs = "activate" | "regenerate";

const ActivateAccount = () => {
  const [tab, setTab] = React.useState<AccountActivationTabs>("activate");
  const changeTab = (tab: AccountActivationTabs) => {
    setTab(tab);
  };
  const renderRef = React.useRef<boolean>(false);
  const user = useAuth().auth.user as UserType;
  const getTab = () => {
    switch (tab) {
      case "activate":
        return <ActivateWithOtp tab="regenerate" changeTab={changeTab} />;
      case "regenerate":
        return <ActivationGenerateOTP tab="activate" changeTab={changeTab} />;
      default:
        return <ActivateWithOtp tab="regenerate" changeTab={changeTab} />;
    }
  };
  const navigate = useNavigate();

  React.useEffect(() => {
    if (renderRef.current) {
      if (user?.active) {
        navigate("/");
      }
    }
    renderRef.current = true;
  }, []);

  return (
    <div className="container mx-auto min-h-screen w-full flex justify-center items-center font-rubik">
      <div>{getTab()}</div>
    </div>
  );
};

export default ActivateAccount;
