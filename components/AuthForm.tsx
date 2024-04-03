"use client"
import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  username?: string;
  email: string;
  password: string;
}

const AuthForm = ({ type }: { type: "register" | "login" }) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:
      type === "register"
        ? { username: "", email: "", password: "" }
        : { email: "", password: "" },
  });

  const onSubmit = (data: FormData) => {
  console.log(data)
  }   

  return (
    <div className="auth">
      <div className="overlay">
        <div className="content">
          <img src="/assets/logo.png" alt="logo" className="logo" />

          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {type === "register" && (
              <>
              <div className="input">
                <input
                  {...register("username", {
                    required: "Username is required",
                    validate: (value: string | undefined) => {
                      if (!value || value.length < 2) {
                        return "Username must be more than 1 character";
                      }
                      return true;
                    },
                  })}
                  type="text"
                  placeholder="Username"
                  className="input-field"
                />
                <PersonOutline sx={{ color: "white" }} />
              </div>
               {errors.username && (
                <p className="error">{errors.username.message}</p>
              )}
            </>
          )}
            <div className="input">
              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email"
                className="input-field"
              />
              <EmailOutlined sx={{ color: "white" }} />
            </div>
            {errors.email && <p className="error">{errors.email.message}</p>}

            <div className="input">
              <input
                {...register("password", {
                  required: "Password is required",
                  validate: (value: string | undefined) => {
                    if (
                      !value ||
                      value.length < 5 ||
                      value.length > 20 ||
                      !value.match(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/)
                    ) {
                      return "Password must be between 5 and 20 character with at least one special";
                    }
                    return true;
                  },
                })}
                type="password"
                placeholder="Password"
                className="input-field"
              />
              <LockOutlined sx={{ color: "white" }} />
            </div>
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}

            <button className="button" type="submit">
              {type === "register" ? "Join Free" : "Let's Watch"}
            </button>
          </form>
          {type === "register" ? (
            <Link href="/login">
              <p className="link">Already have an account? Log In Here</p>
            </Link>
          ) : (
            <Link href="/register">
              <p className="link">Don't have an account? Register Here</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
