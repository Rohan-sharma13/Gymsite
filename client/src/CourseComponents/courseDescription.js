import React from "react";

export default function CourseDescription({ main_text, sub_text }) {
  const text = {
    paddingLeft: "3vw",
    paddingRight: "3vw",
    color: "maroon",
    fontSize: "1.2vw",
    textAlign: "center",
  };
  return (
    <div>
      <h2 style={text}>{main_text}</h2>
      <h2>{sub_text}</h2>
    </div>
  );
}
