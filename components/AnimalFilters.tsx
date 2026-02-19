'use client'

import { Search, X, SlidersHorizontal } from 'lucide-react'
import type { AnimalFilters as TAnimalFilters } from '@/types'
import { cn } from '@/lib/utils'

interface AnimalFiltersProps {
  filters: TAnimalFilters
  locations: string[]
  filteredCount: number
  totalCount: number
  hasActiveFilters: boolean
  onFilterChange: <K extends keyof TAnimalFilters>(key: K, value: TAnimalFilters[K]) => void
  onReset: () => void
}

const STATUS_OPTIONS = [
  { value: '', label: 'Todos los estados' },
  { value: 'urgente', label: '🔴 Urgente' },
  { value: 'adopcion', label: '🟢 En Adopción' },
  { value: 'transito', label: '🔵 En Tránsito' },
]

const SPECIES_OPTIONS = [
  { value: '', label: 'Todas las especies' },
  { value: 'perro', label: '🐕 Perros' },
  { value: 'gato', label: '🐈 Gatos' },
]

const SORT_OPTIONS = [
  { value: 'urgencia', label: 'Por urgencia' },
  { value: 'recientes', label: 'Más recientes' },
  { value: 'nombre', label: 'Por nombre' },
]

const selectBase =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 shadow-sm transition focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400'

export function AnimalFilters({
  filters,
  locations,
  filteredCount,
  totalCount,
  hasActiveFilters,
  onFilterChange,
  onReset,
}: AnimalFiltersProps) {
  return (
    <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-800 font-semibold">
          <SlidersHorizontal size={18} />
          Filtros
        </div>
        {hasActiveFilters && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-sm text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            <X size={14} />
            Limpiar
          </button>
        )}
      </div>

      {/* Result count */}
      <p className="text-sm text-gray-500">
        Mostrando{' '}
        <span className="font-semibold text-gray-800">{filteredCount}</span>
        {' de '}
        <span className="font-semibold text-gray-800">{totalCount}</span>{' '}
        animales
      </p>

      {/* Search */}
      <div>
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1.5">
          Buscar por nombre
        </label>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="search"
            type="search"
            placeholder="Ej. Luna, Max..."
            value={filters.search}
            onChange={(e) => onFilterChange('search', e.target.value)}
            className={cn(selectBase, 'pl-9')}
          />
        </div>
      </div>

      {/* Species */}
      <div>
        <label htmlFor="species" className="block text-sm font-medium text-gray-700 mb-1.5">
          Especie
        </label>
        <select
          id="species"
          value={filters.species}
          onChange={(e) => onFilterChange('species', e.target.value as TAnimalFilters['species'])}
          className={selectBase}
        >
          {SPECIES_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Status */}
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1.5">
          Estado
        </label>
        <select
          id="status"
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value as TAnimalFilters['status'])}
          className={selectBase}
        >
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1.5">
          Zona / Ciudad
        </label>
        <select
          id="location"
          value={filters.location}
          onChange={(e) => onFilterChange('location', e.target.value)}
          className={selectBase}
        >
          <option value="">Todas las zonas</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Sort */}
      <div>
        <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-1.5">
          Ordenar por
        </label>
        <select
          id="sortBy"
          value={filters.sortBy}
          onChange={(e) => onFilterChange('sortBy', e.target.value as TAnimalFilters['sortBy'])}
          className={selectBase}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </aside>
  )
}
