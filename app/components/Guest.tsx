import React from "react";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import RecentProperties from "./RecentProperties";

const Guest = () => {
  return (
    <div className="">
      <Hero />
      <FeaturedProperties />
      <RecentProperties />
      
    </div>
  );
};

export default Guest;
