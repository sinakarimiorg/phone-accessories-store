import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CiHome } from "react-icons/ci";
import { MdOutlineTimeline } from "react-icons/md";
import { AiOutlineRise } from "react-icons/ai";
import { TbCubePlus } from "react-icons/tb";
import { FaBoxes } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { GrTransaction } from "react-icons/gr";
import { LiaComments } from "react-icons/lia";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { GoReport } from "react-icons/go";

import './SideBar.css'

export default function SideBar() {
    return (
        <div className='w-2/12 p-6 bg-custom-navy/85'>
            {/* SideBar Logo */}
            <Link to={'/'} className='flex items-center gap-1 cursor-pointer'>
                <img src='/images/logo/logo-lg.png' className='w-14 h-14' />
                <h5 className='text-shadow-topbar font-MorabbaBold text-white text-xl md:text-2xl xl:text-3xl'>
                    مـوبـو
                    لــــــند
                </h5>
            </Link>
            {/* SideBar Menu */}
            <div className='sidebar'>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">داشبورد</h3>
                    <ul className="sidebarList">
                        <NavLink to="/" className="link sidebarListItem">
                            <li className="sidebarListItem">
                                <CiHome className="sidebarIcon" />
                                خانه
                            </li >
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
                        <NavLink to="/products" className="link sidebarListItem">
                            <li className="sidebarListItem">
                                <TbCubePlus className="sidebarIcon" />
                                محصولات
                            </li>
                        </NavLink>
                        <NavLink to="/newProduct" className="link sidebarListItem">
                            <li className="sidebarListItem">
                                <FaBoxes className="sidebarIcon" />
                                محصول جدید
                            </li>
                        </NavLink>
                        <NavLink to="/users" className="link sidebarListItem">
                            <li className="sidebarListItem">
                                <HiOutlineUsers className="sidebarIcon" />
                                کاربران
                            </li>
                        </NavLink>
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
                            <GoReport className="sidebarIcon" />
                            گزارشات
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
