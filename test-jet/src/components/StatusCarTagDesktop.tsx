import { cn, isCarAvailable } from '@/lib/ultis'
import { Reservation } from '@/types/car'

export default function StatusCarTagDesktop({
  reservations,
}: {
  reservations: Reservation[]
}) {
  const status = isCarAvailable(reservations)

  return (
    <td>
      <p
        className={cn(
          'badge rounded-md font-medium text-xs',
          status === 'Available'
            ? 'text-green-800 bg-green-100'
            : 'text-red-800 bg-red-100',
        )}
      >
        {status}
      </p>
    </td>
  )
}
