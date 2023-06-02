import Search from "./Search";

const Hero = () => {
  return (
    <div
      className="hero container-lg min-h-screen bg-hero"
    >
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content h" style={{ height: "80vh" }}>
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
            intuitive real estate web app. Whether you're a homeowner, investor,
            or agent, we've got you covered.
          </p>
          <button className="font-sans font-medium btn btn-primary text-accent mb-12">
            List your property
          </button>
          <Search canBeInvisible={false} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
