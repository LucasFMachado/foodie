import { ReviewCard } from '../cards/ReviewCard'

export function Reviews() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 md:px-32">
      <h1 className="text-4xl font-semibold text-center pt-24 lg:pt-16 pb-10">
        Customer Reviews
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard name="Sophia Azura" imageSrc="/images/reviwer-image1.png" />
        <ReviewCard name="John Doe" imageSrc="/images/reviwer-image2.png" />
        <ReviewCard name="Voctoria Zoe" imageSrc="/images/reviwer-image3.png" />
      </div>
    </div>
  )
}
