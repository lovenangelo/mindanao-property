"use client"

import * as React from "react"
import { store } from "@/redux/store"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import { Provider } from "react-redux"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <Provider store={store}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </Provider>
  )
}
