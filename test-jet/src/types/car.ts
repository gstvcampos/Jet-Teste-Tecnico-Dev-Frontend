export type Reservation = {
  startDate: string
  endDate: string
}

export type Car = {
  id: string
  name: string
  imgSrc: string
  rating: number
  reservations: Reservation[]
}
