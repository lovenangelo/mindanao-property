import { useAppDispatch } from "@/redux/hooks"
import { changeFormSection } from "@/redux/slices/properties-form-slice"

import { Button } from "@/components/ui/button"

export default function NavButtons() {
  const dispatch = useAppDispatch()
  return (
    <div className="w-full flex justify-between items-center">
      <Button
        onClick={() => {
          dispatch(changeFormSection({ value: "basic-info-form" }))
        }}
        className="w-24"
        type="submit"
      >
        Back
      </Button>
      <Button
        onClick={() => {
          dispatch(changeFormSection({ value: "property-details" }))
        }}
        className="w-24"
        type="submit"
      >
        Next
      </Button>
    </div>
  )
}
