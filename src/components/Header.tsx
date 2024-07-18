"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import SearchCustom from "./SearchCustom";



export default async function Header({type} : {type?:string}) {
    const user = {
        firstName:"",
        lastName:""
    };
    const pathname = usePathname()
    let firstPathName = pathname.split('/').slice(0, 2).join('/');
    

    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); 
    };
    useEffect(() => {
        handleResize(); 
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

    const titles = {
        "/task": "Explore Task",
        "/task/1": "Detail Task",
        '/settings': "Settings",
        '/message': "Message",
        "/mentor": "Explore Mentors"
    }

    if(type === "layout" && pathname === "/") return <></>

    return (
        <header className={` flex flex-col gap-0 md:gap-6 ${pathname === "/" ? " md:pb-10 md:p-0" : " md:p-8" } `}>
            <div className="flex flex-col-reverse md:flex-row justify-between md:items-center ">
                    <div className={`flex justify-start flex-col items-start p-6 md:p-0`}>
                        <h1 className="title mb-2">
                            
                            {
                                pathname === "/" ? <>
                                    Hi, {user?.firstName} {user?.lastName}
                                </> 
                                :
                                <>
                                    {
                                        titles[firstPathName]
                                    }
                                </>
                            }
                            
                            </h1>
                        {
                            pathname === "/" && <p className='text'>Let's finish your task today!</p>
                        }
                    </div>
                
                    
                <div className={`flex items-center justify-between md:justify-end gap-6  bg-white md:bg-transparent px-6 py-8 md:p-0 md:border-none border-b border-[#F5F5F7] border-solid`}>
                    {
                        isMobile && <MobileNav/>
                    }
                    
                    <div className="flex items-center gap-4 md:gap-6">
                        <Button size="rounded" variant="rounded">
                            <img src="/icons/notification-header.svg" alt="" />
                        </Button>

                        <Button size="rounded" variant="rounded">
                            <img src="/img/profile-header.png" alt="" />
                        </Button>
                        
                    </div>
                </div>
            </div>
            {
                <SearchCustom/>
            }
        </header>
    )
}
