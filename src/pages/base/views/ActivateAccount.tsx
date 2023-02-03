import { UserType } from "@state-provider/types";
import ActivateWithOtp from "@base-pages/components/account/ActivateWithOtp";
import ActivationGenerateOTP from "@base-pages/components/account/ActivationGenerateOTP";
import useAuth from "@shared-hooks/useAuth";
import React from "react";
import { useNavigate } from "react-router-dom";

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
        console.log("Fired");

        navigate("/");
      }
    }
    renderRef.current = true;
  }, [user]);

  return (
    <div className="container mx-auto min-h-screen w-full flex justify-center items-center font-rubik">
      <div>{getTab()}</div>
    </div>
  );
};

export default ActivateAccount;
