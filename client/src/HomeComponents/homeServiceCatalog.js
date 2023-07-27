import React from "react";
import Styles from "./homeServiceCatalog.module.css";
export default function HomeServiceCatalog({
  GiCycling,
  heading,
  content,
  background_Color,
  logo_color,
  color,
}) {
  return (
    <div>
      <div
        className={Styles.mainGrid}
        style={{ backgroundColor: background_Color }}
      >
        <GiCycling className={Styles.logo} style={{ color: logo_color }} />
        <div className={Styles.heading} style={{ color: color }}>
          {heading}
        </div>
        <div className={Styles.content} style={{ color: color }}>
          {content}
        </div>
      </div>
    </div>
  );
}
