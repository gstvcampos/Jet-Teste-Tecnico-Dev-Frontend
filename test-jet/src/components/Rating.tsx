export default function Rating({ rating }: { rating: number }) {
  return (
    <div>
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <span className="text-2xl" key={i}>
            ★
          </span>
        ) : (
          <span className="text-2xl" key={i}>
            ☆
          </span>
        ),
      )}
    </div>
  )
}
