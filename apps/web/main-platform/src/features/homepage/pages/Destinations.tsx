import Image from 'next/image'

const destinationData = [
  {
    name: 'Yogyakarta',
    media:
      'https://cf.bstatic.com/xdata/images/city/600x600/688189.jpg?k=f1e882ea63a9ac9b680d43ba379069f878951bdcbb2ea53bdcd6b05d524de87a&o=',
  },
  {
    name: 'Surabaya',
    media:
      'https://cf.bstatic.com/xdata/images/city/600x600/688158.jpg?k=b8f1f71a222042bccae5226bf2499d4c0004282ef74be158c9a85c2679b4b634&o=',
  },
  {
    name: 'Ubud',
    media:
      'https://cf.bstatic.com/xdata/images/city/600x600/688180.jpg?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o=',
  },
]

export const Destinations = () => {
  return (
    <div className="flex flex-col gap-8 mb-8">
      <div className="text-2xl font-black">
        <h2>
          Popular
          <br />
          Destinations
        </h2>

        <div className="w-24 h-2 mt-4 border-b-4 border-neutral-600"></div>
      </div>

      <div className="flex gap-4">
        {destinationData.map((item, index) => (
          <div
            className="w-full max-h-[280px] rounded-lg overflow-hidden"
            key={index}
          >
            <div className="relative pt-[75%]">
              <div className="absolute inset-0">
                <div className="w-full absolute top-0 left-0 p-6 z-2">
                  <h3 className="text-2xl font-black text-neutral-50">
                    {item.name}
                  </h3>
                </div>

                <div>
                  <Image
                    className="w-full h-full absolute top-0 object-cover"
                    width={600}
                    height={600}
                    src={item.media}
                    alt="Yogyakarta"
                  />
                </div>
                <div className="w-full h-full bg-neutral-900/30 w-full h-full absolute top-0 z-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
