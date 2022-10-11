import React from 'react';
import { Link } from 'react-router-dom';

const Options = ({option, correctAnswer, handleAnswer}) => {

    return (
        <div className='p-8 bg-gray-700 w-5/6'>
      
             <label htmlFor={option} className='text-xl radio radio-primary px-2 hover:bg-green-400 rounded py-1 hover:text-black'>
             <input  onClick={() => handleAnswer(option)} type="radio" name="option" id={option} /> <span className='pl-2'>{option}</span>
             </label>
             

        </div>
    );
};

export default Options;
