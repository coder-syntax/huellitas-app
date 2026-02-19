import { type HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import type { AnimalStatus } from '@/types'

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'outline'

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-amber-100 text-amber-800',
  danger: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
  outline: 'border border-gray-300 text-gray-700 bg-transparent',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export function Badge({ variant = 'default', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

// ---- StatusBadge — specific to animal status ----

const STATUS_CONFIG: Record<AnimalStatus, { label: string; variant: BadgeVariant; dot: string }> = {
  urgente: { label: 'Urgente', variant: 'danger', dot: 'bg-red-500' },
  transito: { label: 'En Tránsito', variant: 'info', dot: 'bg-blue-500' },
  adopcion: { label: 'En Adopción', variant: 'success', dot: 'bg-green-500' },
}

export function StatusBadge({ status }: { status: AnimalStatus }) {
  const { label, variant, dot } = STATUS_CONFIG[status]
  return (
    <Badge variant={variant}>
      <span className={cn('w-1.5 h-1.5 rounded-full', dot)} />
      {label}
    </Badge>
  )
}
