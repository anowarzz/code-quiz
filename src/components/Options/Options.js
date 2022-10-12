import React from "react";
import "./Option.css";

const Options = ({ option, handleAnswer }) => {
  return (
    <div className="p-8  w-5/6 bg-gray-700">
      <label
        htmlFor={option}
        className="text-xl radio radio-primary px-2 hover:bg-green-400 rounded py-1 hover:text-black"
      >
        <input
          onClick={() => handleAnswer(option)}
          type="radio"
          name="option"
          id={option}
        />
        <span className="pl-2">{option}</span>
      </label>
    </div>
  );
};

export default Options;
