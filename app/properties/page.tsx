"use client";

import PropertyCard from "./components/PropertyCard";
import Pagination from "../components/Pagination";

const PropertiesPage = () => {
  const cardsData = [
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
    },
  ];

  const cards = cardsData.map((card, index) => (
    <PropertyCard key={index} info={card} />
  ));

  return (
    <div>
      <div className="grid grid-cols-4 row-auto gap-8">{cards}</div>
      <div className="flex item-center justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default PropertiesPage;
