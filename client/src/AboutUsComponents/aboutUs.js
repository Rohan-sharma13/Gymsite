import React from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles from "./aboutUs.module.css";
import AboutUs from "./aboutusTop";
import gym_2 from "../assets/gym_2.jpg";
import bodybuilder_2 from "../assets/bodybuilder_2.jpg";
import man_2 from "../assets/man_2.jpg";
import model from "../assets/model.jpg";
import HomeServiceCatalog from "../HomeComponents/homeServiceCatalog";
import { GiFruitBowl, GiWeightLiftingUp, GiMoneyStack } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";
import { FaDumbbell, FaShieldAlt } from "react-icons/fa";

import Trainers from "./trainers";
export default function About() {
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
              About Us
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>Who we Are</h3>
          </div>
        </div>
      </div>
      <AboutUs />
      <div className={Styles.imageCatalog}>
        <div className={Styles.imageborderTop}>___</div>
        <div className={Styles.imageHeading}>Why Choose us?</div>
      </div>

      <div className={Styles.row_1_why_us}>
        <HomeServiceCatalog
          style={{ backgroundColor: "black" }}
          GiCycling={FaDumbbell}
          heading={"MODERN EQUIPMENT"}
          content={
            "Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius."
          }
          background_Color={" rgb(44, 42, 42)"}
          logo_color={"white"}
          color={"rgb(230, 227, 220)"}
        />
        <HomeServiceCatalog
          GiCycling={GiWeightLiftingUp}
          heading={"PROFFESIONAL TRAINER"}
          content={
            "Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius."
          }
          background_Color={"white"}
          logo_color={"tomato"}
        />
        <HomeServiceCatalog
          GiCycling={GiFruitBowl}
          heading={"HEALTHY DIET PLAN"}
          content={
            "Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius."
          }
          background_Color={" rgb(44, 42, 42)"}
          logo_color={"white"}
          color={"rgb(230, 227, 220)"}
        />
      </div>
      <div className={Styles.row_1_why_us}>
        <HomeServiceCatalog
          GiCycling={GiMoneyStack}
          heading={"ONLINE PAYMENT"}
          content={
            "Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius."
          }
          background_Color={"white"}
          logo_color={"tomato"}
        />
        <HomeServiceCatalog
          GiCycling={FaShieldAlt}
          heading={"UNIQUE TO NEEDS"}
          content={
            "Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius."
          }
          background_Color={" rgb(44, 42, 42)"}
          logo_color={"white"}
          color={"rgb(230, 227, 220)"}
        />
        <HomeServiceCatalog
          GiCycling={AiFillLike}
          heading={"24/7 HELPING PEOPLE"}
          content={
            "Vestibulum sit amet blan augue, sit amet vehicula mi. Aliquam vitae varius."
          }
          background_Color={"white"}
          logo_color={"tomato"}
        />
      </div>

      <div className={Styles.trainerContainer}>
        <div className={Styles.borderTop}>___</div>
        <div className={Styles.topHeading}>Our Trainers</div>
      </div>
      <div className={Styles.trainers}>
        <Trainers
          name={"BRUICE JOHN"}
          job={"CROSS EXPERT TRAINER"}
          content={
            "Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury."
          }
          man={gym_2}
        />
        <Trainers
          name={"VIRGIL COOK"}
          job={"CROSS EXPERT TRAINER"}
          content={
            "Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury."
          }
          man={man_2}
        />
        <Trainers
          name={"THOMAS VEL"}
          job={"CROSS EXPERT TRAINER"}
          content={
            "Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury."
          }
          man={model}
        />
        <Trainers
          name={"JULIE COLLINS"}
          job={"CROSS EXPERT TRAINER"}
          content={
            "Growing up, I’ve always been involved in sports, fitness and athleticism in general. It got a whole new meaning for me as in 2007 I had an injury."
          }
          man={bodybuilder_2}
        />
      </div>

      <Fotter />
    </div>
  );
}
