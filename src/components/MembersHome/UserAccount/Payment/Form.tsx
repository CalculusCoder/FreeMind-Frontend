import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUpdatePaymentMethod } from "../Hooks/useUpdatePaymentMethod";
import { getCodeList } from "country-list";
import style from "./Form.module.css";
import { useSession } from "next-auth/react";

const countries = getCodeList();

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

const Form = () => {
  const { data: session } = useSession();
  const customerId = session?.user?.stripe_customer_id;
  const stripe = useStripe();
  const elements = useElements();
  const updatePaymentMethod = useUpdatePaymentMethod();
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

      if (!error && paymentMethod) {
        try {
          const result = await updatePaymentMethod.mutateAsync({
            paymentMethodId: paymentMethod.id,
            customerId,
          });
          alert("Payment method updated successfully");
        } catch (error) {
          alert("Error updating payment method");
          console.error(error);
        }
      }
      actions.resetForm();
    },
  });
  return (
    <div className="flex justify-center mt-16 pb-16">
      <form
        onSubmit={formik.handleSubmit}
        className="p-1 lg:p-10 bg-white  dark:bg-cyan-900 rounded-3xl shadow-lg w-[390px] lg:w-[800px] "
      >
        <h2 className="text-4xl font-bold  mb-6 text-center mt-16 lg:mt-12">
          Add New Card
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
            className="shadow dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="block text-gray-700  dark:text-white font-bold mb-2"
          >
            Postal Code
          </label>
          <input
            className="shadow dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow border rounded w-full py-2 px-3 dark:text-white text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          <div className={`${style.FormGroup} p-4 border rounded-lg shadow-md`}>
            <CardElement options={CARD_OPTIONS} />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
