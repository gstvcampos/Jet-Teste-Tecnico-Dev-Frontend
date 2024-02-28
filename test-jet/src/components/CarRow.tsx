import { Car } from '@/types/car'
import Image from 'next/image'
import Rating from './Rating'

export default function CarRow({ car }: { car: Car }) {
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
          <div>
            <div className="font-bold">{car.name}</div>
          </div>
        </div>
      </td>
      <td>{car.nextReservation}</td>
      <td>{car.status}</td>
      <td>
        <Rating rating={car.rating} />
      </td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  )
}
