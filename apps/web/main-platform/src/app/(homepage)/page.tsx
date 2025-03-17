import {
  HeroBanner,
  TravelSearchBar,
  Destinations,
  HotelHighlights,
} from '@/features/homepage/pages'

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <TravelSearchBar />
      <Destinations />

      <HotelHighlights title="Hotels Nearby" />
    </>
  )
}
