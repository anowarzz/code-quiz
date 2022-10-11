import React from "react";

const QuizCards = ({ quizNameCard }) => {
  const { name, logo, total } = quizNameCard;

  return <div className="bg-gray-700 rounded-md shadow-lg">

    <div className="flex flex-col items-center">
        <img className="w-64  m-4 pt-2" src={logo} alt="" />
        <div>
        <h3 className="text-3xl font-semibold text-center text-white my-4">{name}</h3>
        </div>
    </div>
    
    
<div className="flex justify-around items-center md:w-9/12 w-96 mx-auto mb-8 mt-4">

    <h4 className="text-white text-xl font-bold"> Total <span className="text-yellow-500">{total}</span> Questions</h4>
    <button className="bg-blue-600 px-4 py-2 rounded text-zinc-100 hover:bg-emerald-500 hover:text-black"> Take Test </button>

</div>
  </div>;
};

export default QuizCards;
