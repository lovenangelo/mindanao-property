import React from "react";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import RecentProperties from "./RecentProperties";
import Newsletter from "./Newsletter";

const Guest = () => {
  return (
    <div>
      <Hero />
      <FeaturedProperties />
      {/* <RecentProperties /> */}
      <Newsletter />
    </div>
  );
};

export default Guest;
