import React from "react";
import Styles from "./homeCenterAttachment.module.css";
import { useHistory } from "react-router-dom";

export default function HomeCenterAttachment() {
  const history = useHistory();
  return (
    <div className={Styles.grid}>
      <div className={Styles.mainGrid}>
        <div className={Styles.topContent}>discover tour potential</div>
        <div className={Styles.mainContent_1}>Book your early seat to get</div>
        <div className={Styles.mainContent_2}>
          <span style={{ color: "tomato", fontFamily: '"Anton", sans-serif' }}>
            winter 25%{" "}
          </span>
          discount
        </div>
        <button
          className={Styles.button}
          onClick={() => history.push("./products")}
        >
          Join today
        </button>
      </div>
    </div>
  );
}
