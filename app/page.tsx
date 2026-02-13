import Link from "next/link";
import AnimalCard from "@/components/AnimalCard";
import { Heart, Home as HomeIcon, HandHeart, Users } from "lucide-react";

// Mock data - después esto vendrá de una base de datos
const featuredAnimals = [
  {
    id: 1,
    name: "Luna",
    age: "2 años",
    gender: "Hembra",
    size: "Mediano",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&h=500&fit=crop",
    description: "Luna es una perrita muy cariñosa que busca un hogar lleno de amor. Le encanta jugar y es excelente con niños.",
    location: "Buenos Aires",
    vaccinated: true,
    castrated: true,
  },
  {
    id: 2,
    name: "Max",
    age: "3 años",
    gender: "Macho",
    size: "Grande",
    image: "https://images.unsplash.com/photo-1568572933382-74d440642117?w=500&h=500&fit=crop",
    description: "Max es un perro guardian leal y protector. Necesita un hogar con espacio para correr.",
    location: "CABA",
    vaccinated: true,
    castrated: true,
  },
  {
    id: 3,
    name: "Michi",
    age: "1 año",
    gender: "Macho",
    size: "Pequeño",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&h=500&fit=crop",
    description: "Michi es un gatito juguetón y muy curioso. Ideal para departamento.",
    location: "Buenos Aires",
    vaccinated: true,
    castrated: false,
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Darles una segunda oportunidad
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-50">
              En Huellitas trabajamos para rescatar, cuidar y encontrar hogares
              amorosos para animales en situación de calle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/adoptar"
                className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors text-center"
              >
                Adoptar Ahora
              </Link>
              <Link
                href="/ayudar"
                className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-800 transition-colors text-center"
              >
                Cómo Ayudar
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Sobre Huellitas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos una organización sin fines de lucro dedicada al rescate,
              rehabilitación y adopción responsable de animales en situación de
              vulnerabilidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Heart className="text-amber-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adopciones</h3>
              <p className="text-gray-600">
                Conectamos animales con familias amorosas
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <HomeIcon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hogares de Tránsito</h3>
              <p className="text-gray-600">
                Cuidado temporal hasta encontrar su hogar definitivo
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <HandHeart className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ayuda</h3>
              <p className="text-gray-600">
                Múltiples formas de colaborar con nuestra causa
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidad</h3>
              <p className="text-gray-600">
                Más de 500 voluntarios comprometidos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Animals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Conoce a nuestros animales
            </h2>
            <p className="text-xl text-gray-600">
              Ellos están esperando encontrar un hogar lleno de amor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/animales"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Ver todos los animales
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para cambiar una vida?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Cada adopción, donación o colaboración marca la diferencia.
            Únete a nuestra comunidad y ayúdanos a darles la vida que merecen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/adoptar"
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-colors"
            >
              Quiero Adoptar
            </Link>
            <Link
              href="/transito"
              className="bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-800 transition-colors"
            >
              Ser Hogar de Tránsito
            </Link>
            <Link
              href="/ayudar"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              Ayudar de Otra Forma
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
