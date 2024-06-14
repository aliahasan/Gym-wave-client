import React, { useContext, useEffect, useState } from "react";
import { BookingContext } from "../../Provider/BookingProvider/BookingProvider";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Container from "../../Components/Container/Container";
import "./Booking.css";
import { axiosSecure } from "../../Hooks/useAxiosSecure";

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

  const handleJoinNowClick = (packageName) => {
    const selectedPackage = packages[packageName.toLowerCase()];
    const price =
      packageName === "silver" ? 150 : packageName === "gold" ? 250 : 350;
    setBookingData({
      ...bookingData,
      buyerInfo: {
        buyerName: user?.displayName,
        buyerEmail: user?.email,
        buyerPhoto: user?.photoURL,
      },
      price,
      packageName: packageName,
      classes: selectedPackage,
    });
    navigate("/payment");
    console.log(packageName);
  };

  return (
    <div className="bg-[#D6FB00]">
      <Container>
        <div className="">
          <div className="text-center text-6xl font-bold py-10">
            <p>Join Today</p>
          </div>
        </div>
        <div className=" py-10">
          <div className="plans flex flex-col gap-4 md:flex-row justify-center gap-x-10 items-center">
            <div className="plan">
              <div className="px-4">
                <h3 className="plan-title">Silver Pass</h3>
                <p className="text-3xl">$ 150</p>
                <p>Includes the following classes:</p>

                <ul>
                  {packages?.silver?.map((cls, index) => (
                    <div key={index}>
                      <div>
                        <ul className="border">
                          <li> {cls.name}</li>
                          <li>category : {cls.category}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </ul>
                <button
                  className="bg-gray-300 px-3 py-2 w-full my-2 "
                  onClick={() => handleJoinNowClick("silver")}
                >
                  Join Now
                </button>
              </div>
            </div>
            <div className="plan">
              <div className="px-4">
                <h3>Gold Pass</h3>
                <p className="text-3xl">$ 250</p>
                <p>Includes the following classes:</p>
                <p>you will get </p>
                <ul>
                  {packages?.gold?.map((cls, index) => (
                    <div key={index}>
                      <div>
                        <ul className="border ">
                          <li> {cls.name}</li>
                          <li>category : {cls.category}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </ul>
                <button
                  className="bg-gray-300 px-3 py-2 w-full my-2 "
                  onClick={() => handleJoinNowClick("gold")}
                >
                  Join Now
                </button>
              </div>
            </div>
            <div className="plan">
              <div className="px-4">
                <h3>Diamond Pass</h3>
                <p className="text-3xl">$ 350</p>
                <p>Includes the following classes</p>

                <ul>
                  {packages?.diamond?.map((cls, index) => (
                    <div key={index}>
                      <div>
                        <ul className="border ">
                          <li> {cls.name}</li>
                          <li>category : {cls.category}</li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </ul>
                <p>And the following facilities:</p>
                <ul>
                  <li> you will get many more exiting facilities</li>
                </ul>
                <div className="text-center">
                  <button
                    className="bg-gray-300 px-3 py-2 w-full my-2 "
                    onClick={() => handleJoinNowClick("diamond")}
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Booking;
