import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Topics = () => {
  const quizTopicData = useLoaderData();
  const quizTopic = quizTopicData.data;

  console.log(quizTopic);
  
  const { name, id, questions } = quizTopic;

  return (
    <div className="bg-zinc-800">
      <div className="pt-8 mb-16 mx-auto">
        <h2 className="text-5xl font semibold text-indigo-500 text-center">
          Quiz of <span className="text-yellow-600">{name}</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8 w-[90%] mx-auto">
        {questions.map((singleQuestion, idx) => (
          <Questions
            key={singleQuestion.id}
            singleQuestion={singleQuestion}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Topics;
