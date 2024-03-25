import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

export default function Header() {

    const [toggle,setToggle] = useState(false);

    const showSideMenu = ()=>{
        setToggle(true);
    }

    const hideSideMenu = ()=>{
        setToggle(false);
    }

    const links = [
        {
            name:"Search",
            icon:<IoIosSearch/>,
        },
        {
            name:"Offers",
            icon:<TbDiscount2/>,
        },
        {
            name:"Help",
            icon:<IoHelpBuoyOutline/>,
        },
        {
            name:"Sign In",
            icon:<IoPersonOutline/>,
        },
        {
            name:"Cart",
            icon:<IoIosSearch/>,
        },
    ]

    return (
        <>
        <div className="black-overlay w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
            opacity: toggle ? 1:0,
            visibility: toggle? "visible" : "hidden"
        }}>
            <div onClick={(e) => e.stopPropagation()} className="w-[500px] bg-white h-full absolute duration-[400ms]" style={{
                left: toggle ? '0%' : '-100%',
            }}>

            </div>
        </div>
        <header className="p-[15px] shadow-xl">
            <div className="max-w-[1200px] mx-auto flex items-center">
                <div className="w-[100px]">
                    <img src="images/swiggy-logo.png" className="w-full" alt="Swiggy Logo" />
                </div>
                <div className="text-[#686b78] text-[14px]">
                    <span className="font-bold border-b-[3px] text-[#3d4152] border-[black]">City</span>&nbsp; State, Country
                    <RxCaretDown fontSize={25} onClick={showSideMenu} className="font-bold inline text-[#fc8019] cursor-pointer"/>
                </div>
                <nav className="flex list-none gap-5 text-[#3d4152] ml-auto text-[18px]">
                    {
                        links.map(
                            (links,index) => {
                                return <li key={index} className="flex hover:text-[#fc8019] cursor-pointer items-center gap-2">
                                    {links.icon}
                                    {links.name}
                                </li>
                            }
                        )
                    }
                </nav>
            </div>
        </header>
        </>
    )
}