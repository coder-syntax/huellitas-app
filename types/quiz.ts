export interface QuizOption {
  value: string
  label: string
  emoji?: string
}

export interface QuizQuestion {
  id: keyof QuizAnswers
  question: string
  hint?: string
  options: QuizOption[]
}

export interface QuizAnswers {
  housing: string        // 'casa_patio' | 'casa_sin_patio' | 'depto_grande' | 'depto_pequeño'
  hasKids: string        // 'no' | 'mayores' | 'menores'
  hasOtherPets: string   // 'no' | 'perros' | 'gatos' | 'ambos'
  experience: string     // 'ninguna' | 'basica' | 'intermedia' | 'avanzada'
  dailyTime: string      // 'menos_1h' | '1_3h' | 'mas_3h'
  activityLevel: string  // 'sedentario' | 'moderado' | 'activo'
}

export type QuizStep = keyof QuizAnswers

export interface QuizRecommendation {
  title: string
  description: string
  idealSpecies: string[]
  idealSize: string[]
  tips: string[]
  score: number         // 0-100, how ready they are to adopt
}
