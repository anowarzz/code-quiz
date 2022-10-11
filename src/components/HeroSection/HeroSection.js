import Lottie from "lottie-react";
import coder from '../assets/coder.json'

const HeroSection= () => {
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
                  The quick, brown fox <br className="hidden md:block" />
                  jumps over a{' '}
                  <span className="text-blue-500">lazy dog</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>

              <div className="w-full max-w-xl xl:px-8 xl:w-9/12">
                <div className = "rounded shadow-2xl p-7 ">
                  
                  <Lottie animationData={coder} loop={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default HeroSection