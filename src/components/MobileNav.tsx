"use client";
import { useEffect, useState } from 'react'
import { publicRoutes } from '@/consts';
import {useAutoAnimate} from "@formkit/auto-animate/react"
// import logo from "@/assets/book-square.svg"



import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Navbar from './Navbar';



const MobileNav = () => {

    const [state, setState] = useState(false);
    const [block] = useAutoAnimate();

    const pathname = usePathname();

    useEffect(( ) => {
        setState(false)
    }, [pathname])

    return (
        <div ref={block} className="">
            <Button onClick={() => setState(prev => !prev)} size="rounded" variant="rounded">
                <img src="/icons/menu-burger.svg" alt="menu" />
            </Button>
            
            {
                state && <div className={`fixed  w-full h-full right-0 top-0 z-50 flex justify-end bg-stone-300 transition-all duration-300`}>
                <div className="p-8 w-[80%] h-full bg-white sm:w-96">
                    <div className="pb-8 flex items-center justify-between gap-4 border-b border-solid border-main">
                        <Link href="/" className="flex gap-3 text-lg items-center  font-semibold leading-normal xl:justify-start text-second-500">
                            <img width={30} height={30} src="/img/logo.png" alt="Logo" />
                            <span className="">DNX</span>
                        </Link>
                        <button onClick={() => setState(false)}>
                            <img src="/icons/arrow-left.svg" alt="arrow-left" />
                        </button>
                    </div>
                    <nav className="pt-8">
                        
                            <Navbar type='mobile'/>
                        
                    </nav>
                </div>
            </div>
            }
        </div>
        
    )
}

export default MobileNav