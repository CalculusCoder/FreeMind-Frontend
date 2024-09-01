import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Form from "./Form";

const stripeTestPromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);
const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <Form></Form>
    </Elements>
  );
};

export default Stripe;
