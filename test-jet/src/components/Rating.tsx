export default function Rating({ rating }: { rating: number }) {
  return (
    <div>
      {[...Array(5)].map((_, i) =>
        i < rating ? (
          <span className="text-xl" key={i}>
            ★
          </span>
        ) : (
          <span className="text-xl" key={i}>
            ☆
          </span>
        ),
      )}
    </div>
  )
}
