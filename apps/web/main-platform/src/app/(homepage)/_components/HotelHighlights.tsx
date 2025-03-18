import SectionContainer, {
  type SectionContainerProps,
} from '@/components/ui/section-container'
import HotelShowcaseCard, {
  type HotelShowcase,
} from '@/features/hotels/components/hotel-showcase-card'

import hotelData from '@/dummy-data/hotels.json'

export const HotelHighlights = (
  props: SectionContainerProps & Pick<HotelShowcase, 'saveOnCollection'>
) => {
  const { saveOnCollection, ...restProps } = props
  const {
    data: { hotels },
  } = hotelData

  return (
    <SectionContainer {...restProps}>
      <div className="flex gap-4">
        {hotels.slice(0, 5).map((item, index) => (
          <HotelShowcaseCard
            key={index}
            property={item.property}
            saveOnCollection={saveOnCollection}
          />
        ))}
      </div>
    </SectionContainer>
  )
}
