import Image from 'next/image'
import HeroBannerImage from '@/assets/images/pexels-pixabay-163771-1.png'

export const HeroBanner = () => {
  return (
    <div className="h-[600px]">
      <Image
        className="w-full h-full"
        src={HeroBannerImage}
        alt="hero banner"
      />
    </div>
  )
}
