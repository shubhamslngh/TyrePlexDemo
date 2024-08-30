import React from "react";
import BusinessCard from "../components/Cards/BusinessCards";
import DealsIn from "../components/Cards/DealsIn";
import CustomCarousel from "../components/CustomCarousel/CustomCarousel";
import Services from "../components/Cards/Services";
import TyreList from "../components/Cards/TyreList";

export default function FrontPage() {
  const dealsInContent = <DealsIn />;
  const servicesContent = <Services />;

  return (
    <div className="p-1">
      {/* Business Card Component */}
      <BusinessCard />

      {/* Deals Section */}
      <section className="grid grid-rows-[auto,1fr] mt-1 p-1">
        <h6 className="text-black text-lg font-medium mb-2">Deals In</h6>
        <div className="overflow-hidden">
          <CustomCarousel cards={dealsInContent} />
        </div>
      </section>

      {/* Services Section */}
      <section className="grid grid-rows-[auto,1fr] mt-1 p-1">
        <h6 className="text-lg font-medium">Services</h6>
        <CustomCarousel cards={servicesContent} />
      </section>

      {/* Tyre List Section */}
      <section className="grid grid-rows-[auto,1fr] mt-1 p-1">
        <h6 className="text-lg font-medium">
          Tyres Sold by This Dealer
        </h6>
        <TyreList />
      </section>
    </div>
  );
}
