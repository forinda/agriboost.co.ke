import { publicApi } from "@api/axios";
import FormError from "@base-pages/components/account/FormError";
import SvgSpinLoader from "@base-pages/components/SvgSpinLoader";
import useAuth from "@shared-hooks/useAuth";
import { AxiosError } from "axios";
import React from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

type RegisterProps = {
  [key: string]: string;
  username: string;
  password: string;
  email: string;
};

type ErrorProps = {
  [key: string]: string[];
};

const RegisterPage = () => {
  const renderRef = React.useRef<boolean>(false);
  const [errors, setErrors] = React.useState<ErrorProps>({});
  const [redirecting, setRedirecting] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [serverError, setServerError] = React.useState<string>("");
  const [showServerErrors, setShowServerErrors] =
    React.useState<boolean>(false);
  const {
    auth: { isAuthenticated },
  } = useAuth();
  const from = useLocation().state as { from: string };
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrors({});
    seekFormErrors(e);
  };

  const erroRegex = {
    email: /email/i,
    username: /username/i,
    password: /password/i,
  };

  const seekFormErrors = (e: any) => {
    const { name, value } = e.target as { name: string; value: string };
    if (value.length < 1) {
      setErrors((prev) => ({ ...prev, [name]: ["This field is required"] }));
    }
    if (name === "email") {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!value.match(emailRegex)) {
        setErrors((prev) => ({
          ...prev,
          [name]: ["This field must be a valid email"],
        }));
      }
    }
    if (name === "password") {
      if (value.length < 8) {
        setErrors((prev) => ({
          ...prev,
          [name]: ["This field must be at least 8 characters"],
        }));
      }
      if (!value.match(/[A-Z]/)) {
        setErrors((prev) => ({
          ...prev,
          [name]: ["This field must contain at least one uppercase letter"],
        }));
      }

      if (!value.match(/[0-9]/)) {
        setErrors((prev) => ({
          ...prev,
          [name]: ["This field must contain at least one number"],
        }));
      }

      if (!value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
        setErrors((prev) => ({
          ...prev,
          [name]: ["This field must contain at least one special character"],
        }));
      }

      if (!value.match(/[a-z]/)) {
        setErrors((prev) => ({
          ...prev,
          [name]: ["This field must contain at least one lowercase letter"],
        }));
      }
    }
    if (name === "username" && value.length < 3) {
      setErrors((prev) => ({
        ...prev,
        [name]: ["This field must be at least 3 characters"],
      }));
    }
  };

  const seekServerErrors = (data: any) => {
    const { message } = data;
    if (message) {
      if (Array.isArray(message)) {
        message.forEach((msg: any) => {
          const key = Object.keys(msg)[0];
          const value = msg[key];
          setErrors((prev) => ({ ...prev, [key]: [value] }));
        });
      } else {
        const key = Object.keys(message)[0];
        const value = message[key];
        setErrors((prev) => ({ ...prev, [key]: [value] }));
      }
    }
  };

  const [formData, setFormData] = React.useState<RegisterProps>(
    {} as RegisterProps
  );
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({});
    seekFormErrors(e);
  };

  const handleSubmit = async () => {
    try {
      setShowServerErrors(false);
      setServerError("");
      setLoading(true);
      const { data } = await publicApi.post("/auth/sign-up", formData);
      if (data) {
        toast.success("Account created successfully");
        setRedirecting(true);
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 2000);
      }
    } catch (error) {
      const err = error as AxiosError;

      if (err.message) {
        setServerError(err.message);
        setShowServerErrors(true);
      }
      if (err.response) {
        const { data } = err.response as any;
        if (data.message) {
          if (Array.isArray(data.message)) {
            data.message.forEach((msg: any) => {
              toast.error(msg);
              setServerError(msg);
            });
          } else {
            toast.error(data.message);
            setServerError(data.message);
          }
        }
        setShowServerErrors(true);
        seekServerErrors(data);
      }
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (renderRef.current) {
      if (isAuthenticated) {
        navigate(from?.from || "/", { replace: true });
      }
    }
    renderRef.current = true;
  }, []);

  return (
    <div className="flex justify-center min-h-screen w-full items-center bg-gray-300 font-rubik">
      <Form className="p-10 bg-white rounded min-w-[30rem]">
        {/* <ToastContainer position="top-right" /> */}

        <div className="flex items-center justify-center flex-col p-3">
          <img src="/logo192.png" alt="" className="h-20 w-20 m-4" />
          {showServerErrors && serverError.length > 0 && (
            <FormError
              error={serverError}
              resetError={setServerError}
              toggleDisplay={setShowServerErrors}
            />
          )}
          <h1 className="font-medium text-4xl">Create account</h1>
        </div>

        {/* Username */}
        <div>
          <label htmlFor="username" className="text-gray-500">
            Username
          </label>
          <input
            type="text"
            autoComplete="false"
            name="username"
            id="username"
            required
            role={errors.username?.length > 0 ? "alert" : "input"}
            aria-required="true"
            placeholder="Enter your username"
            onBlur={handleBlur}
            onChange={handleChange}
            className={`border-b px-2 read-only:text-neutral-400 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-200 read-only:cursor-not-allowed ${
              errors.username?.length > 0 ? "border-red-300" : "border-blue-300"
            }`}
          />
          <div>
            {errors.username?.map((error, idx) => (
              <p key={idx} className="text-red-500 text-sm max-w-md capitalize">
                {error}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="text-gray-500">
              Email address
            </label>
            <input
              type="email"
              autoComplete="false"
              required
              aria-required="true"
              name="email"
              id="email"
              role={"input"}
              placeholder="Enter your email address"
              onBlur={handleBlur}
              onChange={handleChange}
              className={`border-b px-2 read-only:text-neutral-400 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-200 read-only:cursor-not-allowed ${
                errors.username?.length > 0
                  ? "border-red-300"
                  : "border-blue-300"
              }`}
            />
            <div>
              {errors.email?.map((error, idx) => (
                <p key={idx} className="text-red-500 text-sm">
                  {error}
                </p>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-gray-500">
              Password
            </label>
            <div
              className={`flex items-center px-2 border-b  ${
                errors.username?.length > 0
                  ? "border-b-red-300"
                  : "border-b-blue-300"
              }`}
            >
              <input
                type={showPassword ? "text" : "password"}
                autoComplete="false"
                name="password"
                required
                aria-required="true"
                aria-placeholder="Enter your password"
                placeholder="Enter your password"
                role={showPassword ? "textbox" : "password"}
                title={showPassword ? "password" : "textbox"}
                onBlur={handleBlur}
                onChange={handleChange}
                className="w-full px-2 py-2 outline-none ring-0 focus:ring-0 border-neutral-500"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((prev) => !prev);
                }}
              >
                {showPassword ? (
                  <FaEye className="w-6 h-6" />
                ) : (
                  <FaRegEyeSlash className="w-6 h-6" />
                )}
              </button>
            </div>
            <div>
              {errors.password?.map((error) => (
                <p className="text-red-500 text-sm max-w-md capitalize">
                  {error}
                </p>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 w-full disabled:opacity-75 disabled:cursor-not-allowed"
            disabled={loading || redirecting}
            onClick={async (e) => {
              e.preventDefault();
              setErrors({});
              await handleSubmit();
            }}
          >
            {loading ? (
              <div className="flex justify-center">
                <SvgSpinLoader />
                {redirecting ? "Redirecting..." : "Creating account..."}
              </div>
            ) : (
              <span>Create account</span>
            )}
          </button>
        </div>
        <p className="py-2 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Sign in
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default RegisterPage;
