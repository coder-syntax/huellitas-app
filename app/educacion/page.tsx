import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Heart, Home, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Educación — Huellitas',
  description:
    'Guías y recursos sobre tenencia responsable, adopción consciente y cómo ser un hogar de tránsito para animales en Buenos Aires.',
  openGraph: {
    title: 'Educación — Huellitas',
    description: 'Todo lo que necesitás saber antes de adoptar o hacer tránsito.',
    type: 'website',
  },
}

const ARTICLES = [
  {
    href: '/educacion/tenencia-responsable',
    icon: <Heart size={28} className="text-red-500" />,
    bg: 'bg-red-50',
    tag: 'Guía esencial',
    title: 'Tenencia Responsable',
    description:
      'Qué implica realmente tener una mascota: compromisos, cuidados y el impacto positivo en la sociedad.',
    readTime: '5 min de lectura',
  },
  {
    href: '/educacion/antes-de-adoptar',
    icon: <BookOpen size={28} className="text-amber-500" />,
    bg: 'bg-amber-50',
    tag: 'Antes de empezar',
    title: 'Antes de Adoptar',
    description:
      'Todo lo que debés considerar antes de adoptar: espacio, tiempo, costos y cómo prepararte para la llegada.',
    readTime: '7 min de lectura',
  },
  {
    href: '/educacion/guia-transito',
    icon: <Home size={28} className="text-blue-500" />,
    bg: 'bg-blue-50',
    tag: 'Para tránsitos',
    title: 'Guía de Tránsito',
    description:
      'Cómo funciona el sistema de tránsito, qué esperamos de vos y cómo podés ayudar sin adoptar permanentemente.',
    readTime: '6 min de lectura',
  },
]

export default function EducationIndexPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Sección Educativa
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Adoptá con información, no por impulso
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Creemos que una adopción informada es la base de una relación duradera. Nuestras guías
            te preparan para este hermoso compromiso de vida.
          </p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className={`inline-flex p-3 rounded-xl ${article.bg} mb-4 w-fit`}>
                {article.icon}
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {article.tag}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                {article.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{article.readTime}</span>
                <span className="text-amber-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quiz CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-10 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">¿Listo/a para dar el paso?</h2>
          <p className="text-amber-50 mb-6">
            Hacé nuestro test de compatibilidad y te ayudamos a encontrar el animal ideal.
          </p>
          <Link
            href="/test-compatibilidad"
            className="inline-block bg-white text-amber-600 font-bold px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors"
          >
            Hacer el test gratis →
          </Link>
        </div>
      </section>
    </div>
  )
}
