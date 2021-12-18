import * as React from "react"
import * as s from "../style/style.module.css"
import Header from "./Header";
import Footer from "./Footer";
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import {useEffect, useRef, useState} from "react";
import '../style/LS.css'
import * as home from "../style/home_page.module.css";
import {gsap} from "gsap";
import ImageCard from "./ImageCard";

const Layout = ({title, headerLinkHover, setHeaderLinkHover, children}) => {


    const scrollContainerRef = useRef(null)
    const cursorRef = useRef()

    useEffect(()=>{
        gsap.set('.ccc',{xPercent:-50,yPercent:-50})
        window.addEventListener("mousemove", (e)=>{
            gsap.to(cursorRef.current,.75,{x:e.clientX,y:e.clientY});
        })
    },[])

    return (
        <LocomotiveScrollProvider
            options={{smooth: true,}}
            watch={[]}
            containerRef={scrollContainerRef}>

            <div className={s.wrapper} data-scroll-container ref={scrollContainerRef} >
                <ImageCard headerLinkHover={headerLinkHover}/>
                <div className={home.ccc} ref={cursorRef}></div>
                <Header title={title} />
                <main data-scroll-section>
                        {children}
                    </main>
                <Footer/>
            </div>
        </LocomotiveScrollProvider>
    )
}

export default Layout