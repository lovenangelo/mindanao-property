import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import Search from "./Search";

const FeaturedProperties = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="container-lg mt-8 mx-8 xl:mx-32 space-y-8">
      {!desktop && (
        <div className="flex items-center justify-center">
          <Search canBeInvisible={false} />
        </div>
      )}
      <div className="flex flex-col text-center">
        <h1 className="text-5xl font-serif font-bold text-secondary">
          Featured Properties
        </h1>
        <p className="font-sans py-6 items-center">
          Find your dream home or showcase your property with ease on our
          intuitive real estate web app. Whether you're a homeowner, investor,
          or agent, we've got you covered.
        </p>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="grid grid-cols-3 h-full grid-rows-2 md:-m-2">
          <div className="row-span-2">
            <div className="w-full h-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="w-full p-1 filter brightness-50">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div className="absolute p-12">
              <div className="flex flex-col items-center justify-center space-y-2">
                <h2 className="text-white text-2xl font-serif">New Property</h2>
                <p className="text-white font-sans text-center">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet
                </p>
                <Link
                  href={"/properties"}
                  className="btn btn-primary w-14 h-14 text-accent rounded-full"
                >
                  <IconArrowRight className="h-12 w-8" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
          </div>
          <div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
          </div>
          <div>
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
