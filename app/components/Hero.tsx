import Search from "./Search";


const Hero = () => {

  const style:React.CSSProperties = {
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
    flexDirection: "column"
  }
  
  return (
    <div
      className="hero container-lg" 
      style={{ backgroundImage: "url(/assets/img/Hero.png)", height: "80vh", display: "flex" }}
    >
      <div className="overlay bg-opacity-60" style={style} />
      <div className="hero-content" >
        <div>
          <div className="flex items-center mt-48">
            <hr className="w-20 top-5 h-0.5 my-4 mr-2 align-items-center border-0 rounded bg-accent bg-opacity-60" />
            <h2 className="font-sans font-medium mb-2 mt-2 text-accent">
              We are offering the
            </h2>
          </div>
          <h1 className="text-6xl font-serif font-bold text-accent">
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
