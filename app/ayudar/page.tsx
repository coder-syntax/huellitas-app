"use client";

import Link from "next/link";
import { useState } from "react";
import { DollarSign, Heart, Package, Calendar } from "lucide-react";

export default function AyudarPage() {
  const [donationAmount, setDonationAmount] = useState("");
  const [donationType, setDonationType] = useState<"unica" | "mensual">("unica");

  const predefinedAmounts = [500, 1000, 2500, 5000];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Cómo Puedes Ayudar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hay muchas formas de colaborar con nuestra causa. Cada aporte, por pequeño que sea, hace la diferencia.
          </p>
        </div>

        {/* Ways to Help */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <DollarSign className="text-amber-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Donaciones</h3>
            <p className="text-gray-600 text-center">
              Ayuda económica para tratamientos veterinarios y alimento
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Heart className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Voluntariado</h3>
            <p className="text-gray-600 text-center">
              Colabora con tu tiempo en eventos, ferias y actividades
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Package className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Donaciones en Especie</h3>
            <p className="text-gray-600 text-center">
              Alimento, mantas, medicamentos y otros suministros
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Calendar className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">Apadrinamiento</h3>
            <p className="text-gray-600 text-center">
              Apadrina un animal y sigue su progreso mensualmente
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Realizar una Donación
            </h2>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">
                Tipo de donación
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setDonationType("unica")}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                    donationType === "unica"
                      ? "bg-amber-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Única vez
                </button>
                <button
                  onClick={() => setDonationType("mensual")}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                    donationType === "mensual"
                      ? "bg-amber-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Mensual
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">
                Selecciona un monto
              </label>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount.toString())}
                    className={`py-3 px-4 rounded-lg font-semibold transition-colors ${
                      donationAmount === amount.toString()
                        ? "bg-amber-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    ${amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500 text-lg">$</span>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Otro monto"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors">
              Donar Ahora
            </button>

            <p className="text-gray-600 text-sm text-center mt-4">
              🔒 Pago seguro con Mercado Pago
            </p>
          </div>

          {/* Other Ways */}
          <div className="space-y-6">
            {/* Bank Info */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Transferencia Bancaria
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-semibold">Banco:</span> Banco Ejemplo
                </div>
                <div>
                  <span className="font-semibold">Titular:</span> Asociación Huellitas
                </div>
                <div>
                  <span className="font-semibold">CBU:</span> 1234567890123456789012
                </div>
                <div>
                  <span className="font-semibold">Alias:</span> HUELLITAS.AYUDA
                </div>
              </div>
            </div>

            {/* Supplies Needed */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Elementos que Necesitamos
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  Alimento balanceado para perros y gatos
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  Mantas y frazadas
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  Collares y correas
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  Medicamentos y productos veterinarios
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  Cuchas y transportadoras
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  Juguetes y elementos de enriquecimiento
                </li>
              </ul>
              <Link
                href="/contacto"
                className="block text-center mt-6 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Coordinar Entrega
              </Link>
            </div>

            {/* Volunteer */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold mb-4">
                Sé Voluntario
              </h3>
              <p className="mb-6">
                Únete a nuestro equipo de voluntarios y ayúdanos en eventos,
                ferias de adopción, redes sociales y más.
              </p>
              <Link
                href="/contacto"
                className="inline-block bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                Quiero ser Voluntario
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
