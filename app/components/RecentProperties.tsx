const RecentProperties = () => {
  return (
    <section className="container-lg mt-8 mx-8 xl:mx-32 space-y-8">
      <div className="flex flex-col md:text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-serif font-bold text-secondary">
          Recent Properties
        </h1>
        <p className="font-sans md:mx-32 items-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="grid grid-cols-1 row-auto w-full h-full gap-4">
        <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-2 content-center w-full h-max rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 row-span-2 md:row-span-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4 p-4">
            <h4 className="text-primaryContent block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Lyft launching cross-platform service this week
            </h4>
            <p className="block text-base font-normal leading-relaxed text-gray-700 antialiased">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </p>
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
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-2 content-center w-full h-max rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 row-span-2 md:row-span-1">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4 p-4">
            <h4 className="text-primaryContent block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Lyft launching cross-platform service this week
            </h4>
            <p className="block text-base font-normal leading-relaxed text-gray-700 antialiased">
              Like so many organizations these days, Autodesk is a company in
              transition. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </p>
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
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-center">
        <button className="font-sans w-36 btn">View More</button>
      </div>
    </section>
  );
};

export default RecentProperties;
