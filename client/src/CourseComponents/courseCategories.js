import React from "react";
import Styles from "./courseFeatures.module.css";
import { MdFitnessCenter } from "react-icons/md";
import { useHistory } from "react-router-dom";

export default function CourseCategories() {
  const history = useHistory();

  return (
    <div>
      <h3 className={Styles.featureHeading}>Class Categories</h3>
      <h3 className={Styles.categoryHeading}>
        <MdFitnessCenter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={
            () => {}
            // history.push({
            //   pathname: "/courses",
            //   category: "Fitness",
            //   cat: "none",
            // })
          }
        >
          Fitness
        </span>
      </h3>
      <h3 className={Styles.durationHeading}>
        <MdFitnessCenter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/courses",
              category: "Wait loss",
              cat: "none",
            })
          }
        >
          Wait Loss
        </span>
      </h3>
      <h3 className={Styles.studentsHeading}>
        <MdFitnessCenter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/courses",
              category: "Yoga",
              cat: "none",
            })
          }
        >
          Yoga
        </span>
      </h3>
      <h3 className={Styles.shiftHeading}>
        <MdFitnessCenter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/courses",
              category: "Dieting",
              cat: "none",
            })
          }
        >
          Dieting
        </span>
      </h3>
      <h3 className={Styles.priceHeading}>
        <MdFitnessCenter />
        <span
          style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}
          className={Styles.category}
          onClick={() =>
            history.push({
              pathname: "/courses",
              category: "Cycling",
              cat: "none",
            })
          }
        >
          Cycling
        </span>
      </h3>
    </div>
  );
}
