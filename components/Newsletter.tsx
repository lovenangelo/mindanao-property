import { useMediaQuery } from "usehooks-ts";
import { Button } from "./ui/button";

const Newsletter = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="bg-[#C2C7C8] h-96 overflow-hidden mt-8 grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 px-8 md:px-0">
      {desktop && (
        <div className="flex items-center justify-center">
          <img
            src="/assets/img/Shapes.png"
            alt="Orange Shapes"
            role="img"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="w-full flex flex-col justify-center items-start space-y-4">
        <h1 className="font-serif text-white text-2xl md:text-4xl xl:text-5xl font-bold leading-10 md:text-center xl:text-left">
          Don't Miss A Thing!
        </h1>
        <p className="text-sans text-base leading-normal text-white md:pr-24">
          Subscribe with Email and loads of interesting news will be sent to you
          on a daily basis.
        </p>
        <div className="flex items-stretch w-full md:w-3/4">
          <input
            className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-full border border-transparent focus:outline-none focus:border-gray-500"
            type="email"
            placeholder="Your Email"
          />
          {/* <button className="w-full rounded-l-none btn-primary rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
            subscribe
          </button> */}
          <Button variant={"default"} 
          className="w-1/2 rounded-l-none  rounded text-base font-lg font-bold leading-none text-white p-8 uppercase ">
            Subscribe
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
