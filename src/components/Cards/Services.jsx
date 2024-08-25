import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";
export default function DealsIn() {
  const services = [
    {
      image: "/wheel-alignment-bal.webp",
      title: "Wheel Balancing",
      link: "//www.tyreplex.com/mrf-tyres",
    },
    {
      image: "/wheel-alignment.webp",
      title: "Wheel Alignment",
      link: "//www.tyreplex.com/ceat-tyres",
    },

    // Add more tire brands as needed
  ];

  return services.map((service, index) => (
    <div className="card-services col-md-4 mb-4 mx-3" key={index}>
      <a
        href={service.link}
        title={service.title}
        className="text-decoration-none">
        <img
          src={service.image}
          className="services-img card-img-top"
          alt={service.title}
        />
        <p className="services-card-title">{service.title}</p>
        <button className=" services-card-button btn btn-secondary btn-sm bg-danger">
          Book Now
        </button>
      </a>
    </div>
  ));
}
