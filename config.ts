// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// export { API_BASE_URL };

// // const API_BASE_URL =
// //   process.env.REACT_APP_API_BASE_URL

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!API_BASE_URL) {
  throw new Error(
    "API_BASE_URL is not defined. Check your environment variables."
  );
}
export { API_BASE_URL };
