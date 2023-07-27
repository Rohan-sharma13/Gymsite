import React from "react";
import Styles from "./contactInfoCards.module.css";
export default function HomeInfoCards({ FaHome, heading, content }) {
  return (
    <div>
      <div className={Styles.mainGrid}>
        <FaHome className={Styles.logo} />
        <div className={Styles.heading}>{heading}</div>
        <div className={Styles.content}>{content}</div>
      </div>
    </div>
  );
}
