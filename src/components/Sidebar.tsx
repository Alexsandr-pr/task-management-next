
import Link from "next/link";
import Navbar from "./Navbar";

const Sidebar = () => {

    return (
        <div className='sidebar  min-w-full p-5 xl:p-8 bg-white dark:bg-dark-100'>
            <div className="flex mb-16  justify-between gap-4 items-center">
                <Link href="/" className="flex gap-3 text-[32px] items-center justify-center font-semibold leading-normal xl:justify-start ">
                    <img src="/img/logo.png" alt="Logo" />
                    <span className=" hidden xl:block">DNX</span>
                </Link>
            </div>
            <nav >
                <Navbar/>
            </nav>
        </div>

    )
}

export default Sidebar