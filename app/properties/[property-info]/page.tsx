"use client";

import React from "react";
import PropertyDetails from "./Components/PropertyDetails";
import SimilarProperties from "./Components/SimilarProperties";

const PropertyInfoPage = () => {
  const propertyDetails = [
    {
      id: 1,
      property: "The Sapphire Bloc - South Tower",
      address: "Malaybalay City",
      description: "1 Bedroom Condo for sale in Maple at Verdant Towers, Maybunga, Metro Manila Be the first to live in the Heart of Metro Manila:Maple at Ortigas East (Formerly Frontera Verde/Tiendesitas) by Ortigas LandA 50 Billion Redeveloped Plan by Ortigas & Company in partnership with Ayala Land. This is the right time to invest before prices go much higher next ear.Be the First!Please call or message me anytime. I'll be more than happy to assist you.Disclaimer: Prices and availability might change without prior notice.",
      bedrooms: 5,
      shower: 3,
      price: 45000,
      images: ["https://source.unsplash.com/XcVm8mn7NUM",
                "https://source.unsplash.com/rYZkQdz2t9o",
                "https://source.unsplash.com/jUQclDhyIAI",
                "https://source.unsplash.com/mR1CIDduGLc",
      ],
    },
  ];

  const property = propertyDetails.map((info, index) => (
    <PropertyDetails key={index} info={info} />
  ));

  return (
    <div>
      {property}
      
      <SimilarProperties />
    </div>
  );
};

export default PropertyInfoPage;
