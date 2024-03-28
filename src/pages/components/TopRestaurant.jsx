import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

export default function TopRestaurant() {

    const [topRestaurants, setTopRestaurants] = useState([]);
    const [restaurantSlide,setSlide] = useState(0);

    const fetchTopRestaurants = async () => {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setTopRestaurants(data.recipes);
    }

    const nextSlide = () => {
        console.log(restaurantSlide,topRestaurants.length);
        if (restaurantSlide < topRestaurants.length) {
            setSlide(restaurantSlide + 3);
        }
    }

    const previousSlide = () =>{
        if (restaurantSlide == 0) return false;
        setSlide(restaurantSlide - 3);
    }

    useEffect(
        () => {
            fetchTopRestaurants();
        }, []
    )

    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="my-4 flex items-center justify-between">
                <div className="text-[25px] font-bold">Top restaurant chains in Mumbai</div>
                <div className="flex">
                    <div onClick={previousSlide} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
                        <FaArrowLeft/>
                    </div>
                    <div onClick={nextSlide} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
                        <FaArrowRight/>
                    </div>
                </div>
            </div>
            <div className="flex gap-5 overflow-hidden">
                {
                   topRestaurants.map(
                    (data,index) => {
                        return <Card style={{
                            transform: `translateX(-${restaurantSlide * 100}%)`
                        }} {...data} key={index}/>
                    }
                   ) 
                }
            </div>
            <hr className="my-6 border-[1px]" />
        </div>
    )
}