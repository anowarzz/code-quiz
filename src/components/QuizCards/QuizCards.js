import React from "react";
import { Link } from "react-router-dom";

const QuizCards = ({ quizNameCard }) => {
  const { id, name, logo, total } = quizNameCard;

  return (
    <div className="bg-gray-700 rounded-md shadow-lg">
      <div className="flex flex-col items-center">
        <img className="w-64  m-4 pt-2" src={logo} alt="" />
        <div>
          <h3 className="text-3xl font-semibold text-center text-white my-4">
            {name}
          </h3>
        </div>
      </div>

      <div className="flex flex-col lg:justify-between items-center md:w-9/12  mx-auto mb-8 mt-4">
        <h4 className="text-white text-xl font-bold">
          Total <span className="text-yellow-500">{total}</span> Questions
        </h4>
        <Link to={`/quiz/${id}`}>
          <button className="bg-blue-600 px-4 py-2 mt-4 rounded text-zinc-100 hover:bg-emerald-500 hover:text-black">
            Start Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QuizCards;
