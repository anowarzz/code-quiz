import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
} from "recharts";

const Statistics = () => {
  const quizData = useLoaderData();
  const quiz = quizData.data;

  return (
    <div className="bg-gray-100 h-auto">
      <div className="py-12 text-center">
        <h3 className="text-3xl font-bold">
          Total Number Of Question Per Topic{" "}
        </h3>
      </div>

      <div className="mx-auto flex justify-center items-center pb-32">
        <ResponsiveContainer width="80%" height={400}>
          <BarChart width={600} height={300} data={quiz}>
            <XAxis className="text-blue-500" dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
            <Legend
              width={100}
              wrapperStyle={{
                top: 40,
                right: 20,
                backgroundColor: "#f5f5f5",
                border: "1px solid #d5d5d5",
                borderRadius: 3,
                lineHeight: "40px",
              }}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="total" fill="#8884d8" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
