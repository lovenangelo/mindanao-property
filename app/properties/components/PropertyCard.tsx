"use client"

import { IconStarFilled, IconBath, IconBed } from "@tabler/icons-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import Link from "next/link";

const PropertyCard = ({
  info,
}: {
  info: {
    id: number;
    title: string;
    ratings: number;
    address: string;
    images: Array<string>;
    bedroom: number;
    shower: number;
  };
}) => {
  return (
    <div>
        <Card className="drop-shadow-lg">
          <CardHeader className="h-full w-full row-span-2 overflow-hidden m-0 p-0">
            <img
              className="row-span-2 object-cover rounded-md"
              src={info.images[0]}
              alt="Picture of the author"
              />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col p-4 h-full w-full justify-around overflow-hidden">
              <div>
                <div className="flex justify-between">
                  <h1 className="text-base font-semibold">{info.title}</h1>
                  <div className="flex">
                    <IconStarFilled
                      className=" fill-[#FEA621]"
                      color="red"
                      size={15}
                    />  
                    <IconStarFilled fill="FEA621" size={15} />
                    <IconStarFilled fill="FEA621" size={15} />
                    <IconStarFilled fill="FEA621" size={15} />
                    <IconStarFilled fill="FEA621" size={15} />
                  </div>
                </div>
                <p className="text-sm">{info.address}</p>

                <div className="flex gap-3 py-1">
                  <h4 className="flex pr-2 items-center">
                    <IconBed size={23} />
                    <span className="pl-2 text-sm">{info.bedroom}</span>
                  </h4>
                  
                  <h4 className="flex items-center">
                    <IconBath size={23} />
                    <span className="pl-2 text-sm">
                      {info.shower}
                    </span>
                  </h4>

                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={'/properties/id-property-info'} className="w-full">
              <Button className="w-full" >Inquire</Button>
            </Link>
          </CardFooter>
        </Card>
    </div>
  );
};

export default PropertyCard;
