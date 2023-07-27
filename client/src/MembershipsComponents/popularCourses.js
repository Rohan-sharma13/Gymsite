import React from "react";
import Styles from "./popularCourses.module.css";
import sports_2 from "../assets/sports_2.jpg";
import sports_4 from "../assets/sports_4.jpg";
import sport_3 from "../assets/sport_3.jpg";
import people_2 from "../assets/people_2.jpg";
import people_4 from "../assets/people_4.jpg";
import adult from "../assets/adult.jpg";
import cycling from "../assets/cycling.jpg";
import yoga from "../assets/yoga.jpg";
import pearl_harbor from "../assets/pearl_harbor.jpg";
import { useHistory } from "react-router-dom";
export default function PopularCourses({
  title,
  mentor,
  no,
  students,
  hours,
  intensity,
  calories,
  shift,
  duration,
  price,
  days,
  timings,
  category,
  image
}) {
  const history = useHistory();

  return (
    <div>
      <div className={Styles.mainGrid}>
        <div
          className={Styles.course_pic}
          style={
            no === "2"
              ? { backgroundImage: `url(${sports_2})` }
              : no === "1"
              ? { backgroundImage: `url(${sports_4})` }
              : no == "3"
              ? { backgroundImage: `url(${people_4})` }
              : no == "4"
              ? { backgroundImage: `url(${people_2})` }
              : no == "5"
              ? { backgroundImage: `url(${adult})` }
              : no == "6"
              ? { backgroundImage: `url(${sport_3})` }
              : no == "7"
              ? { backgroundImage: `url(${cycling})` }
              : no == "8"
              ? { backgroundImage: `url(${pearl_harbor})` }
              : no === "10"
              ? { backgroundImage: `url(${sports_4})` }
              : { backgroundImage: `url(${yoga})` }
          }
        />
        <div
          className={Styles.course_title}
          onClick={() =>
            history.push({
              pathname: "/courseDetails",
              courseName: title,
              students: students,
              price: price,
              shift: shift,
              category: category,
              duration: duration,
              hours: hours,
              intensity: intensity,
              calories: calories,
              days: days,
              timings: timings,
              image: image
            })
          }
        >
          {title}
        </div>
        <div className={Styles.course_mentor}>
          Mentor : <span style={{ color: "tomato" }}>{mentor}</span>
        </div>
      </div>
    </div>
  );
}
