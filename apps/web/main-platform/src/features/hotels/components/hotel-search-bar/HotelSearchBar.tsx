import { FaSearch } from 'react-icons/fa'

export default function HotelSearchBar() {
  return (
    <div className="flex bg-white rounded-full px-6 py-4">
      <div className="w-80 flex-1 text-slate-800 border-r border-slate-200">
        <div className="text-sm font-bold">Location</div>
        <div className="block">
          <input
            className="w-full text-sm text-slate-400 font-semibold"
            type="text"
            readOnly
            placeholder="Which city do you prefer?"
          />
        </div>
      </div>

      <div className="text-slate-800 border-r border-slate-200 px-4">
        <div className="text-sm font-bold">Check In</div>
        <div className="block">
          <input
            className="w-full text-sm text-slate-400 font-semibold"
            type="text"
            readOnly
            placeholder="Add Dates"
          />
        </div>
      </div>

      <div className="text-slate-800 border-r border-slate-200 px-4">
        <div className="text-sm font-bold">Check Out</div>
        <div className="block">
          <input
            className="w-full text-sm text-slate-400 font-semibold"
            type="text"
            readOnly
            placeholder="Add Dates"
          />
        </div>
      </div>

      <div className="text-slate-800 px-4">
        <div className="text-sm font-bold">Guests</div>
        <div className="block">
          <input
            className="w-full text-sm text-slate-400 font-semibold"
            type="text"
            readOnly
            placeholder="Add Guests"
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
