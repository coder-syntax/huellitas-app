import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tenencia Responsable — Huellitas',
  description:
    'Conocé qué implica la tenencia responsable de mascotas: compromisos legales, cuidados esenciales y cómo ser un dueño/a consciente.',
  openGraph: {
    title: 'Tenencia Responsable — Huellitas',
    description: 'Todo lo que necesitás saber para ser un dueño/a responsable.',
    type: 'article',
  },
}

export default function TenenciaResponsablePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-amber-600">Inicio</Link>
            <span>/</span>
            <Link href="/educacion" className="hover:text-amber-600">Educación</Link>
            <span>/</span>
            <span className="text-gray-900">Tenencia Responsable</span>
          </nav>
          <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">Guía esencial</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">Tenencia Responsable</h1>
          <p className="text-gray-500">5 min de lectura · Actualizado 2025</p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
        <p className="text-xl text-gray-600 leading-relaxed not-prose mb-8">
          Tener una mascota es mucho más que compañía. Es un compromiso de vida que implica
          responsabilidades legales, económicas y emocionales.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es la tenencia responsable?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La tenencia responsable es el conjunto de compromisos y acciones que un dueño/a adopta para
            garantizar el bienestar físico y emocional de su mascota, la seguridad de la comunidad y el
            cuidado del medio ambiente.
          </p>
          <p className="text-gray-600 leading-relaxed">
            En Argentina, la Ley 14.346 protege a los animales contra el maltrato y abandono. El
            incumplimiento puede derivar en consecuencias legales. Pero más allá de la ley, la tenencia
            responsable es un acto de empatía y amor.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Los cinco pilares del bienestar animal</h2>
          <div className="grid gap-4 not-prose">
            {[
              { emoji: '🍽️', title: 'Alimentación adecuada', desc: 'Comida y agua fresca de calidad acorde a la especie, edad y tamaño.' },
              { emoji: '🏠', title: 'Entorno apropiado', desc: 'Espacio, temperatura y estimulación ambiental correcta.' },
              { emoji: '❤️', title: 'Salud garantizada', desc: 'Vacunas, desparasitación, visitas veterinarias regulares.' },
              { emoji: '🧠', title: 'Bienestar mental', desc: 'Expresar comportamientos naturales, juego y socialización.' },
              { emoji: '🛡️', title: 'Vida libre de miedo', desc: 'Protección de situaciones de angustia, dolor o miedo.' },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100">
                <span className="text-2xl flex-shrink-0">{emoji}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Obligaciones concretas</h2>
          <ul className="space-y-3 not-prose list-none p-0">
            {[
              'Mantener las vacunas y la desparasitación al día.',
              'Castrar a tu mascota (evita la superpoblación y mejora su salud).',
              'Identificar con microchip o chapa con datos de contacto.',
              'No dejar al animal solo por períodos prolongados sin atención.',
              'Recoger las heces en espacios públicos.',
              'Cuidar que no moleste ni agreda a terceros.',
              'Nunca abandoner al animal — el abandono es delito.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-600">
                <span className="text-amber-500 mt-1 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Impacto positivo en la comunidad</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cada dueño/a responsable reduce la presión sobre los refugios y organizaciones de rescate.
            Al castrar, vacunar y cuidar correctamente, contribuís a:
          </p>
          <ul className="space-y-2 not-prose">
            {[
              'Reducir la sobrepoblación de animales en situación de calle.',
              'Disminuir la transmisión de enfermedades zoonóticas.',
              'Crear comunidades más limpias y seguras.',
              'Dar el ejemplo a niños y futuros dueños/as.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-green-500 mt-0.5">●</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Navigation */}
        <div className="not-prose flex flex-wrap gap-4 mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/educacion/antes-de-adoptar"
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors"
          >
            Siguiente: Antes de Adoptar →
          </Link>
          <Link
            href="/educacion"
            className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors"
          >
            ← Ver todas las guías
          </Link>
        </div>
      </article>
    </div>
  )
}
