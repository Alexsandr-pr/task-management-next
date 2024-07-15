"use client";
import React, { useState } from "react";
import { addDays, subDays, startOfWeek, endOfWeek } from "date-fns";

import { format } from "date-fns";



const Calendar = () => {
    const dateFormat = "d";
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDayIndex, setSelectedDayIndex] = useState(null);

    
    const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
    const endOfCurrentWeek = endOfWeek(currentDate, { weekStartsOn: 1 });

    const currentWeek = [];
    for (let day = startOfCurrentWeek; day <= endOfCurrentWeek; day = addDays(day, 1)) {
        currentWeek.push(day);
    }

    const prevWeek = () => {
        setCurrentDate(subDays(currentDate, 7));
    };

    const nextWeek = () => {
        setCurrentDate(addDays(currentDate, 7));
    };

    const onDateClick = (date) => {
        setSelectedDate(date);
        const dayIndex = date.getDay();
        setSelectedDayIndex(dayIndex === 0 ? 6 : dayIndex - 1); // Понедельник - 0, Воскресенье - 6
    };

    return (
        <div className="max-w-full p-4 xl:p-6 bg-white dark:bg-dark-100 rounded-[10px]">
            <div className="flex justify-between items-center mb-6">
                <button className="h-4 w-4" onClick={prevWeek}>
                <img src="/icons/chevron-left.svg" alt="" />
                </button>
                <span className="text-sm text-center ">{format(currentWeek[0], 'MMMM yyyy')}</span>
                <button className="h-4 w-4"  onClick={nextWeek}>
                <img src="/icons/chevron-right.svg" alt="" />
                </button>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-3">
                {days.map((day, index) => (
                    <div key={index} className={`text-xs text-center font-medium cursor-pointer flex justify-center calendar-span ${selectedDayIndex === index ? " text-white " : "text-second-500 dark:text-white"}`}>
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
                {currentWeek.map((day, index) => {
                    const formattedDate = format(day, dateFormat);
                    const isSelected = selectedDate && selectedDate.toDateString() === day.toDateString();
                    return (
                        <div className="flex justify-center relative">
                            <button
                                key={index}
                                className={`h-8 w-8 relative flex items-center justify-center  rounded-full text-xs text-center font-medium cursor-pointer ${
                                    isSelected ? " bg-primary-500  text-[#F5F5F7] dark:text-white" : "bg-[#F5F5F7] dark:text-second-500"
                                }`}
                                onClick={() => onDateClick(day)}
                            >
                                <span className={`${isSelected ? " bg-primary-500  text-[#F5F5F7]" : "bg-[#F5F5F7] dark:bg-info-200"} calendar-span h-8 w-8 relative flex items-center justify-center  rounded-full text-xs text-center font-medium cursor-pointer`}>{formattedDate}</span>
                                {
                                    isSelected && 
                                    <span className="calendar">

                                    </span> 
                                }
                            </button>
                        </div>
                        
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;