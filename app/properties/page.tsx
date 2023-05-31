"use client";

import PropertyCard from "./components/PropertyCard";

const PropertiesPage = () => {
  const cardsData = [
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
    {
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["1", "2", "3"],
    },
  ];

  const cards = cardsData.map((card, index) => (
    <PropertyCard key={index} info={card} />
  ));

  return <div className="grid grid-cols-4 row-auto gap-8">{cards}</div>;
};

export default PropertiesPage;
