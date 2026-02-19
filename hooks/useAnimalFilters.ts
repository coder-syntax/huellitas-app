'use client'

// useAnimalFilters — manages filter state for the animal catalog.
// Keeps filter logic out of the page component for clean separation.

import { useState, useMemo } from 'react'
import type { Animal, AnimalFilters } from '@/types'
import { filterAnimals } from '@/lib/animals'

const DEFAULT_FILTERS: AnimalFilters = {
  species: '',
  status: '',
  location: '',
  search: '',
  sortBy: 'urgencia',
}

export function useAnimalFilters(animals: Animal[]) {
  const [filters, setFilters] = useState<AnimalFilters>(DEFAULT_FILTERS)

  const filteredAnimals = useMemo(
    () => filterAnimals(animals, filters),
    [animals, filters]
  )

  function updateFilter<K extends keyof AnimalFilters>(key: K, value: AnimalFilters[K]) {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  function resetFilters() {
    setFilters(DEFAULT_FILTERS)
  }

  const hasActiveFilters =
    filters.species !== '' ||
    filters.status !== '' ||
    filters.location !== '' ||
    filters.search !== ''

  return {
    filters,
    filteredAnimals,
    updateFilter,
    resetFilters,
    hasActiveFilters,
    totalCount: animals.length,
    filteredCount: filteredAnimals.length,
  }
}
