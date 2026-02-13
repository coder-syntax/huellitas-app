"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function AdoptPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    animalInterest: "",
    hasExperience: "",
    hasOtherPets: "",
    homeType: "",
    hasYard: "",
    motivation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("¡Formulario enviado! Nos pondremos en contacto contigo pronto.");
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Formulario de Adopción
          </h1>
          <p className="text-xl text-gray-600">
            Completa este formulario para iniciar el proceso de adopción responsable
          </p>
        </div>

        {/* Info Card */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-8">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">
            Requisitos para Adoptar
          </h3>
          <ul className="list-disc list-inside text-amber-700 space-y-1">
            <li>Ser mayor de 21 años</li>
            <li>Tener autorización de todos los convivientes</li>
            <li>Contar con espacio adecuado para el animal</li>
            <li>Compromiso de cuidado veterinario</li>
            <li>Visita domiciliaria previa (para asegurar el bienestar del animal)</li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-6">
            {/* Personal Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Información Personal
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* About Adoption */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sobre la Adopción
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    ¿Qué animal te interesa adoptar? *
                  </label>
                  <input
                    type="text"
                    name="animalInterest"
                    required
                    value={formData.animalInterest}
                    onChange={handleChange}
                    placeholder="Ej: Luna, Max, o cualquier gato pequeño"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      ¿Tienes experiencia con mascotas? *
                    </label>
                    <select
                      name="hasExperience"
                      required
                      value={formData.hasExperience}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      ¿Tienes otras mascotas? *
                    </label>
                    <select
                      name="hasOtherPets"
                      required
                      value={formData.hasOtherPets}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Tipo de vivienda *
                    </label>
                    <select
                      name="homeType"
                      required
                      value={formData.homeType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="casa">Casa</option>
                      <option value="departamento">Departamento</option>
                      <option value="ph">PH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      ¿Tienes patio/jardín? *
                    </label>
                    <select
                      name="hasYard"
                      required
                      value={formData.hasYard}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    ¿Por qué quieres adoptar? *
                  </label>
                  <textarea
                    name="motivation"
                    required
                    value={formData.motivation}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Cuéntanos tu motivación para adoptar..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Solicitud
              </button>
              <p className="text-gray-600 text-sm text-center mt-4">
                * Nos pondremos en contacto contigo en las próximas 48 horas
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
