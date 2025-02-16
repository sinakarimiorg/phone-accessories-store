import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronLeft } from "react-icons/hi2";


export default function BreadCrumb({ links }) {
    return (

        <section className='pt-4 sm:pt-48 pb-3'>
            <div className='container'>
                <div className='flex items-center gap-2 text-sm sm:text-base dark:text-white'>
                        {
                            links.map((link) => (
                                    <Link key={link.id} to={link.to} className='flex-center'>
                                        {link.title}
                                        {
                                            link.id !== link.length &&
                                            <HiOutlineChevronLeft />
                                        }
                                    </Link>

                            ))
                        }
                </div>
            </div>
        </section>
    )
}
