import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Ruler } from 'lucide-react'
import type { Animal } from '@/types'
import { StatusBadge } from '@/components/ui/Badge'
import { FavoriteButton } from '@/components/FavoriteButton'
import { cn } from '@/lib/utils'

const SIZE_LABEL: Record<Animal['size'], string> = {
  pequeño: 'Pequeño',
  mediano: 'Mediano',
  grande: 'Grande',
}

const SPECIES_EMOJI: Record<Animal['species'], string> = {
  perro: '🐕',
  gato: '🐈',
}

interface AnimalCardProps {
  animal: Animal
  className?: string
}

// AnimalCard is a presentational component — no data fetching.
// Client-side interactivity (favorites) is isolated in FavoriteButton.
export function AnimalCard({ animal, className }: AnimalCardProps) {
  return (
    <article
      className={cn(
        'group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col',
        animal.status === 'urgente' && 'ring-2 ring-red-400',
        className
      )}
    >
      {/* Image */}
      <div className="relative h-56 bg-gray-100 overflow-hidden flex-shrink-0">
        <Image
          src={animal.images[0]}
          alt={`Foto de ${animal.name}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <StatusBadge status={animal.status} />
        </div>
        <div className="absolute top-3 right-3">
          <FavoriteButton animalId={animal.id} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {SPECIES_EMOJI[animal.species]} {animal.name}
          </h3>
          <span className="text-sm text-gray-500 ml-2 whitespace-nowrap capitalize">
            {animal.gender}
          </span>
        </div>

        <p className="text-sm text-gray-500 mb-2">
          {animal.breed} · {animal.age}
        </p>

        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <MapPin size={13} />
            {animal.location}
          </span>
          <span className="flex items-center gap-1">
            <Ruler size={13} />
            {SIZE_LABEL[animal.size]}
          </span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 flex-1 mb-4">
          {animal.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {animal.vaccinated && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
              ✓ Vacunado
            </span>
          )}
          {animal.castrated && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              ✓ Castrado
            </span>
          )}
          {animal.dewormed && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
              ✓ Desparasitado
            </span>
          )}
        </div>

        <Link
          href={`/animales/${animal.slug}`}
          className="block w-full text-center bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold py-2.5 rounded-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
        >
          Conocer a {animal.name}
        </Link>
      </div>
    </article>
  )
}

export default AnimalCard
