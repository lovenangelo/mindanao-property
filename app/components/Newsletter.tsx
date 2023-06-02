const Newsletter = () => {
    return (
        <div className=" px-12 container-lg w-full md:w-2/3 xl:w-auto flex flex-col xl:items-stretch justify-between xl:flex-row bg-neutral mb-2">
            <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                <img src="/assets/img/Shapes.png" alt="Orange Shapes" role="img" className="h-full xl:w-full lg:w-1/2 w-full" />
            </div>
            <div className="w-full xl:w-1/2 xl:pl-28 xl:py-28">
                <h1 className="font-serif text-white text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Don't Miss A Thing!</h1>
                <p className="text-sans text-base leading-normal text-white text-center xl:text-left">Subscribe with Email and loads of interesting news will be sent to you on a daily basis.</p>
                <div className="flex items-stretch mt-12">
                    <input className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                    <button className="w-32 rounded-l-none btn-primary rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                </div>
            </div>
          
        </div>
    );
}

export default Newsletter;