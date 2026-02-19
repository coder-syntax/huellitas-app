import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  phone: string       // phone number without + or spaces, e.g. "5491112345678"
  animalName: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_CLASSES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const ICON_SIZES = { sm: 16, md: 20, lg: 24 }

export function WhatsAppButton({ phone, animalName, className, size = 'md' }: WhatsAppButtonProps) {
  const message = encodeURIComponent(
    `¡Hola! Vi a ${animalName} en Huellitas y me gustaría conocer más sobre su proceso de adopción. 🐾`
  )
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-xl bg-green-500 hover:bg-green-600 active:bg-green-700 text-white shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2',
        SIZE_CLASSES[size],
        className
      )}
    >
      <MessageCircle size={ICON_SIZES[size]} />
      Contactar por WhatsApp
    </a>
  )
}
