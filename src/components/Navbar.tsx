'use client'

import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'
import { BiChevronDown, BiRestaurant } from 'react-icons/bi'

import { NavBarLink } from '.'
import { Button } from './Button'

export function NavBar() {
  const [menu, setmenu] = useState(false)
  const toggleMenu = () => setmenu(!menu)
  const closeMenu = () => setmenu(false)

  return (
    <div className="fixed w-full">
      <div>
        <div className="flex flex-row h-20 justify-between p-5 md:px-12 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
            </span>
            <h1 className="text-xl font-semibold">Foodie</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-6 lg:gap-8">
            <NavBarLink label="Home" path="home" />
            <div className="relative group">
              <div className="flex items-center gap-1">
                <NavBarLink label="Dishes" path="dishes" />
                <BiChevronDown size={25} className="cursor-pointer" />
              </div>

              <ul className="absolute hidden space-y-2 group-hover:flex flex-col gap-2 bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <NavBarLink label="Spicy" path="spicy" />
                </li>
                <li>
                  <NavBarLink label="Tasty" path="tasty" />
                </li>
                <li>
                  <NavBarLink label="Delicious" path="delicious" />
                </li>
                <li>
                  <NavBarLink label="Crispy" path="crispy" />
                </li>
              </ul>
            </div>
            <NavBarLink label="About" path="about" />
            <NavBarLink label="Menu" path="menu" />
            <NavBarLink label="Reviews" path="reviews" />
            <Button label="Login" />
          </nav>

          <div className="md:hidden flex items-center cursor-pointer p-2 hover:bg-brightColor hover:text-white transition-all rounded-full w-fit">
            {menu ? (
              <AiOutlineClose size={25} onClick={toggleMenu} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={toggleMenu} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden flex flex-col items-center absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <NavBarLink label="Home" path="home" handleClick={closeMenu} />
          <NavBarLink label="Dishes" path="dishes" handleClick={closeMenu} />
          <NavBarLink label="About" path="about" handleClick={closeMenu} />
          <NavBarLink label="Menu" path="menu" handleClick={closeMenu} />
          <NavBarLink label="Reviews" path="reviews" handleClick={closeMenu} />
          <Button label="Login" />
        </div>
      </div>
    </div>
  )
}
