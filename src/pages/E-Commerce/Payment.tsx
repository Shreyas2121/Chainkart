import React from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../../components/E-Commerce/PaymentForm";
import "./payment.css";
import { useEffect } from "react";
import * as api from "../../store/api";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/userSlice";
import { selectCart, selectCartItems } from "../../store/cartSlice";

const stripePromise = loadStripe(
  "pk_test_51LC9yhSE5P4xQp6tex03MR2aoEiW5ZP1HvJ4ArhnZ4dN7fbBn5K6wlMrczHkpUJQSMLnr8ImJRE3G3rc17H1FPdg006fkGsf4G"
);

const Payment = () => {
  const user = useAppSelector(selectUser);
  const name = `${user?.firstname} ${user?.lastname}`;
  const address = `${user?.hnumber} , ${user?.landmark}, ${user?.city}-${user?.state},${user?.pincode}`;

  const cartItems = useAppSelector(selectCartItems);
  const { cartTotalAmount: Amount } = useAppSelector(selectCart);

  const paymentData = {
    name,
    address,
    cartItems,
    Amount,
  };

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const payment = async () => {
      try {
        const { data } = await api.processPayment(paymentData);

        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    payment();
  });

  const options: StripeElementsOptions = {
    clientSecret,
    loader: "auto",
    appearance: {
      theme: "flat",
    },
  };
  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm name={name} address={address} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
