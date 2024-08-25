import React from 'react'
import BusinessCard from '../components/Cards/BusinessCards'
import DealsIn from '../components/Cards/DealsIn'
import "bootstrap/dist/css/bootstrap.min.css";
import CustomCarousel from '../components/CustomCarousel/CustomCarousel';
import Services from '../components/Cards/Services';
export default function FrontPage() {
  const cards = <DealsIn />
  const services = <Services />;
  
  return (
    <div>
      <BusinessCard />
      <div className="container  mt-3 mb-4  border shadow-sm">
        <h6 className='p-2 fw-semibold text-start '>Deals In</h6>
        <CustomCarousel cards={cards} />
      </div>
      <div className="container mt-3 mb-4 justify-content-start border shadow-sm">
        <h6 className='p-2 fw-semibold text-start'>Services</h6>
        <CustomCarousel cards={services} />
      </div>
    </div>
  );
}
