import PropertyCard from "./components/PropertyCard";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Sort from "./components/Sort";
import { Suspense } from "react";
import Loading from "./loading";

const PropertiesPage = () => {
  const cardsData = [
    {
      id: 1,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 2,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/rYZkQdz2t9o"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 3,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/jUQclDhyIAI"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 4,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/mR1CIDduGLc"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 5,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 6,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 7,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 8,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 9,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 10,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 11,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
      bedroom: 1,
      shower: 1,
    },
    {
      id: 12,
      title: "House Malibu",
      address: "Malaybalay City",
      ratings: 5,
      images: ["https://source.unsplash.com/XcVm8mn7NUM"],
      bedroom: 1,
      shower: 1,
    },
  ];

  const cards = cardsData.map((card, index) => (
    <PropertyCard key={index} info={card} />
  ));

  return (
    <div className="relative px-4 lg:px-8 space-y-8 py-8 subpixel-antialiased">
      <Sort />
      <hr />
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 row-auto gap-8 my-4 sm:my-8 lg:my-12">{cards}</div>
      <div className="flex item-center justify-center">
        <Suspense fallback={<Loading />}>
          <Pagination />
        </Suspense>
      </div>
      <Search canBeInvisible={true} />
  </div>
  );
};

export default PropertiesPage;
