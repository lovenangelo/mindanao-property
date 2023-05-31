"use client";

import Select from "./components/Select";

export default function PropertiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen items-center px-28 space-y-8 py-8">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">All Properties</h1>
        <div className="space-x-4">
          <Select
            name="Sort by price &#9660;"
            options={
              <>
                <option value="asc">Ascending</option>
                <option value="asc">Descending</option>
              </>
            }
          />
          <Select
            name="Sort by type &#9660;"
            options={
              <>
                <option value="asc">Ascending</option>
                <option value="asc">Descending</option>
              </>
            }
          />
          <Select
            name="Sort by date &#9660;"
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
      {children}
    </div>
  );
}
