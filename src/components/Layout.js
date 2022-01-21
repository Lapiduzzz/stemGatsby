import * as React from "react"
import * as style from "../style/style.module.css"
import Header from "./Header";
import Footer from "./Footer";
import {useEffect, useRef, useState} from "react";
import '../style/LS.css'
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import ImageCard from "./ImageCard";
import LocomotiveScroll from 'locomotive-scroll';
import FloatingCursor from "./FloatingCursor";

const Layout = ({   title, children, whichCard,
                    setWhichCard, setMenuDisplay, scrollContainerRef,
                    cursorData, isSectionHover, imageCardDisplay,
                    cursorArrowsDisplay, swiperHover, gsapTxt, gsapFade,
}) => {




    gsap.registerPlugin(ScrollTrigger)




    return (
            <div className={style.wrapper} data-scroll-container ref={scrollContainerRef} >
                <ImageCard whichCard={whichCard} imageCardDisplay={imageCardDisplay}/>
                <FloatingCursor cursorData ={cursorData} isSectionHover={isSectionHover} cursorArrowsDisplay={cursorArrowsDisplay} swiperHover={swiperHover}/>
                <Header title={title} setMenuDisplay={setMenuDisplay}/>
                <main data-scroll-section>
                        {children}
                    </main>
                <Footer  gsapFade={gsapFade} />
            </div>
    )
}

export default Layout