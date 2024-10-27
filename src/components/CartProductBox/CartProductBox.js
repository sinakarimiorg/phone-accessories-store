import React from 'react'

export default function CartProductBox({ img, title, off, price }) {
    return (
        <div>
            <img className="w-[90px] h-[90px]" src={img} alt="product image" />

            <div className="flex flex-col justify-between">
                <h4 className="text-zinc-700 dark:text-white text-sm md:text-base sm:font-DanaMedium line-clamp-2">{title}</h4>
                <div className="flex flex-col">
                    {off &&
                        <span className="text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">{Number(off).toLocaleString()} تومان تخفیف </span>
                    }
                    <div className="text-base text-zinc-700 dark:text-white font-DanaDemiBold">{Number(price).toLocaleString()}
                        <span className="text-xs font-Dana">تومان</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
