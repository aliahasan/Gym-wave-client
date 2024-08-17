import React, { useContext, useEffect, useState } from "react";
import { BookingContext } from "../../Provider/BookingProvider/BookingProvider";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import "./Booking.css";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Card from "../../reusable/Card";
import Benefit from "./Benefit";

const Booking = () => {
  const { bookingData, setBookingData } = useContext(BookingContext);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [packages, setPackages] = useState({
    silver: [],
    gold: [],
    diamond: [],
  });

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axiosSecure.get("/packages");
        setPackages(response.data);
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };

    fetchPackages();
  }, []);

  const handleJoin = (packageName) => {
    const selectedPackage = packages[packageName.toLowerCase()];
    const price =
      packageName === "silver" ? 15 : packageName === "gold" ? 120 : 350;
    setBookingData({
      ...bookingData,
      buyer: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
      price,
      packageName: packageName,
      classes: selectedPackage,
    });
    navigate("/payment");
  };

  return (
    <>
      <h1 className="text-center text-6xl uppercase text-black py-10 font-semibold">
        Membership
      </h1>

      <div className="bg-[#191919] py-10 ">
        <div className="flex items-center justify-center pb-10  px-2 text-center  md:w-1/2 mx-auto">
          <p className="text-[20px] text-white">
            At GymWave ,membership not only gives you access of our clean and
            spacious gyms , it connects you with knowledgeable coaches and an
            uplifting community inside our gyms, at home and anywhere . We also
            make it easy to include friends and family , for extra inspiration
            on your journey to results{" "}
          </p>
        </div>
        <div>
          <h1 className="uppercase text-4xl text-white text-center pb-10">
            More than a <br />
            <span>gym membership</span>
          </h1>
        </div>
        <div className="flex items-center justify-center space-y-20 mb-10 ">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                handleJoin={handleJoin}
                type={"silver"}
                title={"One day Pass"}
                price={15}
              />
              <Card
                handleJoin={handleJoin}
                type={"gold"}
                title={"Monthly Pass"}
                price={120}
              />
              <Card
                handleJoin={handleJoin}
                type={"diamond"}
                title={"Yearly Pass"}
                price={350}
              />
            </div>
          </Container>
        </div>
      </div>
      <div className="my-10 md:my-20  container mx-auto px-10">
        <Benefit></Benefit>
      </div>
    </>
  );
};

export default Booking;
