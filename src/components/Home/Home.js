import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {

const quizCards = useLoaderData () ;

console.log(quizCards);

    return (
        <div>
            <HeroSection /> 
            {
                // quizCards.map(singleCard => console.log(singleCard))
            }
        </div>
    );
};

export default Home;