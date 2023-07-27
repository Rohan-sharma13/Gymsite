import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../navbar";
import Fotter from "../footer";
import pant_1 from "../assets/pant_1.jpeg";
import pant_2 from "../assets/pant_2.jpg";
import pant_3 from "../assets/pant_3.jpg";
import shirt_1 from "../assets/shirt_1.jpg";
import shirt_2 from "../assets/shirt_2.jpg";
import shirt_3 from "../assets/shirt_3.jpg";
import cap_1 from "../assets/cap_1.jpg";
import cap_2 from "../assets/cap_2.jpg";
import cap_3 from "../assets/cap_3.jpeg";
import hoodie_1 from "../assets/hoodie_1.png";
import hoddie_2 from "../assets/hoddie_2.jpg";
import hoddie_3 from "../assets/hoddie_3.jpg";
import protien_1 from "../assets/protien_1.jpg";
import protien_2 from "../assets/protien_2.jpg";
import protien_3 from "../assets/protien_3.jpg";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

export default function ProductDetail(props) {
  const location = useLocation();
  return (
    <div>
      <NavBar type="product" />
      <h6
        style={{
          marginTop: "8vw",
          textAlign: "center",
          fontSize: "2.2vw",
          fontFamily: "Verdana",
        }}
      >
        {location.name}
      </h6>
      <div
        style={{
          display: "flex",
          marginLeft: "5vw",
          marginRight: "5vw",
          marginTop: "5vw",
          marginBottom: "9vw",
        }}
      >
        <img
          style={{
            marginTop: "3vw",
            width: "200px",
            height: "430px",
            backgroundAttachment: "cover",
            backgroundSize: "100% 100%",
            backgroundRepeat: "norepeat",
            flex: "1",
          }}
          src={
            location.prod === "pant_1"
              ? pant_1
              : location.prod === "pant_2"
              ? pant_2
              : location.prod === "pant_3"
              ? pant_3
              : location.prod === "shirt_1"
              ? shirt_1
              : location.prod === "shirt_2"
              ? shirt_2
              : location.prod === "shirt_3"
              ? shirt_3
              : location.prod === "cap_1"
              ? cap_1
              : location.prod === "cap_2"
              ? cap_2
              : location.prod === "cap_3"
              ? cap_3
              : location.prod === "hoddie_1"
              ? hoodie_1
              : location.prod === "hoddie_2"
              ? hoddie_2
              : location.prod === "hoddie_3"
              ? hoddie_3
              : location.prod === "protien_1"
              ? protien_1
              : location.prod === "protien_2"
              ? protien_2
              : protien_3
          }
        />
        <div style={{ flex: "1", paddingLeft: "3vw", marginTop: "3vw" }}>
          <span style={{ display: "flex" }}>
            <h4 style={{ fontSize: "1.7vw", fontFamily: "Verdana" }}>
              Item Price :
            </h4>
            <h6
              style={{
                fontSize: "1.6vw",
                fontFamily: "Verdana",
                paddingLeft: "1vw",
                color: "gray",
              }}
            >
              {location.price}$
            </h6>
          </span>
          <span style={{ display: "flex" }}>
            <h4
              style={{
                fontSize: "1.7vw",
                fontFamily: "Verdana",
                marginTop: "2vw",
              }}
            >
              No of Times Item Bought :
            </h4>
            <h6
              style={{
                fontSize: "1.6vw",
                fontFamily: "Verdana",
                paddingLeft: "1vw",
                color: "gray",
                marginTop: "2vw",
              }}
            >
              {location.buyers.length}
            </h6>
          </span>
          <div style={{ display: "flex", marginTop: "2vw" }}>
            <h4 style={{ fontSize: "1.7vw", fontFamily: "Verdana" }}>
              Product Reviews :
            </h4>
            <h6
              style={{
                paddingTop: "0.4vw",
                fontSize: "1.4vw",
                paddingLeft: "1vw",
                color: "gray",
              }}
            >
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              {location.prod.split("_")[0] === "pant" ||
              location.prod.split("_")[0] === "shirt" ||
              location.prod.split("_")[0] === "hoddie" ? (
                <BsStarHalf />
              ) : (
                <BsStarFill />
              )}
              {location.prod.split("_")[0] === "pant" ||
              location.prod.split("_")[0] === "shirt" ||
              location.prod.split("_")[0] === "hoddie" ? (
                <BsStar />
              ) : (
                <BsStarFill />
              )}
            </h6>
          </div>
          <h6
            style={{
              marginTop: "2vw",
              fontSize: "1.7vw",
              fontFamily: "Verdana",
            }}
          >
            Description:
          </h6>
          <div
            style={{
              marginTop: "1.5vw",
              fontSize: "1.3vw",
              textAlign: "justify",
            }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance.
            <br />
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
            from a line in section 1.10.32. The standard chunk of Lorem Ipsum
            used since the 1500s is reproduced below for those interested.
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
            Cicero are also reproduced in their exact original form, accompanied
            by English versions from the 1914 translation by H. Rackham.
          </div>
        </div>
      </div>

      <Fotter />
    </div>
  );
}
