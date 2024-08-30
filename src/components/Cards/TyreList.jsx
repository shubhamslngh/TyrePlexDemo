import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Select,Button, SelectSection, SelectItem } from "@nextui-org/react";
import { Card, CardBody, Badge,CardHeader, CardFooter, Image } from "@nextui-org/react";
const TyreList = () => {
  const tyreData = [
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "155/70 R13",
      price: "3,873",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },

    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "165/70 R14",
      price: "3,952",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "155/80 R13",
      price: "4,127",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "	https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "175/70 R13",
      price: "5,040",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "	https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "175/70 R13",
      price: "5,040",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "	https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "155/80 R13",
      price: "4,127",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "	https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "175/70 R13",
      price: "5,040",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "	https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "175/70 R13",
      price: "5,040",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "	https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "155/80 R13",
      price: "4,127",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "	https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "175/70 R13",
      price: "5,040",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "	https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
    {
      brand: "Apollo",
      model: "AMAZER 4G LIFE",
      size: "175/70 R13",
      price: "5,040",
      reviews: 320,
      rating: 4,
      offer: true,
      tubeless: true,
      warranty: 5,
      imgSrc:
        "	https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&amp;tr=w-250,q-60",
    },
  ];

  return (
    <div className="grid grid-cols-1 mt-4 tyre-list-wrapper">
      <div className="filter-section place-self-center flex flex-wrap mb-4 gap-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/2">
          <Select placeholder="Filter By" className="w-full">
            <SelectItem>Size</SelectItem>
            <SelectItem>Color</SelectItem>
            <SelectItem>Range</SelectItem>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Select placeholder="Most Popular" className="w-full">
            <SelectItem>Most Popular</SelectItem>
            <SelectItem>Most Bought</SelectItem>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Select placeholder="Type" className="w-full text-black">
            <SelectItem>Car</SelectItem>
            <SelectItem>Bike</SelectItem>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Select placeholder="Brand" className="w-full">
            <SelectItem>Honda</SelectItem>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Select placeholder="Choose Model" className="w-full">
            <SelectItem>Apollo</SelectItem>
            <SelectItem>MRF</SelectItem>
          </Select>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Select placeholder="Choose Variant" className="w-full">
            <SelectItem>Spyder</SelectItem>
            <SelectItem>Glue</SelectItem>
          </Select>
        </div>
        <div className="w-full justify-center sm:w-1/2 md:w-1/3 lg:w-auto mb-2 flex items-center gap-2">
          <Button className="bg-red-600 text-white p-2 flex items-center justify-center">
            <i className="bi bi-search"></i>
            <span className="hidden md:inline">Search</span>
          </Button>
          <Button className="bg-transparent">
            <a href="#" className="text-blue-600">
              Advanced
            </a>
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2   grid-cols-2 gap-2 overflow-hidden">
        {tyreData.map((tyre, index) => (
          <Card
            key={index}
            className="relative hover:scale-[99%] hover:shadow-md hover:shadow-purple-500 overflow-hidden border border-slate-300 h-auto w-full sm:w-80 mb-1">
            <CardBody className="overflow-hidden">
              <div className="absolute top-0  right-0 p-1 rounded-sm text-xs bg-yellow-500 text-gray-800">
                {tyre.warranty} Year Warranty
              </div>
              <img
                className="absolute right-[-3rem] scale-125 bottom-[0rem] w-44 sm:right-[-3rem]"
                src={tyre.imgSrc}
                alt={tyre.model}
                width="100%"
                height="auto"
              />
              <CardHeader className="font-bold text-start mt-3">
                <img
                  alt="index+1"
                  className=" h-auto w-auto"
                  src="/apollo.jpg"
                />
              </CardHeader>
              <CardBody className="text-sm text-gray-500">
                <p className="font-bold text-start">{tyre.model}</p>
              </CardBody>
              <p className="text-start text-xs">{tyre.size}</p>
              <div className="flex items-start text-xs ">
                <span className="flex items-center mr-1">⭐ {tyre.rating}</span>
                <span className="font-light text-gray-500">
                  {tyre.reviews} Reviews
                </span>
              </div>
              <p className="font-semibold text-start text-sm">₹ {tyre.price}</p>
              {tyre.offer && (
                <p className="text-start text-xs text-green-500">
                  Offer available
                </p>
              )}
              <p className="text-start text-xs text-gray-500">
                {tyre.tubeless ? "Tubeless" : "Tube"}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TyreList;
