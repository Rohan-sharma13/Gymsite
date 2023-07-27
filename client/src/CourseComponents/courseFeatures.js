import React, { useState, useEffect } from "react";
import Styles from "./courseFeatures.module.css";
import Rodal from "rodal";
import SignInForm from "./form";
import Styles_1 from "../MembershipsComponents/form.module.css";
// include styles
import "rodal/lib/rodal.css";
import "./modalStyles.css";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToBasket } from "../basketSlice";

export default function Features({
  name,
  category,
  price,
  duration,
  students,
  shift,
  payment,
  membership,
  productsData,
  totalPrice,
  courseImage,
}) {
  const [coursePrice, setCoursePrice] = useState();
  const [state, setState] = useState({ visible: false });
  const dispatch = useDispatch();

  const userName = "Name";
  const userId = "userId";
  const accessToken = "dafsdfas";

  const show = () => {
    setState({ visible: true });
  };

  // useEffect(() => {
  //   // console.log("access token :", accessToken);
  //   axios
  //     .get("https://gymhut.herokuapp.com/members/authorize", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //     .then((response) => {
  //       // console.log("Id name:", response.data.id);
  //       axios
  //         .get(
  //           `https://gymhut.herokuapp.com/members/membershipStatus/${response.data.id}`
  //         )
  //         .then((response) => {
  //           // console.log("Memberhsip type :", response.data.id);
  //           response.data.id === "Standard"
  //             ? setCoursePrice(price * 75)
  //             : response.data.id === "Pro"
  //             ? setCoursePrice(price * 50)
  //             : response.data.id === "Gold"
  //             ? setCoursePrice(price * 25)
  //             : setCoursePrice(price * 100);
  //         });
  //     });
  // }, []);

  const hide = () => {
    setState({ visible: false });
  };

  const addItemToBasket = () => {
    const product = {
      category,
      name,
      duration,
      price,
      courseImage,
    };
    dispatch(addToBasket(product));

    toast.success("Item added to basket");
  };

  if (userId === "" || userName === "") {
    if (payment !== "set" && payment !== "product") {
      return (
        <div>
          <h3 className={Styles.featureHeading}>Class Features</h3>
          <h3 className={Styles.categoryHeading}>
            Category:
            <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
              {category}
            </span>
          </h3>
          <h3 className={Styles.durationHeading}>
            Duration:
            <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
              {duration} days
            </span>
          </h3>
          <h3 className={Styles.studentsHeading}>
            Students:
            <span style={{ paddingLeft: "3vw", color: "rgb(134, 128, 128)" }}>
              {students}
            </span>
          </h3>
          <h3 className={Styles.shiftHeading}>
            Shift:
            <span style={{ paddingLeft: "4vw", color: "rgb(134, 128, 128)" }}>
              {shift}
            </span>
          </h3>
          <h3 className={Styles.priceHeading}>
            Price:
            <span style={{ paddingLeft: "4vw", color: "rgb(134, 128, 128)" }}>
              {price} $
            </span>
          </h3>
          <button className={Styles.joinNow} type="button" onClick={show}>
            Add to cart
          </button>
          <Rodal
            height={340}
            width={450}
            visible={state.visible}
            onClose={hide}
            enterAnimation={"flip"}
            duration={500}
            leaveAnimation={"slideUp"}
          >
            <h2
              style={{
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                fontsize: "1.2vw",
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              Course Enrollment
            </h2>

            <SignInForm
              type={"course_1"}
              membership={"none"}
              payment={"non-set"}
              price={price}
              course={name}
            />
          </Rodal>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <button
            style={{
              padding: "0.8vw",
              float: "right",
            }}
            className={Styles_1.not_member}
            onClick={show}
            type="button"
          >
            Already a User?
          </button>
          {/* <Rodal
            height={350}
            width={450}
            visible={state.visible}
            onClose={hide}
            enterAnimation={"flip"}
            duration={500}
            leaveAnimation={"slideUp"}
          >
            <h2
              style={{
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                fontsize: "1.2vw",
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              Payment SetUp
            </h2>
            {productsData === undefined ? (
              <SignInForm
                type={"course"}
                membership={membership}
                payment={"set"}
                price={price}
                course={name}
              />
            ) : (
              <SignInForm
                type={"course"}
                membership={membership}
                payment={"set"}
                price={price}
                course={name}
                productsData={productsData}
                totalPrice={totalPrice}
              />
            )}
          </Rodal> */}
        </div>
      );
    }
  } else {
    return (
      <div>
        <h3 className={Styles.featureHeading}>Class Features</h3>
        <h3 className={Styles.categoryHeading}>
          Category:
          <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
            {category}
          </span>
        </h3>
        <h3 className={Styles.durationHeading}>
          Duration:
          <span style={{ paddingLeft: "2vw", color: "rgb(134, 128, 128)" }}>
            {duration} days
          </span>
        </h3>
        <h3 className={Styles.studentsHeading}>
          Students:
          <span style={{ paddingLeft: "3vw", color: "rgb(134, 128, 128)" }}>
            {students}
          </span>
        </h3>
        <h3 className={Styles.shiftHeading}>
          Shift:
          <span style={{ paddingLeft: "4vw", color: "rgb(134, 128, 128)" }}>
            {shift}
          </span>
        </h3>
        <h3 className={Styles.priceHeading}>
          Price:
          <span style={{ paddingLeft: "4vw", color: "rgb(134, 128, 128)" }}>
            {price} ₹ {}
          </span>
        </h3>
        {/* <StripeCheckout
          stripeKey="pk_test_51HndUcEynMwgZp7ZbDkkWsib4j8KiQJSN1m0B5GyvLpbNBmKflvbEBOJvTkAOMrF8HVWttyYeg0h6cO4WgvPbgpv00bxeRO8cs"
          token={handleStripe}
          name={"Payment SetUp"}
          amount={coursePrice}
        > */}
        <button
          type="submit"
          className={Styles.joinNow}
          onClick={addItemToBasket}
        >
          Join Now
        </button>
        {/* </StripeCheckout> */}
      </div>
    );
  }
}
