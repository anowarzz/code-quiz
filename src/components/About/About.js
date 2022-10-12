import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-900 pt-8">
      <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
        <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl mb-8">
          Contact Us
        </h1>

        <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <div className="flex flex-col w-full divide-y divide-gray-700">
            <Link
              to="/about"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
            >
              Report
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
            >
              Support
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
            >
              Account
            </Link>
          </div>
          <div className="flex flex-col w-full divide-y divide-gray-700">
            <Link
              to="/about"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
            >
              Contact us
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
            >
              Terms And Conditions
            </Link>
          </div>
          <div className="hidden w-full divide-y sm:flex-col sm:flex divide-gray-700">
            <Link
              to="/about"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
            >
              Community
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
            >
              Privacy
            </Link>
            <Link
              to="/about"
              className="flex items-center justify-center p-4 sm:py-8 lg:py-12"
            >
              Developers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
