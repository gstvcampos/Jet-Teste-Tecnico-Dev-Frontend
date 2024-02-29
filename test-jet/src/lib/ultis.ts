import { Reservation } from '@/types/car'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isCarAvailable(reservations: Reservation[]) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (const reservation of reservations) {
    const startDate = new Date(reservation.startDate)
    const endDate = new Date(reservation.endDate)

    if (startDate <= today && today <= endDate) {
      return 'Unavailable'
    }
  }

  return 'Available'
}
