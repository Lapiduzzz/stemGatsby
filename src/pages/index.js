import * as React from "react"
import * as home from "../style/home_page.module.css"
import * as style from "../style/style.module.css"
import 'normalize.css'
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";
import '../fonts/SilkSerif/stylesheet.css'
import Links from "../components/Links";
import Spacer from "../components/Spacer";
import {useState} from "react";


const IndexPage = () => {
    const [headerLinkHover, setHeaderLinkHover] = useState(false)

    return (
        <Layout title={'home'} headerLinkHover={headerLinkHover} >
            <section className={home.introduction} data-scroll>
                <StaticImage className={home.homeImg} data-scroll
                             src="../images/home-background.webp"
                             alt="xxx"
                />
                <div className={home.intro_header} data-scroll data-scroll-speed="1.5">
                    <div className={home.h_container}>
                        <h1 className={style.h1}>EMBRACE</h1>
                    </div>
                    <div className={home.h_container}>
                        <h1 className={style.h1}>A NEW</h1>
                    </div>
                    <div className={home.h_container}>
                        <h1 className={style.h1}>REALITY</h1>
                    </div>
                </div>
                <div className={home.intro_text} data-scroll>
                    <p>OWNED AND OPERATED BY NICOLE COOPER, STEM IS A BOUTIQUE FLORAL PRACTICE CRAFTING UNIQUE AND
                        SCALABLE BOTANICAL ARRANGEMENTS. WHETHER IT’S EVENTS, WEDDINGS OR EXPERIMENTAL ARRANGEMENTS
                        -
                        IMPOSSIBLE IS OUR SPECIALITY.</p>
                </div>
            </section>
            <Spacer/>
            <section className={home.internal_page_links} data-scrol-section>
                <div className={home.links_wrapper}>
                    <Links title={'approach'} fontSize={"10vw"} position={style.start} headerLinkHover={headerLinkHover} setHeaderLinkHover={setHeaderLinkHover}/>
                    <Links title={'folio'} fontSize={"10vw"} position={style.start} headerLinkHover={headerLinkHover} setHeaderLinkHover={setHeaderLinkHover}/>
                    <Links title={'films'} fontSize={"10vw"} position={style.end} headerLinkHover={headerLinkHover} setHeaderLinkHover={setHeaderLinkHover}/>
                    <Links title={'about'} fontSize={"10vw"} position={style.start} headerLinkHover={headerLinkHover} setHeaderLinkHover={setHeaderLinkHover}/>
                    <Links title={'store'} fontSize={"10vw"} position={style.center} headerLinkHover={headerLinkHover} setHeaderLinkHover={setHeaderLinkHover}/>
                    <Links title={'contacts'} fontSize={"10vw"} position={style.center} headerLinkHover={headerLinkHover} setHeaderLinkHover={setHeaderLinkHover}/>
                </div>
            </section>
            <Spacer/>
            {/*<section>
                <video loop preload='auto' autoPlay muted>
                    <source
                        src="https://player.vimeo.com/external/596315373.hd.mp4?s=10bb1f2e0fb336af230477953acc12c8e03e0351&amp;profile_id=175"
                        type="video/mp4"/>
                </video>
                <video loop preload='auto' autoPlay muted>
                    <source
                        src="https://player.vimeo.com/external/596315373.hd.mp4?s=10bb1f2e0fb336af230477953acc12c8e03e0351&amp;profile_id=175"
                        type="video/mp4"/>
                </video>
                <video loop preload='auto' autoPlay muted>
                    <source
                        src="https://player.vimeo.com/external/596315373.hd.mp4?s=10bb1f2e0fb336af230477953acc12c8e03e0351&amp;profile_id=175"
                        type="video/mp4"/>
                </video>
            </section>*/}
            <Spacer/>
        </Layout>
    )
}

export default IndexPage
