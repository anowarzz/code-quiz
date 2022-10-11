import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const Topics = () => {
  const quizTopicData = useLoaderData();
  const quizTopic = quizTopicData.data;

  const { name, id, questions } = quizTopic;

  return (
    <div className="bg-zinc-800">
      <div className="py-8 w-96 mx-auto">
        <h2 className="text-5xl font semibold text-indigo-500">
          {" "}
          Quiz of {name}
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {questions.map((singleQuestion) => (
          <Questions key={singleQuestion.id} singleQuestion={singleQuestion} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
