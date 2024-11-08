'use client'
import React, { useState } from "react";
import "../globals.css"
import Image from "next/image";
import Link from "next/link";
import { FontCormorant, FontSometype } from "../layout"
import Dropdown from "./Dropdown";

const VendorCard = (props) => {
 return <div className={`w-full h-full fixed z-0 top-0 bg-black bg-opacity-25 ${FontCormorant.variable} text-6xl md:px-[120px] md:py-[60px]`}> 
 
 <button onClick={props.onClose} className={`fixed right-[30px] top-[45px] z-[1] rotate-45 bg-transparent text-6xl text-black w-[60px] h-[60px]`}>+</button>
 <div className={`block left-0 top-[45px]  w-full h-full z-0 bg-white py-[120px] px-[60px] ${FontCormorant.variable} text-6xl text-white`}>
    Placeholder
 </div>
 </div>
    // return <div >
    //     <div className="vendor-hero">
    //         <h1>Become a Vendor at Canal Street Market.</h1>
    //     </div>
    //     <div className="vendor-grid">
    //         <div className="vendor-grid__row">
    //             <Image width={680} height={920} className="relative" src="https://images.prismic.io/canalstreetmarket/e5e49733e81f2ffc993c9fea54aab63cc2e88128_65cba3e4e63fe9c4baf2e68ce8606fafe6a802c2_food-hall-compressor.jpg?auto=compress,format" data-preload-mobile="https://images.prismic.io/canalstreetmarket/e5e49733e81f2ffc993c9fea54aab63cc2e88128_65cba3e4e63fe9c4baf2e68ce8606fafe6a802c2_food-hall-compressor.jpg?auto=compress,format" style="background-image: url(&quot;https://images.prismic.io/canalstreetmarket/e5e49733e81f2ffc993c9fea54aab63cc2e88128_65cba3e4e63fe9c4baf2e68ce8606fafe6a802c2_food-hall-compressor.jpg?auto=compress"
    //                 sizes="(max-width: 768px) 100vw, 100vw"
    //             />
    //             <div className="vendor-grid__text">
    //                 <h3>How it works</h3>
    //                 <ul>
    //                     <ul>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-clover.svg&quot;);">Design your space</li>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-smile.svg&quot;);">Create your experience</li>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-horse.svg&quot;);">Grow your audience</li></ul>
    //                 </ul>
    //             </div>
    //         </div>
    //         <div className="vendor-grid__row">
    //             <Image width={680} height={920} className="relative" src="https://images.prismic.io/canalstreetmarket/422563cbd7238c8566d127d35eb63afcd56cb8cf_c82d4752e3aa4892ba74f83371b2bb6efe05d9ff_market-stuff-compressor.jpg?auto=compress,format"
    //                 sizes="(max-width: 768px) 100vw, 100vw"
    //             />
    //             <div className="vendor-grid__text">
    //                 <h3>Why Canal Street Market?</h3>
    //                 <ul>
    //                     <ul>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-umbrella.svg&quot;);">Low cost of entry </li>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-yinyang.svg&quot;);">Minimal Commitment </li>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-wheel.svg&quot;);">Low rental cost</li>
    //                     </ul>
    //                 </ul>
    //             </div>
    //         </div>
    //         <div className="vendor-grid__row">
    //             <Image width={680} height={920} className="relative" src="https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format"
    //                 sizes="(max-width: 768px) 100vw, 100vw"
    //             />
    //             <div className="vendor-grid__text">
    //                 <h3>Benefits</h3>
    //                 <ul>
    //                     <ul>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-grid.svg&quot;);">Build exposure through our built in foot traffic </li>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-hammers.svg&quot;);">Get real time customer feedback</li>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-flag.svg&quot;);">Test new products</li>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-pawn.svg&quot;);">Create physical brand experiences</li>
    //                         <li style="list-style-image: url(&quot;/assets/images/svg-icon-arrow.svg&quot;);">Build your loyal following</li>
    //                     </ul>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    //     <h2>Become a Vendor</h2>
    //     <div className="vendor-form">
    //         <form>
    //             <Dropdown defaultKey={"January"} defaultValue={"January 1, 2025"}
    //                 options={[
    //                     { key: "January", value: "January 1, 2025" },
    //                     { key: "February", value: "February 1, 2025" },
    //                     { key: "March", value: "March 1, 2025" },
    //                     { key: "April", value: "April 1, 2025" },
    //                     { key: "May", value: "May 1, 2025" },
    //                     { key: "June", value: "June 1, 2025" },
    //                     { key: "July", value: "July 1, 2025" },
    //                     { key: "August", value: "August 1, 2025" },
    //                     { key: "September", value: "September 1, 2025" },
    //                     { key: "October", value: "October 1, 2025" },
    //                     { key: "November", value: "November 1, 2025" },
    //                     { key: "December", value: "December 1, 2025" },
    //                 ]}
    //             >
    //             </Dropdown>
    //         </form>
    //     </div>
    // </div>
}

export default VendorCard;