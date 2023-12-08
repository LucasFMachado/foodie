interface ButtonProps {
  label: string
}

export function Button({ label }: ButtonProps) {
  return (
    <button className="px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full w-fit">
      {label}
    </button>
  )
}
