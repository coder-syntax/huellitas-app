// Data Access Layer — all animal data access goes through here.
//
// Currently backed by static data (MVP without backend).
// To integrate a REST API or database in the future,
// change ONLY these functions — no component will need to change.
//
// Functions are async to mirror real API call signatures.

import { ANIMALS_DATA } from '@/data/animals'
import type { Animal, AnimalFilters } from '@/types'

const STATUS_SORT_WEIGHT: Record<Animal['status'], number> = {
  urgente: 0,
  transito: 1,
  adopcion: 2,
}

export async function getAllAnimals(): Promise<Animal[]> {
  return ANIMALS_DATA
}

export async function getAnimalBySlug(slug: string): Promise<Animal | null> {
  return ANIMALS_DATA.find((a) => a.slug === slug) ?? null
}

export async function getFeaturedAnimals(limit = 3): Promise<Animal[]> {
  return [...ANIMALS_DATA]
    .sort((a, b) => STATUS_SORT_WEIGHT[a.status] - STATUS_SORT_WEIGHT[b.status])
    .slice(0, limit)
}

export async function getAnimalsByStatus(status: Animal['status']): Promise<Animal[]> {
  return ANIMALS_DATA.filter((a) => a.status === status)
}

export function filterAnimals(animals: Animal[], filters: AnimalFilters): Animal[] {
  let result = [...animals]

  if (filters.species) {
    result = result.filter((a) => a.species === filters.species)
  }

  if (filters.status) {
    result = result.filter((a) => a.status === filters.status)
  }

  if (filters.location) {
    result = result.filter((a) =>
      a.location.toLowerCase().includes(filters.location.toLowerCase())
    )
  }

  if (filters.search) {
    const q = filters.search.toLowerCase()
    result = result.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.breed.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
    )
  }

  // Sorting
  switch (filters.sortBy) {
    case 'urgencia':
      result.sort((a, b) => STATUS_SORT_WEIGHT[a.status] - STATUS_SORT_WEIGHT[b.status])
      break
    case 'nombre':
      result.sort((a, b) => a.name.localeCompare(b.name, 'es'))
      break
    case 'recientes':
    default:
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
  }

  return result
}

// Generates all slugs — needed for generateStaticParams in the detail page
export async function getAllAnimalSlugs(): Promise<string[]> {
  return ANIMALS_DATA.map((a) => a.slug)
}
