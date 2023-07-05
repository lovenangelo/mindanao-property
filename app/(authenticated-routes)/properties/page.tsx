"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import GMap from "./components/google-map"

export default function PropertiesPage() {
  const [showMap, setShowMap] = useState(true)
  return (
    <div className="w-full h-full">
      <div className="flex m-4 space-x-2 justify-between">
        <div>
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
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {showMap && <GMap />}
    </div>
  )
}
