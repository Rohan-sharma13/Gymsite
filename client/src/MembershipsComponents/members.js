import React, { useState, useEffect } from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles from "./members.module.css";
import MembershipCards from "./membershipCards";
import axios from "axios";
import Model from "./model";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import PopularCourses from "./popularCourses";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
// importing all the css for loader
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Membership() {
  const [loading, isLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const [course, setCourse] = useState({ courses: [] });

  useEffect(() => {
    axios
      .get("https://gymhut.herokuapp.com/courses/popular")
      .then((response) => {
        setCourse({ courses: response.data });
        isLoading(true);
      })
      .catch((error) => {
        console.log("error is :", error);
      });
  }, []);
  return (
    <div>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div className={Styles.boxContent}>
            <h3
              style={{
                fontSize: "1.3vw",
                color: "maroon",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Get Memberships
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              Discounts we offer
            </h3>
          </div>
        </div>
      </div>
      <div className={Styles.topGrid}>
        <div className={Styles.cardborderTop}>___</div>
        <div className={Styles.cardHeading}>Package Pricing</div>
        <div className={Styles.imageSub_heading}>
          We offer various types of packages for everyone
        </div>
      </div>
      <div className={Styles.membershipCards}>
        <MembershipCards
          price={"12"}
          heading_1={""}
          heading_2={"Standard"}
          TiTickOutline={TiTick}
          ImCross={ImCross}
          logo_1_color={"red"}
          logo_2_color={"red"}
          logo_3_color={"grey"}
          logo_4_color={"grey"}
          logo_5_color={"grey"}
          service_1={"Training overview"}
          service_2={"Foundation Training"}
          service_3={"Begineers Classes"}
          service_4={"Olympic weighlifting"}
          service_5={"Personal Training"}
          service_1_color={"black"}
          service_2_color={"black"}
          service_3_color={"grey"}
          service_4_color={"grey"}
          service_5_color={"grey"}
        />
        <MembershipCards
          price={"25"}
          heading_1={"popular"}
          heading_2={"Pro"}
          TiTickOutline={TiTick}
          ImCross={ImCross}
          logo_1_color={"red"}
          logo_2_color={"red"}
          logo_3_color={"red"}
          logo_4_color={"grey"}
          logo_5_color={"grey"}
          service_1={"Training overview"}
          service_2={"Foundation Training"}
          service_3={"Begineers Classes"}
          service_4={"Olympic weighlifting"}
          service_5={"Personal Training"}
          service_1_color={"black"}
          service_2_color={"black"}
          service_3_color={"black"}
          service_4_color={"grey"}
          service_5_color={"grey"}
        />
        <MembershipCards
          price={"39"}
          heading_1={""}
          heading_2={"Gold"}
          TiTickOutline={TiTick}
          ImCross={ImCross}
          logo_1_color={"red"}
          logo_2_color={"red"}
          logo_3_color={"red"}
          logo_4_color={"red"}
          logo_5_color={"red"}
          service_1={"Training overview"}
          service_2={"Foundation Training"}
          service_3={"Begineers Classes"}
          service_4={"Olympic weighlifting"}
          service_5={"Personal Training"}
          service_1_color={"black"}
          service_2_color={"black"}
          service_3_color={"black"}
          service_4_color={"black"}
          service_5_color={"black"}
        />
      </div>
      <div className={Styles.imageCatalog}>
        <div className={Styles.imageborderTop}>___</div>
        <div className={Styles.imageHeading}>Popular Courses</div>
        <div className={Styles.imageSub_heading}>
          We offer group exercises, aerobic classes each week.
        </div>
      </div>
      {loading === false ? (
        <div
          style={{
            marginTop: "6vw",
            textAlign: "center",
            fontSize: "2vw",
            fontWeight: "bold",
            marginBottom: "5vw",
          }}
        >
          Loading&nbsp;&nbsp;&nbsp;
          <span>
            <Loader
              style={{ marginTop: "1vw" }}
              type="Hearts"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={1000000} //1000 secs
            />
          </span>
        </div>
      ) : (
        <div className={Styles.popular_courses}>
          {course.courses.map(
            ({
              name,
              mentor,
              students,
              intensity,
              calories,
              shift,
              duration,
              price,
              days,
              timings,
              category,
              hours,
              no,
            }) => (
              <PopularCourses
                no={no}
                title={name}
                mentor={mentor}
                intensity={intensity}
                shift={shift}
                duration={duration}
                price={price}
                students={students}
                days={days}
                timings={timings}
                calories={calories}
                category={category}
                hours={hours}
              />
            )
          )}
          <button
            type="button"
            className={Styles.all_courses_button}
            onClick={() => history.push("./courses")}
          >
            See all our courses
          </button>
        </div>
      )}

      <div className={Styles.imageCatalog}>
        <div className={Styles.imageborderTop}>___</div>
        <div className={Styles.imageHeading}>BMI Predictor</div>
        <div className={Styles.imageSub_heading}>
          Tell us your figures and our model will evaluate.
        </div>
      </div>
      <div className={Styles.modelContainer}>
        <div className={Styles.model}>
          <Model />{" "}
        </div>
        <div className={Styles.modelImage}>
          <div style={{ visibility: "hidden" }}>ddddddddddddddddddddd</div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}
