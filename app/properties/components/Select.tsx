import React, { ReactNode } from "react";

const Select = ({ name, options }: { name: string; options: ReactNode }) => {
  return (
    <select className="px-4 py-2">
      <option value="" disabled selected>
        {name}
      </option>
      {options}
    </select>
  );
};

export default Select;
