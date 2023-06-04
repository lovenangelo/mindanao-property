import Search from "./Search";
import { useMediaQuery } from "usehooks-ts";

const Hero = () => {
  const desktop = useMediaQuery("(min-width: 768px)");

  const style: React.CSSProperties = {
    position: "absolute",
    height: "inherit",
    width: "100%",
    top: "10",
    left: "0",
    background: "rgba(0,0,0,0.30)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };

  return (
    <div
      className="hero min-h-screen px-8 xl:px-32"
      style={{
        backgroundImage: "url(/assets/img/Hero.png)",
        display: "flex",
      }}
    >
      <div className="overlay bg-opacity-60" style={style} />
      <div className="hero-content h-full">
        <div>
          <div className="flex items-center">
            <hr className="w-20 top-5 h-0.5 my-4 mr-2 align-items-center border-0 rounded bg-accent bg-opacity-60" />
            <h2 className="font-medium mb-2 mt-2 text-accent md:text-lg text-md">
              We are offering the
            </h2>
          </div>
          <h1 className="text-4xl md:text-8xl font-serif font-bold text-accent">
            Best Real Estate Deals
          </h1>
          <p className="font-sans py-6 md:mr-32 text-accent text-md md:text-lg">
            Find your dream home or showcase your property with ease on our
            intuitive real estate web app. Whether you're a homeowner, investor,
            or agent, we've got you covered.
          </p>
          <button className="font-sans font-medium h-10 px-6 rounded-sm md:h-12 md:px-4 w-auto btn-primary text-md md:text-lg text-accent">
            List your property
          </button>
        </div>
        {desktop && (
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-40 w-max">
            <Search canBeInvisible={false} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
