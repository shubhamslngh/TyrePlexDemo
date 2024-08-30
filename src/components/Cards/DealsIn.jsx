import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardFooter, Button } from "@nextui-org/react";

export default function DealsIn() {
  const deals = [
    {
      image: "/mrf.jpg",
      title: "MRF",
      link: "//www.tyreplex.com/mrf-tyres",
    },
    {
      image: "/ceat.jpg",
      title: "CEAT",
      link: "//www.tyreplex.com/ceat-tyres",
    },
    {
      image: "/goodyear.png",
      title: "Goodyear",
      link: "//www.tyreplex.com/goodyear-tyres",
    },
    {
      image: "/apollo.jpg",
      title: "Apollo",
      link: "//www.tyreplex.com/apollo-tyres",
    },
    {
      image: "/ceat.jpg",
      title: "CEAT",
      link: "//www.tyreplex.com/ceat-tyres",
    },
    {
      image: "/goodyear.png",
      title: "Goodyear",
      link: "//www.tyreplex.com/goodyear-tyres",
    },
    {
      image: "/apollo.jpg",
      title: "Apollo",
      link: "//www.tyreplex.com/apollo-tyres",
    },
    // Add more tire brands as needed
  ];

  return deals.map((deal, index) => (
    <div className="w-full" key={index}>
      <Card
        isFooterBlurred
        radius="lg"
        className="w-full mx-3 content-center object-fill border-none  hover:shadow-md hover:scale-[98%] hover:shadow-gray-500">
        <img
          alt={index}
          className="w-[10rem] h-[8rem] place-self-center object-scale-down"
          src={deal.image}
        />
        <CardFooter className="justify-center bg-black h-[3rem]">
          {/* <p className="text-wrap text-black/80">{deal.title}</p> */}
          <Button
            className="text-tiny text-white bg-transparent"
            variant="flat"
            color="secondary"
            radius="xs"
            size="xs">
            {deal.title}
          </Button>
        </CardFooter>
      </Card>
    </div>
  ));
}
