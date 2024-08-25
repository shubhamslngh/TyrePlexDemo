import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Images() {
    const images = [
        {
            src: "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
            alt: "gallery Img 1",
        },
        {
            src: "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
            alt: "gallery Img 2",
        },
        {
            src: "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
            alt: "gallery Img 3",
        },
        {
            src: "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
            alt: "gallery Img 4",
        },
        {
            src: "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
            alt: "gallery Img 5",
        },
    ];

    return images.map((image, index) => (
        <div className="card col-md-4 mb-4 mx-3" key={index}>
            <div className="card">
                <img src={image.src} className="card-img-top" alt={image.alt} />
            </div>
        </div>
    ));
}
