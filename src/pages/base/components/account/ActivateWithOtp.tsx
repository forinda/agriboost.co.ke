import { publicApi } from "@api/axios";
import { AccountActivationTabs } from "@base-pages/views/ActivateAccount";
import useAuth from "@shared-hooks/useAuth";
import { AxiosError } from "axios";
import React from "react";
import { Form, useNavigate } from "react-router-dom";
import SvgSpinLoader from "../SvgSpinLoader";

type ActivateWithOtpProps = {
  changeTab: (tab: AccountActivationTabs) => void;
  tab: AccountActivationTabs;
};

const ActivateWithOtp: React.FunctionComponent<ActivateWithOtpProps> = ({
  changeTab,
  tab,
}) => {
  const {
    auth: { user },
    dispatch,
  } = useAuth();
  const [otp, setOtp] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<string>("");
  const [showErrors, setShowErrors] = React.useState<boolean>(false);
  const [redirecting, setRedirecting] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const handleOtpChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    if (isNaN(Number(value))) {
      return;
    }
    setOtp(value);
  };

  const handleOtpSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      setErrors("");
      setShowErrors(false);
      setLoading(true);
      setRedirecting(false);
      const { data } = await publicApi.post("/auth/activate", {
        email: user?.email,
        otp,
      });
      setRedirecting(true);
      setTimeout(() => {
        dispatch({
          type: "logout-success",
          payload: null,
        });
        navigate("/login", { replace: true });
      }, 3000);
    } catch (error: any) {
      if (error instanceof AxiosError && error.message) {
        setErrors(error.message);
      }
      if (error instanceof AxiosError) {
        const { message } = error.response?.data;
        if (Array.isArray(message)) {
          const msg = message.join(", ");
          setErrors(msg);
        } else {
          setErrors(message);
        }
        setShowErrors(true);
      }
    } finally {
      setLoading(false);
    }
  };

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
        {showErrors && errors.length > 0 && (
          <div
            className="bg-red-100 border capitalize text-center border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold block">Error!</strong>
            <span className="block sm:inline">{errors}</span>
          </div>
        )}
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
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full disabled:opacity-75 disabled:cursor-not-allowed"
            onClick={handleOtpSubmit}
            disabled={loading || redirecting || otp.length < 6}
          >
            {loading ? (
              <div className="flex justify-center">
               <SvgSpinLoader/>
                {redirecting ? "Redirecting..." : "Activating..."}
              </div>
            ) : (
              <span>Activate account</span>
            )}
          </button>
        </div>
        <p>
          Didn't receive an OTP?{" "}
          <button
            disabled={loading || redirecting}
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
