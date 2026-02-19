import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Antes de Adoptar — Huellitas',
  description:
    'Todo lo que necesitás considerar antes de adoptar: espacio, tiempo, costos, la llegada al hogar y cómo prepararte.',
  openGraph: {
    title: 'Antes de Adoptar — Huellitas',
    description: 'Adoptá con información. Leé esta guía antes de tomar la decisión.',
    type: 'article',
  },
}

export default function AntesDeAdoptarPage() {
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
            <span className="text-gray-900">Antes de Adoptar</span>
          </nav>
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Antes de empezar</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">Antes de Adoptar</h1>
          <p className="text-gray-500">7 min de lectura · Actualizado 2025</p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xl text-gray-600 leading-relaxed mb-10">
          Adoptar es un acto de amor, pero también de responsabilidad. Esta guía te ayuda a evaluar
          si estás preparado/a y qué necesitás tener en cuenta antes de dar el paso.
        </p>

        {/* Checklist */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Checklist previo a la adopción</h2>
          <div className="space-y-4">
            {[
              {
                id: 'familia',
                question: '¿Toda la familia está de acuerdo?',
                details: 'La convivencia con una mascota afecta a todos. Es importante que todos los miembros del hogar estén comprometidos.',
              },
              {
                id: 'tiempo',
                question: '¿Tenés tiempo disponible cada día?',
                details: 'Un perro necesita al menos 2-3 paseos diarios y atención constante. Un gato, aunque más independiente, necesita juego e interacción diaria.',
              },
              {
                id: 'espacio',
                question: '¿Tu vivienda es adecuada?',
                details: 'Para perros grandes o medianos, lo ideal es un patio o acceso frecuente a espacios abiertos. Los gatos se adaptan bien a departamentos.',
              },
              {
                id: 'economia',
                question: '¿Podés costear los gastos?',
                details: 'Comida, veterinario, vacunas, accesorios y posibles emergencias. Usá nuestra calculadora para estimar el costo mensual.',
              },
              {
                id: 'largo_plazo',
                question: '¿Estás listo/a para un compromiso de 10-15 años?',
                details: 'La vida de un perro o gato puede extenderse hasta 15 o más años. Cambios de vida como mudanzas, hijos o viajes deben considerarse.',
              },
              {
                id: 'alergias',
                question: '¿Algún conviviente tiene alergias?',
                details: 'Visitá al médico antes de adoptar si hay dudas. Hay razas más aptas para personas alérgicas.',
              },
            ].map(({ id, question, details }) => (
              <div key={id} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-semibold text-gray-900 mb-1">✓ {question}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Perro vs. Gato: ¿Cuál es para vos?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3">🐕 Perro</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>Requiere más tiempo y atención</li>
                <li>Necesita paseos diarios obligatorios</li>
                <li>Mayor costo mensual (comida, baño, etc.)</li>
                <li>Vínculo más dependiente y demostrativo</li>
                <li>Mejor para personas activas o familias</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-3">🐈 Gato</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>Más independiente y autosuficiente</li>
                <li>Se adapta mejor a departamentos</li>
                <li>Menor costo mensual en general</li>
                <li>Ideal para personas con poco tiempo</li>
                <li>Vínculo profundo pero a su ritmo</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">La llegada al hogar</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            El primer mes es fundamental para la adaptación. El animal viene de un entorno desconocido
            y necesita tiempo para sentirse seguro/a.
          </p>
          <ul className="space-y-3">
            {[
              'Preparar el espacio antes de que llegue: cama, comedero, bebedero y zona de higiene.',
              'Darle tiempo para explorar sin presionarlo/la.',
              'Evitar visitas y situaciones ruidosas durante los primeros días.',
              'Establecer rutinas desde el primer día (horarios de comida, paseo, juego).',
              'Visitar al veterinario dentro de las primeras 72 horas.',
              'Ser paciente: la adaptación puede tomar desde días hasta meses.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-amber-500 mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <div className="bg-amber-50 rounded-2xl p-6 text-center mb-8">
          <p className="font-semibold text-gray-900 mb-3">
            ¿Ya te convenciste? Hacé el test de compatibilidad.
          </p>
          <Link
            href="/test-compatibilidad"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-2.5 rounded-xl transition-colors"
          >
            Hacer el test →
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-gray-200">
          <Link
            href="/educacion/guia-transito"
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors"
          >
            Siguiente: Guía de Tránsito →
          </Link>
          <Link
            href="/educacion"
            className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors"
          >
            ← Todas las guías
          </Link>
        </div>
      </article>
    </div>
  )
}
