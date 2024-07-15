"use client"
import { publicRoutes } from "@/consts";
// import logo from "@/assets/book-square.svg"
// import { Link, NavLink, useLocation } from "react-router-dom"
import Link from "next/link";
// import { publicRoutes } from "../route"
import { usePathname } from "next/navigation";
// import IconId from "@/utils/icon-consts";
// import Icon from "./block/Icon";

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className='sidebar  min-w-full p-5 xl:p-8 bg-white dark:bg-dark-100'>
            <div className="flex mb-16  justify-between gap-4 items-center">
                <Link href="/" className="flex gap-3 text-[32px] items-center justify-center font-semibold leading-normal xl:justify-start ">
                    <img src="/img/logo.png" alt="Logo" />
                    <span className=" hidden xl:block">DNX</span>
                </Link>
            </div>
            <nav >
                <ul className="flex flex-col gap-6">
                    {
                        publicRoutes.map(({route, label, imgUrl}) => {
                            const isActive = pathname === route;
                            return (
                                <li key={label} className="">
                                    <Link href={route} className={`
                                        ${isActive ? "active" : null}
                                        flex gap-3 group nav-link  items-center justify-center xl:justify-start py-2.5 px-5 hover:bg-second-100 dark:hover:bg-primary-500 rounded duration-300 transition-all
                                    `}>
                                        <div>
                                            <img style={{color: isActive ?  "#141522" : "#8E92BC"}} src={imgUrl} alt="" />
                                        </div>
                                        <div className="text-sm hidden xl:block text-second-300 dark:text-second-100 nav-text font-semibold leading-normal">
                                            {label}
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                    
                </ul>
                
            </nav>
        </div>

    )
}

export default Sidebar