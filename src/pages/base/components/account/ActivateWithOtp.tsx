import React from "react";
import { Form } from "react-router-dom";
import { AccountActivationTabs } from "../../views/ActivateAccount";

type ActivateWithOtpProps = {
  changeTab: (tab: AccountActivationTabs) => void;
  tab: AccountActivationTabs;
};

const ActivateWithOtp: React.FunctionComponent<ActivateWithOtpProps> = ({
  changeTab,
  tab,
}) => {
  const [otp, setOtp] = React.useState<string>("");

  const handleOtpChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    if (isNaN(Number(value))) {
      return;
    }
    setOtp(value);
  };

  //   const handleBlur = () => {
  //     if (otp.length < 6) {
  //       setOtp("");
  //     }
  //   };

  return (
    <div className="w-full">
      <Form className="max-w-lg shadow-md p-10 border rounded-md flex flex-col gap-4">
        <div className="flex justify-center">
          <img
            src="/logo512.png"
            alt="placeholder"
            className="rounded-full h-20 aspect-squared"
          />
        </div>
       <div>
            <h1 className="text-2xl font-bold text-center">Activate Account</h1>
            <p className="text-sm text-gray-500 text-center">
                Enter the OTP sent to your email address
            </p>
       </div>
        <div className="border-b flex flex-col text-xl">
          {/* <label htmlFor="otp" className="">
            OTP
          </label> */}
          <input
            type="text"
            name="otp"
            placeholder="000000"
            id="otp"
            maxLength={6}
            minLength={6}
            value={otp}
            onChange={handleOtpChange}
            autoFocus
            pattern="[0-9]{6}"
            className="border-b read-only:text-neutral-400 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-200 text-center"
          />
        </div>
        <div>
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 w-full"
            onClick={(e) => {
              e.preventDefault();
              changeTab(tab);
            }}
          >
            Activate Account
          </button>
        </div>
        <p>
          Didn't receive an OTP?{" "}
          <button
            className="text-blue-500 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              changeTab(tab);
            }}
          >
            Regenerate OTP
          </button>
        </p>
      </Form>
    </div>
  );
};

export default ActivateWithOtp;
