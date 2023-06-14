"use client"

import { IconMapPinFilled, IconBed, IconBath } from "@tabler/icons-react";
import { IconStar } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import Lightbox from "./LightBox";


const PropertyDetails = ({
  info,
}: {
  info: {
    id: number;
    property: string;
    address: string;
    description: string;
    bedrooms: number;
    shower: number;
    price: number;
    images: Array<string>;
  };
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };
  return (
    <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">{info.property}</h1>
            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p>
          </div>
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img src={info.images[1]} alt="" className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
            <img src={info.images[2]} alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
            <div className="relative hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32">
              <img src={info.images[3]} alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
              <button onClick={openLightbox} className="absolute inset-0 flex items-center justify-center bg-opacity-75 bg-gray-500 text-white text-lg font-bold hover:bg-slate-300 hover:bg-opacity-50 rounded-lg">
                 Show More
              </button>
              <Lightbox isOpen={isLightboxOpen} onClose={closeLightbox}>
                <div className="snap-x snap-mandatory grid grid-flow-col auto-cols-max gap-4">
                  <div className="snap-always snap-center">
                    <img src={info.images[0]} />
                  </div>
                  <div className="snap-always snap-center">
                    <img src={info.images[1]} />
                  </div>
                  <div className="snap-always snap-center">
                    <img src={info.images[2]} />
                  </div>
                  <div className="snap-always snap-center">
                    <img src={info.images[3]} />
                  </div>
                </div>
              </Lightbox>
            </div>
          </div>
          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt className="sr-only">Reviews</dt>
            <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
              <IconStar size={20} className="mr-1 stroke-current dark:stroke-indigo-500"/>
              <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center">
              <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <IconMapPinFilled size={20} className="mr-1 text-slate-400 dark:text-slate-500" />
              {info.address}
            </dd>
          </dl>
          <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            <Button>Inquire</Button>
          </div>
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            {info.description}
          </p>
        </div>
      </div>
  )
};

export default PropertyDetails;
