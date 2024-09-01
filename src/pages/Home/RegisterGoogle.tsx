import { useFormik } from "formik";
import React, { use, useEffect, useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { API_BASE_URL } from "../../../config";
import { BsPersonFill } from "react-icons/bs";

const RegisterGoogle = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const router = useRouter();
  const [errMessage, setErrMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();

  useEffect(() => {
    if (!session || !email) {
      alert("User does not exist");
    }
  }, [session, email, router]);

  const formik = useFormik({
    initialValues: {
      forumUserName: "",
    },
    validationSchema: Yup.object({
      forumUserName: Yup.string()
        .min(5, "Username must be at least 5 characters")
        .matches(/^\S*$/, "Username should not contain spaces")
        .required("Username Required"),
    }),
    onSubmit: async (values, actions) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_BASE_URL}/Register/Username`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            email,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          alert("Success, Please sign in again");
          signOut({
            callbackUrl: "/Home/Signin",
          });
        } else {
          setIsLoading(false);
          setErrMessage(data.error);
        }
      } catch (error) {
        alert(error);
      }
      actions.resetForm();
    },
  });

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    const lowercaseUserName = event.target.value.toLowerCase();
    formik.setFieldValue("forumUserName", lowercaseUserName, true);
  };
  return (
    <div className="text-center mt-10">
      <div className="text-4xl font-semibold mb-10">
        Thank you for Registering!
      </div>
      <p className="mb-16 text-lg">
        To finish registering, please submit a username for the FreeMind
        Discussion Forums.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center">
          <div className="mt-8 bg-white border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 lg:w-1/3 p-2.5">
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

        {formik.errors.forumUserName && formik.touched.forumUserName && (
          <div>{formik.errors.forumUserName}</div>
        )}

        <div className="flex justify-center">
          <button
            className="bg-blue-500 w-1/3 md:w-1/6 mt-8 hover:transition-all hover:duration-200 hover:ease-in hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={!session || !email}
          >
            {isLoading ? "Registering..." : "Finish Registering"}
          </button>
        </div>
      </form>
      <span>{errMessage}</span>
    </div>
  );
};

export default RegisterGoogle;
