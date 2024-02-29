import { getNextReservationFormattedDate } from '@/lib/ultis'
import { Car } from '@/types/car'
import Image from 'next/image'
import RatingCarTag from './RatingCarTag'
import StatusCarTagDesktop from './StatusCarTagDesktop'
import { ActionsICon } from './icons/ActionsIcon'

export default function CarRowDesktop({ car }: { car: Car }) {
  const nextReservation = getNextReservationFormattedDate(car.reservations)

  return (
    <tr className="hidden md:table-row">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask h-12 w-12">
              <Image
                src={car.imgSrc}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div>
            <p className="text-sm">{car.name}</p>
          </div>
        </div>
      </td>
      <td className="text-sm text-gray-500">{nextReservation}</td>
      <StatusCarTagDesktop reservations={car.reservations} />
      <td>
        <RatingCarTag rating={car.rating} />
      </td>
      <th>
        <button className="btn btn-ghost">
          <ActionsICon />
        </button>
      </th>
    </tr>
  )
}
