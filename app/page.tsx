import Link from 'next/link';
import AnimalCard from '@/components/AnimalCard';
import { getFeaturedAnimals, getAnimalsByStatus } from '@/lib/animals';
import { Heart, Home as HomeIcon, BookOpen, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Huellitas - Adopcion y Rescate Animal en Buenos Aires',
  description: 'Encontra tu companero ideal. Adopta perros y gatos rescatados. Se hogar de transito o ayuda con una donacion.',
};

export default async function Home() {
  const [featuredAnimals, urgentAnimals] = await Promise.all([
    getFeaturedAnimals(3),
    getAnimalsByStatus('urgente'),
  ]);

  const stats = [
    { value: '200+', label: 'Animales adoptados' },
    { value: '50+', label: 'Hogares de transito' },
    { value: '5', label: 'Anos de trayectoria' },
    { value: '500+', label: 'Voluntarios activos' },
  ];

  const features = [
    {
      href: '/test-compatibilidad',
      emoji: '',
      title: 'Test de compatibilidad',
      description: 'Responde 6 preguntas y descubre que tipo de mascota se adapta mejor a tu estilo de vida.',
      color: 'bg-violet-50 border-violet-200',
      textColor: 'text-violet-700',
    },
    {
      href: '/calculadora',
      emoji: '',
      title: 'Calculadora de costos',
      description: 'Estima cuanto cuesta tener un perro o gato por mes, incluyendo veterinario y alimento.',
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700',
    },
    {
      href: '/educacion',
      emoji: '',
      title: 'Centro educativo',
      description: 'Guias sobre tenencia responsable, que esperar antes de adoptar y como ser un buen transito.',
      color: 'bg-emerald-50 border-emerald-200',
      textColor: 'text-emerald-700',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl"></div>
          <div className="absolute bottom-10 right-10 text-8xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            {urgentAnimals.length > 0 && (
              <Link
                href="/animales?status=urgente"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 transition-colors backdrop-blur-sm"
              >
                {urgentAnimals.length} animal{urgentAnimals.length !== 1 ? 'es' : ''} en situacion urgente
              </Link>
            )}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Darles una segunda oportunidad
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-50 leading-relaxed">
              En Huellitas rescatamos, cuidamos y encontramos hogares amorosos para animales en situacion de calle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/animales"
                className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-50 transition-colors text-center shadow-sm"
              >
                Ver animales en adopcion
              </Link>
              <Link
                href="/test-compatibilidad"
                className="bg-white/20 hover:bg-white/30 border border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors text-center backdrop-blur-sm"
              >
                Test de compatibilidad
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
            <path d="M0 80L1440 80L1440 40C1200 70 960 80 720 75C480 70 240 50 0 40Z" fill="#F9FAFB" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
              <p className="text-3xl font-bold text-amber-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Animals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Conoce a nuestros animales</h2>
              <p className="text-gray-500 mt-2">Ellos estan esperando un hogar lleno de amor</p>
            </div>
            <Link href="/animales" className="hidden sm:inline-block text-amber-600 hover:text-amber-700 font-semibold text-sm">
              Ver todos 
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/animales"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              Ver todos los animales
            </Link>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Herramientas para adoptantes</h2>
            <p className="text-gray-500 mt-2">Toma la mejor decision con informacion clara y util</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className={`block p-6 rounded-2xl border ${f.color} hover:shadow-md transition-shadow group`}
              >
                <span className="text-4xl mb-4 block">{f.emoji}</span>
                <h3 className={`text-lg font-bold mb-2 group-hover:underline ${f.textColor}`}>{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other ways to help */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Otras formas de colaborar</h2>
            <p className="text-gray-500 mt-2">Adoptar no es la unica manera de ayudar</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {([
              { href: '/transito', icon: HomeIcon, title: 'Ser transito', desc: 'Dales un hogar temporal mientras encuentran el definitivo.', color: 'text-blue-500', bg: 'bg-blue-50' },
              { href: '/ayudar', icon: Heart, title: 'Donar', desc: 'Ayuda con alimento, medicamentos o donacion economica.', color: 'text-rose-500', bg: 'bg-rose-50' },
              { href: '/ayudar', icon: Users, title: 'Voluntariar', desc: 'Sumate a eventos, ferias de adopcion y campanas.', color: 'text-amber-500', bg: 'bg-amber-50' },
              { href: '/educacion', icon: BookOpen, title: 'Difundir', desc: 'Comparte nuestras publicaciones y ayuda a dar visibilidad.', color: 'text-emerald-500', bg: 'bg-emerald-50' },
            ] as Array<{ href: string; icon: React.ElementType; title: string; desc: string; color: string; bg: string }>).map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`${item.bg} p-4 rounded-xl mb-4`}>
                  <item.icon className={item.color} size={28} />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Listo para cambiar una vida?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-50">
            Cada adopcion, donacion o colaboracion marca la diferencia. Unite a nuestra comunidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/adoptar" className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-50 transition-colors">
              Quiero adoptar
            </Link>
            <Link href="/transito" className="bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-800 transition-colors">
              Ser hogar de transito
            </Link>
            <Link href="/contacto" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors">
              Contactarnos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}