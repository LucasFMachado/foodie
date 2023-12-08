import Image from 'next/image'

import { Button } from '..'

export function About() {
  return (
    <div className="min-h-screen flex flex-col gap-4 lg:flex-row justify-center items-center px-12 lg:px-32">
      <Image
        src="/images/about-image.png"
        alt="About image"
        width={300}
        height={400}
        className=""
      />
      <div className="space-y-4">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why choose us?
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto quisquam delectus minima perferendis nulla quia nisi
          laborum, exercitationem cum quo accusantium, impedit sed.
        </p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
          veritatis facere. Magnam!
        </p>
        <div className="flex justify-between lg:justify-start">
          <Button label="Learn more" />
        </div>
      </div>
    </div>
  )
}
