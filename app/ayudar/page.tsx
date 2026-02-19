'use client';

import { useFormspree } from '@/hooks/useFormspree';
import { Button } from '@/components/ui/Button';
import { AlertTriangle, CheckCircle, AlertCircle, Loader2, Heart, Package, Users } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_AYUDAR_FORM_ID';

export default function AyudarPage() {
  const { submit, status, errorMessage, reset } = useFormspree(FORMSPREE_ENDPOINT);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    await submit(data);
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md w-full text-center">
          <CheckCircle className="mx-auto mb-4 text-green-500" size={56} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Reporte recibido!</h2>
          <p className="text-gray-600 mb-6">Gracias por contactarnos. Revisamos tu mensaje y actuamos lo antes posible según la urgencia.</p>
          <Button variant="primary" onClick={reset}>Enviar otro reporte</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Cómo Podés Ayudar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hay muchas formas de colaborar. Reportá un animal en situación de riesgo o sumate a nuestra red de apoyo.
          </p>
        </div>

        {/* Ways to help */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <AlertTriangle className="mx-auto mb-3 text-amber-500" size={32} />
            <h3 className="font-semibold text-gray-800 mb-1">Reportar animal</h3>
            <p className="text-sm text-gray-600">Viste un animal en la calle, herido o en peligro? Avisanos y actuamos.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <Package className="mx-auto mb-3 text-blue-500" size={32} />
            <h3 className="font-semibold text-gray-800 mb-1">Donar insumos</h3>
            <p className="text-sm text-gray-600">Alimento, mantas, medicamentos y accesorios siempre hacen falta.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
            <Users className="mx-auto mb-3 text-rose-500" size={32} />
            <h3 className="font-semibold text-gray-800 mb-1">Voluntariado</h3>
            <p className="text-sm text-gray-600">Sumate a eventos, ferias de adopción y campañas de difusión.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Report Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Reportar un animal</h2>
            <p className="text-sm text-gray-500 mb-6">Si encontraste un animal en situación de riesgo completá este formulario.</p>

            {status === 'error' && (
              <div className="flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 mb-6">
                <AlertCircle size={18} />
                <span className="text-sm">{errorMessage ?? 'Ocurrió un error. Por favor intentá de nuevo.'}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Tu nombre *</label>
                  <input id="name" name="name" type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp</label>
                <input id="phone" name="phone" type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label htmlFor="animalLocation" className="block text-sm font-medium text-gray-700 mb-1">Ubicación del animal *</label>
                <input id="animalLocation" name="animalLocation" type="text" required placeholder="Calle, barrio, ciudad" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">Nivel de urgencia *</label>
                <select id="urgency" name="urgency" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option value="">Seleccioná</option>
                  <option value="inmediata">Urgente - necesita ayuda inmediata</option>
                  <option value="alta">Alta - está sufriendo pero estable</option>
                  <option value="media">Media - está solo/a pero no en peligro inmediato</option>
                  <option value="baja">Baja - quiero informar solo</option>
                </select>
              </div>
              <div>
                <label htmlFor="situation" className="block text-sm font-medium text-gray-700 mb-1">Descripción de la situación *</label>
                <textarea id="situation" name="situation" required rows={4} placeholder="Describí qué viste, el estado del animal, si está herido, solo, etc." className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none" />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                ) : (
                  'Enviar reporte'
                )}
              </Button>
            </form>
          </div>

          {/* Other ways */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Package className="text-blue-500" size={24} />
                <h3 className="text-lg font-bold text-gray-800">Donar insumos</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Necesitamos: alimento seco y húmedo, medicamentos, mantas, accesorios de limpieza.</p>
              <a href="mailto:donaciones@huellitas.org" className="text-amber-600 hover:text-amber-700 text-sm font-medium">Coordinar entrega →</a>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="text-rose-500" size={24} />
                <h3 className="text-lg font-bold text-gray-800">Donación económica</h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">Cada aporte ayuda a cubrir veterinario, vacunas, castración y alimento de los animales en tránsito.</p>
              <a href="mailto:donaciones@huellitas.org" className="text-amber-600 hover:text-amber-700 text-sm font-medium">Quiero donar →</a>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Users size={24} />
                <h3 className="text-lg font-bold">Voluntariado</h3>
              </div>
              <p className="text-sm mb-4 opacity-90">Ayudanos en ferias de adopción, campañas de difusión en redes y cuidado de animales.</p>
              <a href="mailto:voluntariado@huellitas.org" className="inline-block bg-white text-amber-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-50 transition-colors">Quiero sumarme</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
