import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BusinessCards.css";
import Images from "./Images";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import Reviews from "./Reviews";
import "bootstrap-icons/font/bootstrap-icons.css";

const BusinessCard = ({
  name = "SHREE HEMKUNT TYRES AND SERVICES",
  address = "PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014",
  hours = "Open - Monday   to   Sunday - 10:00AM to 8:00PM",
  reviewsCount = 2278,
  rating = 4.9,
}) => {
  const cards = <Images />;
  const reviews = <Reviews />;
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) => index);

  console.log("cards", Images);
  return (
    <div className="container mt-3 mb-4  border shadow-sm">
      <div className="row card-body ">
        <div className="row justify-content-start ">
          {/* Business Details */}

          <div className="col-md-5 justify-content-start">
            <div className="m-2 justify-content-between title d-flex">
              <h5 className="card-title text-start">{name}</h5>
              <i className="bi text-success bi-shield-check"></i>
              <p className="badge fw-bolder text-success ">Verified</p>
            </div>
            <div className="d-flex mb-2">
              <p className="badge bg-success me-3 mb-0">{rating}</p>
              {stars.map((index) => (
                <i
                  key={index}
                  style={{ color: "gold", padding: "2px" }}
                  className="bi mx-2 bi-star-fill"></i>
              ))}
              <p className="subtitle text-decoration-underline mb-0">
                {reviewsCount} Reviews
              </p>
            </div>
            <p
              style={{ fontSize: "15px" }}
              className="col-12 text-start fw-semibold d-flex gap-3 subtitle">
              <i className="bi bi-geo-alt"></i> {address}
            </p>
            <p
              style={{ fontSize: "15px" }}
              className="d-flex gap-3 fw-light card-text">
              <i className="bi bi-clock"></i> {hours}
            </p>

            {/* Get Directions Button */}
            <button className="btn btn-outline-danger d-flex w-20  mb-1">
              Get Directions
            </button>
          </div>

          {/* Images Carousel */}
          <div className="col-md-7">
            <CustomCarousel cards={cards} />
          </div>
        </div>

        {/* Rating and Reviews */}
        <div className="mt-4">
          <div className="d-flex justify-content-between">
            <p className=" fw-semibold fs-6">{reviewsCount} Google Reviews</p>
          </div>

          {/* Reviews */}
          <div className="mt-0">
            <CustomCarousel cards={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
