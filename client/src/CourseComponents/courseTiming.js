import React from "react";
import { FcAlarmClock } from "react-icons/fc";
import Styles from "./courseTiming.module.css";

export default function CourseTiming({ day, time }) {
  return (
    <div style={{ marginBottom: "3vw" }}>
      <div style={{ padding: "1.5vw", backgroundColor: "rgb(200, 200, 200)" }}>
        <div style={{ display: "flex", marginTop: "1vw" }}>
          <h1 className={Styles.logo}>
            <FcAlarmClock />
          </h1>
          <h1 className={Styles.day}>{day}</h1>
        </div>
        <div className={Styles.time}>{time}</div>
      </div>
    </div>
  );
}
