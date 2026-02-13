import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🐾</span>
              <h3 className="text-xl font-bold text-amber-500">Huellitas</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Trabajamos para darles una segunda oportunidad a animales en situación de calle.
              Tu ayuda hace la diferencia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/animales" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Nuestros Animales
                </Link>
              </li>
              <li>
                <Link href="/adoptar" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Adoptar
                </Link>
              </li>
              <li>
                <Link href="/transito" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Ser Tránsito
                </Link>
              </li>
              <li>
                <Link href="/ayudar" className="text-gray-400 hover:text-amber-500 transition-colors">
                  Ayudar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={18} />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={18} />
                <span>info@huellitas.org</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={18} />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Huellitas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
