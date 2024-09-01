import Layout from "@/components/Home/GlobalComponents/Layout";
import { GrMail } from "react-icons/gr";
import { BsFillShieldLockFill } from "react-icons/bs";
import { useState } from "react";
import { API_BASE_URL } from "../../../config";
import Footer from "@/components/Home/HomeComponents/Footer";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errMessage, setErrMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();

  const resetErrorMessage = () => {
    setErrMessage("");
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        setIsLoading(false);
        setErrMessage(data.message);
        setTimeout(resetErrorMessage, 6000);
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
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCaseEmail = e.target.value.toLowerCase();
    setEmail(lowerCaseEmail);
  };

  return (
    <Layout>
      <div className="text-center mt-10 text-4xl font-semibold">
        Forgot Password? Input Your Email
      </div>
      <form onSubmit={onSubmit} className="flex flex-col items-center mt-16">
        <div className=" bg-white border border-gray-300  rounded-lg focus:ring-primary-600 focus:border-primary-600 w-80 md:w-1/2 lg:w-1/4 p-2.5">
          <div className="flex justify-start ml-3">
            <div className="flex items-center mr-5">
              <GrMail className="text-2xl dark:text-black" />
            </div>
            <input
              className="bg-transparent w-full h-8 dark:text-black"
              placeholder="Email"
              type="email"
              name="email"
              required
              onChange={handleEmailChange}
            />
          </div>
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
      <Footer footerClass="bg-white bg-opacity-50" />
    </Layout>
  );
};

export default ForgotPassword;
