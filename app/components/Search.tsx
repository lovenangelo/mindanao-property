"use client"

import * as React from "react"

import { IconSearch } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

 
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const location = [
  {
    value: "cagayan de oro city",
    label: "Cagayan De Oro City",
  },
  {
    value: "bukidnon",
    label: "Bukidnon",
  },
  {
    value: "malaybalay city",
    label: "MalayBalay City",
  },
  {
    value: "davao",
    label: "Davao",
  }
]

const categories = [
  {
    value: "buy",
    label: "Buy",
  },
  {
    value: "rent",
    label: "Rent",
  }
]

const propertyTypes = [
  {
    value: "residential",
    label: "Residential",
  },
  {
    value: "commercial",
    label: "Commercial",
  },
  {
    value: "industrial",
    label: "Industrial",
  },
  {
    value: "raw land",
    label: "Raw Land",
  },
  {
    value: "special use",
    label: "Special Use",
  },
]


const Search = ({ canBeInvisible }: { canBeInvisible: boolean }) => {
  const sticky = "sticky bottom-[0px] flex w-full pb-10 justify-center px-10";

  const [openLocation, setOpenLocation] = React.useState(false)
  const [valueLocation, setValueLocation] = React.useState("")

  const [openCategories, setOpenCategories] = React.useState(false)
  const [valueCategories, setValueCategories] = React.useState("")

  const [openPropertyType, setOpenPropertyType] = React.useState(false)
  const [valuePropertyType, setValuePropertyType] = React.useState("")

  return (
    <div className={canBeInvisible ? sticky : "flex md:h-full justify-center"}>
      <div className={`lg:flex justify-between lg:w-full p-5 rounded bg-[#fefefe96] shadow backdrop-filter pb backdrop-blur-lg ${canBeInvisible ? "bg-opacity-75" : null}`}>
        <div className="flex items-center justify-center lg:justify-between my-2">
          <p className="font-sans font-bold mr-2 text-md md:text-2xl">
            Find a Property
          </p>
          <IconSearch />
        </div>
        <div className="form-control flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0">
          
          {/* Popover search location */}  
          <Popover open={openLocation} onOpenChange={setOpenLocation}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openLocation}
                className="max-w-[250px] min-w-[200px] justify-between"
              >
                {valueLocation
                  ? location.find((location) => location.value === valueLocation)?.label
                  : "Select location..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search location..." />
                <CommandEmpty>No location found.</CommandEmpty>
                <CommandGroup>
                  {location.map((location) => (
                    <CommandItem
                      key={location.value}
                      onSelect={(currentValue) => {
                        setValueLocation(currentValue === valueLocation ? "" : currentValue)
                        setOpenLocation(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          valueLocation === location.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {location.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>

          <Popover open={openCategories} onOpenChange={setOpenCategories}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openCategories}
                className="w-[200px] justify-between"
              >
                {valueCategories
                  ? categories.find((category) => category.value === valueCategories)?.label
                  : "Select Category..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search category..." />
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {categories.map((category) => (
                    <CommandItem
                      key={category.value}
                      onSelect={(currentValue) => {
                        setValueCategories(currentValue === valueCategories ? "" : currentValue)
                        setOpenCategories(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          valueCategories === category.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {category.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>

          {/* Property Type */}
          <Popover open={openPropertyType} onOpenChange={setOpenPropertyType}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openPropertyType}
                className="min-w-[200px] max--w-[250px] justify-between"
              >
                {valuePropertyType
                  ? propertyTypes.find((propertyType) => propertyType.value === valuePropertyType)?.label
                  : "Select Property Type..."}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search propertyType..." />
                <CommandEmpty>No propertyType found.</CommandEmpty>
                <CommandGroup>
                  {propertyTypes.map((propertyType) => (
                    <CommandItem
                      key={propertyType.value}
                      onSelect={(currentValue) => {
                        setValuePropertyType(currentValue === valuePropertyType ? "" : currentValue)
                        setOpenPropertyType(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          valuePropertyType === propertyType.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {propertyType.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>

          {/* button search */} 
          <Button className="flex">Search <span className="pl-4"><IconSearch size={15}/></span></Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
