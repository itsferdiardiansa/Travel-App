import Link from 'next/link'
import Image from 'next/image'

import BrandLogo from '@/assets/images/brand-logo-default.svg'

export const Navbar = () => {
  return (
    <div className="max-w-screen-xl h-full mx-auto flex items-stretch justify-between grid grid-cols-3 text-neutral-50">
      <div className="flex">
        <Link href={'/'}>
          <Image src={BrandLogo} alt="U Travel" />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Link
          className="py-2 px-4 font-bold rounded-md text-sm hover:bg-black/20 transition duration-200"
          href={'/hotels'}
        >
          Hotels
        </Link>
        <Link
          className="py-2 px-4 font-bold rounded-md text-sm hover:bg-black/20 transition duration-200"
          href={'/flights'}
        >
          Flights
        </Link>
        <Link
          className="py-2 px-4 font-bold rounded-md text-sm hover:bg-black/20 transition duration-200"
          href={'/car-rent'}
        >
          Car Rent
        </Link>
        <Link
          className="py-2 px-4 font-bold rounded-md text-sm hover:bg-black/20 transition duration-200"
          href={'/destination'}
        >
          Destination
        </Link>
      </div>

      <div className="flex items-center justify-end gap-4">
        <div className="border-r border-slate-200">
          <span className="text-sm font-bold pr-3">🇮🇩 ID | IDR</span>
        </div>

        <div className="flex gap-4">
          <button className="border rounded-md border-gray-200 text-sm py-1.5 px-2.5 font-bold cursor-pointer">
            Sign In
          </button>
          <button className="border rounded-md border-info-600 bg-info-600 text-sm py-1.5 px-2.5 font-bold cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}
