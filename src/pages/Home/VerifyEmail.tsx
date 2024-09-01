import { useRouter } from "next/router";
import React from "react";
import axios from "axios";

const VerifyEmail = () => {
  const router = useRouter();
  const token = router.query.token;
  const id = router.query.id;

  const verifyUserEmail = async () => {
    try {
      const verifyToken = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/verifyEmail`,
        { id, token }
      );

      alert("Email verified successfully! Please sign in!");
      router.push("/Home/Signin");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="text-center mt-24">
      <div className="text-3xl mb-10">Please verify your email below</div>
      <button
        className="bg-blue-500 w-1/3 mt-8 hover:transition-all hover:duration-200 hover:ease-in hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
        onClick={verifyUserEmail}
      >
        Verify
      </button>
    </div>
  );
};

export default VerifyEmail;
