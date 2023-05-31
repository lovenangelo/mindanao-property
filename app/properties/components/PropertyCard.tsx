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
    <div className="w-[400px] h-[400px] grid grid-cols-1 rounded-2xl grid-rows-3 overflow-hidden border-black border-[2px] border-opacity-50 shadow-md hover:shadow-xl hover:cursor-pointer">
      <div className="h-full w-full row-span-2 overflow-hidden">
        <img
          className="row-span-2 object-cover"
          src={info.images[0]}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col p-4 h-full w-full justify-around overflow-hidden">
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
