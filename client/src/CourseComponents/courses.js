import React, { useState } from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles_1 from "../MembershipsComponents/members.module.css";
import Styles from "../CourseComponents/courses.module.css";
import dumbbell from "../assets/dumbbell.jpg";
import { useLocation } from "react-router-dom";
import Features from "./courseFeatures";
import CourseStats from "./courseStats";
import CourseCategories from "./courseCategories";
import CourseTiming from "./courseTiming";

export default function CoursDetails(props) {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <div
        className={Styles_1.grid}
        style={{ backgroundImage: `url(${dumbbell})` }}
      >
        <NavBar />
        <div className={Styles_1.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles_1.boxContent}>
            <h3
              style={{
                color: "tomato",
                fontSize: "1.7vw",
                textTransform: "capitalize",
                marginBottom: "0.1vw",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Course Single
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              {location.courseName}
            </h3>
          </div>
        </div>
      </div>

      <div className={Styles.topGrid}>
        <div
          className={Styles.leftGrid}
          style={{
            backgroundImage: `url(${location.image})`,
            objectFit: "contain",
          }}
        ></div>
        <div className={Styles.rightGrid}>
          <Features
            name={location.courseName}
            category={location.category}
            price={location.price}
            duration={location.duration}
            students={location.students}
            shift={location.shift}
            courseImage={location.image}
          />
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "10fr 3fr",
          marginLeft: "4vw",
          marginRight: "4vw",
          columnGap: "3vw",
        }}
      >
        <div style={{ gridColumn: "1" }}>
          <CourseStats
            main_text={location.main_text}
            calories={location.calories}
            hours={location.hours}
            intensity={location.intensity}
            sub_text={location.sub_text}
          />
          <div className={Styles.schedule}>Class Schedule</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "2vw",
            }}
          >
            {/* {location.days.map((day, index) => (
              <CourseTiming day={day} time={location.timings[index]} />
            ))} */}
          </div>
        </div>
        <div style={{ gridColumn: "2" }}>
          <CourseCategories />
        </div>
      </div>

      <Fotter />
    </div>
  );
}
