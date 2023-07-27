import React from "react";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles from "./contact.module.css";
import ContactFrom from "./contactForm";

import ContactReviewSlider from "./contactReviewSlider";
import App from "./app";

export default function Contact() {
  return (
    <div>
      <div className={Styles.grid}>
        <NavBar />
        <div className={Styles.mainGrid}>
          <div style={{ gridRow: "1" }}></div>
          <div
            className={Styles.boxContent}
            style={{ fontFamily: '"Oswald", sans-serif' }}
          >
            <h3
              style={{
                fontSize: "1.3vw",
                color: "maroon",
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              Contact Us
            </h3>
            <h3 style={{ fontFamily: '"Oswald", sans-serif' }}>
              {" "}
              Our Help Center
            </h3>
          </div>
        </div>
      </div>
      <ContactFrom />
      <ContactReviewSlider />
      {/* <div className={Styles.cardContainer}>
        <HomeInfoCards
          FaHome={FaHome}
          heading={"Location"}
          content={"Gill Park, Ludhiana, India."}
        />
        <HomeInfoCards
          FaHome={FaPhoneVolume}
          heading={"Phone"}
          content={"+23 45 67890."}
        />
        <HomeInfoCards
          FaHome={BiMessageRoundedDetail}
          heading={"Email"}
          content={"support@fitsite.com."}
        />
      </div> */}

      <div className={Styles.modals}>
        <div className={Styles.formborderTop}>_</div>
        <div className={Styles.formHeading}>FAQ's</div>

        <App />
      </div>

      <Fotter />
    </div>
  );
}

{
}
