"use client"
import { publicRoutes } from '@/consts';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

interface NavLinkProps {
    label: string;
    imgUrl: string;
    route: string;
    isActive?: boolean;
}

const Navbar = ({type}: {
    type?: string;
}) => {

    const pathname = usePathname()
    return (
        <ul className="flex flex-col gap-6">
            {
                publicRoutes.map((item) => {
                    const isActive = pathname === item.route;
                    return (
                        
                        type === "mobile" ?  <NavLinkModile isActive={isActive} {...item}/> : <NavLink isActive={isActive} {...item}/>
                        
                    )
                })
            }
        </ul>
    )
    
    
}

const NavLink = ({label,imgUrl, route, isActive} : NavLinkProps) => {
    return (
        <li key={label} className="">
            <Link href={route} className={`
                ${isActive ? "active" : null}
                flex gap-3 group nav-link  items-center justify-center xl:justify-start py-2.5 px-5 hover:bg-second-100 dark:hover:bg-primary-500 rounded duration-300 transition-all
            `}>
                <div className="">
                    <svg width={24} height={24} style={{color: isActive ?  "#141522" : "#8E92BC"}}>
                        <use xlinkHref={imgUrl}/>
                    </svg>
                </div>
                <div className="text-sm hidden xl:block text-second-300 dark:text-second-100 nav-text font-semibold leading-normal">
                    {label}
                </div>
            </Link>
        </li>
    )
}

const NavLinkModile = ({label,imgUrl, route, isActive} : NavLinkProps) => {
    return (
        <li className="">
            <Link href={route} className="flex gap-3 group nav-link items-center justify-start  py-2.5 px-5">
                <div className="">
                    <svg width={24} height={24} style={{color: isActive ?  "#141522" : "#8E92BC"}}>
                        <use xlinkHref={imgUrl}/>
                    </svg>
                </div>
                <div className="text-sm text-second-300 nav-text font-semibold leading-normal">
                    {label}
                </div>
            </Link>
        </li>
    )
}
export default Navbar