import CarRow from '@/components/CarRow'
import CarRowMobile from '@/components/CarRowMobile'
import { cars } from '@/db/cars'
import { Car } from '@/types/car'

export default function Home() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead className='text-gray-500 bg-gray-50'>
          <tr>
            <th>CAR</th>
            <th>NEXT RESERVATION</th>
            <th>STATUS</th>
            <th>RATING</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <CarRow car={car as Car} key={car.id} />
          ))}
          {cars.map((car) => (
            <CarRowMobile car={car as Car} key={car.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
