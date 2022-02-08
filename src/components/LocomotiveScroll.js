import React, {useEffect, } from "react";
import {gsap} from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import ScrollTrigger from 'gsap/ScrollTrigger';
import * as style from "../style/style.module.css";
import {useStateContext} from "../context/Context";



const LocoScroll = ({children}) => {

    const {scrollContainerRef} = useStateContext()

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        let locoScroll = new LocomotiveScroll({
                el: scrollContainerRef.current,
                smooth: true,
                mobile: {
                    smooth: true
                },
                tablet: {
                    smooth: true
                },
                smartphone: {
                    smooth: true
                },
            }
        )

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
                {children}
            </div>
    )
}

export default LocoScroll