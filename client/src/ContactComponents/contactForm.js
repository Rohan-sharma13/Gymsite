import React, { useState } from "react";
import Styles from "./contactForm.module.css";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    message: "",
  };

  const ContactSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("First Name is required"),

    lastName: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Last Name is required"),

    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^\92?([0-9]{11})\)?$/, "Invalid Phone Number"),
    email: Yup.string().email().required("Email is required"),

    message: Yup.string()
      .min(10, "Too Short!")
      .max(100, "Too Long!")
      .required("Message is required"),
  });

  return (
    <div>
      <div className={Styles.mainGrid}>
        <div className={Styles.formborderTop}>___</div>
        <div className={Styles.formHeading}>Let's Talk</div>
        <div className={Styles.formSub_heading}>
          Send us Query any time you carve it
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={ContactSchema}
          onSubmit={(values) => {
            setValues({
              fullName: values.firstName + " " + values.lastName,
              email: values.email,
              phone: values.phoneNumber,
              message: values.message,
            });
            // console.log(
            //   `email : ${values.email} \n contact : ${values.phoneNumber} \n fullname : ${values.lastName} ${values.firstName} \n message : ${values.message}`
            // );
            initialValues.email = values.email;
            initialValues.firstName = values.firstName;
            initialValues.phoneNumber = values.phoneNumber;
            initialValues.lastName = values.lastName;
            initialValues.message = values.message;
            axios
              .post("https://gymhut.herokuapp.com/contact", initialValues)
              .then((response) => {
                toast.success("Your Query has been recorded successfully", {
                  position: "top-center",
                });
                console.log("reponse from server : ", response.data);
              })
              .catch((error) => {
                if (error.response) {
                  toast.error(`${error.response.data}`, {
                    position: "top-center",
                  });
                }
              });
          }}
        >
          {(formik) => {
            const { errors, touched } = formik;
            return (
              <div className={Styles.container}>
                <Form>
                  <div
                    className={Styles.form_rows}
                    style={{ display: "flex", marginTop: "5vw" }}
                  >
                    <div>
                      <div className={Styles.first_name}>
                        <Field
                          style={{
                            border: "none",
                            outline: "none",
                            fontSize: "1.4vw",
                            backgroundColor: "white",
                          }}
                          name="firstName"
                          id="firstName"
                          placeholder=" First Name"
                          type="text"
                          className={
                            errors.firstName && touched.firstName
                              ? "input-error"
                              : null
                          }
                        />
                        <div>
                          {" "}
                          <br />
                          <ErrorMessage
                            name="firstName"
                            component="span"
                            className="error"
                            style={{
                              color: "maroon",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className={Styles.last_name}>
                        <Field
                          style={{
                            border: "none",
                            outline: "none",
                            fontSize: "1.4vw",
                          }}
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder=" Last Name"
                          className={
                            errors.lastName && touched.lastName
                              ? "input-error"
                              : null
                          }
                        />
                        <div>
                          {" "}
                          <br />
                          <ErrorMessage
                            name="lastName"
                            component="span"
                            className="error"
                            style={{
                              color: "maroon",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div>
                      <div className={Styles.contact}>
                        <Field
                          style={{
                            border: "none",
                            outline: "none",
                            fontSize: "1.4vw",
                          }}
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder=" Contact No"
                          className={
                            errors.phoneNumber && touched.phoneNumber
                              ? "input-error"
                              : null
                          }
                        />
                        <div>
                          {" "}
                          <br />
                          <ErrorMessage
                            name="phoneNumber"
                            component="span"
                            className="error"
                            style={{
                              color: "maroon",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={Styles.right_item}>
                      <div className={Styles.email}>
                        <Field
                          style={{
                            border: "none",
                            outline: "none",
                            fontSize: "1.4vw",
                          }}
                          type="email"
                          name="email"
                          id="email"
                          placeholder=" Your Email "
                          className={
                            errors.email && touched.email ? "input-error" : null
                          }
                        />
                        <div>
                          {" "}
                          <br />
                          <ErrorMessage
                            name="email"
                            component="span"
                            className="error"
                            style={{
                              color: "maroon",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={Styles.text_area}>
                    <Field
                      style={{
                        border: "none",
                        outline: "none",
                        fontSize: "1.4vw",
                      }}
                      type="text"
                      name="message"
                      id="message"
                      placeholder=" Your message here .."
                      className={
                        errors.message && touched.message ? "input-error" : null
                      }
                    />

                    <div>
                      {" "}
                      <br />
                      <ErrorMessage
                        name="message"
                        component="span"
                        className="error"
                        style={{
                          color: "maroon",
                        }}
                      />
                    </div>
                  </div>
                  <button type="submit" className={Styles.submit_button}>
                    Continue
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

// <form className={Styles.form} onSubmit={handleSubmit}>
// <input
//   className={Styles.first_name}
//   type="text"
//   value={firstName}
//   onChange={(e) => setFirstName(e.target.value)}
// />
// <input
//   className={Styles.last_name}
//   type="text"
//   value={lastName}
//   onChange={(e) => setLastName(e.target.value)}
// />
// <input
//   className={Styles.email}
//   type="text"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
// />
// <input
//   className={Styles.contact}
//   type={Number}
//   value={contact}
//   onChange={(e) => setContact(e.target.value)}
// />
// <textarea
//   className={Styles.text_area}
//   value={message}
//   onChange={(e) => setMessage(e.target.value)}
// />
// <button className={Styles.submit_button} type="submit" value="Submit">
//   Submit
// </button>
// </form>
