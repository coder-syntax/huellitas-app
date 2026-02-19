'use client'

// useFavorites — persists favorite animal IDs in localStorage.
// SSR-safe: reads from storage only after mount.
// Returns stable references to avoid re-renders.

import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'huellitas:favorites'

function readStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

function writeStorage(ids: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
  } catch {
    // Storage might be full or unavailable — fail silently
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([])
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setFavorites(readStorage())
    setHydrated(true)
  }, [])

  const isFavorite = useCallback(
    (id: string): boolean => favorites.includes(id),
    [favorites]
  )

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
      writeStorage(next)
      return next
    })
  }, [])

  const addFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      if (prev.includes(id)) return prev
      const next = [...prev, id]
      writeStorage(next)
      return next
    })
  }, [])

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = prev.filter((f) => f !== id)
      writeStorage(next)
      return next
    })
  }, [])

  const clearFavorites = useCallback(() => {
    setFavorites([])
    writeStorage([])
  }, [])

  return {
    favorites,
    hydrated,
    isFavorite,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    clearFavorites,
    count: favorites.length,
  }
}
