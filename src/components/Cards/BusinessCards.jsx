import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";
import Images from "./Images";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import Reviews from "./Reviews";

const BusinessCard = ({
  name = "SHREE HEMKUNT TYRES AND SERVICES",
  address = "PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014",
  hours = "Open - Monday to Sunday - 10:00AM to 8:00PM",
  reviewsCount = 2278,
  rating = 4.9,
}) => {
  const cards = <Images />;
  const reviews = <Reviews />;
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) => index);

  return (
    <Card className="m-1 shadow-md p-1 rounded-md bg-slate-100">
      {/* Main card header */}
      <CardHeader className="flex flex-col md:items-start sm:items-center bg-black rounded-t-lg ">
        <h5 className="text-xl font-semibold text-white">{name}</h5>
        <div className="flex items-center text-sm text-green-300">
          <i className="bi bi-shield-check"></i>
          <span className="ml-1">Verified</span>
        </div>
      </CardHeader>

      {/* Nested card for business details */}
      <Card className="bg-gray-100 shadow-sm text-black w-auto mb-2 rounded-t-none rounded-b-lg">
        <CardBody>
          <p className="text-sm font-medium ">
            <i className="bi bi-geo-alt mr-1"></i> {address}
          </p>
          <p className="text-sm font-light text-gray-800">
            <i className="bi bi-clock mr-1"></i> {hours}
          </p>
          <div className=" mb-1">
            <span className="text-lg font-bold text-yellow-500">{rating}</span>
            {stars.map((_, index) => (
              <i
                key={index}
                className="bi bi-star-fill text-yellow-500 ml-1"></i>
            ))}
            <span className="text-blue-500 underline ml-2">
              {reviewsCount} Reviews
            </span>
          </div>
          <Button variant="flat" color="error" className="flex-auto bg-red-500 ">
            Get Directions
          </Button>
        </CardBody>
      </Card>

      {/* Nested card for images carousel */}

      <CustomCarousel cards={cards} className="mb-4" />

      {/* Nested card for reviews */}
      <Card className="bg-white m-1 text-black flex-auto shadow-sm place-self-start p-1 rounded-md">
          {reviewsCount} Google Reviews
      </Card>
      <CustomCarousel cards={reviews} className="mt-2" />
    </Card>
  );
};

export default BusinessCard;
