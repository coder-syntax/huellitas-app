"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function TransitoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    homeType: "",
    hasYard: "",
    availability: "",
    experience: "",
    otherPets: "",
    acceptedSize: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias por querer ser hogar de tránsito! Nos contactaremos pronto.");
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
            Ser Hogar de Tránsito
          </h1>
          <p className="text-xl text-gray-600">
            Ayuda a un animal mientras encuentra su familia definitiva
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              ¿Qué es un hogar de tránsito?
            </h3>
            <p className="text-gray-600">
              Es una familia que acoge temporalmente a un animal rescatado mientras
              encontramos su hogar definitivo. Tú brindas el espacio y el amor,
              nosotros cubrimos gastos veterinarios y alimento.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Beneficios de ser tránsito
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>✓ Salvas una vida sin compromiso permanente</li>
              <li>✓ Nosotros cubrimos gastos veterinarios</li>
              <li>✓ Apoyo constante del equipo de Huellitas</li>
              <li>✓ Flexibilidad en el tiempo de tránsito</li>
            </ul>
          </div>
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

            {/* Housing Info */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Sobre tu Hogar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Disponibilidad de tiempo *
                  </label>
                  <select
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="corto">Corto plazo (1-2 meses)</option>
                    <option value="medio">Mediano plazo (3-6 meses)</option>
                    <option value="largo">Largo plazo (6+ meses)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Tamaño de animal que puedes recibir *
                  </label>
                  <select
                    name="acceptedSize"
                    required
                    value={formData.acceptedSize}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="pequeño">Solo pequeño</option>
                    <option value="mediano">Hasta mediano</option>
                    <option value="grande">Cualquier tamaño</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Experiencia
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    ¿Tienes experiencia cuidando mascotas? *
                  </label>
                  <textarea
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Cuéntanos sobre tu experiencia..."
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    ¿Tienes otras mascotas actualmente? *
                  </label>
                  <textarea
                    name="otherPets"
                    required
                    value={formData.otherPets}
                    onChange={handleChange}
                    rows={2}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Si es así, cuéntanos sobre ellas..."
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Comentarios adicionales
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Cualquier información adicional que quieras compartir..."
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
                * Nos contactaremos para coordinar una visita y conocernos
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
