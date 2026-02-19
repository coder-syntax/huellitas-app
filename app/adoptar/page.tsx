'use client'

// Adoption form — integrate with Formspree.
// Replace the FORMSPREE_ENDPOINT constant with your actual endpoint.
// Get a free endpoint at https://formspree.io

import { useState } from 'react'
import Link from 'next/link'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { useFormspree } from '@/hooks/useFormspree'

// TODO: Replace with your Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const inputBase =
  'w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition bg-white'

const labelBase = 'block text-sm font-medium text-gray-700 mb-1.5'

export default function AdoptarPage() {
  const { submit, status, errorMessage } = useFormspree(FORMSPREE_ENDPOINT)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    animalInterest: '',
    homeType: '',
    hasYard: '',
    hasKids: '',
    hasOtherPets: '',
    experience: '',
    motivation: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await submit(form)
  }

  if (status === 'success') {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 max-w-lg w-full text-center">
          <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud enviada!</h2>
          <p className="text-gray-500 mb-6">
            Recibimos tu solicitud de adopción. Nos pondremos en contacto por email en las próximas
            48 horas. ¡Gracias por querer dar una segunda oportunidad!
          </p>
          <Link
            href="/animales"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Ver más animales
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Formulario de Adopción</h1>
          <p className="text-gray-500">
            Completá este formulario para iniciar el proceso de adopción responsable. Tardás menos
            de 5 minutos.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Requirements */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5 mb-8">
          <h2 className="font-semibold text-amber-800 mb-2">Requisitos para adoptar</h2>
          <ul className="space-y-1 text-sm text-amber-700">
            {[
              'Ser mayor de 21 años',
              'Contar con el acuerdo de todos los convivientes',
              'Tener espacio adecuado para el animal',
              'Comprometerse con el cuidado veterinario',
              'Aceptar una visita domiciliaria previa',
            ].map((r) => <li key={r}>• {r}</li>)}
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
          {/* Personal info */}
          <fieldset>
            <legend className="text-xl font-bold text-gray-900 mb-5">Datos personales</legend>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelBase}>Nombre completo *</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputBase} />
              </div>
              <div>
                <label htmlFor="email" className={labelBase}>Email *</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputBase} />
              </div>
              <div>
                <label htmlFor="phone" className={labelBase}>Teléfono / WhatsApp *</label>
                <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputBase} />
              </div>
              <div>
                <label htmlFor="address" className={labelBase}>Ciudad / Barrio *</label>
                <input id="address" name="address" type="text" required value={form.address} onChange={handleChange} className={inputBase} />
              </div>
            </div>
          </fieldset>

          {/* About adoption */}
          <fieldset>
            <legend className="text-xl font-bold text-gray-900 mb-5">Sobre la adopción</legend>
            <div className="space-y-5">
              <div>
                <label htmlFor="animalInterest" className={labelBase}>¿Cuál animal te interesa? *</label>
                <input
                  id="animalInterest"
                  name="animalInterest"
                  type="text"
                  required
                  placeholder="Ej: Luna, Max, o cualquier gato pequeño…"
                  value={form.animalInterest}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    id: 'homeType',
                    label: 'Tipo de vivienda *',
                    options: [
                      ['', 'Seleccioná'],
                      ['casa_patio', 'Casa con patio'],
                      ['casa_sin_patio', 'Casa sin patio'],
                      ['depto_grande', 'Departamento grande'],
                      ['depto_pequeño', 'Departamento pequeño'],
                      ['ph', 'PH'],
                    ],
                  },
                  {
                    id: 'hasKids',
                    label: '¿Hay niños en el hogar? *',
                    options: [['', 'Seleccioná'], ['no', 'No'], ['mayores', 'Sí, mayores de 8 años'], ['menores', 'Sí, menores de 8 años']],
                  },
                  {
                    id: 'hasOtherPets',
                    label: '¿Tenés otras mascotas? *',
                    options: [['', 'Seleccioná'], ['no', 'No'], ['perros', 'Perros'], ['gatos', 'Gatos'], ['ambos', 'Perros y gatos']],
                  },
                  {
                    id: 'experience',
                    label: 'Experiencia previa *',
                    options: [['', 'Seleccioná'], ['ninguna', 'Primera mascota'], ['basica', 'Básica'], ['intermedia', 'Intermedia'], ['avanzada', 'Avanzada']],
                  },
                ].map(({ id, label, options }) => (
                  <div key={id}>
                    <label htmlFor={id} className={labelBase}>{label}</label>
                    <select
                      id={id}
                      name={id}
                      required
                      value={form[id as keyof typeof form]}
                      onChange={handleChange}
                      className={inputBase}
                    >
                      {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="motivation" className={labelBase}>¿Por qué querés adoptar? *</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  required
                  rows={4}
                  value={form.motivation}
                  onChange={handleChange}
                  placeholder="Contanos tu motivación, cómo es tu vida diaria y qué esperas de esta adopción…"
                  className={inputBase}
                />
              </div>
            </div>
          </fieldset>

          {/* Error feedback */}
          {status === 'error' && (
            <div className="flex items-center gap-2 bg-red-50 text-red-700 rounded-xl p-4 text-sm">
              <AlertCircle size={18} className="flex-shrink-0" />
              {errorMessage ?? 'Ocurrió un error. Intentá de nuevo o escribinos directamente.'}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold py-4 rounded-xl transition-colors text-lg"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Enviando…
              </>
            ) : (
              <>
                <Send size={20} /> Enviar solicitud de adopción
              </>
            )}
          </button>

          <p className="text-xs text-center text-gray-400">
            * Campos obligatorios. Respondemos en menos de 48 horas.
          </p>
        </form>
      </div>
    </div>
  )
}