import React, { useState, ChangeEvent } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getCodeList } from "country-list";
import style from "./Form.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { API_BASE_URL } from "../../../../config";
import { useQueryClient } from "react-query";

const CARD_OPTIONS = {
  iconStyle: "solid" as const,
  style: {
    base: {
      iconColor: "#fff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "15px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const countries = getCodeList();

const Form = () => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const [errMessage, setErrMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();

  const stripe = useStripe();
  const elements = useElements();

  const resetErrorMessage = () => {
    setErrMessage("");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      address: {
        line1: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
      },
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name Required"),
      address: Yup.object({
        line1: Yup.string().required("Address Required"),
        city: Yup.string().required("City Required"),
        state: Yup.string().required("State Required"),
        postal_code: Yup.string().required("Postal Code Required"),
        country: Yup.string().required("Country Required"),
      }),
    }),
    onSubmit: async (values, actions) => {
      if (!elements) {
        return;
      }

      const cardElement = elements.getElement(CardElement);

      if (!stripe || !cardElement) {
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: values,
      });

      if (error) {
        console.error(error);
      } else {
        if (paymentMethod) {
          const { id } = paymentMethod;
          try {
            setIsLoading(true);
            const response = await fetch(`${API_BASE_URL}/Payment`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                id,
                plan: process.env.STRIPE_PLAN,
                userEmail: session?.user?.email,
              }),
              credentials: "include",
            });

            console.log(process.env.STRIPE_PLAN);

            if (response.status === 200) {
              queryClient.invalidateQueries("membershipStatus");
              alert("Payment Successful, Please Sign in Again");
              setIsLoading(false);
              signOut({
                callbackUrl: "/Home/Signin",
              });
            } else if (response.status === 400) {
              setIsLoading(false);
              alert(
                "Payment failed, please check your payment details and try again."
              );
            } else if (response.status === 500) {
              setIsLoading(false);
              alert(
                "Failed to Make Payment. Please try again or use a different payment"
              );
            } else {
              setIsLoading(false);
              throw new Error("Failed to make payment");
            }
          } catch (error) {
            setIsLoading(false);
            console.error(error);
          }
        }
      }
      actions.resetForm();
    },
  });

  return (
    <div>
      <header className="text-center mt-10 text-4xl font-bold">
        Upgrade Your Membership!
      </header>
      <header className="text-center mt-10 text-xl">
        When you make a payment you will automatically be enrolled in auto pay
      </header>
      <header className="text-center mt-4 text-xl max-w-lg mx-auto">
        If you would like to opt out, make sure to cancel your membership. You
        will still have access to our services till the end of your billing
        period.
      </header>
      <div className="flex justify-center mt-16 mb-16">
        <form
          onSubmit={formik.handleSubmit}
          className="p-1 lg:p-10 bg-white dark:bg-cyan-900 rounded-3xl shadow-lg w-[390px] lg:w-[800px] "
        >
          <h2 className="text-4xl font-bold  mb-6 text-center mt-16 lg:mt-12">
            Payment Details
          </h2>

          <div className="mb-6 pr-4 pl-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-white font-bold mb-2"
            >
              Full Name
            </label>
            <input
              className="shadow dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
              placeholder="Full Name"
            />
            {formik.errors.name && formik.touched.name && (
              <div>{formik.errors.name}</div>
            )}
          </div>

          <div className="mb-6 pr-4 pl-4">
            <label
              htmlFor="address.line1"
              className="block text-gray-700 dark:text-white font-bold mb-2"
            >
              Address Line 1
            </label>
            <input
              className="shadow dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="address.line1"
              name="address.line1"
              onChange={formik.handleChange}
              value={formik.values.address.line1}
              onBlur={formik.handleBlur}
              placeholder="Address Line 1"
            />
            {formik.errors.address?.line1 && formik.touched.address?.line1 && (
              <div>{formik.errors.address?.line1}</div>
            )}
          </div>

          <div className="mb-6 pr-4 pl-4">
            <label
              htmlFor="address.city"
              className="block text-gray-700 dark:text-white font-bold mb-2"
            >
              City
            </label>
            <input
              className="shadow appearance-none dark:text-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="address.city"
              name="address.city"
              onChange={formik.handleChange}
              value={formik.values.address.city}
              onBlur={formik.handleBlur}
              placeholder="City"
            />
            {formik.errors.address?.city && formik.touched.address?.city && (
              <div>{formik.errors.address?.city}</div>
            )}
          </div>

          <div className="mb-6 pr-4 pl-4">
            <label
              htmlFor="address.state"
              className="block text-gray-700 dark:text-white font-bold mb-2"
            >
              State
            </label>
            <input
              className="shadow appearance-none dark:text-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="address.state"
              name="address.state"
              onChange={formik.handleChange}
              value={formik.values.address.state}
              onBlur={formik.handleBlur}
              placeholder="State"
            />
            {formik.errors.address?.state && formik.touched.address?.state && (
              <div>{formik.errors.address?.state}</div>
            )}
          </div>

          <div className="mb-6 pr-4 pl-4">
            <label
              htmlFor="address.postal_code"
              className="block text-gray-700 dark:text-white font-bold mb-2"
            >
              Postal Code
            </label>
            <input
              className="shadow appearance-none border dark:text-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="address.postal_code"
              name="address.postal_code"
              onChange={formik.handleChange}
              value={formik.values.address.postal_code}
              onBlur={formik.handleBlur}
              placeholder="Postal Code"
            />
            {formik.errors.address?.postal_code &&
              formik.touched.address?.postal_code && (
                <div>{formik.errors.address?.postal_code}</div>
              )}
          </div>

          <div className="mb-6 pr-4 pl-4">
            <label
              htmlFor="address.country"
              className="block text-gray-700 dark:text-white font-bold mb-2"
            >
              Country
            </label>
            <select
              className="shadow border rounded w-full dark:text-white py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="address.country"
              value={formik.values.address.country}
              onChange={formik.handleChange}
            >
              <option value="">Select a country</option>
              {Object.entries(countries).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-white font-bold mb-2"
              htmlFor="card-element"
            >
              Credit/Debit Card
            </label>
            <div
              className={`${style.FormGroup} p-4 border rounded-lg shadow-md`}
            >
              <CardElement options={CARD_OPTIONS} />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {isLoading ? "Paying..." : "Pay $4.99"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
