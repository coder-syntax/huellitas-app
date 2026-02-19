'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnimalGalleryProps {
  images: string[]
  altBase: string
}

export function AnimalGallery({ images, altBase }: AnimalGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0)

  const prev = () => setActiveIdx((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setActiveIdx((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={images[activeIdx]}
          alt={`${altBase} — foto ${activeIdx + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={activeIdx === 0}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Foto siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow transition-all"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Ver foto ${i + 1}`}
                  className={cn(
                    'w-2 h-2 rounded-full transition-all',
                    i === activeIdx ? 'bg-white w-4' : 'bg-white/60'
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={cn(
                'relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden ring-2 transition-all',
                i === activeIdx ? 'ring-amber-500' : 'ring-transparent hover:ring-gray-300'
              )}
            >
              <Image
                src={src}
                alt={`${altBase} — miniatura ${i + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
