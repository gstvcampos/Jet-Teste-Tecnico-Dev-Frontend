import { cn, isCarAvailable } from '@/lib/ultis'
import { Reservation } from '@/types/car'
import { AvailableIcon } from '../icons/AvailableIcon'
import { UnavailableIcon } from '../icons/UnavailableIcon'

export default function StatusCarTagMobile({
  reservations,
}: {
  reservations: Reservation[]
}) {
  const status = isCarAvailable(reservations)

  return (
    <span
      className={cn(
        'absolute md:hidden rounded-full top-1 left-1',
        status === 'Available' ? 'bg-green-600' : 'bg-red-600',
      )}
    >
      {status === 'Available' ? <AvailableIcon /> : <UnavailableIcon />}
    </span>
  )
}
