import { FaUser } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { GoArrowSwitch } from 'react-icons/go'

export default function FlightSearchBox() {
  return (
    <div className="flex bg-white rounded-full px-6 py-4">
      <div className="w-60 text-slate-800 px-4">
        <div className="text-sm font-bold">Where from?</div>
        <div className="mt-1">
          <input
            className="w-full text-sm text-slate-400 font-semibold"
            type="text"
            readOnly
            placeholder="Add city"
          />
        </div>
      </div>

      <div className="flex items-center relative">
        <div className="h-full border-r border-slate-200"></div>

        <div className="absolute -left-3.5 border border-slate-200 rounded-full p-1.5 bg-white">
          <GoArrowSwitch className="text-info-600" />
        </div>
      </div>

      <div className="w-60 text-slate-800 border-r border-slate-200 pl-8 pr-4">
        <div className="text-sm font-bold">Where to?</div>
        <div className="mt-1">
          <input
            className="w-full text-sm text-slate-400 font-semibold"
            type="text"
            readOnly
            placeholder="Add City"
          />
        </div>
      </div>

      <div className="text-slate-800 border-r border-slate-200 px-4">
        <div className="text-sm font-bold">Departure date</div>
        <div className="mt-1">
          <input
            className="w-full text-sm text-slate-400 font-semibold"
            type="text"
            readOnly
            placeholder="Add Dates"
          />
        </div>
      </div>

      <div className="text-slate-800 border-r border-slate-200 px-4">
        <div className="text-sm font-bold">Return Date</div>
        <div className="mt-1">
          <input
            className="w-full text-sm text-slate-400 font-semibold"
            type="text"
            readOnly
            placeholder="Add Dates"
          />
        </div>
      </div>

      <div className="text-slate-800 px-4">
        <div className="text-sm font-bold">Passanger(s)</div>
        <div className="flex items-center mt-1">
          <FaUser className="mr-3 text-slate-400" />
          <input
            className="w-full text-sm text-slate-400 font-semibold"
            type="text"
            readOnly
            value="2 trevellers"
          />
        </div>
      </div>

      <div className="text-slate-800 pl-4">
        <div className="block">
          <button className="bg-info-600 rounded-full p-4 cursor-pointer">
            <FaSearch className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
