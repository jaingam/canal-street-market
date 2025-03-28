'use client'
import React, { useState } from "react";
import "./footer.css"
import "../globals.css"
import Link from "next/link";
import { FontCormorant, FontHankenGrotesk } from "../layout"
import VendorCard from "./VendorCard"

const Footer = (props) => {


    const [isSubscribed, setIsSubscribed] = useState(false);

    const [isVendorCardPopUpVisible, setIsVendorCardPopUpVisible] = useState(false);

    return <>
        {isVendorCardPopUpVisible && <VendorCard onClose={() => { setIsVendorCardPopUpVisible(false) }} />}
        <footer >
            <section className="p-[30px] md:p-[60px]">
                <div className="slashed-border mb-[60px] p-[30px] md:p-[60px]">
                    <h3 className={`${FontCormorant.variable} font-serif leading-snug text-center text-2xl md:text-[45px] self-center w-full mb-[25px]`}>Interested in becoming a vendor?</h3>
                    <a className={`button-with-normal-border ${FontHankenGrotesk.variable}`} onClick={() => { setIsVendorCardPopUpVisible(true); }}>click here</a>
                </div>
                <div className="grid md:grid-cols-3 md:grid-rows-1 gap-[30px] md:gap-[60px] mb-[60px] grid-cols-1 grid-rows-3">
                    <Link href="mailto:info@canalstreet.market" className="dashed-all-side-border p-[30px] md:p-[55px] h-full flex flex-col justify-center" >
                        <svg className="mb-[15px] mx-auto" width="29px" height="29px" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g id="1440_HP_v2-1" transform="translate(-215.000000, -3348.000000)" fill="#000000" fillRule="nonzero">
                                    <g id="Group-4" transform="translate(60.000000, 3347.000000)">
                                        <g id="noun_Pencil_968432" transform="translate(155.000000, 0.000000)">
                                            <path d="M23.603515,1.0009765 C23.1174225,1.001289 22.6333988,1.17763687 22.2802738,1.53076175 L20.529785,3.28125 L18.7451175,5.065918 L2.83203125,20.9765625 C2.79828125,21.0103125 2.78134763,21.0513087 2.75634763,21.0913087 C2.61884763,21.1663087 2.50849613,21.2913862 2.45849613,21.4526362 L0.029296875,29.1870112 C-0.040703125,29.4095112 0.019296875,29.6543362 0.185546875,29.8193362 C0.304296875,29.9368362 0.4625,30 0.625,30 C0.69,30 0.755371125,29.9907537 0.817871125,29.9707025 L8.6596675,27.4291987 C8.7834175,27.3891987 8.8800775,27.3081612 8.9550775,27.2119137 C8.9763275,27.1956637 9.00099625,27.1879687 9.02099625,27.1679687 L24.93164,11.2573237 L28.4667975,7.7197265 C29.1980475,6.98597662 29.1980463,5.79716812 28.4667975,5.065918 L24.93164,1.53076175 C24.57789,1.17638675 24.0896088,1.00066412 23.603515,1.0009765 Z M23.603515,2.2387695 C23.7653913,2.2387695 23.9291025,2.29642575 24.0478513,2.41455075 L27.5830075,5.949707 C27.8267575,6.193457 27.8267563,6.58974612 27.5830075,6.83349612 L26.2744138,8.14208987 L21.8554688,3.7231445 L23.1640625,2.41455075 C23.2815625,2.29642575 23.44164,2.2387695 23.603515,2.2387695 Z M20.97168,4.60693362 L25.390625,9.02587875 L24.4897463,9.92919875 L22.2802738,7.71728512 L20.06836,5.51025387 L20.97168,4.60693362 Z M19.18457,6.394043 L20.06836,7.277832 L5.7299805,21.6162112 L4.29199225,21.28418 L19.18457,6.394043 Z M20.9521488,8.16162112 L21.396485,8.60351562 L21.8383788,9.04541 L7.5,23.3813475 L6.55273438,23.42041 L6.55273438,22.561035 L20.9521488,8.16162112 Z M22.7197263,9.92919875 L23.603515,10.8129887 L8.80859375,25.60791 L8.4594725,24.1870112 L22.7197263,9.92919875 Z M3.4765625,22.37793 L5.30273438,22.8002925 L5.30273438,24.0698237 C5.30273438,24.2398237 5.3706645,24.405235 5.493164,24.521485 C5.61566413,24.6402337 5.78839838,24.6985737 5.9521485,24.6948237 L7.28271488,24.6411137 L7.7221675,26.416015 L4.76074225,27.3754887 C4.73074213,27.2917387 4.68664088,27.2122462 4.61914063,27.1459962 L2.8515625,25.3784175 C2.7740625,25.3009175 2.68175788,25.2558062 2.58300775,25.2270512 L3.4765625,22.37793 Z M2.1875,26.4819337 L3.49365238,27.7880862 L1.58203125,28.4057612 L2.1875,26.4819337 Z" id="Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <p className={`w-full text-center ${FontHankenGrotesk.variable}  text-sm`}>
                            Email us<br />
                        </p>

                    </Link>
                    <Link href="https://www.facebook.com/canalstreetmarket">
                        <div className="dashed-all-side-border p-[30px] md:p-[55px] h-full flex flex-col justify-center" >
                            <svg className="mb-[15px] mx-auto" width="18px" height="30px" viewBox="0 0 18 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs></defs>
                                <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="1440_HP_v2-1" transform="translate(-622.000000, -3336.000000)" fill="#000000" fillRule="nonzero">
                                        <g id="Group-5" transform="translate(460.000000, 3336.000000)">
                                            <g id="54065" transform="translate(162.000000, 0.000000)">
                                                <path d="M17.2351324,0.00484237074 L12.6808449,0.00696090794 C12.6808449,0.00696090794 12.588575,0 12.4226103,0 C11.4881463,0 6.76244641,0.2596343 5.47672131,5.3269483 C5.45659521,5.3831652 5.02407314,6.65156368 5.01715006,9.60139975 L0.696847415,9.60139975 C0.313656999,9.60139975 0.00261034048,9.91240858 0.00261034048,10.2956368 L0.00261034048,14.2764439 C0.00261034048,14.6596721 0.313656999,14.970681 0.696847415,14.970681 L5.42186633,14.970681 L5.42186633,29.2679319 C5.42186633,29.6511602 5.73287516,29.9622068 6.1161034,29.9622068 L11.5263556,29.9622068 C11.909546,29.9622068 12.2206305,29.6511602 12.2206305,29.2679319 L12.2206305,14.9852081 L16.9608953,14.9852081 C17.3441614,14.9852081 17.6551702,14.6741992 17.6551702,14.290971 L17.6551702,10.2956368 C17.6551702,9.91240858 17.3441614,9.60139975 16.9608953,9.60139975 L12.2302774,9.60139975 L12.2302774,7.89283733 C12.2302774,6.75495586 12.9523203,5.53936948 14.9795334,5.53936948 L17.2351324,5.53936948 C17.6183228,5.53936948 17.9293317,5.22836066 17.9293317,4.84513241 L17.9293317,0.699079445 C17.9293317,0.315889029 17.6190038,0.00484237074 17.2351324,0.00484237074 Z M16.5408575,4.15089533 L14.9795334,4.15089533 C12.1212863,4.15089533 10.8418411,6.03022699 10.8418411,7.89287516 L10.8418411,10.2956747 C10.8418411,10.6789029 11.1528499,10.9899117 11.5360404,10.9899117 L16.2665826,10.9899117 L16.2665826,13.5968096 L11.5263556,13.5968096 C11.1430895,13.5968096 10.8320807,13.9078184 10.8320807,14.2910467 L10.8320807,28.5737327 L6.81034048,28.5737327 L6.81034048,14.2764439 C6.81034048,13.8932156 6.49933165,13.5822068 6.1161034,13.5822068 L1.39108449,13.5822068 L1.39108449,10.9899117 L5.71691047,10.9899117 C5.90364439,10.9899117 6.08205549,10.9149306 6.21261034,10.781652 C6.3431652,10.6483733 6.41462799,10.4685624 6.41118537,10.2817907 C6.34940731,7.12437579 6.7832913,5.7948802 6.80413619,5.72754098 C7.82810845,1.70160151 11.3638714,1.38847415 12.4226103,1.38847415 C12.5191173,1.38847415 12.5767339,1.39127364 12.6329887,1.39335435 L16.5408575,1.39335435 L16.5408575,4.15089533 Z" id="Shape"></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className={`w-full text-center self-center ${FontHankenGrotesk.variable} text-sm`}>
                                Follow us<br />on facebook<br />
                            </p>
                        </div>
                    </Link>
                    <Link href="https://www.instagram.com/canalstreetmarket/">
                        <div className="dashed-all-side-border p-[30px] md:p-[55px] h-full flex flex-col justify-center" >
                            <svg className="mb-[15px] mx-auto" width="25px" height="25px" viewBox="0 0 25 25" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs></defs>
                                <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="1440_HP_v2-1" transform="translate(-1018.000000, -3338.000000)">
                                        <g id="Group-7" transform="translate(859.000000, 3338.000000)">
                                            <g id="Group-6" transform="translate(159.000000, 0.000000)">
                                                <rect id="Rectangle" stroke="#000000" strokeWidth="1.25" x="0.625" y="0.625" width="23.75" height="23.75" rx="9"></rect>
                                                <circle id="Oval" stroke="#000000" strokeWidth="1.25" cx="12.5" cy="12.5" r="6.5"></circle>
                                                <circle id="Oval" fill="#000000" cx="19" cy="5" r="1"></circle>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className={`w-full text-center ${FontHankenGrotesk.variable} text-sm`}>
                                Follow us<br />on instagram<br />
                            </p>
                        </div>
                    </Link>
                </div>

                <div className="dashed-all-side-border py-[30px] px-[30px] md:px-[60px] flex flex-col md:flex-row gap-[30px] justify-between items-center content-end" >
                    {!isSubscribed &&
                        <div className="md:mr-[60px] w-full max-w-[680px] items-center content-center">
                            <span className={`text-[22px] ${FontHankenGrotesk.variable} hidden md:block`}>Stay up to date with our newsletter</span>
                            <svg className="mobile-only w-full mb-[15px]" width="33px" height="20px" viewBox="0 0 33 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="WH_newer" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="375_HP_map-footer" transform="translate(-171.000000, -5586.000000)" fill="#000000" fillRule="nonzero">
                                        <g id="email-cap" transform="translate(30.000000, 5556.000000)">
                                            <path d="M142,31.7789697 L142,49 L172.666667,49 L172.666667,31.5333556 L157.166667,42.9544083 L142,31.7789697 Z M171.704732,31 L142.628602,31 L157.166667,41.7122584 L171.704732,31 Z M141,30 L173.666667,30 L173.666667,50 L141,50 L141,30 Z" id="Combined-Shape"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <p className={`mobile-only w-full text-[14px] ${FontHankenGrotesk.variable} text-center`}>Get updates in your inbox</p>


                        </div>}
                    {isSubscribed && <p className="js-newsletter-success" style="visibility: inherit; opacity: 1;">Thanks!</p>}
                    {!isSubscribed && <form className="flex flex-row w-full max-w-[680px] border border-black py-[20px] px-[30px]" >
                        <input type="email" placeholder="Email" className={`w-full ${FontHankenGrotesk.variable} text-sm bg-transparent text-black placeholder-black`} />
                        <button type="submit" onSubmit={() => { setIsSubscribed(true); }} className=" text-2xl">&#x21E2;</button>
                    </form>}
                </div>
            </section>

            <section className={`px-[30px] pb-[30px] md:px-[60px] md:pb-[60px] w-full text-[22px] ${FontHankenGrotesk.variable}`}>
                <div className="flex flex:row justify-between">
                    <div className="max-w-[620px] w-full flex flex:row  justify-between">
                        <p>Copyright Canal Street Market 2024</p>
                        <Link href="/privacy-policy/">Privacy Policy</Link>
                        <Link target="_blank" href="https://canal-street-dashboard.herokuapp.com/login">Vendor Login</Link>

                    </div>
                    <Link href="https://zero.nyc/">Site Originally by <span className="line-through">Zero</span></Link>
                </div>
            </section>
        </footer>
    </>
}

export default Footer;