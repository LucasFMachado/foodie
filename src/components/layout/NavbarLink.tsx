'use client'

import { Link } from 'react-scroll'

interface NavBarLinkProps {
  label: string
  path: string
  handleClick?: () => void
}

export function NavBarLink({ label, path, handleClick }: NavBarLinkProps) {
  return (
    <Link
      to={path}
      spy
      smooth
      duration={500}
      onClick={handleClick}
      className="hover:text-brightColor transition-all cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-brightColor hover:after:w-full after:transition-all"
    >
      {label}
    </Link>
  )
}
