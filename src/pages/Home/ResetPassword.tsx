import Layout from "@/components/Home/GlobalComponents/Layout";
import { useEffect, useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { API_BASE_URL } from "../../../config";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "@/components/Home/HomeComponents/Footer";

const ResetPassword = () => {
  const router = useRouter();
  const [errMessage, setErrMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const resetErrorMessage = () => {
    setErrMessage("");
  };

  const token = router.query.token;

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      token: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("Password Required")
        .min(7, "Password is too short")
        .matches(/[0-9]/, "Password must contain at least one number")
        .matches(/[A-Z]/, "Password must contain at least one capital letter"),
    }),
    onSubmit: async (values, actions) => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${API_BASE_URL}/check-token-reset-password`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        const data = await response.json();
        if (response.status === 200) {
          alert("Successful! Please Sign In Again.");
          router.push("/Home/Signin");
        } else {
          setIsLoading(false);
          setErrMessage(data.error);
          setTimeout(resetErrorMessage, 6000);

          if (response.status === 500) {
            console.error(data.error);
          }
        }
      } catch (error) {
        setIsLoading(false);
        setErrMessage("An error occurred. Please try again.");
        setTimeout(resetErrorMessage, 6000);
        console.error(error);
      } finally {
        actions.resetForm();
      }
    },
  });

  useEffect(() => {
    if (token) {
      formik.setFieldValue("token", token, false);
    }
  }, [token]);

  return (
    <Layout>
      <div className="text-center mt-10 text-4xl font-semibold">
        Reset Your Password
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center mt-16"
      >
        <div className=" bg-white border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 md:w-1/2 lg:w-1/4 p-2.5">
          <div className="flex justify-start ml-3">
            <div className="flex items-center mr-5">
              <BsFillShieldLockFill className="text-2xl dark:text-black" />
            </div>

            <input
              type={passwordVisible ? "text" : "password"}
              name="newPassword"
              className="bg-transparent w-full h-8 dark:text-black"
              placeholder="New Password"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
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
        <div className="text-center text-red-700 dark:text-red-300">
          {formik.errors.newPassword && formik.touched.newPassword && (
            <div>{formik.errors.newPassword}</div>
          )}
        </div>
        <span className="flex justify-center mt-4 text-red-300">
          {errMessage}
        </span>
        <div className="flex mt-16">
          <button type="submit">
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      <Footer />
    </Layout>
  );
};

export default ResetPassword;
