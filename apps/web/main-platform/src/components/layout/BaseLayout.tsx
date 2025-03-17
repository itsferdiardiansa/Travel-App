import { PropsWithChildren } from 'react'
import { Navbar } from './Navbar'

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="block">
      <div className="w-full py-4 absolute top-0 left-0 z-99">
        <Navbar />
      </div>

      <div className="max-w-screen-xl mx-auto relative w-full text-sm flex flex-col gap-10">
        {children}
      </div>
    </div>
  )
}
