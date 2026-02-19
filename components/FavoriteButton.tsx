'use client'

import { Heart } from 'lucide-react'
import { useFavorites } from '@/hooks/useFavorites'
import { cn } from '@/lib/utils'

interface FavoriteButtonProps {
  animalId: string
  size?: 'sm' | 'md'
}

export function FavoriteButton({ animalId, size = 'sm' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, hydrated } = useFavorites()
  const active = hydrated && isFavorite(animalId)

  const sizeClasses = size === 'sm' ? 'p-1.5' : 'p-2'
  const iconSize = size === 'sm' ? 18 : 22

  return (
    <button
      onClick={(e) => {
        e.preventDefault() // prevent card link navigation
        e.stopPropagation()
        toggleFavorite(animalId)
      }}
      aria-label={active ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      aria-pressed={active}
      className={cn(
        'rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
        sizeClasses,
        active
          ? 'bg-red-500 text-white shadow-md'
          : 'bg-white/90 text-gray-500 hover:text-red-500 hover:bg-white shadow'
      )}
    >
      <Heart
        size={iconSize}
        className={cn('transition-transform duration-200', active && 'scale-110')}
        fill={active ? 'currentColor' : 'none'}
      />
    </button>
  )
}
