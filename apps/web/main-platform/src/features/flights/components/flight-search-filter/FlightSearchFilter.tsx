import { FaChevronDown, FaRoute } from 'react-icons/fa'
import { MdFlightClass } from 'react-icons/md'

export default function FlightSearchFilter() {
  return (
    <div className="flex justify-end mb-4 px-6 gap-4">
      <div className="flex items-center font-bold border border-slate-200 rounded-md py-1.5 px-3 bg-gray-400/30">
        <label className="flex items-center">
          <FaRoute className="mr-1.5 text-lg" />
          One Way
        </label>

        <FaChevronDown className="ml-2" />
      </div>

      <div className="flex items-center font-bold border border-slate-200 rounded-md py-1.5 px-3 bg-gray-400/30">
        <div className="flex items-center">
          <MdFlightClass className="mr-1.5 text-lg" />
          Economy
        </div>
        <FaChevronDown className="ml-2" />
      </div>
    </div>
  )
}
