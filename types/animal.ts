// Core domain types for the Animal entity.
// Keeping these well-defined enables seamless backend integration later
// by simply swapping the data access layer (lib/animals.ts).

export type AnimalSpecies = 'perro' | 'gato'
export type AnimalStatus = 'adopcion' | 'transito' | 'urgente'
export type AnimalSize = 'pequeño' | 'mediano' | 'grande'
export type AnimalGender = 'macho' | 'hembra'

export interface AnimalCompatibility {
  kids: boolean
  dogs: boolean
  cats: boolean
  smallSpaces: boolean
}

export interface Animal {
  id: string
  slug: string
  name: string
  species: AnimalSpecies
  status: AnimalStatus
  age: string
  ageMonths: number // for sorting by age
  gender: AnimalGender
  size: AnimalSize
  breed: string
  weight: string
  location: string
  description: string       // short, for cards
  fullDescription: string   // long, for detail page
  story: string             // rescue story
  images: string[]          // first image is the main one
  vaccinated: boolean
  castrated: boolean
  dewormed: boolean
  microchipped: boolean
  tags: string[]
  compatibility: AnimalCompatibility
  contactWhatsapp: string   // phone number for WhatsApp CTA
  createdAt: string         // ISO date — for sorting by newest
}

// Used when filtering the catalog
export interface AnimalFilters {
  species: AnimalSpecies | ''
  status: AnimalStatus | ''
  location: string
  search: string
  sortBy: 'urgencia' | 'recientes' | 'nombre'
}
