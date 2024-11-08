'use client'
import React, { Children, useState } from "react";
import "./navbar.css"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { FontCormorant, FontSometype } from "../layout"

const Navbar = (props, children) => {
    const pathName = usePathname();
    const index = pathName === "/" ? 0 :
        pathName === "/food" ? 1 :
            pathName === "/retail" ? 2 : 3;
    const backgroundColor = (index === 0 ? "bg-white" :
        index === 1 ? "bg-[#5ea3ec]" :
            index === 2 ? "bg-[#f64444]" :
                "bg-[#ffb400]") + " block fixed w-full h-full relative overflow-y-scroll"

    return <div className={backgroundColor}>
        <header className="w-full h-0">
            <nav className="fixed h-full w-full flex flex-row">
                <Link href={"/"} className={index == 0 ? "selected navbar" : "navbar"}>
                    <div className={index !== 0 ? " bg-white cursor-pointer w-full h-full":"none md:block md:w-[60px]"}>{ }</div>
                </Link>
                <Link href={"/food"} className={index == 1 ? "selected navbar" : "navbar"}>
                    <div className={index !== 1 ? " bg-[#5ea3ec] cursor-pointer w-full h-full flex flex-col relative":"none md:block md:w-[60px]" }>
                        <p >餐饮</p>
                        <span className=" rotate-90 h-fit w-fit">Food</span>
                    </div>
                </Link>
                <Link href={"/retail"} className={index == 2 ? "selected navbar" : "navbar"}>
                    <div className={index !== 2 ? " bg-[#f64444] cursor-pointer w-full h-full flex flex-col relative":"none md:block md:w-[60px]" }>
                        <p>購物</p>
                        <span className=" rotate-90 h-fit w-fit">Retail</span>

                    </div>
                </Link>
                <Link href={"/community"} className={index == 3 ? "selected navbar" : "navbar"}>
                    <div className={index !== 3 ? " bg-[#ffb400] cursor-pointer w-full h-full flex flex-col relative":"none md:block md:w-[60px]"}>
                        <p>文化</p>
                        <span className=" rotate-90 h-fit w-fit">Community</span>
                    </div>
                </Link>
            </nav>
        </header>
        <main className={index === 0 ? `md:ml-0` :
            index === 1 ? ` md:ml-[60px]` :
                index === 2 ? `md:ml-[120px]` :
                    `md:ml-[180px]`
        }>
            {props.children}

        </main>
    </div>
}

export default Navbar;