import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { GiMuscleUp } from "react-icons/gi";
import Styles from "./navbar.module.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import { ShoppingCartIcon } from "@heroicons/react/";
import { selectItems } from "./basketSlice";

export default function NavBar({ type }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [scrolled, setscrolled] = useState(false);
  const [isClick, setIsClick] = useState(false);
  // const userName = useSelector((state) => state.account.userName);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setscrolled(true);
    } else setscrolled(false);
  };
  window.addEventListener("scroll", changeBackground);

  const items = useSelector(selectItems);
  console.log(items);

  return (
    <div>
      {/* <div
        style={{
          display: "flex",
          backgroundColor: "white",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <div style={{ flex: "3" }}></div>
        <div className={Styles.tel_phone_logo}>
          <FiPhoneCall />
        </div>
        <div className={Styles.tel_phone}>+ 92 - 34563 - 45</div>

        <button className={Styles.logout} onClick={() => dispatch(logOut())}>
          {userName === "" ? "" : "Logout"}
        </button>
      </div> */}

      <div
        className={
          scrolled && type !== "product"
            ? Styles.navBarScrolled
            : type === "product"
              ? Styles.prodNav
              : Styles.navBar
        }
      >
        <div className={Styles.flexStart}>
          <div style={{ display: "flex" }}>
            <div className={Styles.webLogo}>
              &nbsp;
              <GiMuscleUp />
            </div>
            <div className={Styles.webName}>
              Fit
              <span
                style={{ color: "tomato", fontFamily: '"Anton", sans-serif' }}
              >
                Site
              </span>
            </div>
          </div>
        </div>

        <div
          className={isClick === false ? Styles.centerFlex : Styles.navLinksRes}
        >
          <h3 className={Styles.navLinks} onClick={() => history.push("/")}>
            Home
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("./courses")}
          >
            Courses
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("./blogs")}
          >
            Blogs
          </h3>
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("/products")}
          >
             Products
          </h3>

           <h3  className={Styles.nav }>
            <div >
              <a href="http://localhost:5173/"  className={Styles.nav }>FitBot</a>
            </div>
            
           </h3>

          
          <h3
            className={Styles.navLinks}
            onClick={() => history.push("/about")}
          >
            About Us
          </h3>

          {/* <h3
            className={Styles.navLinks}
            onClick={() => history.push("/contact")}
          >
            Contact
          </h3> */}
        </div>
        <div className={Styles.endFlex}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginRight: "2rem",
              marginTop: "0.5rem",
            }}
          >
            <div
              onClick={() => history.push("/cart")}
              className="link relative flex items-center"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "2.5rem",
                  height: "1.2rem",
                  width: "1.2rem",
                  backgroundColor: "tomato",
                  color: "white",
                  fontSize: "0.8rem",
                  borderRadius: "50%",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {items?.length}
              </span>
              {/* <ShoppingCartIcon className="h-10" style={{ height: "2rem" }} /> */}
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_101_5)">
                  <path d="M11.6667 30C9.83332 30 8.34999 31.5 8.34999 33.3333C8.34999 35.1667 9.83332 36.6667 11.6667 36.6667C13.5 36.6667 15 35.1667 15 33.3333C15 31.5 13.5 30 11.6667 30ZM1.66666 5.00001C1.66666 5.91668 2.41666 6.66668 3.33332 6.66668H4.99999L11 19.3167L8.74999 23.3833C7.53332 25.6167 9.13332 28.3333 11.6667 28.3333H30C30.9167 28.3333 31.6667 27.5833 31.6667 26.6667C31.6667 25.75 30.9167 25 30 25H11.6667L13.5 21.6667H25.9167C27.1667 21.6667 28.2667 20.9833 28.8333 19.95L34.8 9.13334C35.4167 8.03334 34.6167 6.66668 33.35 6.66668H8.68332L7.56666 4.28334C7.29999 3.70001 6.69999 3.33334 6.06666 3.33334H3.33332C2.41666 3.33334 1.66666 4.08334 1.66666 5.00001ZM28.3333 30C26.5 30 25.0167 31.5 25.0167 33.3333C25.0167 35.1667 26.5 36.6667 28.3333 36.6667C30.1667 36.6667 31.6667 35.1667 31.6667 33.3333C31.6667 31.5 30.1667 30 28.3333 30Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_101_5">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p
                className="hidden sm:inline font-extrabold md:text-sm mt-2"
                style={{ display: "inline", fontsize: "2.4rem" }}
              >
                Basket
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
