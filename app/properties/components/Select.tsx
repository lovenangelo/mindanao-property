import React, { ReactNode } from "react";
const Select = ({ name, options }: { name: string; options: ReactNode }) => {
  return (
    <div className="p-2 bg-white border-2 border-black border-opacity-75 rounded-lg">
      <select
        defaultValue={""}
        className="px-4 py-2 w-80 bg-transparent focus:border-none border-none"
      >
        <option value="" disabled>
          {name}
        </option>
        {options}
      </select>
    </div>
  );
};

export default Select;
