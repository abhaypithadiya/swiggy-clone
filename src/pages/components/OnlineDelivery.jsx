import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

export default function OnlineDelivery(){

    const [topRestaurants, setTopRestaurants] = useState([]);
    const componentRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    const fetchTopRestaurants = async () => {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setTopRestaurants(data.recipes);
    }

    useEffect(()=>{
        const  handleScroll = () => {
            if(componentRef.current){
                const rect = componentRef.current.getBoundingClientRect();
                setIsAtTop(rect.top <= 0);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(
        () => {
            fetchTopRestaurants();
        }, []
    )

    return (
        <div className="max-w-[1200px] mx-auto" ref={componentRef}>
            <div className="my-4 flex items-center justify-between">
                <div className="text-[25px] font-bold">Restaurants with online food delivery in Mumbai</div>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-[9999] bg-white w-full left-0' : ''}>
                <div className="max-w-[1200px] mx-auto flex my-4 gap-3">
                    <div className="p-3 rounded-[18px] text-[14px] text-[#02060cbf] shadow flex items-center cursor-pointer gap-1">Filter <HiOutlineAdjustmentsHorizontal /></div>
                    <div className="p-3 rounded-[18px] text-[14px] text-[#02060cbf] shadow flex items-center cursor-pointer gap-1">Sort By <IoIosArrowDown /></div>
                    <div className="p-3 rounded-[18px] text-[14px] text-[#02060cbf] shadow flex items-center cursor-pointer gap-1">Fast Delivery</div>
                    <div className="p-3 rounded-[18px] text-[14px] text-[#02060cbf] shadow flex items-center cursor-pointer gap-1">New on Swiggy</div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
            {
                   topRestaurants.map(
                    (data,index) => {
                        return <Card {...data} key={index}/>
                    }
                   ) 
                }
            </div>
        </div>
    )
}