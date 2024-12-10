import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChevronLeft } from "react-icons/hi2";


export default function BreadCrumb({ links }) {
    console.log(links)
    return (

        <section className='sm:pt-48 pb-4'>
            <div className='container'>
                <div className='flex items-center gap-2'>
                        {
                            links.map((link) => (
                                    <Link key={link.id} to={link.to} className='flex-center gap-1'>
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
