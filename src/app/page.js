
import React from "react";
import Image from "next/image";
import "./globals.css"
import { FontCormorant, FontHankenGrotesk } from "./layout"
import Link from "next/link";

const NewMarketItem = (props) => {
  return <div className="w-full block">
    <Image className=" mb-[30px]" alt={props.alt ?? ""} src={props.src}
      sizes="(max-width: 768px) 100vw , 100%"
      width={680} height={920}
    />

    <p className={`block text-sm ${FontHankenGrotesk.variable} font-sans font-normal`}>
      {props.description}
      <br />
      {props.description2 && props.description2}
      {props.description2 && <br />}
    </p>


  </div>
}

const MarketEventItem = (props) => {
  return <div className={props.isFirstChild ?? false ? "market-event-item dashed-horizontal-border mx-[30px] px-5 py-[60px] md:m-0 md:p-0 flex flex-col items-center" :
    "market-event-item dashed-bottom-border mx-[30px] px-5 py-[60px] md:m-0 md:p-0 flex flex-col items-center"}>
    <span className={` text-xs text-center ${FontHankenGrotesk.variable} font-sans mb-[15px]`}>{props.date}</span>
    <p className="text-center"><Link href="/community/event/small-business-retail-pop-up-weekend" className={`${FontHankenGrotesk.variable} font-sans text-base text-center`}>{props.text}</Link></p>
  </div>
}


export default function Home(props) {

  return (
    <div>
      <section className="pt-[300px] pb-10 px-[30px] md:px-[60px] md:pb-[120px] md:pt-[250px]">
        <h1 className={` text-4xl md:text-[75px] leading-tight ${FontCormorant.variable} font-serif font-light`}>
          {"Canal Street Market is a carefully curated retail market, food hall & community space open year-round at 265 Canal Street. "}
          <a href="" className="wavy-underline-animation">Support Small Business</a> this weekend!</h1>

      </section>
      <section className=" h-[115%] md:h-[63%] relative">

        <Image width={680} height={920} className="relative h-full w-full bg-cover" objectPosition="relative" src="https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format" alt="market"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </section>
      <section className="p-[30px] md:p-[60px]">
        <h2 className={` text-6xl md:text-[113px] ${FontCormorant.variable} font-serif leading-tight font-light max-w-screen-sm mb-[60px]`}>A New Kind of Market</h2>
        <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 gap-y-[60px] md:gap-x-[30px]">
          <NewMarketItem src="https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg?auto=compress"
            description="Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community."
          />
          <NewMarketItem src="https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress"
            description="Retail Market Hours:"
            description2="Thursday – Sun: 11:00AM - 7:00PM"
          /><NewMarketItem src="https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress"
            description="Food Hall Hours:"
            description2="Mon – Sun: 11:00AM - 8:00PM"
          />
        </div>
      </section>
      <section className="p-[30px] md:px-[60px] md:pt-[120px] md:pb-[150px] items-center justify-center content-center place-items-center">
        <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-3 gap-[60px] py-[60px]">
          <div className="items-center justify-center flex">
            <svg width="116px" height="60px" viewBox="0 12 116 58" >
              <defs></defs>

              <g id="R2" fillRule="evenodd" fontFamily="PingFangSC-Semibold, PingFang SC" className=" stroke-none stroke-1 fill-none text-6xl font-medium tracking-normal leading-none">
                <g id="1440_HP_v2-1-Copy-3" transform="translate(-172.000000, -3219.000000)" className=" stroke-black stroke-[0.75px] fill-none" strokeWidth="0.75">
                  <text id="事件">
                    <tspan x="170" y="3282">活動</tspan>
                  </text>
                </g>
              </g>
            </svg>
          </div>
          <div className=" items-center justify-center flex">
            <h1 className={`text-[100px] ${FontCormorant.variable} font-serif leading-none text-center font-light`}>Market Events</h1>
          </div>
          <div className="items-center justify-center flex " >
            <svg width="116px" height="60px" viewBox="0 12 116 58" >
              <defs></defs>
              <g id="R2" fillRule="evenodd" fontFamily="PingFangSC-Semibold, PingFang SC" className=" stroke-none stroke-1 fill-none text-6xl font-medium tracking-normal leading-none">
                <g id="1440_HP_v2-1-Copy-3" transform="translate(-172.000000, -3219.000000)" className="stroke-black stroke-[0.75px] fill-none" >
                  <text id="事件">
                    <tspan x="170" y="3282">活動</tspan>
                  </text>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="market-event-body dashed-horizontal-border-animation w-full flex flex-col items-center gap-y-[60px] md:flex-row md:pt-[75px] md:pb-[100px] p-0">
          <div className="grid md:grid-cols-3 md:grid-rows-1 md:gap-x-[60px] grid-cols-1 grid-rows-3">
            <MarketEventItem date="09/21" text="Small Business Retail Pop Up Weekend!" isFirstChild={true} />
            <MarketEventItem date="02/07" text="New Balance x Paperboy Paris by Greenhouse @ Canal Street Market" />
            <MarketEventItem date="12/11" text="Hack City 12/11" />

          </div>
        </div>
        <Link href="/community/event/" className={`button-with-normal-border bg-white mt-[60px] md:mt-0 md:w-[180px] md:relative bottom-[42px] ${FontHankenGrotesk.variable} font-sans`}>see all</Link>

      </section>
      <section className="px-[30px] md:mb-3 md:px-[60px] md:grid md:grid-cols-2 gap-[60px]">
        <Link href="https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427" >
          <div className="dashed-all-side-border py-[60px] px-[30px] md:py-24 content-center w-full">
            <h3 className={`${FontCormorant.variable} font-serif md:max-w-[385px] text-center text-6xl self-center w-full m-auto`}>265 Canal<br /> St. New York, NY</h3>
          </div>
        </Link>
        <Link href="https://www.google.com/maps/place/265+Canal+St,+New+York,+NY+10013/@40.7190077,-74.0030314,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598a1c3945dd:0x6b44c616961ec727!8m2!3d40.7190077!4d-74.0008427"
          className="h-0 md:h-full">
          <div className="dashed-all-side-border h-0 md:h-[calc(100%-2px)] p-[1px]">
            <Image className="dashed-all-side-border object-cover h-0 md:h-full" width={1080} height={606}
              src="https://images.prismic.io/canalstreetmarket/74921c6bf0abf767666c52a6af3c001c58643587_group-11.jpg?auto=compress,format"
              alt="265 Canal, St. New York, NY"
              sizes="(max-width: 768px) calc(100%-2px), 0px" />

          </div>
        </Link>
      </section>
    </div>
  );
}
