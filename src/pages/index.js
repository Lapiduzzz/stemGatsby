import * as React from "react"
import * as home from "../style/home_page.module.css"
import * as style from "../style/style.module.css"
import * as intro from '../style/introduction.module.css'
import * as l from '../style/links.module.css'
import 'normalize.css'
import Layout from "../components/Layout";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import Links from "../components/Links";
import Spacer from "../components/Spacer";
import {useEffect, useRef, useState} from "react";
import Video from "../components/Video";
import {Link, graphql} from "gatsby";
import Introduction from "../components/Introduction";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import {useAnimationContext} from "../context/AnimationContext";
import {useImageCard} from "../context/ImageCardContext";
import {useFloatingCursor} from "../context/FloatingCursorContext";
import {useMenuContext} from "../context/MenuContext";
import{MapYandex} from "../components/map";

const IndexPage = ({data}) => {

    let frontmatter = data.mdx.frontmatter
    const [hover, setHover] = useState(false)
    const [windowSize, setWindowSize] = useState(0)

    const {gsapTxt, gsapFade, arrMove} = useAnimationContext()
    const {setCursorParams, resetCursorParams, setSwiperHover} = useFloatingCursor()
    const {swiperHover} = useFloatingCursor().state
    const {setImageCardDisplay} = useImageCard()
    const {homeLinks} = useMenuContext()


    const sliderCard1 = getImage(frontmatter.sliderCard1)
    const sliderCard2 = getImage(frontmatter.sliderCard2)
    const sliderCard3 = getImage(frontmatter.sliderCard3)
    const sliderCard4 = getImage(frontmatter.sliderCard4)

    const LinkSection = useRef(null)

    const videoRef = useRef(null)

    const section2Ref = useRef(null)

    const p2Ref = useRef(null)
    const link2Ref1 = useRef(null)
    const link2Ref2 = useRef(null)
    const link2Ref3 = useRef(null)
    const link2Ref4 = useRef(null)

    const swiperRef = useRef(null)

    const banerRef = useRef(null)

    const banerRef1 = useRef(null)
    const banerRef2 = useRef(null)
    const banerRef3 = useRef(null)
    const banerRef4 = useRef(null)
    const banerArrRef = useRef(null)


    const isSectionOver = (cursorData, cursorArrowsDisplay, imageCard) => {
        if (hover === false) {
            setCursorParams(cursorData, cursorArrowsDisplay)
            setImageCardDisplay(imageCard)
            setHover(true)
        }
    }
    const isSectionLeave = () => {
        if (hover === true) {
            resetCursorParams()
            setImageCardDisplay(false)
            setHover(false)
        }
    }
    useEffect(() => {

        typeof window === `undefined` ? setWindowSize(0) : setWindowSize(window.innerWidth)

        window.addEventListener("resize", () => {
            setWindowSize(window.innerWidth)
        })
        gsapTxt(homeLinks[0].linkRef.current, LinkSection.current, 0,)
        gsapTxt(homeLinks[1].linkRef.current, LinkSection.current, 0.1,)
        gsapTxt(homeLinks[2].linkRef.current, LinkSection.current, 0.2,)
        gsapTxt(homeLinks[3].linkRef.current, LinkSection.current, 0.3,)
        gsapTxt(homeLinks[4].linkRef.current, LinkSection.current, 0.4,)
        gsapTxt(homeLinks[5].linkRef.current, LinkSection.current, 0.5,)
        gsapFade(videoRef.current, videoRef.current, 0, 'top center')

        gsapTxt(link2Ref1.current, section2Ref.current, 0,)
        gsapTxt(link2Ref2.current, section2Ref.current, 0.2,)
        gsapTxt(link2Ref3.current, section2Ref.current, 0.4,)
        gsapTxt(link2Ref4.current, section2Ref.current, 0.6,)
        gsapFade(p2Ref.current, section2Ref.current, 0.8, 'top center')

        gsapFade(swiperRef.current, swiperRef.current, 0, 'top center')

        gsapTxt(banerRef1.current, banerRef.current, 0, 0)
        gsapTxt(banerRef2.current, banerRef.current, 0.2, 0)
        gsapTxt(banerRef3.current, banerRef.current, 0.4, 0)
        gsapTxt(banerRef4.current, banerRef.current, 0.6, 0)

        arrMove([
            homeLinks[0].arrRef.current,
            homeLinks[1].arrRef.current,
            homeLinks[2].arrRef.current,
            homeLinks[3].arrRef.current,
            homeLinks[4].arrRef.current,
            homeLinks[5].arrRef.current,
        ], LinkSection.current)
        arrMove(banerArrRef.current, banerRef.current)
    }, [])

    return (
        <Layout title={frontmatter.head} windowSize={windowSize}>
            <Introduction backgroundImg={data.mdx.frontmatter.backgroundImg}
                          alt={frontmatter.backgroundImgAlt}
                          hStr1={'Embrace'}
                          hStr2={'A new'}
                          hStr3={'Reality'}
                          bottomText={'Owned and operated by nicole cooper, Sweet Stems is a boutique floral practice crafting ' +
                          'unique and scalable botanical arrangements. Whether it’s events, weddings or experimental ' +
                          'arrangements - impossible is our speciality.'}
            />
            <Spacer/>
            <section className={home.internal_page_links} ref={LinkSection} data-scrol-section
                     onMouseEnter={e => isSectionOver('Explore', false, true,)}
                     onMouseLeave={e => isSectionLeave()}
            >
                <div className={home.links_wrapper}>
                    {homeLinks.map(link => (<Links title={link.title}
                                                   link={link.link}
                                                   fontSize={'10vw'}
                                                   position={link.position}
                                                   linkRef={link.linkRef}
                                                   arrRef={link.arrRef}
                                                   arrowSize={'7vw'}
                        />)
                    )}
                </div>
            </section>
            <Spacer/>
            <section className={home.video_section}>
                {windowSize < 768
                    ? <div className={home.video_wrapper} ref={videoRef}>
                        <div className={home.video_container}>
                            <Video videoSrcURL={frontmatter.video}/>
                        </div>
                    </div>
                    : <div className={home.video_wrapper} ref={videoRef}>
                        <div className={home.video_container}>
                            <Video videoSrcURL={frontmatter.video}/>
                        </div>
                        <div className={home.video_container}>
                            <Video videoSrcURL={frontmatter.video}/>
                        </div>
                        <div className={home.video_container}>
                            <Video videoSrcURL={frontmatter.video}/>
                        </div>
                    </div>
                }
            </section>
            <Spacer/>
            <section className={home.specialising} data-scrol-section ref={section2Ref}>
                <p ref={p2Ref}>specialising in</p>
                <div className={home.specialising_header} data-scroll>
                    <div className={`${intro.h_container} + ${intro.h2_container}`}>
                        <h2 className={style.h2} ref={link2Ref1}>WEDDINGS</h2>
                    </div>
                    <div className={intro.h_container}>
                        <h2 className={style.h2} ref={link2Ref2}>EVENTS &</h2>
                    </div>
                    <div className={intro.h_container}>
                        <h2 className={style.h2} ref={link2Ref3}>EXPERIENTIAL</h2>
                    </div>
                    <div className={intro.h_container}>
                        <h2 className={style.h2} ref={link2Ref4}>FLORALS</h2>
                    </div>
                </div>
            </section>
            <Spacer/>
            <section className={home.carousel} data-scrol-section>
                <div className={home.carousel_top}>
                    <p>Latest and Greatest</p>
                    <p className={home.text_right}>
                        <span>Follow Us</span><br/>
                        <Link to={'https://www.instagram.com/stemdesignflorals'} className={style.link}>
                            {windowSize < 768
                                ? <span>@designflorals</span>
                                : <span>@sweetstemsdesignflorals</span>
                            }
                        </Link>
                    </p>
                </div>
                <div className={home.swiper_container}
                     onMouseEnter={e => isSectionOver('', true, false)}
                     onMouseLeave={e => isSectionLeave()}>
                    <Swiper
                        className={home.swiper}
                        spaceBetween={windowSize < 768 ? 10 : 0}
                        slidesPerView={windowSize < 768 ? 1 : 2}
                        grabCursor={true}
                        loop={true}
                        freeMode={true}
                        freeModeMomentum={false}
                        centeredSlides={true}
                        onTouchStart={() => {
                            setSwiperHover(true)
                        }}
                        onTouchEnd={() => {
                            setSwiperHover(false)
                        }}
                        ref={swiperRef}
                    >
                        {[sliderCard1, sliderCard2, sliderCard3, sliderCard4].map((image, index) => (
                            <SwiperSlide>
                                <div className={home.carouselImg_container}>
                                    <GatsbyImage alt={'image'}
                                                 image={image}
                                                 className={
                                                     index % 2 === 0
                                                         ? home.carouselImg
                                                         : `${home.carouselImg_container}  ${home.carouselImg_container_small}`
                                                 }
                                                 imgStyle={
                                                     swiperHover
                                                         ? {transition: "all 0.5s ease", transform: "scale(1.05)"}
                                                         : {transition: "all 0.5s ease", transform: "scale(1)"}}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </section>
            <Spacer/>
            <MapYandex/>
            <section className={home.banner} data-scrol-section
                     ref={banerRef}
                     onMouseEnter={e => isSectionOver("Enquire", false, false)}
                     onMouseLeave={e => isSectionLeave()}
            >
                <div className={home.links_wrapper}>
                    <div className={`${l.link} + ${style.start}`}>
                        <h1 className={`${style.h1} + ${home.banner_h1}`}
                            style={{fontStyle: 'normal', display: 'flex', marginLeft: '30px', lineHeight: '.85'}}
                            ref={banerRef1}
                        >ready to</h1>
                    </div>
                    <div className={`${l.link} + ${style.end}`}>
                        <h1 className={`${style.h1}  + ${home.banner_h1}`}
                            style={{fontStyle: 'normal', display: 'flex', marginLeft: '30px', lineHeight: '.85'}}
                            ref={banerRef2}
                        >create your</h1>
                    </div>
                    <div className={`${l.link} + ${style.end}`}>
                        <h1 className={`${style.h1} + ${home.banner_h1}`}
                            style={{
                                fontStyle: 'normal',
                                display: 'flex',
                                marginLeft: '30px',
                                marginBottom: '20px',
                                lineHeight: '.85'
                            }}
                            ref={banerRef3}
                        >mood?</h1>
                    </div>
                    <Links link={'contact'} title={'let\'s chat'} fontSize={'10vw'} position={style.start}
                           linkRef={banerRef4} arrRef={banerArrRef} arrowSize={'7vw'}/>
                </div>
            </section>
            <Spacer/>
            <section className={home.colophon} data-scrol-section></section>
        </Layout>
    )
}

export const query = graphql`
    query {
        mdx(frontmatter: {path: {eq: "./src/markdown/home"}}) {
            frontmatter {
                title
                video
                head
                backgroundImg {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                backgroundImgAlt
                sliderCard1 {
                    childImageSharp {
                        gatsbyImageData(width: 550)
                    }
                }
                sliderCard2 {
                    childImageSharp {
                        gatsbyImageData(width: 550)

                    }
                }
                sliderCard3 {
                    childImageSharp {
                        gatsbyImageData(width: 550)
                    }
                }
                sliderCard4 {
                    childImageSharp {
                        gatsbyImageData(width: 550)
                    }
                }
            }
            body
            slug
        }
    }
`

export default IndexPage
