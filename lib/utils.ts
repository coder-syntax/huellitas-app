// Utility to merge Tailwind class names cleanly.
// Uses a simple approach without requiring clsx/tailwind-merge
// to keep dependencies minimal for this MVP.

type ClassValue = string | undefined | null | false | 0

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
