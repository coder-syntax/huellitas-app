'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/useFavorites';

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/animales', label: 'Animales' },
  { href: '/adoptar', label: 'Adoptar' },
  { href: '/transito', label: 'Ser Tránsito' },
  { href: '/ayudar', label: 'Ayudar' },
  { href: '/educacion', label: 'Educación' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { count, hydrated } = useFavorites();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🐾</span>
            <span className="text-xl font-bold text-amber-600">Huellitas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-amber-700'
                      : 'text-gray-600 hover:text-amber-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Favorites */}
            <Link
              href="/favoritos"
              aria-label="Mis favoritos"
              className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === '/favoritos'
                  ? 'bg-rose-50 text-rose-600'
                  : 'text-gray-600 hover:text-rose-500 hover:bg-rose-50'
              }`}
            >
              <Heart size={18} className={pathname === '/favoritos' ? 'fill-current' : ''} />
              <span className="hidden sm:inline">Favoritos</span>
              {hydrated && count > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold leading-none">
                  {count > 9 ? '9+' : count}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-amber-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-3 py-3 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-50 text-amber-700'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="border-t border-gray-100 pt-2 mt-2">
              <Link
                href="/test-compatibilidad"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/test-compatibilidad'
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-gray-100'
                }`}
              >
                🧩 Test de compatibilidad
              </Link>
              <Link
                href="/calculadora"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === '/calculadora'
                    ? 'bg-amber-50 text-amber-700'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-gray-100'
                }`}
              >
                🧮 Calculadora de costos
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
