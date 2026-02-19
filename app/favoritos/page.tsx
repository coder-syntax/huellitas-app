'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { Heart, Trash2 } from 'lucide-react'
import { useFavorites } from '@/hooks/useFavorites'
import { ANIMALS_DATA } from '@/data/animals'
import { AnimalCard } from '@/components/AnimalCard'
import { AnimalCardSkeleton } from '@/components/ui/Skeleton'

// Note: Metadata cannot be exported from client components.
// SEO is handled via the root layout for this page.

export default function FavoritesPage() {
  const { favorites, hydrated, clearFavorites, count } = useFavorites()

  const favoriteAnimals = ANIMALS_DATA.filter((a) => favorites.includes(a.id))

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                <Heart className="text-red-500" fill="currentColor" />
                Mis Favoritos
              </h1>
              <p className="text-gray-500 mt-1">
                {hydrated ? (
                  count > 0 ? `${count} animal${count !== 1 ? 'es' : ''} guardado${count !== 1 ? 's' : ''}` : 'Todavía no tenés favoritos guardados'
                ) : (
                  'Cargando...'
                )}
              </p>
            </div>
            {hydrated && count > 0 && (
              <button
                onClick={clearFavorites}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 font-medium transition-colors"
              >
                <Trash2 size={16} />
                Limpiar todos
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Loading state (hydration) */}
        {!hydrated && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <AnimalCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {hydrated && favoriteAnimals.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Heart size={64} className="text-gray-200 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Aún no guardaste ningún favorito
            </h2>
            <p className="text-gray-500 mb-8 max-w-sm">
              Navegá el catálogo y tocá el corazón en las tarjetas de los animales que te gusten.
            </p>
            <Link
              href="/animales"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
            >
              Ver todos los animales
            </Link>
          </div>
        )}

        {/* Favorites grid */}
        {hydrated && favoriteAnimals.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
