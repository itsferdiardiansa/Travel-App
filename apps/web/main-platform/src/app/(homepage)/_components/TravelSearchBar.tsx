import { SearchTab } from '@/features/search/components/travel-search'
import FlightSearchBar from '@/features/flights/components/flight-search-bar'
// import HotelSearchBar from '@/features/hotels/components/hotel-search-bar'

export const TravelSearchBar = () => {
  return (
    <div className="absolute top-80 left-0 right-0 text-neutral-50">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-8 items-center">
          <div className="text-[40px] font-bold">FIND</div>

          <SearchTab />
        </div>

        <div className="mt-6">
          {/* <HotelSearchBar /> */}

          <FlightSearchBar />
        </div>
      </div>
    </div>
  )
}
