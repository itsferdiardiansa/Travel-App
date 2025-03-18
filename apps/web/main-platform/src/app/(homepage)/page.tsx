import {
  HeroBanner,
  TravelSearchBar,
  Destinations,
  HotelHighlights,
} from './_components'

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <TravelSearchBar />
      <Destinations />

      <HotelHighlights title="Hotels Nearby in Surabaya" />

      <HotelHighlights
        title="Worth to stay"
        subTitle="Save on stays for 21 March - 23 March"
        saveOnCollection={true}
      />
    </>
  )
}
