import React, { useState } from "react";
import "./styles.css";
import Faq from "./faq";

export default function App() {
  const [faqs, setfaqs] = useState([
    {
      question: " What are the timings of The Jym?",
      answer: "Somwhere between 6am to 2am",
      open: false,
    },
    {
      question: "From which course should i start my training program ?",
      answer:
        "If you are absolute starter in this field , then try to go for our nutrition program.Simply Best.",
      open: false,
    },
    {
      question: " Are there any expert trainers in midnight shift too?",
      answer:
        "Yes there are , absolutely. Not lot of them but a bunch which are always there to sort out your task.",
      open: false,
    },
    {
      question: "Tell me little about the history of nutrition programs?",
      answer:
        "It was started for the middleweight beginners and with time it has risen like none other.Huge shout out to our loyal customers as well.",
      open: false,
    },
    {
      question: "What services do you get by availing the membership?",
      answer:
        "Amount of discount and accessories you get on these offers are enough to keep you going for one more year or so.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
