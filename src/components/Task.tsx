

import { Slider } from "@/components/ui/slider"
import TitleBlock from './block/TitleBlock';


const Task = ({clazz}:{
    clazz : string;
}) => {
    return (
        <article className={`flex flex-col ${clazz}`}>
            
                <img className='max-w-[100%] h-auto rounded ' src="/img/task-image.jpg" alt="" />
            
            <TitleBlock title={"Creating Mobile App Design"} text={"UI UX Design"}/>
            
            <div className="">
                <div className="flex items-center justify-between gap-5 mb-3">
                    
                        <p className='text-base font-medium dark:text-white text-left'>Progress</p>
                    
                    
                        <div className='text-right text-primary-500 dark:text-info-200 text-base'>75%</div>
                    
                </div>
                
                    <Slider defaultValue={[75]} max={100} step={1} />
                
            </div>
            <div className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-2">
                    
                        <img src="/icons/time-circle.svg" alt="" />
                   
                        <span className='inline-flex font-medium '>3 Days Left</span>
                    
                    
                </div>
                <div className="flex items-center">
                        <img src="/img/task-photo-user.png" alt="" />
                        <img className='ml-[-8px] ' src="/img/task-photo-user.png" alt="" /> 
                        <img className='ml-[-8px]' src="/img/task-photo-user.png" alt="" />
                        <img className='ml-[-8px]' src="/img/task-photo-user.png" alt="" />
                        <img className='ml-[-8px]' src="/img/task-photo-user.png" alt="" />
                </div>
            </div>
        </article>
    )
}

export default Task