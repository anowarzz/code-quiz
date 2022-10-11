import React from "react";

const QuizCards = ({ quizNameCard }) => {
  const { name, logo, total } = quizNameCard;

  console.log(name, total);

  return <div className="bg-gray-700 rounded-md shadow-lg">

    <div className="flex justify-center item-center">
        <img className="w-64 border m-4 " src={logo} alt="" />
    </div>
    <h3 className="text-3xl font-semibold text-center text-white my-4">{name}</h3>
    
<div className="flex justify-between items-center w-96 mx-auto mb-8">
    <h4 className="text-white text-xl font-bold"> Total <span className="text-yellow-500">{total}</span> Questions</h4>
    <button className="bg-blue-600 px-4 py-2 w-48 rounded-lg"> Take Test </button>
</div>
  </div>;
};

export default QuizCards;
