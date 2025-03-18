import { PropsWithChildren } from 'react'

export type SectionContainerProps = {
  title: string | React.ReactNode
  subTitle?: string | React.ReactNode
}

export default function SectionContainer({
  title,
  subTitle,
  children,
}: SectionContainerProps & PropsWithChildren) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col self-baseline">
        <div className="text-2xl font-black">
          <h2>{title}</h2>
        </div>
        <div className="text-base text-neutral-600">
          <h4>{subTitle}</h4>
        </div>

        <div className="w-3/5 h-2 mt-2 border-b-4 border-neutral-600"></div>
      </div>

      <div className="relative">{children}</div>
    </div>
  )
}
