'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, RotateCcw, CheckCircle2, ArrowRight } from 'lucide-react'
import { useQuiz } from '@/hooks/useQuiz'
import { QUIZ_QUESTIONS } from '@/lib/quiz'
import { cn } from '@/lib/utils'

// Inline score progress ring for the result card
function ScoreRing({ score }: { score: number }) {
  const radius = 52
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  const color = score >= 75 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444'

  return (
    <div className="relative w-36 h-36 mx-auto mb-4">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="10" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-gray-900">{score}</span>
        <span className="text-xs text-gray-500">/ 100</span>
      </div>
    </div>
  )
}

export default function CompatibilityQuizPage() {
  const {
    currentStep,
    currentQuestion,
    answers,
    result,
    totalSteps,
    progress,
    answer,
    goBack,
    restart,
    isComplete,
  } = useQuiz()

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Test de Compatibilidad
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            ¿Qué animal es ideal para vos?
          </h1>
          <p className="text-gray-500">
            Respondé {totalSteps} preguntas cortas y te recomendamos el compañero perfecto.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {!isComplete ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Progress bar */}
            <div className="h-1.5 bg-gray-100">
              <div
                className="h-full bg-amber-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Step counter */}
            <div className="flex items-center justify-between px-6 pt-5 pb-1">
              <button
                onClick={goBack}
                disabled={currentStep === 0}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 disabled:opacity-30 transition-colors"
              >
                <ChevronLeft size={16} /> Anterior
              </button>
              <span className="text-sm text-gray-400">
                {currentStep + 1} / {totalSteps}
              </span>
            </div>

            {/* Question */}
            <div className="px-6 py-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {currentQuestion.question}
              </h2>
              {currentQuestion.hint && (
                <p className="text-sm text-gray-500 mb-6">{currentQuestion.hint}</p>
              )}

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {currentQuestion.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.value
                  return (
                    <button
                      key={option.value}
                      onClick={() => answer(option.value)}
                      className={cn(
                        'flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-amber-400 hover:bg-amber-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500',
                        isSelected
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-gray-200 bg-white'
                      )}
                    >
                      {option.emoji && (
                        <span className="text-2xl flex-shrink-0">{option.emoji}</span>
                      )}
                      <span className="font-medium text-gray-800 text-sm leading-tight">
                        {option.label}
                      </span>
                      {isSelected && (
                        <CheckCircle2 size={18} className="ml-auto text-amber-500 flex-shrink-0" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 pb-6">
              {QUIZ_QUESTIONS.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    'h-1.5 rounded-full transition-all duration-300',
                    i === currentStep ? 'w-6 bg-amber-500' : 'w-1.5 bg-gray-200'
                  )}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Results card */
          result && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {/* Score ring */}
              <ScoreRing score={result.score} />

              <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
                {result.title}
              </h2>
              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                {result.description}
              </p>

              {/* Ideal match */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {result.idealSpecies.length > 0 && (
                  <div className="bg-amber-50 rounded-xl p-4">
                    <h3 className="text-sm font-semibold text-amber-700 uppercase tracking-wider mb-2">
                      Especie ideal
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {result.idealSpecies.map((s) => (
                        <span key={s} className="capitalize font-medium text-gray-800 text-sm">
                          {s === 'perro' ? '🐕 Perro' : '🐈 Gato'}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {result.idealSize.length > 0 && (
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h3 className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2">
                      Tamaño recomendado
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {result.idealSize.map((s) => (
                        <span key={s} className="capitalize font-medium text-gray-800 text-sm">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tips */}
              {result.tips.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-800 mb-3">Nuestros consejos:</h3>
                  <ul className="space-y-2">
                    {result.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/animales"
                  className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Ver animales disponibles <ArrowRight size={18} />
                </Link>
                <button
                  onClick={restart}
                  className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors"
                >
                  <RotateCcw size={16} /> Repetir test
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
