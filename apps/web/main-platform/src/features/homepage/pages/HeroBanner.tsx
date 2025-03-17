import Image from 'next/image'
import HeroBannerImage from '@/assets/images/pexels-pixabay-163771-1.png'

export const HeroBanner = () => {
  return (
    // <div className="w-[100vw] h-[600px] absolute left-1/2 -translate-x-1/2 ">
    <div className="-mx-[calc((100vw-100%)/2)] w-screen h-[600px]">
      <Image
        className="w-full h-full object-cover"
        src={HeroBannerImage}
        alt="hero banner"
      />
    </div>
  )
}
