import React from "react";
import Container from "../../Components/Container/Container";
import Banner from "./Banner/Banner";
import ClassSection from "../../Components/ClassSection/ClassSection";
import AboutSection from "../../Components/About Us/AboutSection";
import Success from "../../Components/Success/Success";
import Blogs from "./Blogs/Blogs";
import NewsLetter from "./NewsLetter/NewsLetter";
import Team from "./Team";
import Features from "./Features";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <div className="bg-[#191919]">
        <Container>
          <ClassSection></ClassSection>
          {/* classes cart to do */}
        </Container>
      </div>
      <Container>
        <AboutSection></AboutSection>
      </Container>
      <div className="lg:mt-20 mt-10">
        <img
          src="/gyminspiration.jpg"
          alt=""
          className=" w-full max-h-[670px] object-cover"
        />
      </div>
      <Container>
        <div className="my-10 md:my-16 lg:my-20">
          <Success></Success>
        </div>
        <section>
          <Blogs></Blogs>
          <Team></Team>
          <NewsLetter></NewsLetter>
        </section>
      </Container>
    </div>
  );
};

export default Home;
