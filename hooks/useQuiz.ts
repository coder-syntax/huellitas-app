'use client'

import { useState } from 'react'
import type { QuizAnswers, QuizRecommendation } from '@/types'
import { QUIZ_QUESTIONS, computeRecommendation } from '@/lib/quiz'

export function useQuiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({})
  const [result, setResult] = useState<QuizRecommendation | null>(null)

  const totalSteps = QUIZ_QUESTIONS.length
  const currentQuestion = QUIZ_QUESTIONS[currentStep]
  const isLastStep = currentStep === totalSteps - 1
  const progress = ((currentStep) / totalSteps) * 100

  function answer(value: string) {
    const updated = { ...answers, [currentQuestion.id]: value }
    setAnswers(updated)

    if (isLastStep) {
      setResult(computeRecommendation(updated as QuizAnswers))
    } else {
      setCurrentStep((s) => s + 1)
    }
  }

  function goBack() {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1)
      setResult(null)
    }
  }

  function restart() {
    setCurrentStep(0)
    setAnswers({})
    setResult(null)
  }

  return {
    currentStep,
    currentQuestion,
    answers,
    result,
    totalSteps,
    isLastStep,
    progress,
    answer,
    goBack,
    restart,
    isComplete: result !== null,
  }
}
