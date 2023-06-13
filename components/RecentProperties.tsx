import { Button } from "./ui/button"

const RecentProperties = () => {
  return (
    <section className="container-lg mt-16 mx-8 xl:mx-32 space-y-8">
      <div className="flex flex-col md:text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-black-600">
          Recent Properties
        </h1>
        <p className="font-sans md:mx-32 items-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="px-5 py-6 mx-auto mt-2">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Malaybalay City, Bukidnon
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Real Estate Property
              </h1>

              <p className="leading-relaxed mt-5">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <Button
                  variant={"default"}
                  size={"default"}
                  className="flex ml-auto"
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-6 mx-auto mt-2">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Malaybalay City, Bukidnon
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Real Estate Property
              </h1>

              <p className="leading-relaxed mt-5">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <Button
                  variant={"default"}
                  size={"default"}
                  className="flex ml-auto"
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-6 items-center justify-center text-center">
          <Button variant={"default"} size={"default"}>
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default RecentProperties
