"use client";

import Select from "../components/Select";
import Search from "../components/Search";
export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen items-center px-28 space-y-8 py-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">All Properties</h1>
        <div className="w-1/2 flex">
          <Select
            name="Sort by price"
            options={
              <>
                <option value="asc">Ascending</option>
                <option value="asc">Descending</option>
              </>
            }
          />
          <Select
            name="Sort by type"
            options={
              <>
                <option value="asc">Ascending</option>
                <option value="asc">Descending</option>
              </>
            }
          />
          <Select
            name="Sort by date"
            options={
              <>
                <option value="asc">Ascending</option>
                <option value="asc">Descending</option>
                <option value="asc">This week</option>
                <option value="asc">This month</option>
              </>
            }
          />
        </div>
      </div>
      <hr />
      {children}
      <Search canBeInvisible={true} />
    </div>
  );
}
