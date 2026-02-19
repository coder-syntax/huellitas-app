// Cost calculator logic — pure functions, no side effects.
// Estimates monthly expenses of having a pet based on user inputs.

export type PetSize = 'pequeño' | 'mediano' | 'grande'
export type PetSpecies = 'perro' | 'gato'

export interface CalculatorInput {
  species: PetSpecies
  size: PetSize
  includesVet: boolean
  includesPetSitter: boolean
  includesGrooming: boolean
}

export interface CostItem {
  label: string
  min: number
  max: number
  category: 'essentials' | 'health' | 'services'
}

export interface CalculatorResult {
  items: CostItem[]
  totalMin: number
  totalMax: number
}

// Base costs in ARS (approximate, 2025)
const FOOD_COSTS: Record<PetSpecies, Record<PetSize, [number, number]>> = {
  perro: {
    pequeño: [8_000, 14_000],
    mediano: [14_000, 22_000],
    grande: [22_000, 38_000],
  },
  gato: {
    pequeño: [7_000, 12_000],
    mediano: [7_000, 12_000],
    grande: [7_000, 12_000],
  },
}

const TREATS_COSTS: Record<PetSize, [number, number]> = {
  pequeño: [2_000, 4_000],
  mediano: [3_000, 6_000],
  grande: [5_000, 10_000],
}

const HYGIENE_COSTS: Record<PetSpecies, [number, number]> = {
  perro: [2_000, 5_000],
  gato: [3_000, 6_000], // arena sanitaria
}

const VET_COSTS: Record<PetSpecies, [number, number]> = {
  perro: [8_000, 20_000],
  gato: [6_000, 15_000],
}

const PET_SITTER_COSTS: Record<PetSize, [number, number]> = {
  pequeño: [15_000, 30_000],
  mediano: [20_000, 40_000],
  grande: [25_000, 50_000],
}

const GROOMING_COSTS: Record<PetSize, [number, number]> = {
  pequeño: [8_000, 15_000],
  mediano: [12_000, 20_000],
  grande: [17_000, 30_000],
}

export function computeMonthlyCosts(input: CalculatorInput): CalculatorResult {
  const items: CostItem[] = []

  const [foodMin, foodMax] = FOOD_COSTS[input.species][input.size]
  items.push({ label: 'Alimento', min: foodMin, max: foodMax, category: 'essentials' })

  const [treatsMin, treatsMax] = TREATS_COSTS[input.size]
  items.push({ label: 'Snacks y premios', min: treatsMin, max: treatsMax, category: 'essentials' })

  const [hygMin, hygMax] = HYGIENE_COSTS[input.species]
  const hygieneLabel = input.species === 'gato' ? 'Arena sanitaria y limpieza' : 'Higiene y limpieza'
  items.push({ label: hygieneLabel, min: hygMin, max: hygMax, category: 'essentials' })

  if (input.includesVet) {
    const [vetMin, vetMax] = VET_COSTS[input.species]
    items.push({ label: 'Veterinario y medicamentos', min: vetMin, max: vetMax, category: 'health' })
  }

  if (input.includesPetSitter) {
    const [psMin, psMax] = PET_SITTER_COSTS[input.size]
    items.push({ label: 'Paseador / Pet sitter', min: psMin, max: psMax, category: 'services' })
  }

  if (input.includesGrooming) {
    const [grMin, grMax] = GROOMING_COSTS[input.size]
    items.push({ label: 'Peluquería / Baño', min: grMin, max: grMax, category: 'services' })
  }

  const totalMin = items.reduce((acc, i) => acc + i.min, 0)
  const totalMax = items.reduce((acc, i) => acc + i.max, 0)

  return { items, totalMin, totalMax }
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(amount)
}
