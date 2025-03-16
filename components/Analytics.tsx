"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would typically add your analytics tracking code
    // For example, Google Analytics or similar services
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Example of what you might do with this data
    console.log(`Page view: ${url}`)

    // You would call your analytics service here
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: url })
  }, [pathname, searchParams])

  return null
}

