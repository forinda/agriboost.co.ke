import { AxiosError } from "axios";
import React from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { publicApi } from "@api/axios";
import useAuth from "@shared-hooks/useAuth";
import Hr from "@shop-pages/components/Hr";
import { UserType } from "@state-provider/types";

type LoginProps = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const {
    dispatch,
    auth: { isAuthenticated },
  } = useAuth();
  const locationState = useLocation().state as { from: string };
  const navigate = useNavigate();
  const renderRef = React.useRef<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errors, setErrors] = React.useState<{ [key: string]: string[] }>({});
  const [formData, setFormData] = React.useState<LoginProps>({} as LoginProps);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const sendToApi = async (data: LoginProps) => {
    try {
      const response = await publicApi.post("/auth/sign-in", data);
      const accessToken = response.data.access_token;
      fetchUserprofile(accessToken, data);
      toast.success("Login successful");
    } catch (err: any) {
      if (err instanceof AxiosError) {
        const { message } = err.response?.data;
        if (Array.isArray(message)) {
          const msg = message.join(", ");
          toast.error(msg);
        } else {
          toast.error(message);
        }
      }
    } finally {
      setLoading(false);
    }
  };
  const fetchUserprofile = async (accessToken: string, data: LoginProps) => {
    try {
      const res = await publicApi.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = res.data as UserType;
      dispatch({
        type: "login-success",
        payload: {
          auth: {
            user: data,
            access_token: accessToken,
            error: "",
            isAuthenticated: true,
            loading: false,
          },
        },
      });
      if (locationState) {
        navigate(locationState.from);
      } else {
        navigate("/");
      }
    } catch (err: any) {
      if (err instanceof AxiosError) {
        const { message } = err.response?.data;
        if (Array.isArray(message)) {
          const msg = message.join(", ");
          toast.error(msg);
        } else {
          toast.error(message);
        }
      }
    }
  };
  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      toast.error("Please fix the errors");
      return;
    }
    setErrors({});
    setLoading(true);
    sendToApi(formData);
  };
  const [submitActive, setSubmitActive] = React.useState<boolean>(true);

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
    if (name === "username") {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const emailRegex2 =
        /^(?!.*\.{2})[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

      if (!value.match(emailRegex2)) {
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
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors({});
    setFormData((prev) => ({ ...prev, [name]: value }));
    seekFormErrors(e);
  };
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    seekFormErrors(e);
  };
console.log({isAuthenticated});

  React.useEffect(() => {
    if (!renderRef.current) {
      if (isAuthenticated) {
        locationState?.from
          ? navigate(locationState.from)
          : navigate("/", { replace: true });
      }
    }
    return () => {
      renderRef.current = false;
    };
  }, []);

  React.useEffect(() => {
    if (
      Object.keys(errors).length > 0 ||
      Object.values(formData).includes("")
    ) {
      setSubmitActive(false);
    } else {
      setSubmitActive(true);
    }
  }, [errors, formData]);

  return (
    <div className="flex justify-center min-h-screen w-full items-center bg-gray-300 font-rubik">
      <Form className="p-10 bg-white rounded min-w-[30rem]">
        <ToastContainer position="top-right" />
        <div className="flex items-center justify-center flex-col p-3">
          <img src="/logo192.png" alt="" className="h-20 w-20 m-4" />
          <h1 className="font-medium text-4xl my-2">Login</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="text-gray-500">
              Email address
            </label>
            <input
              type="email"
              autoComplete="true"
              name="username"
              id="username"
              disabled={loading}
              readOnly={loading}
              placeholder="Email address"
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              className={`border-b px-2 disabled:text-neutral-300 read-only:text-neutral-400 border-gray-300 w-full py-2 focus:outline-none focus:border-blue-200 read-only:cursor-not-allowed ${
                errors.username?.length > 0
                  ? "border-red-300"
                  : "border-blue-300"
              }`}
            />
            <div>
              {errors.username?.map((error, idx) => (
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
                autoComplete="true"
                name="password"
                onBlur={handleInputBlur}
                onChange={handleInputChange}
                id="password"
                disabled={loading}
                readOnly={loading}
                placeholder="Password"
                className={`w-full px-2 py-2 ring-0 focus:ring-0 outline-none read-only:text-neutral-300 read-only:cursor-not-allowed disabled:text-neutral-300 disabled:cursor-not-allowed focus:outline-none focus:border-blue-200`}
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
              {errors.password?.map((error, idx) => (
                <p
                  key={idx}
                  className="text-red-500 text-sm max-w-md capitalize"
                >
                  {error}
                </p>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitActive ? false : true}
            className="bg-blue-500 text-white rounded-md my-4 px-4 py-2 w-full disabled:opacity-75 disabled:cursor-not-allowed"
            onClick={async (e) => {
              e.preventDefault();
              setErrors({});
              submitForm(e);
            }}
          >
            {submitActive ? "Sign in" : "Please fill all fields"}
          </button>
        </div>
        <Hr />
        <p>
          Don't have an account?{" "}
          <Link to="/register">
            <span className="text-blue-600">Sign up</span>
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default LoginPage;
