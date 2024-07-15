import SliderFull from "@/components/slider/SliderFull"


const Task = () => {
    return (
        <div className='w-full p-6  md:p-8 gap-8 bg-[#FAFAFA] border-l border-solid dark:bg-dark-200 dark:border-none border-l-main'>
            <div className="mb-8">
                <SliderFull  title={"Time Limit"} type={"task"}/>
            </div>
            <SliderFull title={"New Task"} type={"task"}/>
        </div>
    )
}

export default Task