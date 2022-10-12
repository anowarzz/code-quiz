import React from 'react';

const Blog = () => {
    return (
        <div className='bg-zinc-700 h-full pb-12'>
            
        <h1 className='text-4xl font-bold text-center pt-10 text-green-400 hover:translate-x-1 hover:transform-x-1'>Basic Concepts Of React Router</h1>


        <div className='mt-16 bg-gray-300 rounded font-semibold w-[80%] mx-auto p-6'>
            <h3 className="text-3xl p-2 ">
                1. What Is The Purpose Of React Router ?
            </h3>

            <p className='mt-6 text-lg'>
            React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.
            </p>
        </div>


        <div className='mt-16 bg-gray-300 rounded font-semibold w-[80%] mx-auto p-6'>
            <h3 className="text-3xl p-2 ">
                2. How Does Context API Works ?
            </h3>

            <p className='mt-6 text-lg'>
            The Context API can be used to share data with multiple components, without having to pass data through props manually.
            It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.It can be used to solve the same problems as Redux does, but it doesn’t provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases
            </p>
        </div>

        <div className='mt-16 bg-gray-300 rounded font-semibold w-[80%] mx-auto p-6'>
            <h3 className="text-3xl p-2 ">
                3. What Is UseRef Hook ?
            </h3>

            <p className='mt-6 text-lg'>
            The Context API can be used to share data with multiple components, without having to pass data through props manually.
            It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.It can be used to solve the same problems as Redux does, but it doesn’t provide a strict way of state manipulation to ensure predictable behavior. Despite its low-level nature, it might be the perfect solution in some cases
            </p>
        </div>


        </div>
    );
};

export default Blog;