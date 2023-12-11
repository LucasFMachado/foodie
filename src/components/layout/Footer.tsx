import Link from 'next/link'

export function Footer() {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 px-5 md:px-12">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Foodie</h1>
          <p className="text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Dishes
            </Link>
            <Link
              href="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              href="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Our Dishes
            </Link>
            <Link
              href="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Premium Menu
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              contact@foodie.com
            </Link>
            <Link
              href="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              (+111) 111 111 111
            </Link>
            <Link
              href="/"
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Social Media
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-brightColor"> Lucas Machado</span> | All rights
          reserveds
        </p>
      </div>
    </div>
  )
}
