import React from "react";
import axios from "axios";

const SendEmail = () => {
  const sendEmailToUsers = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/send-emails`,
        {
          responseType: "blob", // Important: this tells Axios to handle the response as a Blob
        }
      );

      const filename = response.headers["content-disposition"]
        .split("filename=")[1]
        .replaceAll('"', "");
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); // Set the filename from the content-disposition header or manually
      document.body.appendChild(link);
      link.click();

      window.URL.revokeObjectURL(url);
      link.remove();

      alert("Successfully downloaded emails");
    } catch (error) {
      alert("Error downloading emails");
      console.error(error);
    }
  };
  return (
    <div>
      <div>Send Email to Users</div>
      {/* <button onClick={sendEmailToUsers}>Send</button> */}
    </div>
  );
};

export default SendEmail;
