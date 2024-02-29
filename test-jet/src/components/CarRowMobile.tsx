import { Car } from '@/types/car'
import Image from 'next/image'
import Rating from './Rating'

export default function CarRowMobile({ car }: { car: Car }) {
  return (
    <tr>
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
          <div className="flex flex-col">
            <div className="font-bold">{car.name}</div>
            <div className="font-bold">{car.nextReservation}</div>
            <Rating rating={car.rating} />
          </div>
        </div>
      </td>
    </tr>
  )
}
