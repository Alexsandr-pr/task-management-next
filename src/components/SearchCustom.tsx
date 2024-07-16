"use client";
import { Input } from './ui/input'
import { usePathname } from 'next/navigation';



const SearchCustom = () => {
    
    const pathname = usePathname();
    const placeholder = {
        "/task": "Search Task",
        "/task/1": "Search Task",
        '/settings': "",
        '/message': "",
        "/mentor": "Search Mentors"
    }

    if(pathname === "/") return <></>

    return (
        <div className='flex justify-between items-center gap-5 px-6 md:p-0'>
            <div className="w-full md:w-2/3 xl:w-2/5">
                <Input className={"dark:bg-dark-200  dark:text-white"} type="search" placeholder={placeholder[pathname]}/>
            </div>
            <div className="flex gap-6">
                <button className='text-xs flex md:hidden gap-3 items-center w-[52px] font-semibold py-3.5 h-[52px] px-4 rounded dark:text-white bg-white dark:bg-dark-200 border border-solid dark:border-second-300 border-main'>
                    <img src="/icons/setting-filter-mobile.svg" alt="" />
                </button>
                <button className='text-xs hidden md:flex gap-3 items-center  font-semibold py-3.5 h-[52px] px-7 rounded dark:text-white bg-white dark:bg-dark-200 border border-solid dark:border-second-300 border-main'>
                    <img src="/icons/category-filter.svg" alt="" />
                    <span className='hidden md:block'>Category</span>
                </button>
                <button className='text-xs hidden md:flex gap-3 items-center font-semibold py-3.5 h-[52px] px-7 rounded dark:text-white bg-white dark:bg-dark-200 border border-solid  dark:border-second-300 border-main'>
                    <img src="/icons/sort-filter.svg" alt="" />
                    <span className='hidden md:block'>Sort By : Deadline</span>
                </button>
            </div>
        </div>
    )
}

export default SearchCustom