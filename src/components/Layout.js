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

    useEffect(() => {
        let locoScroll = new LocomotiveScroll({
                el: scrollContainerRef.current,
                smooth: true,
            }
        )
        locoScroll.scrollTo( 'top', {
            'offset': 0,
            'callback': function() {
                // do something...
            },
            'duration': 600,
            'easing': [0.25, 0.00, 0.35, 1.00],
            'disableLerp': true
        } );

        locoScroll.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            pinType: scrollContainerRef.current.style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
        ScrollTrigger.refresh();

    }, [ScrollTrigger])



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