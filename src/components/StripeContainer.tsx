// components/StripeContainer.js
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Hero from "./MembersHome/UserAccount/Payment/Hero";
import Form from "./MembersHome/UserAccount/Payment/Form";

const stripeTestPromise = loadStripe(process.env.STRIPE_PUBLIC_KEY!);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Form />
    </Elements>
  );
};

export default StripeContainer;
