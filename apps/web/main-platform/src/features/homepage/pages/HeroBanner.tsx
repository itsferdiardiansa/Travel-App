import Image from 'next/image'
import HeroBannerImage from '@/assets/images/pexels-pixabay-163771-1.png'

export const HeroBanner = () => {
  return (
    <div className="-mx-[calc((100vw-100%)/2)] w-screen h-[600px] -mt-[75px]">
      <Image
        className="w-full h-full object-cover"
        src={HeroBannerImage}
        alt="hero banner"
      />
    </div>
  )
}
