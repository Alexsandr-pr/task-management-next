"use client"
// import profile from "@/assets/profil.png"

// import MobileNav from "./MobileNav";


// import SearchCustom from "./SearchCustom";
// import ThemeToggle from "./ThemeToggle";
// import Icon from "./block/Icon";
// import IconId from "@/utils/icon-consts";
// import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";


const Header = () => {
    const pathname = usePathname()
    let firstPathName = pathname.split('/').slice(0, 2).join('/');
    
    const user = {
        name: "Alex",
        surname: "Pierierodov"
    }
    const titles = {
        "/task": "Explore Task",
        "/task/1": "Detail Task",
        '/settings': "Settings",
        '/message': "Message",
        "/mentors": "Explore Mentors"
    }



    return (
        <header className='  border-solid border-main dark:border-none md:border-none px-6 py-8 gap-6 flex flex-col md:p-0 '>
            
            <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-6">
            
                    <div className="flex justify-start flex-col items-start">
                        <h1 className="title mb-2">
                            
                            {
                                pathname === "/" ? <>
                                    Hi, {user.name} {user.surname}
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
                
                    
                <div className="flex items-center justify-between md:justify-end gap-6">
                    {/* {
                        query && <MobileNav/>
                    } */}
                    


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
            {/* {
                firstPathName !== "/" && firstPathName !== "/settings"  &&  firstPathName !== "/message" && <SearchCustom/>
            } */}
        </header>
    )
}

export default Header