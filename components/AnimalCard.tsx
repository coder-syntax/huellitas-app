import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

export interface Animal {
  id: number;
  name: string;
  age: string;
  gender: string;
  size: string;
  image: string;
  description: string;
  location: string;
  vaccinated: boolean;
  castrated: boolean;
}

interface AnimalCardProps {
  animal: Animal;
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64 bg-gray-200">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {animal.size}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-2xl font-bold text-gray-800">{animal.name}</h3>
          <span className="text-sm text-gray-500">{animal.gender}</span>
        </div>
        
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <Calendar size={16} className="mr-1" />
          <span>{animal.age}</span>
          <MapPin size={16} className="ml-4 mr-1" />
          <span>{animal.location}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{animal.description}</p>

        <div className="flex gap-2 mb-4">
          {animal.vaccinated && (
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
              ✓ Vacunado
            </span>
          )}
          {animal.castrated && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
              ✓ Castrado
            </span>
          )}
        </div>

        <Link
          href={`/animales/${animal.id}`}
          className="block w-full bg-amber-500 hover:bg-amber-600 text-white text-center py-2 rounded-lg font-semibold transition-colors"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
