"use client"

import Image from "next/image"
import Link from "next/link"
import Search from "components/Search"
import { useMediaQuery } from "usehooks-ts"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "@/components/ui/button"
import FeaturedProperties from "@/components/FeaturedProperties"
import RecentProperties from "@/components/RecentProperties"
import MainLoader from "@/components/loaders/main-loader"
import { useUser } from "@/components/providers/user-provider"
import Newsletter from "@/components/Newsletter"
import Footer from "@/components/Footer"

export default function IndexPage() {
  const { isLoading } = useUser()

  if (isLoading) {
    return <MainLoader />
  }
  const desktop = useMediaQuery("(min-width: 768px)")

  return (
    //     <div>
    //       {/* <AspectRatio ratio={16 / 9}>
    //         <div style={{ position: "relative" }}>
    //           <Image
    //             src="/assets/img/Hero.png"
    //             alt="Image"
    //             width="1920"
    //             height="1080"
    //             style={{ height: "80vh", objectFit: "cover" }}
    //           />
    //           <div
    //             className="md:ml-20 sm: ml-14"
    //             style={{
    //               position: "absolute",
    //               top: "50%",
    //               left: "30%",
    //               transform: "translate(-50%, -50%)",
    //               textAlign: "start",
    //             }}
    //           >
    //             <div className="flex items-center">
    //               <hr className="w-20 top-5 h-0.5 my-4 mr-2 align-items-center border-0 rounded bg-accent bg-opacity-60" />
    //               <h2 className="font-medium mb-2 mt-2 text-accent md:text-lg text-md">
    //                 We are offering the
    //               </h2>
    //             </div>
    //             <div>
    //               <h1 className="max-w-2xl mb-6 font-light text-white lg:mb-8 dark:text-gray-400 text-4xl md:text-6xl ">
    //                 Best Real Estate Deals
    //               </h1>
    //               <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
    //                 Find your dream home or showcase your property with ease on our
    //                 intuitive real estate web app. Whether you're a homeowner,
    //                 investor, or agent, we've got you covered.
    //               </p>
    //               <Button variant={"default"} size={"default"}>
    //                 List Properties
    //               </Button>
    //             </div>
    //           </div>

    //       {desktop && (
    //         <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20 w-max md:mt-96">
    //           <Search canBeInvisible={false} />
    //         </div>
    //       )}
    //         </div>
    //       </AspectRatio> */}
    //       <AspectRatio >
    //   <div className="relative">
    //     <Image
    //       src="/assets/img/Hero.png"
    //       alt="Image"
    //       width="1920"
    //       height="1080"
    //       className="lg:h-[80vh] object-cover"
    //     />
    //     <div
    //       className="md:ml-20 sm:ml-14 absolute top-1/2 left-30% -translate-x-1/2 -translate-y-1/2 text-start"
    //       style={{
    //         position: "absolute",
    //         top: "50%",
    //         left: "30%",
    //         transform: "translate(-50%, -50%)",
    //         textAlign: "start",
    //       }}
    //     >
    //       <div className="flex items-center">
    //         <hr className="w-20 top-5 h-0.5 my-4 mr-2 align-items-center border-0 rounded bg-accent bg-opacity-60" />
    //         <h2 className="font-medium mb-2 mt-2 text-accent md:text-lg text-md">
    //           We are offering the
    //         </h2>
    //       </div>
    //       <div>
    //         <h1 className="max-w-2xl mb-6 font-light text-white lg:mb-8 dark:text-gray-400 text-4xl md:text-6xl">
    //           Best Real Estate Deals
    //         </h1>
    //         <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
    //           Find your dream home or showcase your property with ease on our intuitive real estate web app. Whether you're a homeowner, investor, or agent, we've got you covered.
    //         </p>
    //         <Button variant={"default"} size={"default"}>
    //           List Properties
    //         </Button>
    //       </div>
    //     </div>

    //     {desktop && (
    //       <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20 w-max md:mt-96">
    //         <Search canBeInvisible={false} />
    //       </div>
    //     )}
    //   </div>
    // </AspectRatio>
    //       <FeaturedProperties />
    //       <RecentProperties />
    //     </div>

    <section className="overflow-hidden">
      <div>
        <div
          className="relative bg-cover bg-no-repeat"
          style={{
            backgroundPosition: "50%",
            backgroundImage: " url('/assets/img/Hero.png')",
            height: "600px",
          }}
        >
          <div className="absolute top-0 right-0 bottom-0 left-10 h-full w-full overflow-hidden bg-fixed">
            <div
              className=""
              style={{
                position: "absolute",
                top: "50%",
                left: "35%",
                transform: "translate(-50%, -50%)",
                textAlign: "start",
              }}
            >
              <div className="flex items-center">
                <hr className="w-20 top-5 h-0.5 my-4 mr-2 align-items-center border-0 rounded bg-accent bg-opacity-60 dark:bg-white" />
                <h2 className="font-medium mb-2 mt-2 text-accent md:text-lg text-md dark:text-white">
                  We are offering the
                </h2>
              </div>
              <div>
                <h1 className="max-w-2xl mb-6 font-light text-white lg:mb-8 dark:text-white text-4xl md:text-6xl">
                  Best Real Estate Deals
                </h1>
                <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-white">
                  Find your dream home or showcase your property with ease on
                  our intuitive real estate web app. Whether you're a homeowner,
                  investor, or agent, we've got you covered.
                </p>
                <Button variant={"default"} size={"default"}>
                  List Properties
                </Button>
              </div>
            </div>
          </div>
          {desktop && (
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20 w-max">
              <Search canBeInvisible={false} />
            </div>
          )}
        </div>
      </div>

      <FeaturedProperties />
      <RecentProperties />
      <Newsletter />
      <Footer />
    </section>
  )
}
