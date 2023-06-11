import { AccountFields } from "@/types/account"

export const userAccountFields: AccountFields[] = [
  {
    name: "firstName",
    label: "First name",
    type: "text",
    htmlFor: "firstName",
  },
  {
    name: "lastName",
    label: "Last name",
    type: "text",
    htmlFor: "lastName",
  },
  {
    name: "userName",
    label: "Username",
    type: "text",
    htmlFor: "userName",
  },
  {
    name: "bio",
    label: "Bio",
    type: "text",
    htmlFor: "bio",
  },
  {
    name: "birthDate",
    label: "Birth Date",
    type: "date",
    htmlFor: "birthDate",
  },
  {
    name: "contact",
    label: "Contact",
    type: "number",
    htmlFor: "contact",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    htmlFor: "address",
  },
]
