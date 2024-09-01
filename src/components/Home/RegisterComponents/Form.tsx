import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import { API_BASE_URL } from "../../../../config";
import {
  BsFillShieldLockFill,
  BsFileEarmarkTextFill,
  BsPersonFill,
} from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Form = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [errMessage, setErrMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const handleGoogleSignIn = async () => {
    await signIn("google");
  };

  const resetErrorMessage = () => {
    setErrMessage("");
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
      fullName: "",
      forumUserName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name Required"),
      forumUserName: Yup.string()
        .min(5, "Username must be at least 5 characters")
        .matches(/^\S*$/, "Username should not contain spaces")
        .required("Username Required"),
      email: Yup.string().required("Email Required").email("Invalid Email"),
      password: Yup.string()
        .required("Password Required")
        .min(7, "Password is too short")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[A-Z]/, "Password must contain at least one capital letter"),
    }),
    onSubmit: async (values, actions) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}/Register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await response.json();
        if (response.ok) {
          alert(
            "Succesfully registered. Please check your email to complete your registration!"
          );
        } else {
          setIsLoading(false);
          setErrMessage(data.error);
          setTimeout(resetErrorMessage, 6000);
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

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    const lowercaseUserName = event.target.value.toLowerCase();
    formik.setFieldValue("forumUserName", lowercaseUserName, true);
  };

  return (
    <div className="flex justify-center pt-16 pb-16">
      <div className="p-1 lg:p-10 bg-[#e6e6ff] dark:bg-sky-900 rounded-3xl shadow-lg w-[390px] lg:w-[800px]">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-4xl font-bold  mb-6 text-center mt-16 lg:mt-12">
            Register
          </h2>
          <p className="font-bold  mb-12 text-center">
            Start your recovery today!
          </p>

          <div className="flex justify-center">
            <div className=" bg-white border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 lg:w-3/4 p-2.5">
              <div className="flex justify-start ml-3">
                <div className="flex items-center mr-5">
                  <BsFileEarmarkTextFill className="text-2xl dark:text-black" />
                </div>
                <input
                  type="fullName"
                  name="fullName"
                  className="bg-transparent w-full h-8 dark:text-black"
                  placeholder="Full Name"
                  onChange={formik.handleChange}
                  value={formik.values.fullName}
                  onBlur={formik.handleBlur}
                  required
                />
              </div>
            </div>
          </div>

          <div className="text-center text-red-700  dark:text-red-300">
            {formik.errors.fullName && formik.touched.fullName && (
              <div>{formik.errors.fullName}</div>
            )}
          </div>

          <div className="flex justify-center">
            <div className="mt-8 bg-white border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 lg:w-3/4 p-2.5">
              <div className="flex justify-start ml-3">
                <div className="flex items-center mr-5">
                  <BsPersonFill className="text-2xl dark:text-black" />
                </div>
                <input
                  type="forumUserName"
                  name="forumUserName"
                  className="bg-transparent w-full h-8 dark:text-black"
                  placeholder="Forum Username"
                  onChange={handleUserNameChange}
                  value={formik.values.forumUserName}
                  onBlur={formik.handleBlur}
                  required
                />
              </div>
            </div>
          </div>

          <div className="text-center text-red-700 dark:text-red-300">
            {formik.errors.forumUserName && formik.touched.forumUserName && (
              <div>{formik.errors.forumUserName}</div>
            )}
          </div>

          <div className="flex justify-center">
            <div className="mt-8 bg-white border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 lg:w-3/4 p-2.5">
              <div className="flex justify-start ml-3">
                <div className="flex items-center mr-5">
                  <GrMail className="text-2xl dark:text-black" />
                </div>
                <input
                  type="email"
                  name="email"
                  className="bg-transparent w-full h-8 dark:text-black"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  required
                />
              </div>
            </div>
          </div>

          <div className="text-center text-red-700 dark:text-red-300">
            {formik.errors.email && formik.touched.email && (
              <div>{formik.errors.email}</div>
            )}
          </div>

          <div className="flex justify-center">
            <div className="mt-8 bg-white border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 lg:w-3/4 p-2.5">
              <div className="flex justify-start ml-3">
                <div className="flex items-center mr-5">
                  <BsFillShieldLockFill className="text-2xl dark:text-black" />
                </div>

                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  className="bg-transparent w-full h-8 dark:text-black"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  required
                />
                <div className="flex items-center ml-1">
                  {passwordVisible ? (
                    <FaEyeSlash
                      className="text-black text-xl"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaEye
                      className="text-black text-xl"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-red-700 dark:text-red-300">
            {formik.errors.password && formik.touched.password && (
              <div>{formik.errors.password}</div>
            )}
          </div>

          <div className="flex justify-center">
            <button
              className="bg-blue-500 w-1/3 mt-8 hover:transition-all hover:duration-200 hover:ease-in hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLoading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>
        <span className="flex justify-center mt-4 text-red-300">
          {errMessage}
        </span>
        <p className="text-center">
          Email verification is required, ensure to enter a valid email
        </p>
        <p className="mt-4 text-center">
          Already have an account? <Link href="/Home/Signin">Login</Link>
        </p>
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
          <div className="dark:text-black">Register with Google</div>
        </button>
      </div>
    </div>
  );
};

export default Form;
