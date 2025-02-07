import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiHome } from "react-icons/ci";
import { MdOutlineTimeline } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { GrArticle } from "react-icons/gr";
import { FaBoxes } from "react-icons/fa";
import { HiMiniXMark, HiOutlineUsers } from "react-icons/hi2";
import { CgMenuLeft } from "react-icons/cg";
import { GrTransaction } from "react-icons/gr";
import { LiaComments } from "react-icons/lia";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";

import './SideBar.css'
import Swal from 'sweetalert2';

export default function SideBar({ closeNavBarFunc }) {
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate()

    const exitFromPAdmin = () => {
        Swal.fire({
            title: "از حساب کاربری خود خارج می شوید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#9545ED",
            cancelButtonColor: "#d33",
            confirmButtonText: "بله!",
            cancelButtonText: 'لغو کردن!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('username')
                navigate('/')
            }
        })
    }
    return (
        <>
            {/* SideBar For Laptop Size  */}
            <div className='hidden md:block w-3/12 xl:w-2/12 px-4 py-8 xl:p-5 bg-custom-navy/85'>
                {/* SideBar Logo */}
                <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
                    <img src='/images/logo/logo-lg.png' className='w-8 lg:w-14 h-8 lg:h-14' />
                    <h5 className='text-shadow-topbar font-MorabbaBold text-white text-xl md:text-2xl 2xl:text-3xl'>
                        مـوبـو
                        لــــــند
                    </h5>
                </Link>
                {/* SideBar Menu */}
                <div className={`sidebar overflow-hidden custom-scroll ${isFocused ? 'overflow-y-auto' : 'overflow-hidden'}`}
                    onMouseEnter={() => setIsFocused(true)}  // for desktop
                    onMouseDown={() => setIsFocused(true)}
                    onMouseLeave={() => setIsFocused(false)}
                    onTouchStart={() => setIsFocused(true)}  // for mobile
                >
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">داشبورد</h3>
                        <ul className="sidebarList">
                            <NavLink to="/p-admin" className="link sidebarListItem">
                                <CiHome className="sidebarIcon" />
                                خانه
                            </NavLink>
                            <li className="sidebarListItem">
                                <MdOutlineTimeline className="sidebarIcon" />
                                آمار
                            </li>
                            <li className="sidebarListItem">
                                <AiOutlineRise className="sidebarIcon" />
                                فروش
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">منوی سریع</h3>
                        <ul className="sidebarList">
                            <NavLink to="/p-admin/products" className="link sidebarListItem">
                                <FaBoxes className="sidebarIcon" />
                                محصولات
                            </NavLink>
                            <NavLink to="/p-admin/articles" className="link sidebarListItem">
                                <GrArticle className="sidebarIcon" />
                                مقالات
                            </NavLink>
                            <NavLink to="/p-admin/users" className="link sidebarListItem">
                                <HiOutlineUsers className="sidebarIcon" />
                                کاربران
                            </NavLink>
                            <li className="sidebarListItem">
                                <CgMenuLeft className="sidebarIcon" />
                                منوها
                            </li>
                            <li className="sidebarListItem">
                                <GrTransaction className="sidebarIcon" />
                                تراکنش ها
                            </li>
                            <li className="sidebarListItem">
                                <LiaComments className="sidebarIcon" />
                                نظرات
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">اعلانات</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <MdOutlineAlternateEmail className="sidebarIcon" />
                                ایمیل
                            </li>
                            <li className="sidebarListItem">
                                <MdOutlineFeedback className="sidebarIcon" />
                                بازخورد
                            </li>
                            <li className="sidebarListItem">
                                <TbMessages className="sidebarIcon" />
                                پیام ها
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">پرسنل</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <PiSuitcaseSimpleThin className="sidebarIcon" />
                                مدیریت
                            </li>
                            <li className="sidebarListItem">
                                <MdOutlineTimeline className="sidebarIcon" />
                                آمار
                            </li>
                            <li className="sidebarListItem" onClick={() => exitFromPAdmin()}>
                                <IoExitOutline className="sidebarIcon" />
                                خروج
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* SideBar For Mobile Size  */}
            <div className='block md:hidden w-full'>
                {/* SideBar Logo */}
                <div className='flex justify-between items-center'>
                    {/* SideBar Logo  */}
                    <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
                        <img src='/images/logo/logo-lg.png' className='w-8 lg:w-14 h-8 lg:h-14' />
                        <h5 className='text-shadow-topbar font-MorabbaBold text-white text-xl md:text-2xl 2xl:text-3xl'>
                            مـوبـو
                            لــــــند
                        </h5>
                    </Link>
                    {/* <!-- Close Nav Icon --> */}
                    <div onClick={() => closeNavBarFunc()}>
                        <HiMiniXMark className="text-white w-5 h-5 cursor-pointer" />
                    </div>
                </div>
                {/* SideBar Menu */}
                <div className='sidebar'>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">داشبورد</h3>
                        <ul className="sidebarList">
                            <NavLink to="/p-admin" className="link sidebarListItem">
                                <CiHome className="sidebarIcon" />
                                خانه
                            </NavLink>
                            <li className="sidebarListItem">
                                <MdOutlineTimeline className="sidebarIcon" />
                                آمار
                            </li>
                            <li className="sidebarListItem">
                                <AiOutlineRise className="sidebarIcon" />
                                فروش
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">منوی سریع</h3>
                        <ul className="sidebarList">
                            <NavLink to="/p-admin/products" className="link sidebarListItem">
                                <FaBoxes className="sidebarIcon" />
                                محصولات
                            </NavLink>
                            <NavLink to="/p-admin/articles" className="link sidebarListItem">
                                <GrArticle className="sidebarIcon" />
                                مقالات
                            </NavLink>
                            <NavLink to="/p-admin/users" className="link sidebarListItem">
                                <HiOutlineUsers className="sidebarIcon" />
                                کاربران
                            </NavLink>
                            <li className="sidebarListItem">
                                <CgMenuLeft className="sidebarIcon" />
                                منوها
                            </li>
                            <li className="sidebarListItem">
                                <GrTransaction className="sidebarIcon" />
                                تراکنش ها
                            </li>
                            <li className="sidebarListItem">
                                <LiaComments className="sidebarIcon" />
                                نظرات
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">اعلانات</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <MdOutlineAlternateEmail className="sidebarIcon" />
                                ایمیل
                            </li>
                            <li className="sidebarListItem">
                                <MdOutlineFeedback className="sidebarIcon" />
                                بازخورد
                            </li>
                            <li className="sidebarListItem">
                                <TbMessages className="sidebarIcon" />
                                پیام ها
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">پرسنل</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <PiSuitcaseSimpleThin className="sidebarIcon" />
                                مدیریت
                            </li>
                            <li className="sidebarListItem">
                                <MdOutlineTimeline className="sidebarIcon" />
                                آمار
                            </li>
                            <li className="sidebarListItem">
                                <IoExitOutline className="sidebarIcon" onClick={() => exitFromPAdmin()} />
                                خروج
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
