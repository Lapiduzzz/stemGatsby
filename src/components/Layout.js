import * as React from "react"
import Header from "./Header";
import Footer from "./Footer";
import '../style/LS.css'
import ImageCard from "./ImageCard";
import FloatingCursor from "./FloatingCursor";
import LocoScroll from "./LocomotiveScroll";
import {useEffect} from "react";
import {useLocoScrollContext} from "../context/LocomotiveScrollContext";
import * as style from "../style/style.module.css";
import {useStateContext} from "../context/Context";



const Layout = ({children, title}) => {

    const {ScrollInit, ScrollTrigger} = useLocoScrollContext()

    useEffect(()=>{
        return ScrollInit()
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