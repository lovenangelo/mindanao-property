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
            name="Sort by price"
            options={<option value="hurr">Durr</option>}
          />
          <Select
            name="Sort by type"
            options={<option value="hurr">Durr</option>}
          />
          <Select
            name="Sort by date"
            options={<option value="hurr">Durr</option>}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
