'use client'
import React, { Children, useState } from "react";
import "./navbar.css"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { FontCormorant, FontHankenGrotesk } from "../layout"

const Navbar = (props, children) => {
    const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);
    const pathName = usePathname();
    const index = pathName === "/" ? 0 :
        pathName === "/food" ? 1 :
            pathName === "/retail" ? 2 : 3;
    const backgroundColor = (index === 0 ? "bg-white" :
        index === 1 ? "bg-[#5ea3ec]" :
            index === 2 ? "bg-[#f64444]" :
                "bg-[#ffb400]") + " block fixed w-full h-full relative overflow-y-scroll"

    const onClickMobileNavbarLink = (e) => {
        document.getElementById(e.target.id).classList.toggle("clicked");
        // console.log(e);
    }
    const onAnimationEndMobileNavbarLink=(e)=>{
        document.getElementById(e.target.id).classList.toggle("clicked");
        setIsMobileNavbarVisible(false);
    }
    return <div className={`${backgroundColor} ${FontHankenGrotesk.variable}`}>
        {isMobileNavbarVisible && <>
            <button className={"fixed z-[11] rotate-45 top-[45px] right-[30px]"} onClick={() => {
                setIsMobileNavbarVisible(false);//fadeout gently

            }}> close</button>
            <div className="mobile-navbar absolute md:hidden h-100 w-full overflow-y-scroll">
                <div className="block relative md:hidden w-full h-[85vh]">
                    <Link href={"/"} id="mobile-link-about" className={"mobile-navbar-item absolute w-1/2 h-1/2  bg-white flex justify-center items-center text-center"}
                        onClick={onClickMobileNavbarLink} onTransitionEnd={onAnimationEndMobileNavbarLink}>
                        <div className="-rotate-45 h-fit w-fit ">
                            About
                        </div>
                    </Link>
                    <Link href={"/food"} id="mobile-link-food" className={"mobile-navbar-item absolute top-0 right-0 w-1/2 h-1/2 bg-[#5ea3ec] flex justify-center items-center text-center"}
                        onClick={onClickMobileNavbarLink} onTransitionEnd={onAnimationEndMobileNavbarLink}>
                        <span className="rotate-45 h-fit w-fit">Food</span>

                    </Link>
                    <Link href={"/retail"} id="mobile-link-retail" className={"mobile-navbar-item absolute top-1/2 left-0 w-1/2 h-1/2 bg-[#f64444] flex justify-center items-center text-center"}
                        onClick={onClickMobileNavbarLink} onTransitionEnd={onAnimationEndMobileNavbarLink}>
                        <span className="rotate-45 h-fit w-fit">Retail</span>
                    </Link>
                    <Link href={"/community"} id="mobile-link-community" className={"mobile-navbar-item absolute top-1/2 right-0 w-1/2 h-1/2 bg-[#ffb400] flex justify-center items-center text-center"}
                        onClick={onClickMobileNavbarLink} onTransitionEnd={onAnimationEndMobileNavbarLink}>
                        <span className="-rotate-45  h-fit w-fit">Community</span>
                    </Link>
                </div>
                <div className="block bg-white p-[30px]">
                    <a href="/community/event/" className={`button-with-normal-border bg-white mb-[30px] md:w-[180px] font-sans`}>become a vendor</a>
                    <div >
                        <p>265 Canal Street<br />
                            New York, New York</p>
                        <p>Food Hall Hours:<br />
                            Mon – Sun: 11AM- 8PM</p>
                        <p>Retail Market Hours:<br />
                            Thurs – Sun: 11AM- 7PM</p>
                    </div>
                </div>
            </div>
        </>
        }
        <button className="fixed z-0 right-[30px] top-[45px] md:hidden" onClick={() => { setIsMobileNavbarVisible(true) }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="hidden" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>

        <header className="w-full h-0 hidden md:block ">
            <nav className="fixed h-full w-full hidden md:flex md:flex-row">
                <Link href={"/"} className={index == 0 ? "selected navbar" : "navbar"}>
                    <div className={index !== 0 ? " bg-white cursor-pointer w-full h-full py-[60px] px-[5px]" : "hidden invisible md:block md:w-[60px]  py-[60px] px-[5px]"}>{ }</div>
                </Link>
                <Link href={"/food"} className={index == 1 ? "selected navbar" : "navbar"}>
                    <div className={index !== 1 ? " bg-[#5ea3ec] cursor-pointer w-full h-full relative py-[60px] px-[5px]" : "hidden invisible md:block md:w-[60px]  py-[60px] px-[5px]"}>
                        <p className=" pt-4 text-center text-xl">餐饮</p>
                   
                        <span className="absolute origin-center rotate-90 top-1/2 text-xl">Food</span>

                    </div>
                </Link>
                <Link href={"/retail"} className={index == 2 ? "selected navbar" : "navbar"}>
                    <div className={index !== 2 ? " bg-[#f64444] cursor-pointer w-full h-full relative  py-[60px] px-[5px]" : "hidden invisible md:block md:w-[60px]  py-[60px] px-[5px]"}>
                        <p className=" pt-4 text-center text-xl">購物</p>
                        <span className="absolute origin-center rotate-90 top-1/2  text-xl">Retail</span>

                    </div>
                </Link>
                <Link href={"/community"} className={index == 3 ? "selected navbar" : "navbar"}>
                    <div className={index !== 3 ? " bg-[#ffb400] cursor-pointer w-full h-full relative py-[60px] px-[5px]" : "hidden invisible md:block md:w-[60px]  py-[60px] px-[5px]"}>
                        <p className=" pt-4 text-center text-xl">文化</p>
                        <span className="absolute origin-center rotate-90 top-1/2 left-1/2 -translate-x-[50%] text-xl">Community</span>

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