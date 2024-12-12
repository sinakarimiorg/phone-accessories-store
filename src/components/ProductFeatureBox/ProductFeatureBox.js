import React from 'react'

export default function ProductFeatureBox({ name, status}) {
  return (
    <div>
        <div className='bg-white/80 shadow-lg rounded-lg'>
        <p>{name}</p>
        <p>{status}</p>
        </div>
    </div>
  )
}
