import * as React from "react"
import Header from "./Header";
import Footer from "./Footer";
import '../style/LS.css'
import ImageCard from "./ImageCard";
import FloatingCursor from "./FloatingCursor";
import {useEffect, useMemo} from "react";
import {useLocoScrollContext} from "../context/LocomotiveScrollContext";



const Layout = ({children, title}) => {

    const {ScrollInit, ScrollTrigger} = useLocoScrollContext()

    useEffect(()=>{
        ScrollInit('reset')
        return ScrollInit('init')
    },[ScrollTrigger])

    return (
        <div>
                <ImageCard/>
                <FloatingCursor/>
                <Header title={title}/>
                <main data-scroll-section>
                    {children}
                </main>
                <Footer/>
        </div>
    )
}

export default Layout