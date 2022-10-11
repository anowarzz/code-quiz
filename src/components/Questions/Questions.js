import React from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({singleQuestion, idx}) => {

    const {question, options, correctAnswer} = singleQuestion
    let qIndex = idx + 1 ;
 
    
    const handleAnswer = (ans) => {
    
        if(ans === correctAnswer){
            toast.success("Correct Answer", {autoClose : 500})
        }
        else{
            toast.error("Wrong Answer", {autoClose : 500})
        }
          
        }

    return (
        <div className='w-[90%] mx-auto border text-white bg-indigo-800 rounded my-6'>
           <h5 className='text-2xl font-mono m-5 font-bold'><span>Quiz No- <span className='text-red-500 font-bold'>{qIndex}</span>  </span>{question}</h5>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-[90%] mx-auto mb-6'>
            {
                options.map((option, idx) => <Options option = {option} key ={idx} correctAnswer = {correctAnswer} handleAnswer = {handleAnswer} />)
            }
           </div>
           <ToastContainer position="top-center"
 /> 
        </div>
        
        
    );
};

export default Questions;