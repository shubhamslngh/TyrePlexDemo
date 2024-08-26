import React from "react";
import "./Reviews.css";

export default function Reviews() {
  const reviews = [
    {
      reviewer: "Md Nasir",
      date: "1 day ago",
      review: `Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service. 
      We were delighted with your courteous, prompt, and professional service. 
      We would plan to reuse your services and recommend these to friends and family. 
      You came to us as a recommendation and this proved accurate.`,
    },
    {
      reviewer: "Rohit Bhati",
      date: "2 days ago",
      review: `Went for Tyre change. Ultimate service by shoppe boys. 
      Owner behavior very cool. Guide as per your budget. Highly recommend.`,
    },
    {
      reviewer: "Pradeep Kumar",
      date: "2 days ago",
      review: `Best tyre shop in Indirapuram. Good dealing with customer. 
      All types tyre available here. Price also responsible. Overall good experience.`,
    },
    {
      reviewer: "Pardeep Kumar",
      date: "2 days ago",
      review: `Best shoppe in Indirapuram. Good customer service. 
      After sale service amazing. Overall nice experience.`,
    },
    {
      reviewer: "Surjit Kumar",
      date: "3 days ago",
      review: `Genuine and Authorized Tyre shop in Indirapuram having latest manufactured stock. 
      Well equipped workshop with professional staff. I changed my car Tyre there, highly satisfied.`,
    },
  ];

  // Function to truncate review text if it's too long
  const truncateReview = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return reviews.map((review, index) => (
    <div className="card col-5 col-md-4 col-xs-1 mb-4 mx-3" key={index}>
      <div className="reviews-card-body">
        <div className="d-flex align-items-center m-2">
          <div className="profile-icon bg-primary  p-2 text-white rounded-circle d-flex align-items-center justify-content-center me-2">
            {review.reviewer.charAt(0)}
          </div>
          <div className="d-flex justify-content-between w-100">
            <h6 className="mb-1 card-title">{review.reviewer}</h6>
            <small>{review.date}</small>
          </div>
        </div>
        <p className="mb-1 card-text">{truncateReview(review.review, 150)}</p>
      </div>
    </div>
  ));
}
