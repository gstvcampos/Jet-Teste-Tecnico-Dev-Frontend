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
            <div className="mask h-[85px] w-[85px]">
              <Image
                src={car.imgSrc}
                width={85}
                height={85}
                className="object-contain"
                alt={`imagem do carro- ${car.imgSrc}`}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-base">{car.name}</p>
            <p className="text-xs text-gray-500 py-1">
              Next reservation: {nextReservation}
            </p>
            <RatingCarTag rating={car.rating} />
          </div>
        </div>
      </td>
      <th className="align-top px-0">
        <button className="btn btn-ghost">
          <ActionsICon />
        </button>
      </th>
    </tr>
  )
}
