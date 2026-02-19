'use client'

// useFormspree — handles form submission to Formspree.
// Replace FORMSPREE_ENDPOINT with your actual form endpoint from formspree.io.
// Usage: const { submit, status } = useFormspree('https://formspree.io/f/YOUR_ID')

import { useState } from 'react'

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function useFormspree(endpoint: string) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function submit(data: Record<string, string>) {
    setStatus('submitting')
    setErrorMessage(null)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const body = await response.json().catch(() => ({}))
        throw new Error(body?.error ?? `Error ${response.status}`)
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Error desconocido')
    }
  }

  function reset() {
    setStatus('idle')
    setErrorMessage(null)
  }

  return { submit, status, errorMessage, reset }
}
