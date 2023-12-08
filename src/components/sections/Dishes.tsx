import { DishesCard } from '../cards/DishesCard'

export function Dishes() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-5 lg:px-32">
      <h1 className="text-4xl font-semibold text-center pt-12 pb-8">
        Our Dishes
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard
          title="Tasty Dish"
          imageSrc="/images/dish-image1.jpg"
          price="$10.99"
        />
        <DishesCard
          title="Tasty Dish"
          imageSrc="/images/dish-image2.jpg"
          price="$12.99"
        />
        <DishesCard
          title="Tasty Dish"
          imageSrc="/images/dish-image3.jpg"
          price="$9.99"
        />
        <DishesCard
          title="Tasty Dish"
          imageSrc="/images/dish-image4.jpg"
          price="$11.99"
        />
        <DishesCard
          title="Tasty Dish"
          imageSrc="/images/dish-image5.jpg"
          price="$10.99"
        />
        <DishesCard
          title="Tasty Dish"
          imageSrc="/images/dish-image6.jpg"
          price="$12.99"
        />
      </div>
    </div>
  )
}
