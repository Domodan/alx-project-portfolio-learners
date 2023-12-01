"use client";
import React, { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Button from "./Button";
import { useRouter } from "next/navigation";
type SignUpError = {
  error?: string;
};
const schema = z
  .object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string(),
    // .min(8, {
    //   message: "Password must be at least 8 characters long",
    // })
    // .max(100)
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
    //   message:
    //     "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
    // }),
    confirmPassword: z.string(),
    // .min(8, {
    //   message: "Password must be at least 8 characters long",
    // })
    // .max(100)
    // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
    //   message:
    //     "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
    // }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [isLoading, setIsLoading] = useState(false);
  const [signUpError, setSignUpError] = useState<SignUpError>({});
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (signUpSuccess) {
      setTimeout(() => {
        router.push("/auth/login");
      }, 5000);
    }
  }, [signUpSuccess]);

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);
    const res = await fetch("/api/auth/users", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => res.json());
    setIsLoading(false);
    console.log(res);
    //signIn();
    if (res.error) {
      alert(res.error);
      setSignUpError(res.error);
      return;
    }
    setSignUpSuccess(true);
  };
  return (
    <div>
      {!signUpSuccess ? (
        <>
          <h3 className="text-center text-3xl font-extrabold mb-4 dark:text-white">
            Create an account
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                  {...register("firstName", { required: true, minLength: 3 })}
                />
                {errors.firstName && (
                  <span className="text-red-600 text-xs">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                  {...register("lastName", { required: true, minLength: 3 })}
                />
                {errors.lastName && (
                  <span className="text-red-600 text-xs">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
                {...register("email", { required: true, minLength: 3 })}
              />
              {errors.email && (
                <span className="text-red-600 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && (
                <span className="text-red-600 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.confirmPassword && (
                <span className="text-red-600 text-xs">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            {signUpError.error && <p>{signUpError?.error}</p>}
            <Button
              type="submit"
              isDisabled={isLoading}
              styles="bg-blue-500 text-white"
            >
              Submit
            </Button>
          </form>
        </>
      ) : (
        <span>
          You have successfully created an account. You are being redirected to
          the Login page to login.{" "}
        </span>
      )}
    </div>
  );
};

export default RegisterForm;
