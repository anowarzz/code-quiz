import React from 'react';

const Questions = ({singleQuestion}) => {

    const {question, options, correctAnswer } = singleQuestion
    console.log(question);

  
    return (
        <div className='w-[90%] mx-auto border text-white bg-indigo-800'>

           <h5 className='text-2xl font-mono m-5'><span>Quiz No.  </span>{question}</h5>
        </div>
    );
};

export default Questions;