import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./TyreList.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
    <div className="container mt-4 tyre-list-wrapper">
      <div className="filter-section row mb-4">
        <div className="col-sm-6 col-md-4 col-lg-auto mb-2">
          <select className="form-select auto-width">
            <option>Filter By</option>
          </select>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-auto mb-2">
          <select className="form-select auto-width">
            <option>Most Popular</option>
          </select>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-auto mb-2">
          <select className="form-select auto-width">
            <option>Car</option>
          </select>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-auto mb-2">
          <select className="form-select auto-width">
            <option>Honda</option>
          </select>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-auto mb-2">
          <select className="form-select auto-width">
            <option>Choose Model</option>
            <option>MRF</option>
          </select>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-auto mb-2">
          <select className="form-select auto-width">
            <option>Choose Variant</option>
          </select>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-auto mb-2 d-flex align-items-center">
          <button variant="danger" className="btn bg-danger m-2 d-flex ">
            <i className=" bi bi-search"></i>
          </button>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-auto mb-2 d-flex align-items-center">
          <a href="#" className="advanced-link">
            Advanced
          </a>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center">
        {tyreData.map((tyre, index) => (
          <Card
            key={index}
            className="mb-3 me-3 tyre-card shadow-none hover:shadow-lg">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start">
                <Badge bg="warning" text="dark" className="mb-2">
                  {tyre.warranty} Year Warranty
                </Badge>
              </div>
              <img
                className="tyre-img img-fluid"
                src={tyre.imgSrc}
                alt={tyre.model}
              />
              <Card.Title className="fw-bold text-start mt-3">
                <img alt="index+1" className="brand-img" src="/apollo.jpg" />
              </Card.Title>
              <Card.Subtitle className="text-start fs-6 text-muted">
                {tyre.model}
              </Card.Subtitle>
              <Card.Text className="text-start mt-2 tyre-size">
                {tyre.size}
              </Card.Text>
              <div className="d-flex review-tyre align-items-start">
                <span className="d-flex text-start me-1">⭐ {tyre.rating}</span>
                <span className="fw-light text-muted">
                  {tyre.reviews} Reviews
                </span>
              </div>
              <Card.Text className="fw-semibold text-start fs-6">
                ₹ {tyre.price}
              </Card.Text>
              {tyre.offer && (
                <Card.Text className="text-start tyre-type text-success">
                  Offer available
                </Card.Text>
              )}
              <Card.Text className="text-start tyre-type fw-light">
                {tyre.tubeless ? "Tubeless" : "Tube"}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TyreList;
