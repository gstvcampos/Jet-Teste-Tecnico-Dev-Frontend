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

export function getNextReservationFormattedDate(
  reservations: Reservation[],
): string {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  let nextReservation: Date | null = null

  for (const reservation of reservations) {
    const startDate = new Date(reservation.startDate)
    if (
      startDate > today &&
      (!nextReservation || startDate < nextReservation)
    ) {
      nextReservation = startDate
    }
  }

  if (!nextReservation) {
    return '--/--'
  }

  const day = nextReservation.getUTCDate()
  const month = nextReservation.getUTCMonth() + 1

  const formattedDay = day < 10 ? `0${day}` : day
  const formattedMonth = month < 10 ? `0${month}` : month

  return `${formattedDay}/${formattedMonth}`
}
