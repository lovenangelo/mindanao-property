"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import PropertiesForm from "./components/forms/main-properties-form"
import GMap from "./components/maps/google-map-listing"

export default function PropertiesPage() {
  const [showMap, setShowMap] = useState(true)
  return (
    <div className="w-full h-full">
      <div className="flex m-4 space-x-2 justify-between">
        <div className="space-x-2">
          <Button variant={"outline"} onClick={() => setShowMap(true)}>
            Map
          </Button>
          <Button
            variant={"outline"}
            onClick={() => {
              setShowMap(false)
            }}
          >
            List
          </Button>
        </div>
        <div>
          <Dialog>
            <DialogTrigger
              className={cn(
                "bg-primary text-primary-foreground h-10 py-2 px-4 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
              )}
            >
              List a property
            </DialogTrigger>
            <DialogContent className="flex items-center justify-center flex-col h-3/4 w-3/4 p-8">
              <DialogHeader>
                <DialogTitle>List a new property</DialogTitle>
              </DialogHeader>
              <PropertiesForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {showMap && <GMap />}
    </div>
  )
}
