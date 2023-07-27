import React, { useState } from "react";
import Styles from "../MembershipsComponents/form.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import axios from "axios";
import MemberShipForm from "../MembershipsComponents/form";
import StripeCheckout from "react-stripe-checkout";
import "react-toastify/dist/ReactToastify.css";
import Rodal from "rodal";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// include styles
import "rodal/lib/rodal.css";
import "./modalStyles.css";
toast.configure();

export default function SignInForm({
  type,
  payment,
  membership,
  price,
  course,
  // product,
  // data,
  productsData,
  totalPrice,
}) {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formData, setData] = useState({ email: "" });
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password too short - 6 char minimum"),
  });

  const [membershipValue, setMembershipValue] = useState("");
  const [state, setState] = useState({ visible: false });
  // console.log(`membership in courses form : ${membership}`);
  const show = () => {
    setState({ visible: true });
  };

  const hide = () => {
    setState({ visible: false });
  };
  const [stripe, setStripe] = useState(true);

  const handleStripe = (token, _) => {
    console.log(token);
    if (productsData !== undefined) {
      axios
        .put("https://gymhut.herokuapp.com/products/productCustomers", {
          productsData,
          email: formData.email,
        })
        .then((response) => {
          console.log("product buyers has been updated");
        })
        .catch((error) => {
          if (error.response) {
            toast(`${error.response.data} in product customers`, {
              type: "error",
            });
          }
        });

      axios
        .post("https://gymhut.herokuapp.com/products/productPayment", {
          token,
          totalPrice,
        })
        .then((response) => {
          const { status } = response.data;

          if (status === "success") {
            toast(`Success! Payment has been made`, {
              type: "info",
            });
            console.log("payment has been made");
          }
        })
        .catch((error) => {
          if (error.response) {
            toast(`${error.response.data} in stripe payment`, {
              type: "error",
            });
          } else
            toast(`failed to make payment due to error`, { type: "error" });
        });
    } else if (payment === "set") {
      const response = axios
        .post("https://gymhut.herokuapp.com/members/payment", {
          membership,
          token,
        })
        .then((response) => {
          const { status } = response.data;

          if (status === "success") {
            toast(`Success! Check email for details `, {
              type: "info",
            });
          }
        })
        .catch((error) => {
          if (error.response) {
            toast(`${error.response.data}`, { type: "error" });
          }
        });
    } else if (payment === "non-set") {
      const response = axios;
      let coursePrice =
        payment === "set"
          ? membership === "Standard"
            ? 12 * 100
            : membership === "Pro"
            ? 25 * 100
            : 39 * 100
          : membershipValue === "none"
          ? price
          : membershipValue === "Standard"
          ? price * 75
          : membershipValue === "Pro"
          ? price * 50
          : price * 25;
      axios
        .post("https://gymhut.herokuapp.com/courses/enrollment", {
          course,
          coursePrice,
          token,
        })
        .then((response) => {
          console.log("Response:", response.data);
          const { status } = response.data;

          if (status === "success") {
            toast(`Success! Enrolled in ${course}`, { type: "info" });
          }
        })
        .catch((error) => {
          if (error.response) {
            toast(`${error.response.data}`, { type: "error" });
          }
        });
    }
    setStripe(true);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          setStripe(true);
          initialValues.email = values.email;
          initialValues.password = values.password;
          axios
            .post("https://gymhut.herokuapp.com/members/signIn", initialValues)
            .then((response) => {
              toast("Account has been accessed successfully", {
                type: "success",
              });
              setStripe(false);
              setMembershipValue(response.data.type);
              setData({
                email: initialValues.email,
              });
            })
            .catch((error) => {
              if (error.response) {
                toast(`${error.response.data}`, { type: "error" });
              }
            });
        }}
      >
        {(formik) => {
          const { errors, touched } = formik;
          return (
            <div className={Styles.container}>
              <Form>
                <div className={Styles.form_row}>
                  <div className={Styles.logo}>
                    <MdEmail />
                  </div>
                  <Field
                    style={{
                      flex: "2",
                      height: payment === "set" ? "2.2vw" : "2vw",
                      marginTop: "0.3vw",
                      outline: "none",
                      border: "none",
                      marginRight: "1vw",
                    }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" Your Email"
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                  <div>
                    {" "}
                    {type === "course" ? console.log("") : <br />}
                    <br />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                      style={{
                        color: "maroon",
                        fontSize: "1.2vw",
                        marginLeft: "-18vw",
                      }}
                    />
                  </div>
                </div>
                <div className={Styles.form_row}>
                  <div className={Styles.logo}>
                    <FaKey />
                  </div>
                  <Field
                    style={{
                      flex: "2",
                      height: payment === "set" ? "2.2vw" : "2vw",
                      marginTop: "0.3vw",
                      outline: "none",
                      border: "none",
                      marginRight: "1vw",
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" Email Password "
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />

                  <div>
                    {" "}
                    {type === "course" ? console.log("") : <br />}
                    <br />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                      style={{
                        color: "maroon",
                        fontSize: "1.2vw",
                        marginLeft: "-18vw",
                      }}
                    />
                  </div>
                </div>
                {payment !== "set" || payment === "product" ? (
                  <div>
                    <button
                      style={{
                        padding: "0.8vw",
                        float: "right",
                        marginTop: "1vw",
                      }}
                      className={Styles.not_member}
                      onClick={show}
                      type="button"
                    >
                      Not a User?
                    </button>
                    <Rodal
                      height={440}
                      width={550}
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
                      <MemberShipForm
                        type={"course"}
                        totalPrice={
                          membershipValue === "Gold"
                            ? price * 25
                            : membershipValue === "Standard"
                            ? price * 75
                            : membershipValue === "Pro"
                            ? price * 50
                            : price
                        }
                        course={course}
                      />
                    </Rodal>
                  </div>
                ) : (
                  console.log("")
                )}
                <button
                  className={
                    payment === "set"
                      ? Styles.member_continue
                      : Styles.course_continue
                  }
                  type="submit"
                >
                  Continue
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
      <div
        className={
          payment === "set" ? Styles.course_payment : Styles.member_payment
        }
      >
        <StripeCheckout
          stripeKey="pk_test_51HndUcEynMwgZp7ZbDkkWsib4j8KiQJSN1m0B5GyvLpbNBmKflvbEBOJvTkAOMrF8HVWttyYeg0h6cO4WgvPbgpv00bxeRO8cs"
          token={handleStripe}
          name={"Payment SetUp"}
          amount={
            totalPrice !== undefined
              ? totalPrice * 100
              : payment === "set"
              ? membership === "Standard"
                ? 12 * 100
                : membership === "Pro"
                ? 25 * 100
                : 39 * 100
              : membershipValue === "Gold"
              ? price * 25
              : membershipValue === "Standard"
              ? price * 75
              : membershipValue === "Pro"
              ? price * 50
              : price
          }
        >
          <button
            className={stripe === true ? Styles.disabledButton : Styles.pay}
            disabled={stripe}
          >
            Pay with Card
          </button>
        </StripeCheckout>
      </div>
    </div>
  );
}
