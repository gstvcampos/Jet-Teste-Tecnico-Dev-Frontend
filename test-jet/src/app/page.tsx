import CarRow from '@/components/CarRow'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { cars } from '@/db/cars'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <table className="table">
        <thead className="text-gray-500 bg-gray-50 hidden md:table-header-group">
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
            <CarRow car={car} key={car.id} />
          ))}
        </tbody>
      </table>
    </MaxWidthWrapper>
  )
}
