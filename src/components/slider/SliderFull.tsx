"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import  { Navigation } from 'swiper/modules';


import Task from '../Task';
import { useRef } from 'react';
import Mentor from '../Mentor';

const breakpointsFour = {
    240: {
        slidesPerView: 1
    },
    640: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
    1560: {
        slidesPerView: 4
    }
};
const breakpointsTwo = {
    240: {
        slidesPerView: 1
    },
    640: {
        slidesPerView: 2
    },
};



const SliderFull = ({ type, title, two } : {
    type:string;
    title:string;
    two?:boolean;
}) => {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <>
            <div className="flex justify-between gap-5 items-center mb-5">
                <h2 className="text-xl xl:text-2xl">{title}</h2>
                <div className="flex gap-2.5">
                    <button  ref={prevRef}>
                        <img src="/icons/chevron-left.svg" alt="" />
                    </button>
                    <button ref={nextRef}>
                    <img src="/icons/chevron-right.svg" alt="" />
                    </button>
                </div>
            </div>
            <Swiper 
            
                spaceBetween={32}
                modules={[Navigation]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                breakpoints= {two ? breakpointsTwo : breakpointsFour} 
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >   
                {[...Array(6)].map((_, index) => (
                    <SwiperSlide key={index} className=''>
                        {
                            type === "task" ? <Task clazz="gap-4 p-4 xl:p-6 bg-white dark:bg-dark-100 rounded-[10px]"/> : <Mentor/>
                        }
                    </SwiperSlide>
                ))}
                
                
            </Swiper>
        </>
    )
}

export default SliderFull;
