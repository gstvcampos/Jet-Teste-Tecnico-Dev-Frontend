import { getNextReservationFormattedDate } from '@/lib/ultis'
import { Car } from '@/types/car'
import Image from 'next/image'
import RatingCarTag from './RatingCarTag'
import StatusCarTagMobile from './StatusCarTagMobile'
import { ActionsICon } from './icons/ActionsIcon'

export default function CarRowMobile({ car }: { car: Car }) {
  const nextReservation = getNextReservationFormattedDate(car.reservations)

  return (
    <tr className="table-row md:hidden">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <StatusCarTagMobile reservations={car.reservations} />
            <div className="mask h-20 w-20">
              <Image
                src={car.imgSrc}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-semibold text-base">{car.name}</p>
            <p className="text-sm text-gray-500">
              Next reservation: {nextReservation}
            </p>
            <RatingCarTag rating={car.rating} />
          </div>
        </div>
      </td>
      <th>
        <button className="btn btn-ghost">
          <ActionsICon />
        </button>
      </th>
    </tr>
  )
}
