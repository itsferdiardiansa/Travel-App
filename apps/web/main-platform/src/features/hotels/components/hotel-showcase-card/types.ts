/**
 * Available price categories for a hotel
 */
type PriceCategories = 'grossPrice' | 'excludePrice' | 'strikethroughPrice'

/**
 * Represents the breakdown of hotel prices in different categories
 */
type PriceBreakdown = {
  /** The main price (always required) */
  grossPrice: {
    currency: string
    value: number
  }
} & Partial<
  Record<
    Exclude<PriceCategories, 'grossPrice'>,
    {
      currency: string
      value: number
    }
  >
>

/**
 * Represents check-in and check-out time details
 */
type CheckTime = {
  /** The earliest possible check-in or check-out time */
  fromTime: string

  /** The latest possible check-in or check-out time */
  untilTime: string
}

/**
 * Represents detailed hotel property information
 */
export type HotelProperty = {
  /** Unique hotel ID */
  id: number

  /** Hotel name */
  name: string

  /** Country code where the hotel is located */
  countryCode: string

  /** Hotel latitude coordinate */
  latitude: number

  /** Hotel longitude coordinate */
  longitude: number

  /** Total number of reviews */
  reviewCount: number

  /** Review score (e.g., 8.1) */
  reviewScore: number

  /** Descriptive review score text (e.g., "Very Good") */
  reviewScoreWord: string

  /** Optional wishlist name associated with the hotel */
  wishlistName?: string

  /** Hotel star rating */
  propertyClass: number

  /** Accurate star rating (if different from `propertyClass`) */
  accuratePropertyClass?: number

  /** Quality classification of the property */
  qualityClass?: number

  /** Indicates whether the hotel is preferred (e.g., recommended) */
  isPreferred: boolean

  /** Hotel ranking position in search results */
  rankingPosition: number

  /** Indicates whether the property appears on the first page of search results */
  isFirstPage: boolean

  /** The main photo ID of the hotel */
  mainPhotoId: number

  /** Array of hotel photo URLs */
  photoUrls: string[]

  /** List of booking block IDs */
  blockIds: string[]

  /** Unique location identifier (UFI) for the hotel */
  ufi: number

  /** Check-in time details */
  checkin: CheckTime

  /** Check-out time details */
  checkout: CheckTime

  /** Check-in date in YYYY-MM-DD format */
  checkinDate: string

  /** Check-out date in YYYY-MM-DD format */
  checkoutDate: string

  /** Hotel price breakdown details */
  priceBreakdown: PriceBreakdown

  /** Indicates whether the property can be updated in the gallery */
  optOutFromGalleryChanges?: number

  /** Hotel's position in the search results */
  position: number

  /** Hotel is on collection */
  onCollection?: boolean
}

/**
 * Main type representing hotel data
 */
export type HotelShowcase = Readonly<{
  /** Unique identifier for the hotel */
  hotel_id?: number

  /** Accessibility label containing key hotel details */
  accessibilityLabel?: string

  /** Detailed hotel property information */
  property: HotelProperty

  /** Show save on collections */
  saveOnCollection?: boolean

  /** Save on collections callback */
  onSaveCollection?: () => void
}>
