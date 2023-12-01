import Link from "next/link";
import React from "react";
import Image from "next/image";
import LoginForm from "@/app/LoginForm";
const Login = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      <div className="md:basis-1/2 px-5 mb-5">
        <h4 className="md:flex md:justify-end py-8">
          {"Don't have an account? "}
          <span className="text-blue-400">
            <Link href={"/auth/register"}>Register</Link>
          </span>
        </h4>
        <h3 className="text-center text-3xl font-extrabold mb-4 dark:text-white">
          Create an account
        </h3>
        <LoginForm />
      </div>
      <div className="md:basis-1/2 px-5 relative bg-sky-500/50 py-10">
        <div className="absolute inset-0 brightness-50">
          <Image src="/loginbackground.jpg" alt="background image" fill />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-center text-2xl font-bold text-gray-200">
            Empowering African Minds, Bridging Educational Gaps{" "}
          </h1>
          <p className="text-center mt-4 text-sm text-white">
            Unlocking Potential, Transforming Education in Africa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
