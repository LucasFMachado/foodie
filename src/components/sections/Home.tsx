import { Button } from '@/components'

export function Home() {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center px-12 lg:px-32 bg-hero-image bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">
          Elevate your inner Foodie with every bite.
        </h1>
        <p className="text-backgroundColor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className="lg:pl-44">
          <Button label="Order now" />
        </div>
      </div>
    </div>
  )
}
