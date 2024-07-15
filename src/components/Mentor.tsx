



import Skeleton from "./Skeleton"
import TitleBlock from "./block/TitleBlock"


const Mentor = ({itemclasses, text}: {
    itemclasses?:string;
    text: string;
}) => {

    const loading = false;

    return (
        <article className='flex flex-col gap-5 p-4 xl:p-6 bg-white dark:bg-dark-100 rounded-[10px]'>
            <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2" >
                    <Skeleton loading={loading} cls="bg-skelet-300 rounded-full w-12 h-12">
                        <img width={48} height={48} className="rounded-full" src="/img/photo-mentor.png" alt="mentor" />
                    </Skeleton>
                    <TitleBlock text={"UI UX Design"} loading={loading} title={"Curious George"}/>
                </div>
                <Skeleton loading={loading} cls="bg-skelet-300 w-20 h-5">
                    <button className='text-primary-500 dark:text-info-400 text-sm font-medium hover:text-second-400 whitespace-nowrap'>
                        + Follow 
                    </button>
                </Skeleton> 
            </div>
                {    
                        text &&  <Skeleton loading={loading} cls="bg-skelet-300 w-52 h-10">
                        <p className="text-sm text-second-300 font-medium">{text}</p>
                    </Skeleton>
                }
            <div className="flex justify-between items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                    <Skeleton loading={loading} cls="bg-skelet-300 w-5 h-5">
                        <img src="/icons/mentor-task-icons.svg" alt="" />
                    </Skeleton>
                    <Skeleton loading={loading} cls="bg-skelet-200 w-20 h-5">
                        <span className='inline-flex font-medium text-sm whitespace-nowrap'>40 Task</span>
                    </Skeleton>   
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap">
                <Skeleton loading={loading} cls="bg-skelet-300 w-5 h-5">
                <img src="/icons/star.svg" alt="star" />
                </Skeleton>
                    <Skeleton loading={loading} cls="bg-skelet-200 w-20 h-5">
                        <span className="inline-flex font-medium text-sm">4,7  (750 Reviews)</span>
                    </Skeleton>
                </div>
            </div>
        </article>
    )
}

export default Mentor