import { Car } from '@/types/car'
import Image from 'next/image'
import Rating from './Rating'
import { ActionsICon } from './icons/ActionsIcon'

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
            <p className='text-sm'>{car.name}</p>
          </div>
        </div>
      </td>
      <td className='text-sm text-gray-500'>{car.nextReservation}</td>
      <td className='text-sm'>
        <p className='badge text-green-800 bg-green-100 rounded-md font-medium text-xs'>{car.status}</p>
      </td>
      <td>
        <Rating rating={car.rating} />
      </td>
      <th>
        <button className="btn btn-ghost btn-xs"><ActionsICon/></button>
      </th>
    </tr>
  )
}
