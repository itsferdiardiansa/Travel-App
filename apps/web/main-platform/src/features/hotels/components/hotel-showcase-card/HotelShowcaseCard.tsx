'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { HotelShowcase as HotelShowcaseProps } from './types'
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa6'
import countryCodes from '@/constants/isoCountryCodes'
import { formatCurrency, generateSlug } from '@/utils'

export default function HotelShowcaseCard({
  property: {
    id,
    countryCode,
    wishlistName,
    name,
    photoUrls,
    reviewScoreWord,
    reviewScore,
    reviewCount,
    priceBreakdown,
    checkinDate,
    checkoutDate,
    blockIds,
    onCollection,
  },
  saveOnCollection = false,
  onSaveCollection = () => {},
}: HotelShowcaseProps) {
  const countryName = countryCodes[countryCode.toUpperCase()]
  const [mainPhotoUrl] = photoUrls
  const {
    grossPrice,
    // excludePrice,
    strikethroughPrice,
  } = priceBreakdown
  const [blockId] = blockIds
  const slug = generateSlug(name)
  const pathname = ['/hotel', slug].join('/')
  const query = {
    id: id.toString(),
    checkinDate,
    checkoutDate,
    blockId,
  }

  const handleSaveCollection = () => {
    onSaveCollection()
  }

  return (
    <div className="w-[calc((100%-(16px*3))/4)] relative rounded-md overflow-hidden border border-neutral-200 shadow-md shadow-neutral-200">
      <Link
        className="h-full flex flex-col items-stretch justify-stretch"
        href={{ pathname, query }}
      >
        <div className="w-full">
          <div className="relative pt-[75%]">
            <div className="w-auto absolute top-2 left-2 z-2">
              <div className="py-1 px-2 inline bg-info-700 rounded-md text-neutral-100 font-black">
                {reviewScore}
              </div>
            </div>

            <div className="absolute inset-0">
              <Image
                className="w-full h-full object-cover"
                width={600}
                height={600}
                src={mainPhotoUrl}
                alt={name}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-4 justify-between p-2">
          <div className="flex flex-col items-stretch justify-between gap-2">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold line-clamp-2">{name}</h3>
              {(wishlistName || countryName) && (
                <div className="text-sm text-neutral-600">
                  {wishlistName}
                  {countryName && `, ${countryName}`}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <div className="flex items-center">
                <div className="flex items-center">
                  <span className="font-black text-xs text-neutral-50 bg-info-700 py-1 px-2 rounded-md">
                    {reviewScoreWord}
                  </span>
                </div>
                <div className="flex items-center text-sm font-thin">
                  <span className="font-black text-xl">{' · '}</span>

                  <span className="mr-1.5">
                    <FaStar className="text-warning-700 mb-1" />
                  </span>

                  <span className="flex items-center">
                    {formatCurrency({
                      amount: reviewCount,
                      showCurrencyLabel: false,
                      compact: true,
                    })}{' '}
                    reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-end">
            <div className="flex items-center mr-2">
              <span className="text- mb-1">From</span>
            </div>
            <div className="flex flex-col items-end">
              {strikethroughPrice && (
                <span className="text-base text-sm text-danger-700 line-through">
                  {formatCurrency({
                    amount: strikethroughPrice.value,
                    currency: strikethroughPrice.currency,
                  })}
                </span>
              )}
              <span className="font-black text-lg">
                {formatCurrency({
                  amount: grossPrice.value,
                  currency: grossPrice.currency,
                })}
              </span>
            </div>
          </div>
        </div>
      </Link>

      {saveOnCollection && (
        <div className="w-auto absolute top-2 right-2 z-9">
          <div
            className="p-2 rounded-full bg-neutral-50 hover:bg-neutral-200 cursor-pointer flex items-center"
            onClick={handleSaveCollection}
          >
            {onCollection ? (
              <FaHeart className="text-lg text-neutral-700" />
            ) : (
              <FaRegHeart className="text-lg text-neutral-700" />
            )}
          </div>
        </div>
      )}
    </div>
  )
}
