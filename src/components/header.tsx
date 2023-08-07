'use client';

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const handlerMenuClick = () => setMenuIsOpen(!menuIsOpen)
    return(
        <div className="flex container mx-auto text-white items-center">
            <div className="container mx-auto fixed top-0 left-0 right-0 flex w-full justify-between p-4 border-b-[0.5px] bg-bg-black">
                <div className="flex justify-center items-center gap-2">
                    <a href="#">
                        <h2 className="font-bold text-xl hover:text-Blue_">[João Matheus]</h2>
                    </a>
                </div>

                <button onClick={handlerMenuClick} className="md:hidden">
                    <div className="flex flex-col gap-1">
                        <div className="border-y-[3px] border-x-[16px] rounded-sm "></div>
                        <div className="border-y-[3px] border-x-[16px] rounded-sm "></div>
                        <div className="border-y-[3px] border-x-[16px] rounded-sm "></div>
                    </div>
                    {menuIsOpen &&(
                        <div className="z-50 absolute  top-12 left-0 w-full h-full bg-black rounded-lg shadow-md flex gap-4 justify-around items-center">
                            <div><a href="#">Home</a></div>
                            <div><a href="#about">Sobre Mim</a></div>
                            <div><a href="#projects">Projetos</a></div>
                            <div><a href="#knowledge">Conhecimento</a></div>
                        </div>
                    )}
                </button>

                <div className="md:flex justify-around gap-8 text-lg font-extrabold hidden">
                    <div><a href="#" className="hover:text-Blue_">Home</a></div>
                    <div><a href="#about" className="hover:text-Blue_">Sobre Mim</a></div>
                    <div><a href="#projects" className="hover:text-Blue_">Projetos</a></div>
                    <div><a href="#knowledge" className="hover:text-Blue_">Conhecimento</a></div>
                </div>

                
            </div>  
            

            
        </div>
    )
}