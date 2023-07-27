import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaLinkedin,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function SocialLogos() {
  return (
    <div>
      <h4 style={{ marginTop: "4vw" }}>
        <span
          style={{
            marginLeft: "0vw",
            fontSize: "2.5vw",
            fontWeight: "lighter",
            color: "red",
          }}
        >
          -
        </span>
        <span style={{ paddingLeft: "0.5vw", fontSize: "1.5vw" }}>
          {" "}
          Follow us
        </span>
      </h4>
      <div
        style={{
          marginRight: "3vw",
          marginTop: "1vw",
          display: "flex",
          justifyContent: "space-around",
          color: "gray",
          fontSize: "1.5vw",
        }}
      >
        <a
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
            color: " #0033cc",
          }}
          href="https://www.facebook.com/home.php?ref=wizard"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
        <a
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
            color: "#4d94ff",
          }}
          href="https://mobile.twitter.com/login"
          target="_blank"
        >
          <FaTwitterSquare />
        </a>
        <a
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
            color: "#cc0000",
          }}
          href="https://www.pinterest.com/login/"
          target="_blank"
        >
          {" "}
          <FaPinterestSquare />
        </a>
        <a
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
            color: "#006699",
          }}
          href="https://www.linkedin.com/login/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          style={{
            paddingLeft: "0.6vw",
            paddingRight: "0.6vw",
            paddingTop: "0.4vw",
            paddingBottom: "0.4vw",
            backgroundColor: "white",
            color: "#ff5050",
          }}
          href="https://www.instagram.com/accounts/login/"
          target="_blank"
        >
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
}
