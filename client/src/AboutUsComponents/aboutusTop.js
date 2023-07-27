import React from "react";
import Styles from "./aboutusTop.module.css";
import { useHistory } from "react-router-dom";

export default function AboutUs() {
  const history = useHistory();
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.pic_1}></div>
        <div className={Styles.aboutHeading}>est:1990</div>
        <div className={Styles.aboutSubHeading}>
          HAVING{" "}
          <span style={{ color: "tomato", fontFamily: '"Anton",sans-serif' }}>
            10 YEARS{" "}
          </span>{" "}
          OF EXPERIENCE IN FITNESS
        </div>
        <div className={Styles.content}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aliquam lorem ante, dapibus in.
        </div>
        <button
          type="button"
          className={Styles.serviceButton}
          onClick={() => history.push("./courses")}
        >
          Services
        </button>
      </div>
    </div>
  );
}
