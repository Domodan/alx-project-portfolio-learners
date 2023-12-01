"use client";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const [loginErr, setLoginErr] = useState("");

  const onSubmit = async (data: FieldValues) => {
    //if (!isValid) return;
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.error) return setLoginErr(res.error);
    router.replace("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <span className="text-red-600 text-xs">{errors.email.message}</span>
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
        <div>
          {loginErr && (
            <span className="text-red-600 text-xs">Invalid email/password</span>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
