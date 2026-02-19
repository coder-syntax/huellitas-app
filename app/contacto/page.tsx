'use client';

import { useFormspree } from '@/hooks/useFormspree';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, Instagram, Facebook } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_CONTACTO_FORM_ID';

export default function ContactoPage() {
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
          <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Mensaje enviado!</h2>
          <p className="text-gray-600 mb-6">Gracias por escribirnos. Respondemos en menos de 48 horas hábiles.</p>
          <Button variant="primary" onClick={reset}>Enviar otro mensaje</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contacto</h1>
          <p className="text-xl text-gray-600">¿Tenés preguntas? Estamos acá para ayudarte.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-5">Información de contacto</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                    <Mail className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Email</p>
                    <a href="mailto:info@huellitas.org" className="text-sm text-amber-600 hover:underline">info@huellitas.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                    <Phone className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">WhatsApp</p>
                    <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="text-sm text-amber-600 hover:underline">+54 9 11 1234-5678</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-lg shrink-0">
                    <MapPin className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Ubicación</p>
                    <p className="text-sm text-gray-600">Buenos Aires, Argentina</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Redes sociales</h3>
              <div className="flex gap-3">
                <a href="https://instagram.com/huellitas" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  <Instagram size={16} /> Instagram
                </a>
                <a href="https://facebook.com/huellitas" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  <Facebook size={16} /> Facebook
                </a>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-semibold text-amber-800 mb-2">Horario de atención</h3>
              <p className="text-sm text-amber-700">Lunes a viernes: 9:00 – 18:00 hs</p>
              <p className="text-sm text-amber-700">Sábados: 10:00 – 14:00 hs</p>
              <p className="text-sm text-amber-700 mt-2">Respondemos en menos de 48 hs hábiles.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envianos un mensaje</h2>

            {status === 'error' && (
              <div className="flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 mb-6">
                <AlertCircle size={18} />
                <span className="text-sm">{errorMessage ?? 'Ocurrió un error. Por favor intentá de nuevo.'}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre *</label>
                  <input id="name" name="name" type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono (opcional)</label>
                <input id="phone" name="phone" type="tel" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto *</label>
                <select id="subject" name="subject" required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option value="">Seleccioná un asunto</option>
                  <option value="adopcion">Consulta sobre adopción</option>
                  <option value="transito">Quiero ser tránsito</option>
                  <option value="donacion">Donación</option>
                  <option value="voluntariado">Voluntariado</option>
                  <option value="animal_calle">Reporte de animal en la calle</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje *</label>
                <textarea id="message" name="message" required rows={5} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none" />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'submitting'}>
                {status === 'submitting' ? (
                  <><Loader2 size={18} className="animate-spin" /> Enviando...</>
                ) : (
                  'Enviar mensaje'
                )}
              </Button>
              <p className="text-xs text-center text-gray-400">* Campos obligatorios.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
