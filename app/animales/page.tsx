import AnimalCard from "@/components/AnimalCard";

const animals = [
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
  {
    id: 4,
    name: "Bella",
    age: "4 meses",
    gender: "Hembra",
    size: "Pequeño",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500&h=500&fit=crop",
    description: "Bella es una cachorrita muy juguetona y tierna. Perfecta para familias con niños.",
    location: "Zona Norte",
    vaccinated: true,
    castrated: false,
  },
  {
    id: 5,
    name: "Rocky",
    age: "5 años",
    gender: "Macho",
    size: "Grande",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&h=500&fit=crop",
    description: "Rocky es un perro tranquilo y muy educado. Ideal para personas adultas.",
    location: "Zona Sur",
    vaccinated: true,
    castrated: true,
  },
  {
    id: 6,
    name: "Nala",
    age: "8 meses",
    gender: "Hembra",
    size: "Mediano",
    image: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=500&h=500&fit=crop",
    description: "Nala es energética y le encanta correr. Necesita un hogar con jardín.",
    location: "Buenos Aires",
    vaccinated: true,
    castrated: true,
  },
  {
    id: 7,
    name: "Simba",
    age: "6 meses",
    gender: "Macho",
    size: "Pequeño",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&h=500&fit=crop",
    description: "Simba es un gatito aventurero que adora trepar y explorar.",
    location: "CABA",
    vaccinated: true,
    castrated: false,
  },
  {
    id: 8,
    name: "Coco",
    age: "3 años",
    gender: "Hembra",
    size: "Pequeño",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=500&fit=crop",
    description: "Coco es una perrita muy tranquila, perfecta compañía para personas mayores.",
    location: "Zona Oeste",
    vaccinated: true,
    castrated: true,
  },
  {
    id: 9,
    name: "Thor",
    age: "2 años",
    gender: "Macho",
    size: "Grande",
    image: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=500&h=500&fit=crop",
    description: "Thor es un perro fuerte pero muy cariñoso. Necesita ejercicio diario.",
    location: "Buenos Aires",
    vaccinated: true,
    castrated: true,
  },
];

export default function AnimalsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Nuestros Animales
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todos estos hermosos animales están buscando un hogar. Cada uno tiene
            una historia única y mucho amor para dar.
          </p>
        </div>

        {/* Filters - Para futuras mejoras */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-wrap gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Todos los tamaños</option>
              <option>Pequeño</option>
              <option>Mediano</option>
              <option>Grande</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Todas las edades</option>
              <option>Cachorro (0-1 año)</option>
              <option>Joven (1-3 años)</option>
              <option>Adulto (3+ años)</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Todas las ubicaciones</option>
              <option>CABA</option>
              <option>Buenos Aires</option>
              <option>Zona Norte</option>
              <option>Zona Sur</option>
              <option>Zona Oeste</option>
            </select>
          </div>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-lg mb-6">
            Cada semana rescatamos nuevos animales. Contáctanos para más información.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}
