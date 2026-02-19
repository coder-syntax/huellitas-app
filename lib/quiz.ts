import type { QuizAnswers, QuizQuestion, QuizRecommendation } from '@/types'

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'housing',
    question: '¿Cómo es tu vivienda?',
    hint: 'Esto nos ayuda a recomendar el tamaño y especie adecuada.',
    options: [
      { value: 'casa_patio', label: 'Casa con patio', emoji: '🏡' },
      { value: 'casa_sin_patio', label: 'Casa sin patio', emoji: '🏠' },
      { value: 'depto_grande', label: 'Departamento grande (+60m²)', emoji: '🏢' },
      { value: 'depto_pequeño', label: 'Departamento pequeño (-60m²)', emoji: '🏗️' },
    ],
  },
  {
    id: 'hasKids',
    question: '¿Hay niños en tu hogar?',
    hint: 'Algunas especies y personalidades son más adecuadas para hogares con niños.',
    options: [
      { value: 'no', label: 'No hay niños', emoji: '🚫' },
      { value: 'mayores', label: 'Sí, mayores de 8 años', emoji: '👦' },
      { value: 'menores', label: 'Sí, menores de 8 años', emoji: '👶' },
    ],
  },
  {
    id: 'hasOtherPets',
    question: '¿Ya tenés otras mascotas en casa?',
    options: [
      { value: 'no', label: 'No tengo mascotas', emoji: '❌' },
      { value: 'perros', label: 'Tengo perro/s', emoji: '🐕' },
      { value: 'gatos', label: 'Tengo gato/s', emoji: '🐈' },
      { value: 'ambos', label: 'Tengo perros y gatos', emoji: '🐾' },
    ],
  },
  {
    id: 'experience',
    question: '¿Tenés experiencia previa con animales?',
    hint: 'Sé honesto/a. Esto nos permite recomendarte el animal más adecuado a tu nivel.',
    options: [
      { value: 'ninguna', label: 'Ninguna, es mi primera mascota', emoji: '🌱' },
      { value: 'basica', label: 'Básica, tuve animales de niño/a', emoji: '📚' },
      { value: 'intermedia', label: 'Intermedia, ya adopté antes', emoji: '⭐' },
      { value: 'avanzada', label: 'Avanzada, mucha experiencia', emoji: '🏆' },
    ],
  },
  {
    id: 'dailyTime',
    question: '¿Cuántas horas por día podés dedicarle a tu mascota?',
    hint: 'Incluye juego, paseos, atención e interacción.',
    options: [
      { value: 'menos_1h', label: 'Menos de 1 hora', emoji: '⏱️' },
      { value: '1_3h', label: 'Entre 1 y 3 horas', emoji: '⏰' },
      { value: 'mas_3h', label: 'Más de 3 horas', emoji: '🕐' },
    ],
  },
  {
    id: 'activityLevel',
    question: '¿Cómo describirías tu estilo de vida?',
    options: [
      { value: 'sedentario', label: 'Tranquilo/a, me gusta estar en casa', emoji: '🛋️' },
      { value: 'moderado', label: 'Moderado, salgo pero no demasiado', emoji: '🚶' },
      { value: 'activo', label: 'Muy activo/a, ejercicio y salidas frecuentes', emoji: '🏃' },
    ],
  },
]

// Scoring logic — pure function, fully testable
export function computeRecommendation(answers: QuizAnswers): QuizRecommendation {
  let score = 50 // baseline readiness score
  const idealSpecies: string[] = []
  const idealSize: string[] = []
  const tips: string[] = []

  // Housing analysis
  const hasPatio = answers.housing === 'casa_patio'
  const smallSpace = answers.housing === 'depto_pequeño'

  if (hasPatio) {
    idealSpecies.push('perro')
    idealSize.push('grande', 'mediano')
    score += 10
  } else if (smallSpace) {
    idealSpecies.push('gato')
    idealSize.push('pequeño')
    tips.push('Un gato es ideal para espacios pequeños: independiente y tranquilo.')
  } else {
    idealSpecies.push('gato', 'perro')
    idealSize.push('pequeño', 'mediano')
  }

  // Kids
  if (answers.hasKids === 'menores') {
    tips.push('Con niños pequeños recomendamos perros de raza mediana, sociables y pacientes.')
    if (!idealSpecies.includes('perro')) idealSpecies.push('perro')
  } else if (answers.hasKids === 'no') {
    if (!idealSpecies.includes('gato')) idealSpecies.push('gato')
  }

  // Other pets
  if (answers.hasOtherPets === 'gatos') {
    tips.push('Asegurate de que el animal que adoptes sea compatible con gatos.')
  } else if (answers.hasOtherPets === 'perros') {
    tips.push('Asegurate de que el animal que adoptes sea compatible con perros.')
  }

  // Experience
  switch (answers.experience) {
    case 'ninguna':
      score -= 10
      tips.push('Para una primera mascota recomendamos animales adultos: ya tienen carácter formado y son más predecibles.')
      break
    case 'avanzada':
      score += 15
      break
    case 'intermedia':
      score += 8
      break
  }

  // Time available
  if (answers.dailyTime === 'menos_1h') {
    score -= 15
    idealSpecies.length = 0
    idealSpecies.push('gato')
    tips.push('Con poco tiempo disponible, un gato independiente es la mejor opción.')
  } else if (answers.dailyTime === 'mas_3h') {
    score += 10
    if (!idealSpecies.includes('perro')) idealSpecies.push('perro')
  }

  // Activity level
  if (answers.activityLevel === 'activo') {
    score += 10
    idealSize.push('grande')
    tips.push('Tu nivel de actividad es perfecto para un perro grande que necesite ejercicio.')
  } else if (answers.activityLevel === 'sedentario') {
    score -= 5
    if (!idealSize.includes('pequeño')) idealSize.push('pequeño')
  }

  // Clamp score
  score = Math.min(100, Math.max(0, score))

  // Deduplicate
  const uniqueSpecies = [...new Set(idealSpecies)]
  const uniqueSizes = [...new Set(idealSize)]

  // Build title/description
  let title = ''
  let description = ''

  if (score >= 75) {
    title = '¡Estás listo/a para adoptar!'
    description =
      'Tu perfil indica que podés ofrecerle un hogar excelente a una mascota. Tenés el espacio, el tiempo y la experiencia necesaria.'
  } else if (score >= 50) {
    title = 'Buenas condiciones para adoptar'
    description =
      'Tenés buenas condiciones para adoptar. Te recomendamos leer nuestras guías educativas y considerar a los animales que mejor se adapten a tu estilo de vida.'
  } else {
    title = 'Antes de adoptar, considerá estos puntos'
    description =
      'Hay algunos aspectos a mejorar antes de adoptar. No es una negativa, sino una forma de asegurarnos de que tanto vos como el animal estén listos para este compromiso.'
  }

  return {
    title,
    description,
    idealSpecies: uniqueSpecies,
    idealSize: uniqueSizes,
    tips,
    score,
  }
}
