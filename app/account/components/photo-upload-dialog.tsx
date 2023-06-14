"use client"

import { ChangeEvent, useState } from "react"
import { Avatar } from "@radix-ui/react-avatar"

import { cn, supabase } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useUser } from "@/components/providers/user-provider"
import UserAvatar from "@/components/user-avatar"

export default function PhotoUploadDialog() {
  const { user } = useUser()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDraggingOver, setIsDraggingOver] = useState(false)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    setSelectedFile(file || null)
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setIsDraggingOver(true)
  }

  const handleDragLeave = () => {
    setIsDraggingOver(false)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files && event.dataTransfer.files[0]
    setSelectedFile(file || null)
  }

  const handleUpload = async () => {
    const { data, error } = await supabase.storage
      .from("images")
      .upload("profile-photo", selectedFile!, {
        cacheControl: "3600",
        upsert: false,
      })

    const filepath = data?.path
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"sm"} variant={"outline"}>
          Change photo
        </Button>
      </DialogTrigger>
      <DialogContent className={cn("w-36 md:w-96 h-max")}>
        <div className="flex-col inset-0 flex items-center justify-center">
          <DialogHeader>
            <h2 className="text-xl font-bold mb-4">Change Profile Picture</h2>
          </DialogHeader>

          <div className="flex justify-center mb-6">
            <UserAvatar
              src={selectedFile ? URL.createObjectURL(selectedFile) : "/"}
              height={"h-24"}
              width={"w-24"}
            />
          </div>
          <div
            className={cn(
              "border-dashed border-2 border-gray-400 rounded-lg p-4 mb-4 text-center",
              isDraggingOver && selectedFile == null ? "bg-blue-200" : ""
            )}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
          >
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
            <p className="text-gray-400">or</p>
            <p className="text-gray-400">Drag and drop a photo here</p>
          </div>
          <p className="text-gray-600 mb-2">Allowed photo types: JPEG, PNG</p>
          <div className="flex justify-center mt-4">
            <Button disabled={selectedFile == null}>Upload</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
