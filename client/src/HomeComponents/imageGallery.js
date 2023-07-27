import React from "react";
import Styles from "./imageGallery.module.css";

export default function HomeImageGallery({ image }) {
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div
          className={Styles.image}
          style={{ backgroundImage: "url(" + image + ")" }}
        />
      </div>
    </div>
  );
}
