import Image from 'next/image'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

import { Button } from '..'

interface DishesCardProps {
  title: string
  imageSrc: string
  price: string
}

export function DishesCard({ title, imageSrc, price }: DishesCardProps) {
  return (
    <div className="w-fit lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <Image
        src={imageSrc}
        alt={`${title} image`}
        width={250}
        height={250}
        className="rounded-xl"
      />
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{title}</h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarFill className="text-brightColor" />
          <BsStarHalf className="text-brightColor" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{price}</h3>
          <Button label="Buy now" />
        </div>
      </div>
    </div>
  )
}
