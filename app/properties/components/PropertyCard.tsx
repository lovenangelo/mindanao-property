import { IconStarFilled } from "@tabler/icons-react";

const PropertyCard = ({
  info,
}: {
  info: {
    title: string;
    ratings: number;
    address: string;
    images: Array<string>;
  };
}) => {
  return (
    <div className="w-[400px] h-[400px] grid grid-cols-1 grid-rows-3">
      <div className="bg-black h-full w-full rounded-t-2xl row-span-2 border-black"></div>
      <div className="flex flex-col p-4 rounded-b-2xl h-full w-full bg-white border-black border-2 justify-around">
        <div>
          <div className="flex justify-between">
            <h1>{info.title}</h1>
            <div className="flex">
              <IconStarFilled
                className=" fill-[#FEA621]"
                color="red"
                size={12}
              />
              <IconStarFilled fill="FEA621" size={12} />
              <IconStarFilled fill="FEA621" size={12} />
              <IconStarFilled fill="FEA621" size={12} />
              <IconStarFilled fill="FEA621" size={12} />
            </div>
          </div>
          <p>{info.address}</p>
        </div>
        <button className=" bg-[#018837] rounded-2xl px-4 py-2 text-white text-xs font-semibold">
          Visit
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
