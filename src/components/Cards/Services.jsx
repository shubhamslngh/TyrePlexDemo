import React from "react";
import { Card,CardFooter, Button } from "@nextui-org/react";

export default function Services() {
  const services = [
    {
      image: "/wheel-alignment-bal.webp",
      title: "Wheel Balancing",
      link: "//www.tyreplex.com/wheel-balancing",
    },
    {
      image: "/wheel-alignment.webp",
      title: "Wheel Alignment",
      link: "//www.tyreplex.com/wheel-alignment",
    },
    // Add more services as needed
  ];

  return services.map((service, index) => (
    <div className="m-2 grid w-auto" key={index}>
      <Card isFooterBlurred radius="lg" className="w-full hover:shadow-md hover:scale-[98%] hover:shadow-gray-500 ">
        <img
          alt={index}
          className="w-[12rem] h-[8rem] object-fit"
          src={service.image}
        />
        <CardFooter className="justify-center bg-black w-[12rem] h-[1rem]">
          {/* <p className="text-wrap text-black/80">{service.title}</p> */}
          <Button
            className="text-tiny text-white bg-transparent"
            variant="flat"
            color="secondary"
            radius="xs"
            size="xs">
            {service.title}
          </Button>
        </CardFooter>
      </Card>
    </div>
  ));
}
