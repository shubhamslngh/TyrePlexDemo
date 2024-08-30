import React from "react";

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

  return (
      reviews.map((review, index) => (
        <div
          className="bg-white col-6 ml-1 rounded-lg shadow-md p-2 flex flex-col gap-2"
          key={index}>
          <div className="flex items-start">
            <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
              {review.reviewer.charAt(0)}
            </div>
            <div className="ml-3 flex-1">
              <h6 className="text-lg font-semibold">{review.reviewer}</h6>
              <small className="text-gray-500">{review.date}</small>
            </div>
          </div>
          <p className="text-gray-700">{truncateReview(review.review, 150)}</p>
        </div>
      ))
  );
}
