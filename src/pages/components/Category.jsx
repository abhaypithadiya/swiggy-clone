import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Category() {

    const [categories, setCategory] = useState([]);
    const [slide,setSlide] = useState(0);

    const fetchCategory = async () => {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setCategory(data.recipes);
    }

    const nextSlide = () => {
        if (slide < categories.length) {
            setSlide(slide + 3);
        }
    }

    const previousSlide = () =>{
        if (slide == 0) return false;
        setSlide(slide - 3);
    }

    useEffect(
        () => {
            fetchCategory();
        }, []
    )

    return (
        <div className="max-w-[1200px] mx-auto">
            <div className="my-4 flex items-center justify-between">
                <div className="text-[25px] font-bold">What's on your mind?</div>
                <div className="flex">
                    <div onClick={previousSlide} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
                        <FaArrowLeft/>
                    </div>
                    <div onClick={nextSlide} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
                        <FaArrowRight/>
                    </div>
                </div>
            </div>
            <div className="flex overflow-hidden gap-5">
                {
                    categories.map(
                        (category,index) => {
                            return (
                                <div style={{
                                    transform: `translateX(-${slide * 100}%)`
                                }} className="w-[150px] shrink-0 duration-500" key={index}>
                                    <img className="rounded-full" src={category.image} alt={category.name}/>
                                </div>
                            )
                        })
                }
            </div>
            <hr className="my-6 border-[1px]" />
        </div>
    )
}