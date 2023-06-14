"use client"

import { ChangeEvent, useState } from "react"
import { Avatar } from "@radix-ui/react-avatar"

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
import UserAvatar from "@/components/user-avatar"

export default function PhotoUploadDialog() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    setSelectedFile(file || null)
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files && event.dataTransfer.files[0]
    setSelectedFile(file || null)
  }
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"sm"} variant={"outline"}>
          Change photo
        </Button>
      </DialogTrigger>
      <DialogContent className={cn("w-96 h-max")}>
        <div className="flex-col inset-0 flex items-center justify-center">
          <DialogHeader>
            <h2 className="text-xl font-bold mb-4">Change Profile Picture</h2>
          </DialogHeader>

          <div className="flex justify-center mb-6">
            <UserAvatar height={"h-24"} width={"w-24"} />
          </div>
          <div className="border-dashed border-2 border-gray-400 rounded-lg p-4 mb-4 text-center">
            <label
              htmlFor="file-upload"
              className="block mb-2 cursor-pointer text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mx-auto mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 1a9 9 0 110-18 9 9 0 010 18zm0-8a2 2 0 100-4 2 2 0 000 4zm4-5a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              Select a Photo
            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <p className="text-gray-400">
              Drag and drop a photo here, or click to select a file.
            </p>
          </div>
          <p className="text-gray-600 mb-2">Allowed photo types: JPEG, PNG</p>
          {selectedFile && (
            <div className="mt-4">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          )}
          <div className="flex justify-center mt-4">
            <Button>Upload</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
