"use client";

import { useRouter } from "next/navigation";
import Guest from "./components/Guest";
import { useUser } from "./providers/UserProvider";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  console.log(user);

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
    return () => {};
  }, [user]);

  return (
    <main className="min-h-screen">
      {user == null && <Guest />}

      {/* Hero Section */}

      <div
        className="hero container-lg"
        style={{ backgroundImage: "url(/assets/img/Hero.png)" }}
      >
        <div className="hero-overlay bg-opacity-60" />
        <div
          className="hero-content"
          style={{ height: "80vh" }}
        >
          <div>
            <div className="flex items-center mt-48">
              <hr className="w-20 top-5 h-0.5 my-4 mr-2 align-items-center border-0 rounded bg-accent bg-opacity-60" />
              <h2 className="font-sans font-medium mb-2 mt-2 text-accent">
                We are offering the
              </h2>
            </div>
            <h1 className="text-5xl font-serif font-bold text-accent">
              Best Real Estate Deals
            </h1>
            <p className="font-sans font-medium py-6 lg:mr-96 text-accent">
              Find your dream home or showcase your property with ease on our
              intuitive real estate web app. Whether you're a homeowner,
              investor, or agent, we've got you covered.
            </p>
            <button className="font-sans font-medium btn btn-primary text-accent">
              List your property
            </button>

            <br />
            <br />
            <br />
            <br />

            {/* Search property */}
            <div className="flex flex-row w-full  py-10 px-32 items-center mt-16 ">
              <div className="w-1/8  bg-white py-5 px-5 rounded w-full shadow">
                <div className="mb-4">
                  <p className="font-sans font-medium">Find Your Home</p>
                  {/* <i className="fa-thin fa-magnifying-glass"/> */}
                </div>
                <div className="form-control flex flex-row">
                  <div className="input-group ">
                    <select className="select select-bordered flex-initial w-64">
                      <option disabled selected>
                        Location
                      </option>
                      <option>T-shirts</option>
                      <option>Mugs</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <select className="select select-bordered flex-initial w-64">
                      <option disabled selected>
                        Category
                      </option>
                      <option>T-shirts</option>
                      <option>Mugs</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <select className="select select-bordered flex-initial w-64">
                      <option disabled selected>
                        Property Type
                      </option>
                      <option>T-shirts</option>
                      <option>Mugs</option>
                    </select>
                  </div>
                  <button className="btn btn-primary w-40 text-accent">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Featured Properties */}

      <div className="container-lg">
        <div className="flex flex-col text-center">
          <h1 className="text-5xl font-serif font-bold text-secondary">Featured Properties</h1>
          <p className="font-sans  py-6  ml-32 mr-32 items-center">
            Find your dream home or showcase your property with ease on our
            intuitive real estate web app. Whether you're a homeowner, investor,
            or agent, we've got you covered.
          </p>
        </div>
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/3  flex-wrap">
              <div className="w-full h-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Featured Properties */}
      
      {/* Recent Properties */}
      <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="relative z-10 lg:py-16">
        <div className="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="relative flex items-center bg-gray-100">
        <span
          className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 sm:p-16 lg:p-24">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            debitis.
          </h2>

          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            molestiae! Quidem est esse numquam odio deleniti, beatae, magni
            dolores provident quaerat totam eos, aperiam architecto eius quis
            quibusdam fugiat dicta.
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );

  
}
