import React, { ReactNode } from "react";
const Select = ({ name, options }: { name: string; options: ReactNode }) => {
  return (
    <div className="input-group w-full">
      <select
        className="select select-bordered select-sm w-full xl:select-md xl:w-72"
        defaultValue={name}
      >
        <option disabled>{name}</option>
        {options}
      </select>
    </div>
  );
};

export default Select;
