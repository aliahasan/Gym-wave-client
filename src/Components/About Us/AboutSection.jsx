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
    <div>
      <div className="md:mt-20 mt-8 flex flex-col justify-between items-center md:flex-row  md:items-start">
        <div className="relative h-72 ">
          <div className="clipped-element w-[200px ] h-[250px] md:w-[350px] md:h-[300px] lg:w-[500px] lg:h-[400px] relative md:animate-ping">
            <img
              src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-yellow-solid-color-background.jpg"
              alt=""
            />
          </div>
          <h1
            className="absolute bottom-[30%] md:bottom-[15%] lg:bottom-[10%] text-3xl md:text-5xl  lg:text-5xl"
            data-aos="zoom-in"
          >
            Introduction <br />
            <span className="font-bold text-[#191919]">GymWave Club</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 ">
          <div>
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-[380px]"
              />
              <div className=" text-center">
                <h1 className="text-3xl text-center py-2">Mission</h1>
                <p className="text-justify  leading-6 lg:px-10">
                  Our main focus at Gym Wave Fitness is functional training
                  because of the proven benefits. With an emphasis on mobility,
                  strength, and conditioning, the benefits of functional
                  training differ from other workouts because of the way it
                  targets your body.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  className="w-[380px] flex  justify-center"
                />
              </div>
              <div className=" text-center">
                <h1 className="text-3xl text-center py-2">Story</h1>
                <p className="text-justify md:text-pretty leading-6 lg:px-10">
                  Our purpose is to pass on empowering knowledge and training
                  guidance in order to have a positive impact on the health and
                  fitness of everyone we work with. To provide a personalised
                  health and fitness service that unlocks every individual’s
                  true potential so they can achieve their desired goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-between flex-col md:flex-row mt-12  md:mt-20 gap-5 md:gap-y-0">
          <div className="md:w-2/3 ">
            <AboutSlider></AboutSlider>
            <div className="bg-[#D6FB00] py-3 uppercase font-bold">
              <p className="px-4 tracking-wide text-center">
                {" "}
                🖐️ Clean + airy space = stay safe in covid 19 pandemic
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center">
              <div>
                <img
                  src="/gymapproch.jpg"
                  alt=""
                  className="w-[393px] flex  justify-center"
                />
              </div>
              <div className="text-center">
                <h1 className="text-3xl text-center py-2">APPROACH</h1>
                <p className="tex-xl font-semibold py-1">
                  INOVATION + MOTIVATION = RESULTS
                </p>
                <p className="text-justify md:text-pretty w-5/6 mx-auto leading-6 ">
                  We are a hybrid gym and training facility. We have clean,
                  state of the art facilities with the most knowledgeable staff
                  and cutting-edge training methods. We offer open gym, team
                  training, group classes, boxing, cycle and personal training
                </p>
              <div className="md:ml-8 lg:ml-10 my-4">
              <Button text="More about us"></Button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
