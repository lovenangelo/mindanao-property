import * as z from "zod"

// Section 1: Basic Information
const BasicInformationSchema = z.object({
  property_type: z.string().nonempty("Required"),
  street_address: z.string().nonempty("Required"),
  city: z.string().nonempty("Required"),
  state: z.string().nonempty("Required"),
  zip_code: z.coerce.number().int().gte(1000).lte(9999).or(z.string()),
  country: z.string().nonempty("Required"),
})

// Section 2: Location Details
const LocationDetailsSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
})

// Section 3: Property Details
const PropertyDetailsSchema = z.object({
  price: z.number().positive(),
  currency: z.string().nonempty(),
  bedrooms: z.number().positive(),
  bathrooms: z.number().positive(),
  area_sqft: z.number().positive(),
  lot_size_acres: z.number().positive(),
  year_built: z.number().min(0),
})

// Section 4: Description and Amenities
const DescriptionAmenitiesSchema = z.object({
  description: z.string(),
  amenities: z.string(),
})

// Section 5: Agent and Status Details
const StatusDetailsSchema = z.object({
  status: z.enum(["for sale", "sold", "rented"]), // Modify the status options as needed
  listed_date: z.date().optional(),
  sold_date: z.date().optional(),
  last_updated: z.date(),
})

// Full Properties Schema combining all sections
const PropertiesSchema = z.object({
  basic_info: BasicInformationSchema,
  location_details: LocationDetailsSchema,
  property_details: PropertyDetailsSchema,
  description_amenities: DescriptionAmenitiesSchema,
  agent_status_details: StatusDetailsSchema,
})

const propertiesScheme = {
  BasicInformationSchema,
  LocationDetailsSchema,
  PropertiesSchema,
  DescriptionAmenitiesSchema,
  StatusDetailsSchema,
}

export default propertiesScheme
