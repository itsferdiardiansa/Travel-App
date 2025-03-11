import { SearchTab } from './SearchTabs'
import { SearchOptions } from './SearchOptions'
import { FlightSearchBox } from './FlightSearchBox'

export const SearchBar = () => {
  return (
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
  )
}
