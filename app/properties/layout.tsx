"use client";

import { IconSearch } from "@tabler/icons-react";
import Select from "./components/Select";
export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen items-center px-28 space-y-8 py-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">All Properties</h1>
        <div className="space-x-4">
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
      <div className="sticky w-full h-48 bg-gray-100 bottom-[0px] rounded-t-lg opacity-70 hover:opacity-100 p-8 hover:border-2 hover:border-black-20">
        <div className="flex space-x-4 items-center">
          <h1 className="text-2xl">Find Property</h1>
          <IconSearch />
        </div>
        <div className="flex items-center justify-center space-x-24 mt-4">
          <Select
            name="Location"
            options={
              <>
                <option value="asc">Ascending</option>
                <option value="asc">Descending</option>
                <option value="asc">This week</option>
                <option value="asc">This month</option>
              </>
            }
          />
          <Select
            name="Category"
            options={
              <>
                <option value="asc">Ascending</option>
                <option value="asc">Descending</option>
                <option value="asc">This week</option>
                <option value="asc">This month</option>
              </>
            }
          />
          <Select
            name="Property Type"
            options={
              <>
                <option value="asc">Ascending</option>
                <option value="asc">Descending</option>
                <option value="asc">This week</option>
                <option value="asc">This month</option>
              </>
            }
          />
          <button className=" bg-[#018837] rounded-2xl px-4 py-2 w-44 h-12 text-white text-xs font-semibold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
