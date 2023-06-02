import React from "react";
import Image from "next/image";

const FeaturedProperties = () => {
  return (
    <section className="container-lg min-h-screen">
      <div className="flex flex-col text-center">
        <h1 className="text-5xl font-serif font-bold text-secondary">
          Featured Properties
        </h1>
        <p className="font-sans  py-6  ml-32 mr-32 items-center">
          Find your dream home or showcase your property with ease on our
          intuitive real estate web app. Whether you're a homeowner, investor,
          or agent, we've got you covered.
        </p>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 grid grid-cols-3 grid-rows-2 md:-m-2">
          <div className="flex w-1/3  flex-wrap">
            <div className="w-full h-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
              />
            </div>
          </div>
          <div className="flex w-1/3 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
