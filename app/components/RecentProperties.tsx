import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const RecentProperties = () => {
  return (
   
    <section>
      <div className="flex flex-col text-center">
        <h1 className="text-5xl font-serif font-bold text-secondary">
          Similar Properties
        </h1>
        <p className="font-sans  py-6  ml-32 mr-32 mb-10 items-center">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className=" flex content-center w-3/4 ml-40 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
         
          <h4 className="font-serif text-primaryContent mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Lyft launching cross-platform service this week
          </h4>
          <p className="mb-12 font-sans textmb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software company
            selling licenses. Yet its own business model disruption is only part of
            the story
          </p>
          <a className="inline-block" href="#">
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase btn btn-outline btn-primary"
              type="button"
            >
              More Info
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* other similar properties */}
      <div className="mt-12 mb-12 relative flex w-3/4 ml-40 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg ">
      
        <div className="p-6">
          
          <h4 className="font-serif text-primaryContent mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Lyft launching cross-platform service this week
          </h4>
          <p className="font-sans mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software company
            selling licenses. Yet its own business model disruption is only part of
            the story
          </p>
          <a className="inline-block" href="#">
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase btn btn-outline btn-primary"
              type="button"
            >
              More Info
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-l-none bg-white bg-clip-border text-gray-700">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="text-center mb-12">
        <button className="font-sans w-36 btn btn-outline btn-primary">View More</button>
      </div>
    </section>
  );
};

export default RecentProperties;
