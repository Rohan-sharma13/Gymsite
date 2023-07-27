import React, { useState, useEffect } from "react";
import Styles from "./tags.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Tags({ tag }) {
  const history = useHistory();

  return (
    <div
      className={Styles.tags}
      onClick={() =>
        history.push({
          pathname: "/blogs",
          tag: tag,
        })
      }
    >
      {tag}
    </div>
  );
}
