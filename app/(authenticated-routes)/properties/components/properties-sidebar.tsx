import { properties } from "@/config/properties"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PropertiesSidebar() {
  const propertyTypeItems = properties.types.map((item) => {
    return <SelectItem value={item}>{item}</SelectItem>
  })

  const additionalConveniencesItems = properties.additionalConveniences.map(
    (item) => {
      return <SelectItem value={item}>{item}</SelectItem>
    }
  )

  return (
    <div className="hidden md:block m-4 p-2 h-[calc(100%-32px)] w-64 rounded ">
      <h1 className="text-xl font-semibold mb-4">Filters</h1>
      <div className="space-y-8">
        <div className="space-y-2 h-max w-full text-muted-foreground">
          <p>Sort by date listed</p>
          <div className="flex space-x-1">
            <Button variant={"outline"}>Ascending</Button>
            <Button variant={"outline"}>Descending</Button>
          </div>
        </div>
        <div className="space-y-2 text-muted-foreground">
          <p className="text-muted-foreground">Property type</p>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Pad" />
            </SelectTrigger>
            <SelectContent>{propertyTypeItems}</SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground">Price</p>
          <Input type="number" placeholder="Enter min. price" />
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground">Bedroom</p>
          <Input type="number" placeholder="Enter min. no. of bedrooms" />
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground">Bathroom</p>
          <Input type="number" placeholder="Enter min. no. of bathrooms" />
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground">Property area range</p>
          <Input type="number" placeholder="Enter min. area" />
        </div>
        <div className="space-y-2 text-muted-foreground">
          <p className="text-muted-foreground">Additional conveniences</p>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>{additionalConveniencesItems}</SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-center mt-12">
        <Button>Apply Filter</Button>
      </div>
    </div>
  )
}
