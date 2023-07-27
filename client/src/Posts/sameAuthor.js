import React from "react";
import { GoPerson } from "react-icons/go";
import Styles from "./sameAuthor.module.css";
import { useHistory } from "react-router-dom";
export default function SameAuthor({ author, heading, post }) {
  const history = useHistory();

  return (
    <div>
      <div className={Styles.mainGrid}>
        <div
          className={
            post === "1"
              ? Styles.pic_1
              : post === "2"
              ? Styles.pic_2
              : Styles.pic_3
          }
        ></div>
        <div
          style={{ display: "flex", marginTop: "1vw", justifySelf: "center" }}
        >
          <h1 className={Styles.personLogo}>
            <GoPerson />
          </h1>
          <h1 className={Styles.author}>{author}</h1>
        </div>
        <div
          className={Styles.heading}
          onClick={() => {
            // console.log(posts.singlePost[3]);
            history.push({
              pathname: "/blogs",
              name: heading,
            });
          }}
        >
          {heading}
        </div>
      </div>
    </div>
  );
}
