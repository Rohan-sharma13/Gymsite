import React from "react";
import Styles from "./trainers.module.css";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { useHistory } from "react-router-dom";

export default function Trainers({ man, name, job, content }) {
  // const Background = { backgroundImage: "url(" + man + ")" };
  const history = useHistory();
  return (
    <div>
      <div className={Styles.mainGrid}>
        <div
          className={Styles.pic_1}
          style={{ backgroundImage: "url(" + man + ")" }}
        ></div>
        <div className={Styles.name}>{name}</div>
        <div className={Styles.job}>{job}</div>
        <div className={Styles.content}>{content}</div>
        <div className={Styles.logos}>
          <a
            href="https://www.facebook.com/home.php?ref=wizard"
            target="_blank"
          >
            <FaFacebookF className={Styles.social_logo} />
          </a>

          <a href="https://mobile.twitter.com/login" target="_blank">
            <GrTwitter className={Styles.social_logo} />
          </a>
          <a href="https://www.linkedin.com/login/" target="_blank">
            <FaLinkedin className={Styles.social_logo} />
          </a>
        </div>
      </div>
    </div>
  );
}
