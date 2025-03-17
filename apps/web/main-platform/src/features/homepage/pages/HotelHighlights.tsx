import { HotelShowcaseCard } from '@/features/homepage/components'

import hotelData from '@/dummy-data/hotels.json'

type HotelHightlightProps = {
  title: string | React.ReactNode
}

export const HotelHighlights = ({ title }: HotelHightlightProps) => {
  const {
    data: { hotels },
  } = hotelData

  return (
    <div className="flex flex-col gap-8">
      <div className="text-2xl font-black">
        <h2>{title}</h2>

        <div className="w-28 h-2 mt-4 border-b-4 border-neutral-600"></div>
      </div>

      <div className="flex gap-4">
        {hotels.slice(0, 4).map((item, index) => (
          <HotelShowcaseCard key={index} {...item.property} />
        ))}
      </div>
    </div>
  )
}
