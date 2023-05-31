import React, { ReactNode } from "react";
const Select = ({ name, options }: { name: string; options: ReactNode }) => {
  return (
    <div className="input-group">
      <select className=" select select-bordered selecet-md flex-initial w-64">
        <option disabled selected>
          {name}
        </option>
        {options}
      </select>
    </div>
  );
};

export default Select;
