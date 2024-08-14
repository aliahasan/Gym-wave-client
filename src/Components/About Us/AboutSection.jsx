import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutSlider from "./AboutSlider";
import Button from "../Button/Button";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <div className="bg-white text-white  w-full">
      <div className="md:mt-20 mt-8 flex flex-col justify-between items-center md:flex-row  md:items-start">
        <div className="relative md:h-72 mb-10 md:mb-0">
          <div className="clipped-element w-[200px] h-[250px] md:w-[350px] md:h-[300px] lg:w-[500px] lg:h-[400px] relative overflow-hidden shadow-lg hidden md:block">
            <img
              src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-yellow-solid-color-background.jpg"
              alt="GymWave"
              className="object-cover w-full h-full"
            />
          </div>
          <h1
            className="md:absolute md:bottom-[15%] lg:bottom-[10%] text-3xl md:text-5xl lg:text-5xl bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 bg-clip-text text-transparent font-bold"
            data-aos="zoom-in"
          >
            Introduction <br />
            <span className="font-extrabold">GymWave Club</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission Section */}
          <div>
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mission"
                className="w-[380px]"
              />
              <h1 className="text-3xl text-center font-bold text-yellow-400">Mission</h1>
              <p className="text-justify leading-6 lg:px-10 text-black mt-4">
                Our main focus at GymWave Fitness is functional training, emphasizing mobility, strength, and conditioning.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div>
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Story"
                className="w-[380px]"
              />
              <h1 className="text-3xl text-center font-bold text-pink-500">Story</h1>
              <p className="text-justify leading-6 lg:px-10 text-black mt-4">
                We provide personalized health and fitness services to help individuals achieve their desired goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Section */}
      <div className="mt-12 md:mt-20">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <AboutSlider />
            <div className="bg-yellow-500 py-3 uppercase font-bold shadow-lg">
              <p className="px-4 tracking-wide text-center text-gray-900">
                🖐️ Clean + airy space = stay safe in COVID-19 pandemic
              </p>
            </div>
          </div>

          {/* Approach Section */}
          <div>
            <div className="flex flex-col items-center">
              <img
                src="/gymapproch.jpg"
                alt="Approach"
                className="w-[393px]"
              />
              <h1 className="text-3xl text-center font-bold text-indigo-400">APPROACH</h1>
              <p className="text-xl font-semibold py-1 text-pink-400 text-nowrap">
                INNOVATION + MOTIVATION = RESULTS
              </p>
              <p className="text-justify leading-6 text-black mt-4 w-5/6 mx-auto">
                We offer a hybrid gym with state-of-the-art facilities and knowledgeable staff, including personal training and group classes.
              </p>
              <div className="my-4">
                <Button text="More about us" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
