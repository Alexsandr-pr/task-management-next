
import { Button } from "@/components/ui/button"
import DashboardState from "@/components/DashboardState";
import SliderFull from "@/components/slider/SliderFull";
import Calendar from "@/components/Calendar";
import Task from "@/components/Task";
import Header from "@/components/Header";

const data = [
    {
        text: "Understanding the tools in Figma"
    },
    {
        text: "Understand the basics of making designs"
    },
    {
        text: "Design a mobile application with figma "
    }
]


export default function Home() {

	return (
		<div className="flex flex-col xl:flex-row">
            <div className=" xl:w-[70%] bg-[#FCFCFC] md:bg-[#FAFAFA] dark:bg-dark-200 2xl:w-[63%] gap-8 md:p-5  2xl:p-8">
                <Header/>
                <div className="flex flex-col gap-8 mb-8 px-5 md:p-0">
                    <DashboardState/>
                </div>
                <div className="mb-8 px-5 md:p-0">
                    <SliderFull two={true} title={"Monthly Mentors"} type={"mentor"}/>
                </div>
                <div className="px-5 md:p-0">
                <SliderFull two={true} title={"Upcoming Task"} type={"task"}/>
                </div>
                
            </div>
            <div className="bg-main dark:bg-dark-100 xl:w-[30%] 2xl:w-[36%] p-5  2xl:p-8 flex flex-col gap-10 items-center">
                <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-full">
                    <Calendar/>
                </div>
                <div className="w-full  dark:bg-dark-100 p-4 xl:p-6 bg-white rounded-[10px]">
                    <div className="flex items-center justify-between gap-5 mb-5">
                        <h3 className="text-sm font-semibold">Task Today</h3>
                        <button>
                            <img src="/icons/more-button.svg" alt="" />
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row xl:flex-col  gap-8 ">
                        <div className="pb-8 sm:pb-0 xl:pb-8  xl:border-b w-full sm:w-1/2 xl:w-full border-b border-b-main dark:border-b-dark-200 border-solid sm:border-none xl:border-b-main xl:dark:border-b-dark-200 xl:border-solid">
                            
                            <div className="">
                                <Task clazz={"gap-5"}/>
                            </div>
                        </div>
                        <div className=" w-full sm:w-1/2  flex flex-col xl:w-full pt-8 sm:pt-0 xl:pt-8" >
                            <div className="flex items-center justify-between  gap-5 mb-5">
                                <p>Detail Task</p>
                                <span className="text-xs text-second-400 dark:text-info-300  font-medium">UI / UX Designer</span>
                            </div>
                            <ul className="flex basis-full flex-col mb-14 sm:mb-0 xl:mb-14 gap-5">
                                {
                                    data.map(({text}, i) => {
                                        return (
                                            
                                                <li key={i} className="flex items-center gap-3 ">
                                                    <span className="w-9 h-9 flex items-center justify-center text-sm  rounded bg-main dark:bg-dark-200">{i + 1}</span>
                                                    <p className="text-sm font-medium">{text}</p>
                                                </li>
                                            
                                        )
                                    })
                                }
                            </ul>
                            <Button className="w-full">
                                Go To Detail
                            </Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
	)
}
