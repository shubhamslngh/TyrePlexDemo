import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DealsIn.css"
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
    <div
      className="col-5 col-xs-1 col-sm-2 card-deals col-md-4 mb-4 mx-3"
      key={index}>
      <a href={deal.link} title={deal.title} className="text-decoration-none">
        <img
          src={deal.image}
          className="deals-img card-img-top"
          alt={deal.title}
        />
        <div className="deals-card-body">
          <p className="deals-card-title">{deal.title}</p>
        </div>
      </a>
    </div>
  ));
}
