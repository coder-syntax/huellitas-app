import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guía de Tránsito — Huellitas',
  description:
    'Cómo funciona el tránsito de animales, qué se espera de vos como hogar transitorio y cómo ayudar sin necesidad de adoptar permanentemente.',
  openGraph: {
    title: 'Guía de Tránsito — Huellitas',
    description: 'Todo lo que necesitás saber para ser un hogar de tránsito.',
    type: 'article',
  },
}

export default function GuiaTransitoPage() {
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
            <span className="text-gray-900">Guía de Tránsito</span>
          </nav>
          <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">Para tránsitos</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">Guía de Tránsito</h1>
          <p className="text-gray-500">6 min de lectura · Actualizado 2025</p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-xl text-gray-600 leading-relaxed mb-10">
          El tránsito es una de las formas más valiosas de ayudar sin adoptar. Un hogar transitorio
          puede salvar literalmente la vida de un animal mientras espera su familia definitiva.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Qué es el tránsito?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            El tránsito es el alojamiento temporario de un animal rescatado en un hogar particular,
            hasta que encuentre una familia adoptante. La organización se hace cargo de los gastos
            veterinarios y el alimento; vos ponés el espacio y el amor.
          </p>
          <div className="bg-blue-50 rounded-xl p-5 text-sm text-blue-800 font-medium">
            💡 El tránsito no es adopción. El animal puede estar con vos días, semanas o meses.
            Podés decir que no a cualquier momento si las condiciones cambian.
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">¿Qué cubrimos nosotros? ¿Qué ponés vos?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">✅ Huellitas cubre:</h3>
              <ul className="space-y-1.5 text-sm text-green-700">
                <li>Vacunas y controles veterinarios</li>
                <li>Antiparasitarios y medicamentos</li>
                <li>Castración (si corresponde)</li>
                <li>Alimento básico</li>
                <li>Accesorios esenciales (collar, correa, cama)</li>
                <li>Gastos de emergencia médica</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-5">
              <h3 className="font-bold text-amber-800 mb-3">🏠 Vos aportás:</h3>
              <ul className="space-y-1.5 text-sm text-amber-700">
                <li>Espacio cálido y seguro en tu hogar</li>
                <li>Tiempo y afecto diario</li>
                <li>Supervisión y cuidados básicos</li>
                <li>Participar en las visitas de adopción</li>
                <li>Informar sobre el carácter del animal</li>
                <li>Compromiso hasta que encuentre hogar</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Requisitos para ser tránsito</h2>
          <ul className="space-y-3">
            {[
              'Tener más de 18 años.',
              'Vivir en un espacio que permita albergar al animal (aunque sea un departamento).',
              'Contar con el acuerdo de todos los convivientes.',
              'Comprometerse a no adoptar sin pasar por el proceso formal (para garantizar el seguimiento).',
              'Comunicar novedades sobre el animal a la organización.',
              'No tener más de 3 animales propios (para garantizar el bienestar de todos).',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">●</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">El "síndrome del tránsito": la parte difícil</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Es normal encariñarse. Muchos tránsitos terminan adoptando al animal que tenían —  a eso lo
            llamamos "tránsito fallido" con cariño. Pero si ya tenés tu límite de animales o no podés
            seguir, el proceso de despedida es duro.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Nuestro consejo: en lugar de no apegarte (imposible), recordá que el amor que le diste
            durante el tránsito lo preparó para ser el mejor compañero de su nueva familia. Eso es un
            regalo enorme y una forma de amor muy generosa.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo empezar?</h2>
          <ol className="space-y-3">
            {[
              'Completá el formulario de solicitud de tránsito en nuestra web.',
              'Nos contactamos para conocerte y entender tus condiciones de vivienda.',
              'Te asignamos un animal según tu perfil y disponibilidad.',
              'Un voluntario te lleva el animal con todos sus documentos y pertenencias.',
              'Mantenemos contacto permanente para apoyarte en el proceso.',
              'Cuando aparezca el adoptante ideal, lo acompañamos en la entrega.',
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-center text-white mb-8">
          <h3 className="text-xl font-bold mb-2">¿Querés ser tránsito?</h3>
          <p className="text-blue-100 mb-6 text-sm">
            Un hogar de tránsito puede ser la diferencia entre la vida y la muerte de un animal.
          </p>
          <Link
            href="/transito"
            className="inline-block bg-white text-blue-600 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Anotarme como tránsito →
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 pt-8 border-t border-gray-200">
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
