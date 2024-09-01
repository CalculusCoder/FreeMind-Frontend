import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import { BsFillShieldLockFill } from "react-icons/bs";
import { API_BASE_URL } from "../../../../config";

const Form = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [errMessage, setErrMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();

  const resetErrorMessage = () => {
    setErrMessage("");
  };

  const handleGoogleSignIn = async () => {
    await signIn("google");
  };

  useEffect(() => {
    if (session?.user) {
      if (session?.user?.isRegistered === false) {
        router.push("/Home/RegisterGoogle");
      } else if (session?.user?.isRegistered === true) {
        router.push("/MembersHome/Home");
      }
    }
  }, [session, router]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, actions) => {
      try {
        setIsLoading(true);
        const result = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });

        if (result?.error === "Invalid Email or Password") {
          setIsLoading(false);
          setErrMessage("Incorrect Email or Password");
          setTimeout(resetErrorMessage, 6000);
        } else if (
          result?.error ===
          "User used Google authentication to register. Please sign in with Google."
        ) {
          setIsLoading(false);
          setErrMessage(
            "User used Google authentication to register. Please sign in with Google."
          );
          setTimeout(resetErrorMessage, 6000);
        } else if (result?.error === "User email not verified.") {
          setIsLoading(false);
          setErrMessage("User email not verified. Please verify your email");
          setTimeout(resetErrorMessage, 6000);
        } else if (result?.status === 200) {
          router.push("/MembersHome/Home");
        }
      } catch (error) {
        console.error(error);
      }
      actions.resetForm();
    },
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    const lowercaseEmail = event.target.value.toLowerCase();
    formik.setFieldValue("email", lowercaseEmail, true);
  };

  return (
    <div className="flex justify-center pt-16 pb-[101px]">
      <div className="p-1 lg:p-10 bg-[#F1E6FF] dark:bg-cyan-900 rounded-3xl shadow-lg w-[390px] lg:w-[800px]">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-4xl font-bold  mb-6 text-center mt-16 lg:mt-12">
            Sign In
          </h2>
          <p className="font-bold  mb-12 text-center">
            Start your recovery today!
          </p>
          <div className="flex justify-center">
            <div className=" bg-white border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 lg:w-3/4 p-2.5">
              <div className="flex justify-start ml-3">
                <div className="flex items-center mr-5">
                  <GrMail className="text-2xl dark:text-black" />
                </div>
                <input
                  className="bg-transparent w-full h-8 dark:text-black"
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={handleEmailChange}
                  value={formik.values.email}
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className=" mt-8 bg-white border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 lg:w-3/4 p-2.5">
              <div className="flex justify-start ml-3">
                <div className="flex items-center mr-5">
                  <BsFillShieldLockFill className="text-2xl dark:text-black" />
                </div>

                <input
                  className=" bg-transparent w-full h-8 dark:text-black"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex  justify-center">
            <button
              className="bg-blue-500 w-1/3 mt-8 hover:transition-all hover:duration-200 hover:ease-in hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLoading ? "Signing in..." : "Login"}
            </button>
          </div>
        </form>
        <span className="flex justify-center mt-4 text-red-300">
          {errMessage}
        </span>
        <p className="mt-4 text-center">
          Dont have an account yet? <Link href="/Home/Register">Register</Link>
        </p>
        <Link href="/Home/ForgotPassword">
          <p className="mt-4 text-center">Forgot Password?</p>
        </Link>
        <div className="flex items-center justify-center mt-6">
          <div className="flex-1 border-t border-black mx-2"></div>
          <div>OR</div>
          <div className="flex-1 border-t border-black mx-2"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="mt-8 mx-auto rounded-lg bg-white border border-solid border-purple-500 h-16 w-3/4 lg:w-1/2 flex items-center justify-center mb-14 lg:mb-0 hover:transition-all hover:duration-200 hover:ease-in hover:bg-gray-200"
        >
          <FcGoogle className="text-3xl mr-4" />
          <div className="dark:text-black">Sign in with Google</div>
        </button>
      </div>
    </div>
  );
};

export default Form;
