import React, { useState } from "react";
import Styles from "./model.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { RiGenderlessFill } from "react-icons/ri";
import axios from "axios";

export default function Model() {
  const values = {
    height: 0,
    weight: 0,
    gender: "",
  };
  const [initialValues, setInitialValues] = useState({
    height: 0,
    weight: 0,
    female: 0,
    male: 0,
  });
  const modelSchema = Yup.object().shape({
    height: Yup.number().required("Height is required"),
    weight: Yup.number().required("Weight is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const [bmi, setBMI] = useState(0);

  return (
    <div>
      <Formik
        initialValues={values}
        validationSchema={modelSchema}
        onSubmit={(values) => {
          const { height, weight } = values;
          const male = values.gender.toLowerCase() === "male" ? 1 : 0;
          const female = values.gender.toLowerCase() === "female" ? 1 : 0;
          setInitialValues({
            height: height,
            weight: weight,
            female: female,
            male: male,
          });
          const formData = { height, weight, female, male };
          console.log(
            `Data sent to server is :\n height : ${initialValues.height} \n weight: ${initialValues.weight} \n female :${initialValues.female} \n male :${initialValues.male}`
          );
          axios
            .post(
              "https://127.0.0.1:5000/prediction/",
              JSON.stringify(formData)
            )
            .then((response) => {
              console.log("BMI IS :", response.data);
              toast.success(`Sucess!! Prediction is been made`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 8000,
              });
              setBMI(Math.round(response.data.result * 100) / 100);
            })
            .catch((error) => {
              console.log("error is :", error);
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
                    <GiBodyHeight />
                  </div>
                  <Field
                    style={{
                      flex: "2",
                      height: "4vw",
                      marginTop: "0.3vw",
                      outline: "none",
                      border: "none",
                      marginRight: "1vw",
                    }}
                    type="number"
                    name="height"
                    id="height"
                    placeholder=" Enter Height"
                    className={
                      errors.height && touched.height ? "input-error" : null
                    }
                  />
                  <div>
                    {" "}
                    <br />
                    <br />
                    <br />
                    <ErrorMessage
                      name="height"
                      component="span"
                      className="error"
                      style={{
                        color: "maroon",
                        fontSize: "1.2vw",
                        marginLeft: "-18vw",
                        fontSize: "1.4vw",
                      }}
                    />
                  </div>
                </div>
                <div className={Styles.form_row}>
                  <div className={Styles.logo}>
                    <FaWeight />
                  </div>
                  <Field
                    style={{
                      flex: "2",
                      height: "4vw",
                      marginTop: "0.3vw",
                      outline: "none",
                      border: "none",
                      marginRight: "1vw",
                    }}
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder=" Enter Weight "
                    className={
                      errors.weight && touched.weight ? "input-error" : null
                    }
                  />

                  <div>
                    {" "}
                    <br />
                    <br />
                    <br />
                    <ErrorMessage
                      name="weight"
                      component="span"
                      className="error"
                      style={{
                        color: "maroon",
                        fontSize: "1.2vw",
                        marginLeft: "-18vw",
                        fontSize: "1.4vw",
                      }}
                    />
                  </div>
                </div>
                <div className={Styles.form_row}>
                  <div className={Styles.logo}>
                    <RiGenderlessFill />
                  </div>
                  <label>
                    <Field
                      style={{
                        flex: "2",
                        height: "4vw",
                        marginTop: "0.3vw",
                        outline: "none",
                        border: "none",
                        marginRight: "1vw",
                        marginLeft: "0.5vw",
                        fontSize: "1.4vw",
                      }}
                      type="radio"
                      name="gender"
                      id="gender"
                      value="Male"
                      className={
                        errors.gender && touched.gender ? "input-error" : null
                      }
                    />
                  </label>
                  <h6 style={{ fontSize: "1.3vw", marginTop: "1.5vw" }}>
                    Male
                  </h6>
                  <label>
                    <Field
                      style={{
                        flex: "2",
                        height: "4vw",
                        marginTop: "0.3vw",
                        outline: "none",
                        border: "none",
                        marginRight: "1vw",
                        fontSize: "1.4vw",
                        marginLeft: "2vw",
                      }}
                      type="radio"
                      name="gender"
                      id="gender"
                      value="Female"
                      placeholder="Female"
                      className={
                        errors.gender && touched.gender ? "input-error" : null
                      }
                    />
                  </label>
                  <h6 style={{ fontSize: "1.3vw", marginTop: "1.5vw" }}>
                    Female
                  </h6>
                  <div>
                    {" "}
                    <br />
                    <br />
                    <br />
                    <ErrorMessage
                      name="gender"
                      component="span"
                      className="error"
                      style={{
                        color: "maroon",
                        fontSize: "1.2vw",
                        marginLeft: "-10vw",
                      }}
                    />
                  </div>
                </div>
                <button className={Styles.button} type="submit">
                  Predict
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
      <div className={bmi === 0 ? Styles.noPrediction : Styles.prediction}>
        Your BMI is {bmi}
      </div>
    </div>
  );
}
