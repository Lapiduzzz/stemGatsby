import * as React from "react"
import Header from "./Header";
import Footer from "./Footer";
import '../style/LS.css'
import ImageCard from "./ImageCard";
import FloatingCursor from "./FloatingCursor";
import LocoScroll from "./LocomotiveScroll";



const Layout = ({children, title}) => {

    return (
        <LocoScroll>
                <ImageCard/>
                <FloatingCursor/>
                <Header title={title}/>
                <main data-scroll-section>
                    {children}
                </main>
                <Footer/>
        </LocoScroll>

    )
}

export default Layout