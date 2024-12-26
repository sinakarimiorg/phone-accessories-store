import React from 'react'

import './ArticleSuggestBox.css'
import { Link } from 'react-router-dom'

export default function ArticleSuggestBox({ img, title, publishDate, shortName }) {
  return (
    <div className='max-h-[220px] mt-6 bg-white shadow-md rounded-xl'>
    <Link to={`/article-info/${shortName}`}>
        <img className='w-full h-32 rounded-t-lg' src={img}/>
        <div className='px-5 pt-2 pb-4'>
            <span className='block pb-3 text-left text-xs text-zinc-400'>{publishDate}</span>
            <h2 className='font-DanaMedium text-sm line-clamp-2'>{title}</h2>
        </div>
    </Link>
    </div>
  )
}
