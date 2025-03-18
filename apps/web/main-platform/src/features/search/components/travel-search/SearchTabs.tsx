import Link from 'next/link'

export const SearchTab = () => {
  return (
    <div className="flex gap-6">
      <Link
        className="py-2 pr-4 font-bold text-sm border-b border-gray-200"
        href={'/hotels'}
      >
        Hotels
      </Link>
      <Link className="py-2 pr-4 font-bold text-sm" href={'/flights'}>
        Flights
      </Link>
      <Link className="py-2 pr-4 font-bold text-sm" href={'/car-rent'}>
        Car Rent
      </Link>
      <Link className="py-2 pr-4 font-bold text-sm" href={'/destination'}>
        Destination
      </Link>
    </div>
  )
}
