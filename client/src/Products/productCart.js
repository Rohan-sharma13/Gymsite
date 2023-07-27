import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MemberShipForm from "../MembershipsComponents/form";
import Rodal from "rodal";
import NavBar from "../navbar";
import Fotter from "../footer";
import { toast } from "react-toastify";
import "../CourseComponents/modalStyles.css";
import { selectItems, selectTotal } from "../basketSlice";
import styles from "./productCart.module.css";
// import { loadStripe } from "@stripe/stripe-js";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

// const stripePromse = loadStripe(publishableKey);
// const cardElementOptions = {
//   style: {
//     base: {
//       fontSize: "16px",
//       color: "#32325d",
//       fontFamily: "Arial, sans-serif",
//       "::placeholder": {
//         color: "#aab7c4",
//       },
//     },
//     invalid: {
//       color: "#fa755a",
//     },
//   },
// };

export default function ProductCart() {
  const cartItems = useSelector(selectItems);
  console.log(cartItems);
  const totalPrice = useSelector(selectTotal);
  const history = useHistory();

  // const stripe = useStripe();
  // const elements = useElements();

  // const createCheckoutSession = async () => {
  //   const stripe = await stripePromse;

  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // if (!stripe || !elements) {
    //   return;
    // }

    // const cardElement = elements.getElement(CardElement);

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    // });

    // if (error) {
    //   console.error(error);
    // } else {
    //   console.log(paymentMethod); // Payment method token
    //   toast.success("Payment Successful");
    // }
  };

  const handleCheckout = () => {
    fetch("http://localhost:8080/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          price: parseInt(item.price * 100),
        })),
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        toast.success("Order Placed Successfully");
        window.location = url;
      });
  };

  return (
    <>
      <NavBar type="product" />
      <form className={styles.checkoutPage} onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <div className={styles.cartItems}>
          {cartItems.length === 0 ? (
            <>
              <h1
                className=""
                style={{
                  marginTop: "1.5rem",
                }}
              >
                Nothing in card
              </h1>
              <button
                onClick={() => history.push("/courses")}
                style={{
                  background: "tomato",
                  padding: "20px 10px",
                  border: "none",
                  borderRadius: "10px",
                  marginTop: "1rem",
                  cursor: "pointer",
                }}
              >
                Add something
              </button>
            </>
          ) : null}
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img
                src={item.courseImage}
                alt={item.name}
                className={styles.itemImage}
              />
              <div className={styles.itemDetails}>
                <div>
                  <h2 className={styles.itemName}>{item.name}</h2>
                  {item.duration && (
                    <p className={styles.itemDuration}>
                      Duration: {item.duration} Hours
                    </p>
                  )}
                </div>
                <span className={styles.itemPrice}>₹{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.totalPrice}>
          <span className={styles.totalLabel}>Total:</span>
          <span className={styles.totalAmount}>₹{totalPrice}</span>
        </div>
        {/* Add your checkout form here */}
        <div>
          {cartItems.length > 0 && (
            <div style={{ marginTop: "2rem" }}>
              {/* <CardElement options={cardElementOptions} /> */}
              <button
                type="button"
                className={styles.checkoutButton}
                onClick={handleCheckout}
                style={{
                  background: "tomato",
                  padding: "1.4rem 0.8rem",
                  border: "0",
                  cursor: "pointer",
                }}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </form>
      <Fotter />
    </>
  );
}
