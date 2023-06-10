type AccountFields = {
  name: string
  label: string
  type: string
  htmlFor: string
}

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
    name: "Bio",
    label: "Bio",
    type: "text",
    htmlFor: "Bio",
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
    name: "Address",
    label: "Address",
    type: "text",
    htmlFor: "address",
  },
]
