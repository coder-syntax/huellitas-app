'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Calculator, Info } from 'lucide-react'
import {
  computeMonthlyCosts,
  formatCurrency,
  type CalculatorInput,
  type PetSpecies,
  type PetSize,
} from '@/lib/calculator'
import { cn } from '@/lib/utils'

const CATEGORY_LABELS: Record<string, string> = {
  essentials: 'Esenciales',
  health: 'Salud',
  services: 'Servicios',
}

const CATEGORY_COLORS: Record<string, string> = {
  essentials: 'bg-amber-100 text-amber-700',
  health: 'bg-green-100 text-green-700',
  services: 'bg-blue-100 text-blue-700',
}

const selectBase =
  'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition'

const checkBase =
  'flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all'

export default function CalculadoraPage() {
  const [input, setInput] = useState<CalculatorInput>({
    species: 'perro',
    size: 'mediano',
    includesVet: true,
    includesPetSitter: false,
    includesGrooming: false,
  })

  const result = computeMonthlyCosts(input)

  function setField<K extends keyof CalculatorInput>(key: K, value: CalculatorInput[K]) {
    setInput((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl mb-4">
            <Calculator size={28} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Calculadora de Costos</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Estimá cuánto te costaría tener una mascota por mes. Los valores son aproximados y
            varían según zona y calidad de productos.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
            <h2 className="text-xl font-bold text-gray-900">Configurá tu mascota</h2>

            {/* Species */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Especie</label>
              <select
                value={input.species}
                onChange={(e) => setField('species', e.target.value as PetSpecies)}
                className={selectBase}
              >
                <option value="perro">🐕 Perro</option>
                <option value="gato">🐈 Gato</option>
              </select>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Tamaño</label>
              <select
                value={input.size}
                onChange={(e) => setField('size', e.target.value as PetSize)}
                className={selectBase}
              >
                <option value="pequeño">Pequeño (hasta 10 kg)</option>
                <option value="mediano">Mediano (10 - 25 kg)</option>
                <option value="grande">Grande (más de 25 kg)</option>
              </select>
            </div>

            {/* Optional services */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-3">Incluir en el cálculo:</p>
              <div className="space-y-2">
                {(
                  [
                    { key: 'includesVet', label: 'Veterinario y medicamentos', emoji: '🏥' },
                    { key: 'includesPetSitter', label: 'Paseador / Pet sitter', emoji: '🦮' },
                    { key: 'includesGrooming', label: 'Peluquería / Baño', emoji: '✂️' },
                  ] as const
                ).map(({ key, label, emoji }) => {
                  const checked = input[key]
                  return (
                    <label
                      key={key}
                      className={cn(
                        checkBase,
                        checked
                          ? 'border-amber-400 bg-amber-50'
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      )}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setField(key, e.target.checked)}
                        className="mt-0.5 accent-amber-500"
                      />
                      <span className="text-sm text-gray-800">
                        {emoji} {label}
                      </span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 bg-blue-50 rounded-xl p-4 text-xs text-blue-700">
              <Info size={14} className="mt-0.5 flex-shrink-0" />
              <p>
                Valores estimados en pesos argentinos (ARS), 2025. Los precios reales varían según
                la zona, la marca y el proveedor.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Total card */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white text-center shadow-lg">
              <p className="text-amber-100 text-sm font-medium mb-1">Gasto mensual estimado</p>
              <p className="text-4xl font-bold mb-1">
                {formatCurrency(result.totalMin)} – {formatCurrency(result.totalMax)}
              </p>
              <p className="text-amber-100 text-xs">por mes</p>
            </div>

            {/* Breakdown */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-base font-bold text-gray-900 mb-4">Desglose</h3>
              <ul className="space-y-3">
                {result.items.map((item) => (
                  <li key={item.label} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          'inline-block text-xs font-medium px-2 py-0.5 rounded-full',
                          CATEGORY_COLORS[item.category]
                        )}
                      >
                        {CATEGORY_LABELS[item.category]}
                      </span>
                      <span className="text-sm text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      {formatCurrency(item.min)} – {formatCurrency(item.max)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Annual projection */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex justify-between text-sm font-semibold text-gray-800">
                  <span>Proyección anual</span>
                  <span>
                    {formatCurrency(result.totalMin * 12)} –{' '}
                    {formatCurrency(result.totalMax * 12)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
