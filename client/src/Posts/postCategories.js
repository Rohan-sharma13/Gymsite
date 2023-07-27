import React, { useState, useEffect } from "react";
import Styles from "./postCategories.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function PostCategories({ category, number }) {
  const history = useHistory();

  return (
    <div>
      <h4
        style={{ marginTop: "0.7vw", display: "flex", marginBottom: "0.7vw" }}
      >
        <div
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/blogs",
              category: category,
            })
          }
        >
          {category}
        </div>
        <div className={Styles.count}>&nbsp;{number}</div>
      </h4>
    </div>
  );
}
