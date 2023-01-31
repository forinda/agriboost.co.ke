import { AxiosError } from "axios";
import React from "react";
import { Form, useLocation, useNavigate, useSubmit } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { publicApi } from "../../../api/axios";
import useAuth from "../../../shared/hooks/useAuth";

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
  const {
    auth: { isAuthenticated },
  } = useAuth();
  const from = useLocation().state as { from: string };
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
    console.log("submitting");

    try {
      const { data } = await publicApi.post("/auth/sign-up", formData);
      if (data) {
        toast.success("Account created successfully");
        navigate("/account/activate");
      }
      navigate("/login", { replace: true });
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        const { data } = err.response as any;
        if (data.message) {
          if (Array.isArray(data.message)) {
            data.message.forEach((msg: any) => {
              toast.error(msg);
            });
          } else {
            toast.error(data.message);
          }
        }
        seekServerErrors(data);
      }
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
    <div className="flex justify-center min-h-screen w-full items-center bg-gray-300">
      <Form className="p-10 bg-white rounded min-w-[30rem]">
        <ToastContainer position="top-right" />
        <div className="flex items-center justify-center flex-col p-3">
          <img src="/logo192.png" alt="" className="h-20 w-20 m-4" />
          <h1 className="font-bold text-4xl">Create account</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="text-gray-500">
              Email address
            </label>
            <input
              type="email"
              autoComplete="true"
              name="email"
              id="email"
              onBlur={handleBlur}
              onChange={handleChange}
              className={`border borde-1 w-full px-2 py-2 ring-0 focus:ring-0 border-neutral-500 ${
                errors.email?.length > 0 ? "border-red-400" : "border-green-600"
              }`}
            />
            <div>
              {errors.email?.map((error) => (
                <p className="text-red-500 text-sm">{error}</p>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="username" className="text-gray-500">
              Username
            </label>
            <input
              type="text"
              autoComplete="true"
              name="username"
              onBlur={handleBlur}
              onChange={handleChange}
              className="border borde-1 w-full px-2 py-2 ring-0 focus:ring-0 border-neutral-500"
            />
            <div>
              {errors.username?.map((error) => (
                <p className="text-red-500 text-sm max-w-md capitalize">
                  {error}
                </p>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-gray-500">
              Password
            </label>
            <input
              type="password"
              autoComplete="true"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              className="border borde-1 w-full px-2 py-2 ring-0 focus:ring-0 border-neutral-500"
            />
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
            className="w-full mb-10 bg-blue-600 font-medium text-white text-2xl py-2 px-4 rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={async (e) => {
              e.preventDefault();
              setErrors({});
              await handleSubmit();
            }}
          >
            Sign up
          </button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterPage;
