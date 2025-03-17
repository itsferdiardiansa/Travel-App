import { SearchTab } from '@/features/homepage/components/SearchTabs'
import { SearchOptions } from '@/features/homepage/components/SearchOptions'
import { FlightSearchBox } from '@/features/homepage/components/FlightSearchBox'

export const TravelSearchBar = () => {
  return (
    <div className="absolute top-80 left-0 right-0 text-neutral-50">
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-8 items-center">
          <div className="text-[40px] font-bold">FIND</div>

          <SearchTab />
        </div>

        <div className="mt-6">
          <SearchOptions />

          {/* <HotelsSearchBox /> */}
          <FlightSearchBox />
        </div>
      </div>
    </div>
  )
}
