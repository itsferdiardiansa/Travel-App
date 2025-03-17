import Image from 'next/image'
import Link from 'next/link'
import type { HotelProperty as HotelShowcaseProps } from './types'
import { FaStar } from 'react-icons/fa6'
import countryCodes from '@/constants/isoCountryCodes'
import formatCurrency from '@/utils/formatCurrency'
import generateSlug from '@/utils/generateSlug'

export default function PropertyCard({
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

  return (
    <div className="w-[calc((100%-(16px*3))/4)] rounded-md overflow-hidden border border-neutral-200 shadow-md shadow-neutral-200">
      <Link
        className="h-full flex flex-col items-stretch justify-stretch"
        href={{ pathname, query }}
      >
        <div className="w-full">
          <div className="relative pt-[75%]">
            <div className="w-auto absolute top-2 left-2 z-2">
              <div className="p-1 bg-info-700 rounded-md text-neutral-100 font-black">
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

        <div className="flex flex-col flex-1 gap-6 justify-between p-2">
          <div className="flex flex-col items-stretch justify-between gap-2">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold">{name}</h3>
              {(wishlistName || countryName) && (
                <div className="text-sm text-neutral-600">
                  {wishlistName}
                  {countryName && `, ${countryName}`}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <div className="flex items-center">
                <div className="flex items-center text-sm font-thin">
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

                <div className="flex items-center">
                  <span>{' · '}</span>

                  <span className="font-black text-xs text-neutral-50 bg-info-700 py-1 px-2 rounded-md">
                    {reviewScoreWord}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end justify-end">
            {strikethroughPrice && (
              <span className="text-base text-sm text-danger-700 line-through">
                {formatCurrency({
                  amount: strikethroughPrice.value,
                  currency: strikethroughPrice.currency,
                })}
              </span>
            )}
            <span className="font-black text-base">
              {formatCurrency({
                amount: grossPrice.value,
                currency: grossPrice.currency,
              })}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
