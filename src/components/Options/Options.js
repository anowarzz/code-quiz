import React from 'react';
import { Link } from 'react-router-dom';

const Options = ({option}) => {
    return (
        <div className='p-8 bg-gray-700 w-5/6'>
         
           <button>
           <input type="radio" name="Hello" id="" /> <span className='text-xl'> {option}</span>
          
           </button>
          
        </div>
    );
};

export default Options;