import React from "react";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import Styles from "./upvotePost.module.css";

export default function UpvotePost() {
  return (
    <div
      style={{ marginLeft: "15vw", marginRight: "15vw", marginBottom: "5vw" }}
    >
      <div className={Styles.content}> </div>
      {/* <div className={Styles.logos}>
        <a href="https://www.facebook.com/home.php?ref=wizard" target="_blank">
          <FaFacebookSquare style={{ color: " #0033cc", fontSize: "1.8vw" }} />
        </a>
        <a href="https://mobile.twitter.com/login" target="_blank">
          <FaTwitterSquare style={{ color: "#4d94ff", fontSize: "1.8vw" }} />
        </a>
        <a href="https://www.linkedin.com/login/" target="_blank">
          <FaLinkedin style={{ color: "#006699", fontSize: "1.8vw" }} />
        </a>
      </div> */}
    </div>
  );
}
