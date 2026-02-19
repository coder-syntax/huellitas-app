'use client';

import { useFormspree } from '@/hooks/useFormspree';
import { Button } from '@/components/ui/Button';
import { Home, Heart, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_TRANSIT_FORM_ID';

export default function TransitoPage() {
  const { submit, status, errorMessage, reset } = useFormspree(FORMSPREE_ENDPOINT);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    await submit(data);
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <CheckCircle className="mx-auto mb-4 text-green-500" size={56} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Gracias por querer ser tránsito!</h2>
          <p className="text-gray-600 mb-6">Recibimos tu solicitud. Nos pondremos en contacto en las próximas 48 horas para coordinar los próximos pasos.</p>
          <Button variant="primary" onClick={reset}>Enviar otra solicitud</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ser Hogar de Tránsito
          </h1>
          <p className="text-xl text-gray-600">
            Ayuda a un animal mientras encuentra su familia definitiva
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <Home className="mx-auto mb-3 text-amber-500" size={32} />
            <h3 className="font-semibold text-gray-800 mb-1">Tu hogar, su refugio</h3>
            <p className="text-sm text-gray-600">Le das un ambiente seguro y amoroso mientras espera su adopción definitiva.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <Heart className="mx-auto mb-3 text-rose-500" size={32} />
            <h3 className="font-semibold text-gray-800 mb-1">Cubrimos los costos</h3>
            <p className="text-sm text-gray-600">La organización cubre veterinario, vacunas, alimento y todo lo necesario.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <Clock className="mx-auto mb-3 text-blue-500" size={32} />
            <h3 className="font-semibold text-gray-800 mb-1">Tiempo flexible</h3>
            <p className="text-sm text-gray-600">El tiempo de tránsito varía según el animal, generalmente entre 2 semanas y 3 meses.</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Registro de Tránsito</h2>

          {status === 'error' && (
            <div className="flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 mb-6">
              <AlertCircle size={18} />
              <span className="text-sm">{errorMessage ?? 'Ocurrió un error. Por favor intentá de nuevo.'}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-gray-700 mb-3">Datos personales</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                  <input id="name" name="name" type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp *</label>
                  <input id="phone" name="phone" type="tel" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Barrio / Localidad *</label>
                  <input id="address" name="address" type="text" required placeholder="Ej: Palermo, CABA" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-gray-700 mb-3">Tu hogar</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="homeType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de vivienda *</label>
                  <select id="homeType" name="homeType" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option value="">Seleccioná</option>
                    <option value="casa">Casa</option>
                    <option value="departamento">Departamento</option>
                    <option value="ph">PH</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="hasYard" className="block text-sm font-medium text-gray-700 mb-1">¿Tenés patio / jardín? *</label>
                  <select id="hasYard" name="hasYard" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option value="">Seleccioná</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="otherPets" className="block text-sm font-medium text-gray-700 mb-1">¿Tenés otras mascotas?</label>
                  <input id="otherPets" name="otherPets" type="text" placeholder="Ej: 1 perro adulto, 2 gatos" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label htmlFor="acceptedSize" className="block text-sm font-medium text-gray-700 mb-1">Tamaño de animal que aceptás *</label>
                  <select id="acceptedSize" name="acceptedSize" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option value="">Seleccioná</option>
                    <option value="pequeno">Pequeño (hasta 10 kg)</option>
                    <option value="mediano">Mediano (10–25 kg)</option>
                    <option value="grande">Grande (más de 25 kg)</option>
                    <option value="cualquiera">Cualquier tamaño</option>
                  </select>
                </div>
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-gray-700 mb-3">Disponibilidad y experiencia</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-1">¿Cuándo podés starts? *</label>
                  <select id="availability" name="availability" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option value="">Seleccioná</option>
                    <option value="inmediato">Inmediatamente</option>
                    <option value="dos_semanas">En 2 semanas</option>
                    <option value="un_mes">En 1 mes</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experiencia previa con mascotas</label>
                  <select id="experience" name="experience" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option value="">Seleccioná</option>
                    <option value="ninguna">Ninguna</option>
                    <option value="basica">Básica (tuve mascotas de chico/a)</option>
                    <option value="intermedia">Intermedia (tuve mascotas adulto/a)</option>
                    <option value="avanzada">Avanzada (fui tránsito antes)</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">¿Algo más que quieras contarnos?</label>
                <textarea id="message" name="message" rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none" />
              </div>
            </fieldset>

            <div className="pt-2">
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                ) : (
                  'Quiero ser tránsito'
                )}
              </Button>
              <p className="text-xs text-center text-gray-400 mt-3">
                * Campos obligatorios. Te respondemos en menos de 48 horas.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
