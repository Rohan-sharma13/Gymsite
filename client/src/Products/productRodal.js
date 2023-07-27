import React from "react";
import pant_1 from "../assets/pant_1.jpeg";
import pant_2 from "../assets/pant_2.jpg";
import pant_3 from "../assets/pant_3.jpg";
import shirt_1 from "../assets/shirt_1.jpg";
import shirt_2 from "../assets/shirt_2.jpg";
import shirt_3 from "../assets/shirt_3.jpg";
import cap_1 from "../assets/cap_1.jpg";
import cap_2 from "../assets/cap_2.jpg";
import cap_3 from "../assets/cap_3.jpeg";
import hoodie_1 from "../assets/hoodie_1.png";
import hoddie_2 from "../assets/hoddie_2.jpg";
import hoddie_3 from "../assets/hoddie_3.jpg";
import protien_1 from "../assets/protien_1.jpg";
import protien_2 from "../assets/protien_2.jpg";
import protien_3 from "../assets/protien_3.jpg";
import Styles from "./singleProduct.module.css";
import { useHistory } from "react-router-dom";

export default function ProductRodal({
  product,
  price,
  prod,
  hide_Rodal,
  buyers,
}) {
  const history = useHistory();
  return (
    <div>
      <img alt="/"
        style={{
          marginTop: "1.5vw",
          marginLeft: "3vw",
          width: "290px",
          height: "220px",
          backgroundAttachment: "cover",
          backgroundSize: "100% 100%",
          backgroundRepeat: "norepeat",
          cursor: "pointer",
        }}
        onClick={() =>
          history.push({
            pathname: "/productDetail",
            name: product,
            price: price,
            prod: prod,
            buyers: buyers,
          })
        }
        src={
          prod === "pant_1"
            ? pant_1
            : prod === "pant_2"
            ? pant_2
            : prod === "pant_3"
            ? pant_3
            : prod === "shirt_1"
            ? shirt_1
            : prod === "shirt_2"
            ? shirt_2
            : prod === "shirt_3"
            ? shirt_3
            : prod === "cap_1"
            ? cap_1
            : prod === "cap_2"
            ? cap_2
            : prod === "cap_3"
            ? cap_3
            : prod === "hoddie_1"
            ? hoodie_1
            : prod === "hoddie_2"
            ? hoddie_2
            : prod === "hoddie_3"
            ? hoddie_3
            : prod === "protien_1"
            ? protien_1
            : prod === "protien_2"
            ? protien_2
            : protien_3
        }
      />

      <div
        style={{
          marginTop: "2vw",
          textAlign: "center",
          fontWeight: "bolder",
          fontFamily: "sans-serif",
          letterSpacing: "0.02cm",
        }}
      >
        Product Name : {product}
      </div>
      <div
        style={{
          marginTop: "1vw",
          textAlign: "center",
          fontFamily: "sans-serif",
          letterSpacing: "0.02cm",
          fontWeight: "bolder",
          color: "rgb(102,102,102)",
        }}
      >
        Product Price : {price} $
      </div>
      <button
        className={Styles.button}
        style={{
          marginTop: "1.9vw",
          textAlign: "center",
          paddingLeft: "0.6vw",
          paddingRight: "0.6vw",
          paddingTop: "0.7vw",
          paddingBottom: "0.7vw",
          border: "2px solid blue",
          outline: "none",
          marginLeft: "4vw",
          fontWeight: "bolder",
          color: "blue",
          marginRight: "2vw",
          fontFamily: "Verdana",
          fontSize: "1.3vw",
          transition: "fontSize",
          transitionDuration: "100ns",
          cursor: "pointer",
          backgroundColor: "transparent",
          textTransform: "uppercase",
        }}
        onClick={hide_Rodal}
      >
        Continue Shopping
      </button>
      <button
        className={Styles.button}
        style={{
          marginTop: "1.5vw",
          textAlign: "center",
          color: "orange",
          paddingLeft: "0.8vw",
          paddingRight: "0.8vw",
          fontFamily: "Verdana",
          paddingTop: "0.7vw",
          paddingBottom: "0.7vw",
          border: "2px solid orange",
          outline: "none",
          marginLeft: "8vw",
          marginRight: "6vw",
          fontWeight: "bolder",
          fontSize: "1.3vw",
          marginBottom: "2vw",
          transition: "fontSize",
          transitionDuration: "100ns",
          cursor: "pointer",
          backgroundColor: "transparent",
          textTransform: "uppercase",
        }}
        onClick={() => history.push("/cart")}
      >
        Go To Cart
      </button>
    </div>
  );
}
