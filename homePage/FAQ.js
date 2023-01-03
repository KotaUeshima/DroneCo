import React from "react";
import IndividualFAQ from "./IndividualFAQ";

function FAQ() {
  const FAQList = [
    {
      id: 1,
      question: "Is It Safe?",
      answer:
        "The drone delivery service is very safe and the Manna drone has multiple safety systems in place should there be any issue. In the extremely unlikely event of a total flight failure, the drone has a parachute attached that will deploy and bring it gently to the ground.",
    },
    {
      id: 2,
      question: "Is It Noisy?",
      answer:
        "The drone delivery service is very safe and the Manna drone has multiple safety systems in place should there be any issue. In the extremely unlikely event of a total flight failure, the drone has a parachute attached that will deploy and bring it gently to the ground.",
    },
    {
      id: 3,
      question: "What Makes Us Better?",
      answer:
        "The drone delivery service is very safe and the Manna drone has multiple safety systems in place should there be any issue. In the extremely unlikely event of a total flight failure, the drone has a parachute attached that will deploy and bring it gently to the ground.",
    },
    {
      id: 4,
      question: "How Long Will My Delivery Take?",
      answer:
        "The drone delivery service is very safe and the Manna drone has multiple safety systems in place should there be any issue. In the extremely unlikely event of a total flight failure, the drone has a parachute attached that will deploy and bring it gently to the ground.",
    },
  ];

  return (
    <div className="mt-20 mb-32 max-w-[75vw] mx-auto">
      <div className="w-full h-full flex flex-col ">
        <h2 className="text-4xl font-medium text-fontBlack my-8">FAQs:</h2>
        {FAQList.map(({ id, question, answer }) => {
          return <IndividualFAQ key={id} question={question} answer={answer} />;
        })}
      </div>
    </div>
  );
}

export default FAQ;
