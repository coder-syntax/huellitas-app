'use client'

// Catalog page — client component needed for interactive filters.
// Data is fetched at module level (no suspense needed for static array).
// When integrating an API, wrap in Suspense + async server component.

import { type Metadata } from 'next'
import { ANIMALS_DATA, LOCATIONS } from '@/data/animals'
import { AnimalCard } from '@/components/AnimalCard'
import { AnimalFilters } from '@/components/AnimalFilters'
import { useAnimalFilters } from '@/hooks/useAnimalFilters'
import Link from 'next/link'

// NOTE: metadata can't be exported from a 'use client' file in Next.js.
// The metadata for this page is defined in a separate layout or the root layout.
// For per-page metadata in a client component, use a server wrapper pattern.

export default function AnimalsPage() {
  const {
    filters,
    filteredAnimals,
    updateFilter,
    resetFilters,
    hasActiveFilters,
    totalCount,
    filteredCount,
  } = useAnimalFilters(ANIMALS_DATA)

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Nuestros Animales</h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Cada uno tiene una historia única y mucho amor para dar. Encontrá a tu
            compañero ideal.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <AnimalFilters
                filters={filters}
                locations={LOCATIONS}
                filteredCount={filteredCount}
                totalCount={totalCount}
                hasActiveFilters={hasActiveFilters}
                onFilterChange={updateFilter}
                onReset={resetFilters}
              />
            </div>
          </aside>

          {/* Grid */}
          <main className="flex-1 min-w-0">
            {filteredAnimals.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredAnimals.map((animal) => (
                  <AnimalCard key={animal.id} animal={animal} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <span className="text-5xl mb-4">🔍</span>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Sin resultados
                </h2>
                <p className="text-gray-500 mb-6">
                  No encontramos animales con esos filtros. Intentá con otros criterios.
                </p>
                <button
                  onClick={resetFilters}
                  className="text-amber-600 font-medium hover:underline"
                >
                  Limpiar filtros
                </button>
              </div>
            )}

            {/* Bottom CTA */}
            {filteredAnimals.length > 0 && (
              <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-10 text-center text-white">
                <h2 className="text-2xl font-bold mb-2">¿No estás seguro/a por dónde empezar?</h2>
                <p className="mb-6 text-amber-50">
                  Hacé nuestro test de compatibilidad y te recomendamos el animal ideal para vos.
                </p>
                <Link
                  href="/test-compatibilidad"
                  className="inline-block bg-white text-amber-600 font-bold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors"
                >
                  Hacer el test →
                </Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}