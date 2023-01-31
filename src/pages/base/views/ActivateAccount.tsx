import React from "react";
import ActivateWithOtp from "../components/account/ActivateWithOtp";
import ActivationGenerateOTP from "../components/account/ActivationGenerateOTP";

type Tabs = "activate" | "regenerate";

type ButtonProps = {
  tab: Tabs;
  changeTab: (tab: Tabs) => void;
  currentTab: Tabs;
  disabled?: boolean;
  label: string;
};

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const tabMatch = props.currentTab === props.tab;
  return (
    <button
      disabled={props.currentTab === props.tab}
      onClick={() => props.changeTab(props.tab)}
      className={`py-2 px-4 text-center border-b ${tabMatch&&"border-b-blue-500 text-blue-600 border"}} first:border-r last:border-l border-gray-300`}
    >
      {props.label}
    </button>
  );
};

const ActivateAccount = () => {
  const [tab, setTab] = React.useState<Tabs>("activate");

  const changeTab = (tab: Tabs) => {
    setTab(tab);
  };

  const getTab = () => {
    switch (tab) {
      case "activate":
        return <ActivateWithOtp />;
      case "regenerate":
        return <ActivationGenerateOTP />;
      default:
        return <ActivateWithOtp />;
    }
  };

  return (
    <div className="container min-h-screen w-full flex justify-center items-center">
      <div className="w-full max-w-3xl px-5 p-10 shadow-lg border mx-auto">
        <div className="grid grid-cols-2 w-full">
          <Button
            label="Activate account"
            currentTab={tab}
            changeTab={changeTab}
            tab={"activate"}
          />
          <Button
            label="Regenerate OTP"
            currentTab={tab}
            changeTab={changeTab}
            tab={"regenerate"}
          />
        </div>
        <div>{getTab()}</div>
      </div>
    </div>
  );
};

export default ActivateAccount;
