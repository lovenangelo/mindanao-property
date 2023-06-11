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
    name: "contact",
    label: "Contact",
    type: "number",
    htmlFor: "contact",
  },
  {
    name: "birthDate",
    label: "Birth Date",
    type: "date",
    htmlFor: "birthDate",
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    htmlFor: "address",
  },
]
