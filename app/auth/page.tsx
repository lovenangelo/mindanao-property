"use client"

import { useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import AuthLoader from "@/components/loaders/auth-loader"
import { useUser } from "@/components/user-provider"

import { UserAuthForm } from "./components/user-auth-form"

export default function AuthPage() {
  const [authType, setAuthType] = useState<string>("LOGIN")
  const { user } = useUser()

  if (user) {
    return <AuthLoader />
  }

  return (
    <div className="items-center h-[calc(100vh-65px)] justify-center p-16">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {authType == "SIGNUP" ? "Create an account" : "Sign In"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {authType == "SIGNUP"
              ? "Enter your email below to create your account"
              : "Enter your credentials below to login"}
          </p>
        </div>
        <UserAuthForm authtype={authType} />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className=" space-x-1 flex justify-center items-center">
          {authType == "LOGIN" && (
            <>
              <p className="text-sm ">Don't have an account? </p>
              <Button
                onClick={() => {
                  setAuthType("SIGNUP")
                }}
                variant={"link"}
                size={"noPadding"}
              >
                Sign up
              </Button>
            </>
          )}
          {authType == "SIGNUP" && (
            <>
              <p className="text-sm ">Already have an account? </p>
              <Button
                onClick={() => {
                  setAuthType("LOGIN")
                }}
                variant={"link"}
                size={"noPadding"}
              >
                Sign in
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
