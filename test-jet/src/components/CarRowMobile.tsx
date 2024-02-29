import { Car } from '@/types/car'
import Image from 'next/image'
import Rating from './Rating'

export default function CarRowMobile({ car }: { car: Car }) {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask h-20 w-20">
              <Image
                src={car.imgSrc}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-base">{car.name}</p>
            <p className="text-sm text-gray-500">Next reservation: {car.nextReservation}</p>
            <Rating rating={car.rating} />
          </div>
        </div>
      </td>
    </tr>
  )
}
