import SectionContainer, {
  type SectionContainerProps,
} from '@/components/ui/section-container'
import HotelShowcaseCard from '@/features/hotels/components/hotel-showcase-card'

import hotelData from '@/dummy-data/hotels.json'

export const HotelHighlights = (props: SectionContainerProps) => {
  const {
    data: { hotels },
  } = hotelData

  return (
    <SectionContainer {...props}>
      <div className="flex gap-4">
        {hotels.slice(0, 5).map((item, index) => (
          <HotelShowcaseCard key={index} {...item.property} />
        ))}
      </div>
    </SectionContainer>
  )
}
