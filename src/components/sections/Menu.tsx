import { DishesCard } from '../cards/DishesCard'

export function Menu() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-12 lg:px-32 pt-12">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard
          title="Delicious Dish"
          imageSrc="/images/menu-image1.jpg"
          price="$16.99"
        />
        <DishesCard
          title="Delicious Dish"
          imageSrc="/images/menu-image2.jpg"
          price="$18.99"
        />
        <DishesCard
          title="Delicious Dish"
          imageSrc="/images/menu-image3.jpg"
          price="$14.99"
        />
      </div>
    </div>
  )
}
