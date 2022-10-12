import React from 'react';


const Chart = ({quiz}) => {


let data = quiz

    return (
        <div>
              <p>{quiz.name}</p>
              <p>{quiz.total}</p>

        </div>
    );
};

export default Chart;