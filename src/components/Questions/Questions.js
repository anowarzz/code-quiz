import React from "react";
import Options from "../Options/Options";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const Questions = ({ singleQuestion, idx }) => {
  const { question, options, correctAnswer } = singleQuestion;
  let qIndex = idx + 1;

  let ans =  correctAnswer ;

  const showCorrectAns = () =>{
    toast.info(`Correct Ans Is  "${ans}" ` , {autoClose: 3000})
  }


  const handleAnswer = (ans) => {
    if (ans === correctAnswer) {
      toast.success("Correct Answer", { autoClose: 500 });
    } else {
      toast.error("Wrong Answer", { autoClose: 500 });
    }

  };

  return (
    <div className="w-[90%] mx-auto border text-white bg-indigo-800 rounded my-6 relative">

     <div className="flex justify-between">
     <h5 className="text-2xl font-mono m-5 font-bold">
        <span>
          Quiz No- <span className="text-red-500 font-bold">{qIndex}</span>{" "}
        </span>
        {question}
      </h5>
     <button className="absolute top-1 right-2">

     <FontAwesomeIcon onClick={() => showCorrectAns()} className="text-zinc-300 text-2xl font-bold hover:text-yellow-600 "  icon={faEye}/></button>


     </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mb-6">
        {options.map((option, idx) => (
          <Options
            option={option}
            key={idx}
            correctAnswer={correctAnswer}
            handleAnswer={handleAnswer}
     
          />
        ))}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Questions;
