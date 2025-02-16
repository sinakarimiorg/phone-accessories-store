import React from 'react'
import { Link } from 'react-router-dom'

import './ProductBoxLarge.css'

export default function ProductBoxLarge(props) {
  return (
            <>
                {/* Icons */}
                <svg className='hidden'>
                    <symbol id="toman" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                        <path fillRule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clipRule="evenodd" fill="currentColor"></path>
                    </symbol>
    
                    <symbol id="shopping-cart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </symbol>
                </svg>
    
                <Link to={`/product-info/${props.shortName}`}>
                    <div className={props.classes}>
                        <div className={`${props.img2 && 'group'} relative w-60 h-50 mx-auto`}>
                            <img className='absolute group-hover:opacity-0 group-hover:invisible inset-0 h-full cursor-pointer transition-all duration-500' src={props.img} />
                            {props.img2 &&
                                <img className='absolute opacity-0 invisible group-hover:block group-hover:opacity-100 group-hover:visible inset-0 h-full cursor-pointer transition-all duration-500' src={props.img2} />}
                        </div>
                        {/* Box Body */}
                        <div className='pt-6'>
                            <p className='font-DanaDemiBold text-zinc-600 dark:text-white leading-6 hover:text-fuchsia-400 cursor-pointer'>{props.title}</p>
                            <div className='flex justify-between items-center px-2 pt-5 pb-1'>
                                {props.discount && <span className='px-2 xs:px-2.5 pt-0.5 font-DanaMedium xs:font-DanaDemiBold text-xs text-white bg-purple-500 rounded-lg'>{props.discount}%</span>}
                                <p className='flex justify-end items-center xs:gap-1 w-full text-zinc-800'>
                                    <span className='font-DanaDemiBold text-sm sm:text-base md:text-xl dark:text-white'>{props.price.toLocaleString()}</span>
                                    <span><svg className='w-3 xs:w-4 h-3 xs:h-4 pb-0.5 dark:text-white'><use href="#toman"></use></svg></span>
                                </p>
                            </div>
                            {
                                props.exPrice &&
                                <div className='flex justify-end items-center w-full'>
                                    <span className='ex-price'>{props.exPrice.toLocaleString()}</span>
                                </div>
                            }
                        </div>
                    </div>
                </Link>
            </>
  )
}
