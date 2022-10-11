import React from 'react';

const Options = ({option}) => {
    return (
        <div className='p-8 bg-gray-700 w-5/6'>
            <input type="radio" name="Hello" id="" /> <span className='text-xl'> {option}</span>
        </div>
    );
};

export default Options;