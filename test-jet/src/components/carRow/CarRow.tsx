import { getNextReservationFormattedDate } from '@/lib/ultis'
import { Car } from '@/types/car'
import Image from 'next/image'
import { ActionsICon } from '../icons/ActionsIcon'
import RatingCarTag from './RatingCarTag'
import StatusCarTagDesktop from './StatusCarTagDesktop'
import StatusCarTagMobile from './StatusCarTagMobile'

export default function CarRow({ car }: { car: Car }) {
  const nextReservation = getNextReservationFormattedDate(car.reservations)

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <StatusCarTagMobile reservations={car.reservations} />
            <div className="mask h-[85px] w-[85px] md:h-12 md:w-12">
              <Image
                src={car.imgSrc}
                width={85}
                height={85}
                priority
                className="object-contain"
                alt={`imagem do carro- ${car.imgSrc}`}
              />
            </div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm">{car.name}</p>
          </div>
          <div className="flex md:hidden flex-col">
            <p className="font-semibold text-base">{car.name}</p>
            <p className="text-xs text-gray-500 py-1">
              Next reservation: {nextReservation}
            </p>
            <RatingCarTag rating={car.rating} />
          </div>
        </div>
      </td>

      <td className="text-sm text-gray-500 hidden md:table-cell">
        {nextReservation}
      </td>

      <StatusCarTagDesktop reservations={car.reservations} />

      <td className="hidden md:table-cell">
        <RatingCarTag rating={car.rating} />
      </td>
      <th>
        <button className="btn btn-ghost" aria-label="actions">
          <ActionsICon />
        </button>
      </th>
    </tr>
  )
}
