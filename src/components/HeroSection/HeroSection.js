import Lottie from "lottie-react";
import coder from "../assets/coder.json";

const HeroSection = () => {
  return (
    <div className="relative z-0">
      <img
        src="https://i.ibb.co/b2W2dNB/jannis-brandt-4m-Ha-SX8zv-JI-unsplash.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between md:justify-center xl:flex-row">
            <div className="text-center w-full max-w-xl mb-8 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                It's Time To{" "}
                <span className="text-yellow-500"> Take A Test </span>
                <br className="hidden md:block" />
                Of Your <span className="text-blue-500"> Coding Skills</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                Quizzes are always a interesting way to improve your knowledge .
                Here you can participate in programming related quizzes and
                improve your ability .
              </p>
            </div>

            <div className="w-full max-w-xl xl:px-8 xl:w-9/12">
              <div className="rounded shadow-2xl p-7 ">
                <Lottie animationData={coder} loop={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
