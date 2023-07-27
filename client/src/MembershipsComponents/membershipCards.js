import React, { useState, useEffect } from "react";
import Styles from "./membershipCards.module.css";
import { BiDollar, BiShow } from "react-icons/bi";
import Rodal from "rodal";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// include styles
import "rodal/lib/rodal.css";
import MemberShipForm from "./form";

export default function MembersgipCards({
  heading_1,
  heading_2,
  price,
  TiTickOutline,
  ImCross,
  logo_1_color,
  logo_2_color,
  logo_3_color,
  logo_4_color,
  logo_5_color,
  service_1,
  service_2,
  service_3,
  service_4,
  service_5,
  service_1_color,
  service_2_color,
  service_3_color,
  service_4_color,
  service_5_color,
}) {
  const [state, setState] = useState({ visible: false });

  const userName = useSelector((state) => state.account.userName);
  const userId = useSelector((state) => state.account.userId);

  const show = () => {
    setState({ visible: true });
  };

  const hide = () => {
    setState({ visible: false });
  };

  const heading_style = {
    backgroundColor: "black",
    color: "white",
    fontSize: "1.2vw",
    paddingLeft: "0.2vw",
    paddingRight: "0.2vw",
    letterSpacing: "0.05cm",
    marginLeft: "3vw",
  };

  const handleStripe = (token, _) => {
    console.log(token);
    const response = axios
      .post("https://gymhut.herokuapp.com/members/payment", {
        membership: heading_2,
        token,
      })
      .then((response) => {
        console.log("Response:", response.data);
        const { status } = response.data;

        if (status === "success") {
          toast("Success! Check email for details", { type: "info" });
        }
      })
      .catch((error) => {
        if (error.response) {
          toast(`${error.response.data}`, { type: "error" });
          console.log(`error ${error.response.data}`);
        }
      });
  };

  return userName === "" || userId === "" ? (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.membership_1}>
          <h2>
            <span
              className={Styles.heading_1}
              style={heading_1 === "" ? console.log("") : heading_style}
            >
              {heading_1}
            </span>
            <span
              className={Styles.mainHeading}
              style={
                heading_1 === "" ? { marginLeft: "3vw" } : { marginLeft: "1vw" }
              }
            >
              {heading_2}
            </span>
          </h2>
        </div>
        <h2>
          <BiDollar className={Styles.dollar_logo} />
          <span className={Styles.priceValue}>{price}</span>
        </h2>
        <h2>
          <span className={Styles.logoColor} style={{ color: logo_1_color }}>
            {logo_1_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_1_color }}>
            {service_1}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.5vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_2_color }}>
            {logo_2_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_2_color }}>
            {service_2}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.3vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_3_color }}>
            {logo_3_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_3_color }}>
            {service_3}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.3vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_4_color }}>
            {logo_4_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_4_color }}>
            {service_4}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.3vw", marginBottom: "0.3vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_5_color }}>
            {logo_5_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_5_color }}>
            {service_5}
          </span>
        </h2>
        <button
          className={Styles.buyNow}
          type="button"
          onClick={show}
          style={
            heading_1 === ""
              ? {
                  backgroundImage: "white",
                  color: "black",
                  border: "1px solid black",
                }
              : {
                  backgroundImage: "linear-gradient(tomato, orange)",
                  color: "white",
                  border: "1px solid white",
                }
          }
        >
          Buy Now
        </button>
        <Rodal
          height={470}
          width={550}
          visible={state.visible}
          onClose={hide}
          enterAnimation={"rotate"}
          duration={700}
          leaveAnimation={"zoom"}
        >
          <h2
            style={{
              fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
              fontsize: "1.2vw",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            Become a Full Time Member
          </h2>
          <MemberShipForm
            type="membership"
            membership={heading_2}
            hide={hide}
          />
        </Rodal>
      </div>
    </div>
  ) : (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.membership_1}>
          <h2>
            <span
              className={Styles.heading_1}
              style={heading_1 === "" ? console.log("") : heading_style}
            >
              {heading_1}
            </span>
            <span
              className={Styles.mainHeading}
              style={
                heading_1 === "" ? { marginLeft: "3vw" } : { marginLeft: "1vw" }
              }
            >
              {heading_2}
            </span>
          </h2>
        </div>
        <h2>
          <BiDollar className={Styles.dollar_logo} />
          <span className={Styles.priceValue}>{price}</span>
        </h2>
        <h2>
          <span className={Styles.logoColor} style={{ color: logo_1_color }}>
            {logo_1_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_1_color }}>
            {service_1}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.5vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_2_color }}>
            {logo_2_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_2_color }}>
            {service_2}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.3vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_3_color }}>
            {logo_3_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_3_color }}>
            {service_3}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.3vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_4_color }}>
            {logo_4_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_4_color }}>
            {service_4}
          </span>
        </h2>
        <h2 style={{ marginTop: "0.3vw", marginBottom: "0.3vw" }}>
          <span className={Styles.logoColor} style={{ color: logo_5_color }}>
            {logo_5_color === "red" ? <TiTickOutline /> : <ImCross />}
          </span>
          <span className={Styles.services} style={{ color: service_5_color }}>
            {service_5}
          </span>
        </h2>
        <StripeCheckout
          stripeKey="pk_test_51HndUcEynMwgZp7ZbDkkWsib4j8KiQJSN1m0B5GyvLpbNBmKflvbEBOJvTkAOMrF8HVWttyYeg0h6cO4WgvPbgpv00bxeRO8cs"
          token={handleStripe}
          name={"Payment SetUp"}
          amount={
            heading_2 === "Standard"
              ? 12 * 100
              : heading_2 === "Pro"
              ? 25 * 100
              : 39 * 100
          }
        >
          <button
            type="submit"
            className={
              heading_1 === "" ? Styles.stripe_button_1 : Styles.stripe_button_2
            }
          >
            Buy Now
          </button>
        </StripeCheckout>
      </div>
    </div>
  );
}
