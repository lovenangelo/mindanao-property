"use client"

import Image from "next/image"
import Link from "next/link"
import Search from "components/Search"
import { useMediaQuery } from "usehooks-ts"

import { Button, buttonVariants } from "@/components/ui/button"
import FeaturedProperties from "@/components/FeaturedProperties"
import Footer from "@/components/Footer"
import Newsletter from "@/components/Newsletter"
import RecentProperties from "@/components/RecentProperties"
import MainLoader from "@/components/loaders/main-loader"
import { useUser } from "@/components/providers/user-provider"

export default function IndexPage() {
  const { isLoading } = useUser()

  if (isLoading) {
    return <MainLoader />
  }
  const desktop = useMediaQuery("(min-width: 768px)")

  return (
    <section className="overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="h-[calc(100vh-65px)] px-9 md:px-28">
          <div className="h-full w-full flex flex-col justify-center">
            <div className="flex items-center">
              <hr className="w-20 top-5 h-0.5 my-4 mr-2 align-items-center border-0 rounded bg-primary bg-opacity-60" />
              <h2 className="font-medium mb-2 mt-2 md:text-lg text-md">
                We are offering the
              </h2>
            </div>
            <div>
              <h1 className="max-w-2xl mb-6 font-light lg:mb-8 text-4xl md:text-6xl">
                Best Real Estate Deals
              </h1>
              <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl ">
                Find your dream home or showcase your property with ease on our
                intuitive real estate web app. Whether you're a homeowner,
                investor, or agent, we've got you covered.
              </p>
              <Button variant={"default"} size={"default"}>
                View Properties
              </Button>
            </div>
            {/* {desktop && (
              <div className="w-max h-max">
                <Search canBeInvisible={false} />
              </div>
            )} */}
          </div>
        </div>
        <div className="h-[calc(100vh-65px)] md:block hidden">
          <Image
            className="w-full h-full object-cover"
            src={"/assets/img/Hero.png"}
            height={952}
            width={1440}
            alt="buldings"
          />
        </div>
      </div>
      {/* 
      <FeaturedProperties />
      <RecentProperties />
      <Newsletter />
      <Footer /> */}
    </section>
  )
}
