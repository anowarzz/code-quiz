import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {

    const quizDataList = useLoaderData();

    console.log(quizDataList);
  

    return (
        <div>
            <h3>This is statistics</h3>
        </div>
    );
};

export default Statistics;