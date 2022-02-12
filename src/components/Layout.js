import * as React from "react"
import Header from "./Header";
import Footer from "./Footer";
import '../style/LS.css'
import ImageCard from "./ImageCard";
import FloatingCursor from "./FloatingCursor";
import {useEffect} from "react";
import {useLocoScrollContext} from "../context/LocomotiveScrollContext";
import {Helmet} from "react-helmet";
import Menu from "./Menu";
import {useMenuContext} from "../context/MenuContext";


const Layout = ({children, title}) => {

    const {ScrollInit, ScrollTrigger} = useLocoScrollContext()

    const {menuDisplay} = useMenuContext()

    useEffect(() => {
        ScrollInit('reset')
        return ScrollInit('init')
    }, [ScrollTrigger])

    return (
        <div>
            <Helmet>
                <meta name='description' content='stem design'/>
                <title>Stem {title}</title>
            </Helmet>
                <ImageCard/>
                <FloatingCursor/>
                <Header title={title}/>
                <main data-scroll-section>
                    {menuDisplay ? <Menu/> : children }
                </main>}
                <Footer/>
        </div>
    )
}

export default Layout