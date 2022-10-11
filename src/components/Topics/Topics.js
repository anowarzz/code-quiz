import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {

const quizTopicData = useLoaderData () ;
const quizTopic = quizTopicData.data ;


console.log(quizTopic);
    return (
        <div>
            <h3>This is topics</h3>
        </div>
    );
};

export default Topics;