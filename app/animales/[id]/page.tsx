import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Heart, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

// Mock data - en producción vendría de una base de datos
const animals = [
  {
    id: 1,
    name: "Luna",
    age: "2 años",
    gender: "Hembra",
    size: "Mediano",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop",
    description: "Luna es una perrita muy cariñosa que busca un hogar lleno de amor. Le encanta jugar y es excelente con niños. Fue rescatada de la calle hace 3 meses y desde entonces ha demostrado ser una compañera fiel y amorosa.",
    location: "Buenos Aires",
    vaccinated: true,
    castrated: true,
    weight: "12 kg",
    personalityTraits: ["Cariñosa", "Juguetona", "Sociable", "Educada"],
    healthStatus: "Excelente estado de salud. Todas las vacunas al día.",
    story: "Luna fue encontrada en las calles de Buenos Aires, con mucho miedo pero con una dulzura increíble. Después de varios meses de rehabilitación, está lista para encontrar una familia que la ame tanto como ella los amará a ellos.",
  },
  // Agregar más animales según sea necesario
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AnimalDetailPage({ params }: PageProps) {
  const { id } = await params;
  const animal = animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/animales"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6"
        >
          ← Volver a todos los animales
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="relative h-96 md:h-full min-h-[500px] bg-gray-200">
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-4 right-4">
                <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {animal.size}
                </span>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    {animal.name}
                  </h1>
                  <div className="flex items-center text-gray-600 gap-4">
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-1" />
                      <span>{animal.age}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-1" />
                      <span>{animal.location}</span>
                    </div>
                  </div>
                </div>
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                  <Share2 size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Género</p>
                  <p className="font-semibold text-gray-800">{animal.gender}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600 text-sm">Peso</p>
                  <p className="font-semibold text-gray-800">{animal.weight}</p>
                </div>
              </div>

              {/* Health Status */}
              <div className="flex gap-3 mb-6">
                {animal.vaccinated && (
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    ✓ Vacunado
                  </span>
                )}
                {animal.castrated && (
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    ✓ Castrado
                  </span>
                )}
              </div>

              {/* Personality Traits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Personalidad
                </h3>
                <div className="flex flex-wrap gap-2">
                  {animal.personalityTraits.map((trait, index) => (
                    <span
                      key={index}
                      className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href="/adoptar"
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
                >
                  <Heart size={20} />
                  Quiero Adoptar a {animal.name}
                </Link>
                <Link
                  href="/contacto"
                  className="block text-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded-lg font-semibold transition-colors"
                >
                  Hacer una Consulta
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Info */}
          <div className="p-8 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Sobre {animal.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {animal.description}
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Su Historia
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {animal.story}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Estado de Salud
                </h2>
                <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                  <p className="text-green-800">{animal.healthStatus}</p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Requisitos para Adopción
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Ser mayor de 21 años
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Contar con espacio adecuado
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Compromiso de cuidado a largo plazo
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    Visita domiciliaria previa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Other Animals */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Otros Animales en Adopción
          </h2>
          <div className="text-center">
            <Link
              href="/animales"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Todos los Animales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
