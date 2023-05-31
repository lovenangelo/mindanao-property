import { IconSearch } from "@tabler/icons-react";
import Select from "./Select";

const Search = ({ canBeInvisible }: { canBeInvisible: boolean }) => {
  const sticky =
    "sticky bottom-[0px] flex flex-row w-full py-10 px-32 items-center";

  return (
    <div
      className={
        canBeInvisible
          ? sticky
          : "flex flex-row w-full py-10 px-32 items-center mt-16"
      }
    >
      <div
        className={`w-1/8 bg-white py-5 px-5 rounded w-full shadow ${
          canBeInvisible ? "bg-opacity-75" : null
        }`}
      >
        <div className="mb-4 flex">
          <p className="font-sans font-medium mr-2">Find a property</p>
          <IconSearch />
        </div>
        <div className="form-control flex flex-row">
          <Select
            name="Location"
            options={
              <>
                <option>T-shirts</option>
                <option>Mugs</option>
              </>
            }
          />
          <Select
            name="Category"
            options={
              <>
                <option>T-shirts</option>
                <option>Mugs</option>
              </>
            }
          />
          <Select
            name="Property Type"
            options={
              <>
                <option>T-shirts</option>
                <option>Mugs</option>
              </>
            }
          />
          <button className="btn btn-primary w-40 text-accent">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
