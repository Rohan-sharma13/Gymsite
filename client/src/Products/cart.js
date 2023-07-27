import React from "react";
import ProductCart from "./productCart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const publishableKey =
  "pk_test_51N6fEaSJ7gotcSsPCn2cHnkcZjQ146HF0dMEC90jQiku6Aq4iadS6mwao42fjM6zWwuKXjX3tR1CqvLFWk0uFAr000RJAMs9r7";
const secretKey =
  "sk_test_51N6fEaSJ7gotcSsPReQYWYCRLETjkuQBkBIkfiCaIWTbpAJBAiHqW1ZeL0CCQWcautJtAhRWMw9yWJ0bmfxLJSAE00zoF2l6GT";

const stripePromse = loadStripe(publishableKey);

function Cart() {
  return (
    <Elements stripe={stripePromse}>
      {/* <ProductCart /> */}
    </Elements>
  );
}

export default Cart;
