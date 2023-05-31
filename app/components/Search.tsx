import React from "react";

const Search = () => {
  return (
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
          <button className="btn btn-primary w-40 text-accent">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
