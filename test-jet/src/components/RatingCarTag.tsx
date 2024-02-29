export default function RatingCarTag({ rating }: { rating: number }) {
  return (
    <td>
      <span>
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
      </span>
    </td>
  )
}
