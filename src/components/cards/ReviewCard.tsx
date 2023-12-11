import Image from 'next/image'

interface ReviewCardProps {
  name: string
  imageSrc: string
}

export function ReviewCard({ name, imageSrc }: ReviewCardProps) {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className="text-lightText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          vel ab quasi laboriosam, modi inventore tenetur repudiandae! Fuga
          sapiente, nobis dolores laudantium impedit ducimus beatae unde dolor
          sit reprehenderit iure!
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <Image
          src={imageSrc}
          alt={`${name} profile image`}
          width={250}
          height={250}
          className="rounded-full w-1/4"
        />
        <h3 className="font-semibold">{name}</h3>
      </div>
    </div>
  )
}
