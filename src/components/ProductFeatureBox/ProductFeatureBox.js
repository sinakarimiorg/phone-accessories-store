import React from 'react'

export default function ProductFeatureBox({ name, status}) {
  return (
    <div>
        <div className='w-56 h-20 p-2 bg-white/80 dark:bg-zinc-800 dark:text-white shadow-lg rounded-lg'>
        <p className='h-2/4 text-zinc-500 dark:text-white/70 text-sm'>{name}</p>
        <p className='h-2/4 pt-2 font-DanaMedium  text-sm border-t border-dotted border-gray-300'>{status}</p>
        </div>
    </div>
  )
}
