import React from "react";
import Styles from "./homeCards.module.css";
import { useHistory } from "react-router-dom";

export default function HomeCards({ title, content }) {
  const history = useHistory();
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.container}>
        <div className={Styles.cardTitle}>{title}</div>
        <div className={Styles.cardContent}>{content}</div>
        <div
          className={Styles.read_more}
          onClick={() => history.push("./courses")}
        >
          - More Details
        </div>
      </div>
    </div>
  );
}
