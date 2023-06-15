"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import { LoginForm } from "./login-form"
import { SignUpForm } from "./signup-form"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  authtype: string
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {props.authtype == "LOGIN" && (
        <LoginForm isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      {props.authtype == "SIGNUP" && (
        <SignUpForm isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.facebook className="mr-2 h-4 w-4" />
        )}{" "}
        Facebook
      </Button>
    </div>
  )
}
