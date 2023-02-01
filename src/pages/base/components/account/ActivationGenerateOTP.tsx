import React from "react";
import { Form } from "react-router-dom";
import { publicApi } from "../../../../api/axios";
import { UserType } from "../../../../providers/state/types";
import useAuth from "../../../../shared/hooks/useAuth";
import { AccountActivationTabs } from "../../views/ActivateAccount";

type ActivationGenerateOTPProps = {
  changeTab: (tab: AccountActivationTabs) => void;
  tab: AccountActivationTabs;
};

const ActivationGenerateOTP: React.FunctionComponent<
  ActivationGenerateOTPProps
> = ({ changeTab, tab }) => {
  // const [error, setError] = React.useState("");
  const {
    auth: { user },
  } = useAuth();
  const [errorVisible, setErrorVisible] = React.useState<boolean>(false);
  const [successVisible, setSuccessVisible] = React.useState<boolean>(false);
  const [successMessage, setSuccessMessage] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [redirecting, setRedirecting] = React.useState<boolean>(false);

  const { email } = user as UserType;
  const getNewOTP = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      setLoading(true);
      await publicApi.post("/auth/resend-activation-token", {
        email,
      });
      setSuccessMessage("OTP sent. Please check your email.");
      setRedirecting(true);
      setSuccessVisible(true);
      setTimeout(() => {
        setLoading(false);
        setSuccessVisible(false);
        changeTab("activate");
      }, 2000);
    } catch (error: any) {
      const { message } = error.response.data;
      if (Array.isArray(message)) {
        const msg = message.join(", ");
        setErrorMessage(msg);
      } else {
        setErrorMessage(message);
        setErrorVisible(true);
      }
      setLoading(false);
    } finally {
      setLoading(false);
      setRedirecting(false);
    }
  };

  return (
    <div className="w-full">
      <Form className="max-w-xl border p-10 w-full">
        <div>
          {/* Error message  */}
          {errorVisible && errorMessage.length > 0 ? (
            <button
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
              onClick={(e) => {
                e.preventDefault();
                setErrorVisible(false);
                setErrorMessage("");
              }}
            >
              <strong className="font-medium block">Error!</strong>
              <span className="block sm:inline">{errorMessage}</span>
            </button>
          ) : (
            <></>
          )}
          {successVisible && setErrorMessage.length > 0 ? (
            <button
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative cursor-pointer block w-full"
              role="alert"
              onClick={(e) => {
                e.preventDefault();
                setSuccessVisible(false);
                setSuccessMessage("");
              }}
            >
              <strong className="font-bold block">Success!</strong>
              <span className="block sm:inline">{successMessage}</span>
            </button>
          ) : (
            <></>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">Generate OTP</h1>
          <p className="text-sm text-gray-500">
            Enter your email address to generate OTP
          </p>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="
            Enter your email address"
            value={user?.email}
            readOnly
            className="border-b read-only:text-neutral-400 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-200 read-only:cursor-not-allowed"
          />
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={loading || redirecting}
            onClick={getNewOTP}
          >
            {loading ? (
              <div className="flex justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
                  />
                </svg>
                {redirecting ? "Redirecting..." : "Generating OTP..."}
              </div>
            ) : (
              <span>Generate OTP</span>
            )}
          </button>
        </div>
        <div className="mt-4">
          {/* <p className="text-sm text-red-500">{error}</p> */}
          <p className="text-sm text-gray-500">
            Allready have the OTP?{" "}
            <button
              disabled={loading || redirecting}
              className="text-blue-500 cursor-pointer disabled:cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault();
                changeTab(tab);
              }}
            >
              Activate Account
            </button>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default ActivationGenerateOTP;
