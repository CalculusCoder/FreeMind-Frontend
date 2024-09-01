import React from "react";
import Stripe from "@/components/Home/PaymentComponents/Stripe";
import Layout from "@/components/Home/GlobalComponents/Layout";
import Footer from "@/components/Home/HomeComponents/Footer";

const Payment = () => {
  return (
    <Layout>
      <Stripe></Stripe>
      <Footer/>
    </Layout>
  );
};

export default Payment;
