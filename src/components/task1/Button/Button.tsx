import React from 'react'

export default function Button({title, icon}: any) {
  return (
    <button className="mt-8 flex items-center gap-3 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all duration-200">
        {icon}
        {title}
    </button>
  )
}
