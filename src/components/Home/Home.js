import React from "react";
import { useLoaderData } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import QuizCards from "../QuizCards/QuizCards";

const Home = () => {
  const quizCardsData = useLoaderData();
  const quizCards = quizCardsData.data;

  return (
    <div className="bg-zinc-800 pb-10">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto mt-16 w-9/12 lg:w-3/5">
        {quizCards.map((quizNameCard) => (
          <QuizCards key={quizNameCard.id} quizNameCard={quizNameCard} />
        ))}
      </div>
    </div>
  );
};

export default Home;
