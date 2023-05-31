import React, { ReactNode } from "react";
const Select = ({ name, options }: { name: string; options: ReactNode }) => {
  return (
    <select defaultValue={""} className="px-4 py-2 appearance-none">
      <option value="" disabled>
        {name}
      </option>
      {options}
    </select>
  );
};

export default Select;
