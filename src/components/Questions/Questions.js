import React from 'react';
import Options from '../Options/Options';

const Questions = ({singleQuestion}) => {

    const {question, options, correctAnswer } = singleQuestion
    console.log(question);

  
    return (
        <div className='w-[90%] mx-auto border text-white bg-indigo-800 rounded my-6'>
           <h5 className='text-2xl font-mono m-5 font-bold'><span>Quiz No.  </span>{question}</h5>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mb-6'>
            {
                options.map(option => <Options option = {option} />)
            }
           </div>
        </div>
        
    );
};

export default Questions;