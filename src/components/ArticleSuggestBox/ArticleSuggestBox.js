import React from 'react'

import './ArticleSuggestBox.css'
import { Link } from 'react-router-dom'

export default function ArticleSuggestBox({ img, title, publishDate, shortName }) {
  return (
    <div className='max-h-[200px] w-72 xl:w-full mt-4 mx-auto bg-white dark:bg-zinc-700 dark:text-white shadow-md rounded-xl'>
    <Link to={`/article-info/${shortName}`}>
        <img className='w-full h-28 rounded-t-lg' src={img}/>
        <div className='px-5 py-2'>
            <span className='block pb-1 text-left text-xs text-zinc-400'>{publishDate}</span>
            <h2 className='font-DanaMedium text-sm line-clamp-2'>{title}</h2>
        </div>
    </Link>
    </div>
  )
}
