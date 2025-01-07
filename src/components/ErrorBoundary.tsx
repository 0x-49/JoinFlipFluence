'use client'

import React from 'react'
import { Button } from './ui/button'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({
  error,
  reset,
}: Props) {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-2">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-muted-foreground">{error.message}</p>
      <Button
        onClick={reset}
        className="mt-4"
      >
        Try again
      </Button>
    </div>
  )
}
