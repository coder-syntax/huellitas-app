// Animal detail page — server component with static generation.
// generateStaticParams pre-renders all animal pages at build time.
// Dynamic metadata provides proper SEO + Open Graph per animal.

import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Calendar, Weight, CheckCircle2, Heart } from 'lucide-react'
import { getAllAnimalSlugs, getAnimalBySlug } from '@/lib/animals'
import { AnimalGallery } from '@/components/AnimalGallery'
import { StatusBadge } from '@/components/ui/Badge'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { FavoriteButton } from '@/components/FavoriteButton'

interface PageProps {
  params: Promise<{ id: string }>
}

// Pre-render all animal pages at build time
export async function generateStaticParams() {
  const slugs = await getAllAnimalSlugs()
  return slugs.map((slug) => ({ id: slug }))
}

// No dynamic route fallback — 404 for unknown slugs at runtime
export const dynamicParams = false

// Dynamic metadata with Open Graph support
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const animal = await getAnimalBySlug(id)

  if (!animal) return { title: 'Animal no encontrado — Huellitas' }

  const title = `${animal.name} busca hogar — Huellitas`
  const description = animal.description
  const image = animal.images[0]

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, width: 800, height: 600, alt: `Foto de ${animal.name}` }],
      type: 'website',
      locale: 'es_AR',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

const SPECIES_LABEL: Record<string, string> = { perro: 'Perro', gato: 'Gato' }
const SIZE_LABEL: Record<string, string> = { pequeño: 'Pequeño', mediano: 'Mediano', grande: 'Grande' }

export default async function AnimalDetailPage({ params }: PageProps) {
  const { id } = await params
  const animal = await getAnimalBySlug(id)

  if (!animal) notFound()

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/animales" className="hover:text-amber-600 transition-colors">Animales</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{animal.name}</span>
          </nav>
        </div>
      </div>

      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Gallery */}
          <div>
            <AnimalGallery images={animal.images} altBase={animal.name} />
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <StatusBadge status={animal.status} />
                  <span className="text-sm text-gray-500 capitalize">{SPECIES_LABEL[animal.species]}</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">{animal.name}</h1>
                <p className="text-gray-500 mt-1">{animal.breed}</p>
              </div>
              <FavoriteButton animalId={animal.id} size="md" />
            </div>

            {/* Quick facts */}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: <Calendar size={16} />, label: 'Edad', value: animal.age },
                { icon: <MapPin size={16} />, label: 'Zona', value: animal.location },
                { icon: <Weight size={16} />, label: 'Peso', value: animal.weight },
                { icon: <span className="text-base">📏</span>, label: 'Tamaño', value: SIZE_LABEL[animal.size] },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-gray-50 rounded-xl p-3 text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-400 mb-1">
                    {icon}
                    <span className="text-xs">{label}</span>
                  </div>
                  <p className="font-semibold text-gray-800 text-sm">{value}</p>
                </div>
              ))}
            </dl>

            {/* Health badges */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Estado sanitario
              </h2>
              <div className="flex flex-wrap gap-2">
                {animal.vaccinated && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                    <CheckCircle2 size={14} /> Vacunado
                  </span>
                )}
                {animal.castrated && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                    <CheckCircle2 size={14} /> Castrado
                  </span>
                )}
                {animal.dewormed && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                    <CheckCircle2 size={14} /> Desparasitado
                  </span>
                )}
                {animal.microchipped && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                    <CheckCircle2 size={14} /> Microchip
                  </span>
                )}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Caracteristicas
              </h2>
              <div className="flex flex-wrap gap-2">
                {animal.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-amber-50 text-amber-700 capitalize"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Compatibility */}
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Compatible con
              </h2>
              <div className="flex gap-3 flex-wrap">
                {animal.compatibility.kids && (
                  <span className="text-sm text-gray-700">👶 Niños</span>
                )}
                {animal.compatibility.dogs && (
                  <span className="text-sm text-gray-700">🐕 Perros</span>
                )}
                {animal.compatibility.cats && (
                  <span className="text-sm text-gray-700">🐈 Gatos</span>
                )}
                {animal.compatibility.smallSpaces && (
                  <span className="text-sm text-gray-700">🏠 Espacios pequeños</span>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <WhatsAppButton
                phone={animal.contactWhatsapp}
                animalName={animal.name}
                className="flex-1"
                size="lg"
              />
              <Link
                href="/adoptar"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-4 rounded-xl transition-colors text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
              >
                <Heart size={20} />
                Iniciar adopción
              </Link>
            </div>
          </div>
        </div>

        {/* Description + Story */}
        <div className="mt-12 grid md:grid-cols-2 gap-10">
          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre {animal.name}</h2>
            <p className="text-gray-600 leading-relaxed">{animal.fullDescription}</p>
          </section>

          <section className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Su historia</h2>
            <p className="text-gray-600 leading-relaxed">{animal.story}</p>
          </section>
        </div>

        {/* Back CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/animales"
            className="text-amber-600 hover:text-amber-700 font-medium transition-colors"
          >
            ← Ver todos los animales
          </Link>
        </div>
      </article>
    </div>
  )
}