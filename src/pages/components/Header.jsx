import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { TbDiscount2 } from "react-icons/tb";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { MdMyLocation } from "react-icons/md";

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
            icon:<BsCart/>,
        },
    ]

    return (
        <>
        <div className="black-overlay z-[999999] w-full h-full fixed duration-500" onClick={hideSideMenu} style={{
            opacity: toggle ? 1:0,
            visibility: toggle? "visible" : "hidden"
        }}>
            <div onClick={(e) => e.stopPropagation()} className="w-[500px] pt-[30px] bg-white pl-[50px] pr-[40px] h-full absolute duration-[400ms]" style={{
                left: toggle ? '0%' : '-100%',
            }}>
                <div className="mb-[50px]">
                    <RxCross2 onClick={hideSideMenu} className="cursor-pointer text-[28px] text-[#3d4152]" />
                </div>
                <div className="border border-[#d4d5d9] mb-[30px]">
                    <input className="w-full h-[50px] px-[30px] focus:outline-none focus:shadow-[0_1px_7px_1px_rgba(210,213,217,1)]" type="text" placeholder="Search for area, street name..." />
                </div>
                <div className="group border border-[#d4d5d9] px-[24px] cursor-pointer py-[22px] flex gap-3">
                    <div><MdMyLocation className="text-[18px] text-[#535665]" /></div>
                    <div>
                        <div className="text-[16px] text-[#282c3f] group-hover:text-[#fc8019]">Get current location</div>
                        <div className="text-[13px] text-[#93959f]">Using GPS</div>
                    </div>
                </div>
            </div>
        </div>
        <header className="p-[15px] shadow-xl sticky top-0 z-[9999] bg-white">
            <div className="max-w-[1200px] mx-auto flex items-center">
                <div className="w-[100px]">
                    <img src="images/swiggy-logo.png" className="w-full" alt="Swiggy Logo" />
                </div>
                <div className="text-[#686b78] text-[14px]">
                    <span className="font-bold border-b-[3px] text-[#3d4152] border-[black]">City</span>&nbsp; State, Country
                    <RxCaretDown fontSize={25} onClick={showSideMenu} className="font-bold inline text-[#fc8019] cursor-pointer"/>
                </div>
                <nav className="hidden md:flex list-none text-[#3d4152] ml-auto text-[18px]">
                    {
                        links.map(
                            (links,index) => {
                                return <li key={index} className="flex hover:text-[#fc8019] mr-[60px] cursor-pointer items-center gap-2">
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