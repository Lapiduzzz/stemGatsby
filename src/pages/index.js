import * as React from "react"
import * as home from "../style/home_page.module.css"
import * as style from "../style/style.module.css"
import * as intro from '../style/introduction.module.css'
import * as l from '../style/links.module.css'
import 'normalize.css'
import Layout from "../components/Layout";
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image";
import Links from "../components/Links";
import Spacer from "../components/Spacer";
import {useEffect, useRef, useState} from "react";
import Video from "../components/Video";
import {Link, graphql} from "gatsby";
import Introduction from "../components/Introduction";
import Menu from "../components/Menu";
import {gsap} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const IndexPage = ({data}) => {

    let frontmatter = data.mdx.frontmatter


    const [menuDisplay, setMenuDisplay] = useState(false)
    const [whichCard, setWhichCard] = useState('APPROACH')
    const [cursorData, setCursorData] = useState(null)
    const [isSectionHover, setIsSectionHover] = useState(false)
    const [imageCardDisplay, setImageCardDisplay] = useState(false)
    const [cursorArrowsDisplay, setCursorArrowsDisplay] = useState(false)
    const [swiperHover, setSwiperHover] = useState(false)


    const sliderCard1 = getImage(frontmatter.sliderCard1)
    const sliderCard2 = getImage(frontmatter.sliderCard2)
    const sliderCard3 = getImage(frontmatter.sliderCard3)
    const sliderCard4 = getImage(frontmatter.sliderCard4)

    const scrollContainerRef = useRef(null)

    const linkRef1 = useRef(null)
    const linkRef2 = useRef(null)
    const linkRef3 = useRef(null)
    const linkRef4 = useRef(null)
    const linkRef5 = useRef(null)
    const linkRef6 = useRef(null)

    const arrRef1 = useRef(null)
    const arrRef2 = useRef(null)
    const arrRef3 = useRef(null)
    const arrRef4 = useRef(null)
    const arrRef5 = useRef(null)
    const arrRef6 = useRef(null)

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






    const links = [
        {
            title: 'approach',
            position: style.start,
            linkRef: linkRef1,
            arrRef: arrRef1,
        },
        {
            title: 'folio',
            position: style.start,
            linkRef: linkRef2,
            arrRef: arrRef2,
        },
        {
            title: 'films',
            position: style.end,
            linkRef: linkRef3,
            arrRef: arrRef3,
        },
        {
            title: 'about',
            position: style.start,
            linkRef: linkRef4,
            arrRef: arrRef4,
        },
        {
            title: 'store',
            position: style.center,
            linkRef: linkRef5,
            arrRef: arrRef5,
        },
        {
            title: 'contact',
            position: style.center,
            linkRef: linkRef6,
            arrRef: arrRef6,
        },

    ]

    const linkSectionOver = (dataCursor, cardDisplay, arrowDisplay) => {
        if (isSectionHover === false) {
            setCursorData(dataCursor)
            setImageCardDisplay(cardDisplay)
            setCursorArrowsDisplay(arrowDisplay)
            setIsSectionHover(true)
        }
    }
    const linkSectionLeave = () => {
        if (isSectionHover === true) {
            setImageCardDisplay(false)
            setCursorArrowsDisplay(false)
            setIsSectionHover(false)
        }
    }

    const gsapTxt = (target, trigger, delay) => {
        gsap.fromTo(target, {
            duration: 1.5, ease: "power2.out", yPercent: 150, skewY: 5,
        },
        {duration: 1.5, ease: "power2.out", yPercent: 0, skewY: 0, delay: delay,
            scrollTrigger: {
                trigger: trigger,
                scroller: scrollContainerRef.current,
                start: 'top center',
                end: 'bottom bottom',
            }
        }
        )
    }

    const gsapFade = (target, trigger, delay, start) => {
        gsap.from(target, {
            duration: 1.25, opacity: 0, ease: "power2.out", delay: delay,
            scrollTrigger: {
                trigger: trigger,
                scroller: scrollContainerRef.current,
                start: start,
                end: 'bottom bottom',
            }
        })
    }

    const arrMove = (target, trigger) => {
        gsap.from(target, {duration: 1.25, ease: "power2.out", translateX: '-100%', delay: 1.25,
            scrollTrigger: {
                trigger: trigger,
                scroller: scrollContainerRef.current,
                start: 'top center',
                end: 'bottom bottom',
            }
        }
)



    }


    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsapTxt(linkRef1.current, LinkSection.current, 0,)
        gsapTxt(linkRef2.current, LinkSection.current, 0.1,)
        gsapTxt(linkRef3.current, LinkSection.current, 0.2,)
        gsapTxt(linkRef4.current, LinkSection.current, 0.3,)
        gsapTxt(linkRef5.current, LinkSection.current, 0.4,)
        gsapTxt(linkRef6.current, LinkSection.current, 0.5,)
        gsapFade(videoRef.current, videoRef.current, 0, 'top center')


        gsapTxt(link2Ref1.current, section2Ref.current, 0,)
        gsapTxt(link2Ref2.current, section2Ref.current, 0.2,)
        gsapTxt(link2Ref3.current, section2Ref.current, 0.4,)
        gsapTxt(link2Ref4.current, section2Ref.current, 0.6,)
        gsapFade(p2Ref.current, section2Ref.current, 0.8, 'top center')


        gsapFade(swiperRef.current, swiperRef.current, 0, 'top center')


        gsapTxt(banerRef1.current, banerRef.current, 0,)
        gsapTxt(banerRef2.current, banerRef.current, 0.2,)
        gsapTxt(banerRef3.current, banerRef.current, 0.4,)
        gsapTxt(banerRef4.current, banerRef.current, 0.6,)

        arrMove([
            arrRef1.current,
            arrRef2.current,
            arrRef3.current,
            arrRef4.current,
            arrRef5.current,
            arrRef6.current,
        ],LinkSection.current )
        arrMove(banerArrRef.current, banerRef.current)


    }, [])


    return (
        <Layout title={frontmatter.head}
                whichCard={whichCard}
                setWhichCard={setWhichCard}
                cursorData={cursorData}
                isSectionHover={isSectionHover}
                imageCardDisplay={imageCardDisplay}
                setMenuDisplay={setMenuDisplay}
                scrollContainerRef={scrollContainerRef}
                cursorArrowsDisplay={cursorArrowsDisplay}
                swiperHover={swiperHover}
                gsapFade={gsapFade} gsapTxt={gsapTxt}
        >

            {menuDisplay ? <Menu links={links}/> : null}



            <Introduction backgroundImg={data.mdx.frontmatter.backgroundImg}
                          alt={frontmatter.backgroundImgAlt}
                          hStr1={'Embrace'}
                          hStr2={'A new'}
                          hStr3={'Reality'}
                          gsapFade={gsapFade}
                          gsapTxt={gsapTxt}
                          bottomText={'Owned and operated by nicole cooper, stem is a boutique floral practice crafting ' +
                          'unique and scalable botanical arrangements. Whether it’s events, weddings or experimental ' +
                          'arrangements - impossible is our speciality.'}
            />
            <Spacer/>
            <section className={home.internal_page_links} ref={LinkSection} data-scrol-section
                     onMouseEnter={e => linkSectionOver('Explore', true, false)}
                     onMouseLeave={e => linkSectionLeave()}
            >
                <div className={home.links_wrapper}>
                    {links.map(link => (<Links title={link.title}
                                               fontSize={'10vw'}
                                               position={link.position}
                                               setWhichCard={setWhichCard}
                                               linkRef={link.linkRef}
                                               arrRef={link.arrRef}
                                               arrowSize={'7vw'}
                        />)
                    )}
                </div>
            </section>
            <Spacer/>
            <section className={home.video_section}>
                <div className={home.video_wrapper} ref={videoRef}>
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
                            <span>@stemdesignflorals</span>
                        </Link>
                    </p>
                </div>
                <div className={home.swiper_container}
                     onMouseEnter={e => linkSectionOver('', false, true)}
                     onMouseLeave={e => linkSectionLeave()}>
                    <Swiper
                        className={home.swiper}
                        spaceBetween={0}
                        slidesPerView={2}
                        grabCursor={true}
                        loop={true}
                        freeMode={true}
                        freeModeMomentum = {false}
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
            <section className={home.banner} data-scrol-section
                     ref={banerRef}
                     onMouseEnter={e => linkSectionOver('ENQUIRE', false, false)}
                     onMouseLeave={e => linkSectionLeave()}
            >
                <div className={home.links_wrapper}>
                    <Link to={'/contact'}>
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
                                style={{fontStyle: 'normal', display: 'flex', marginLeft: '30px', marginBottom: '20px', lineHeight: '.85'}}
                                ref={banerRef3}
                            >mood?</h1>
                        </div>
                            <Links title={'let\'s chat'} fontSize={'10vw'} position={style.start}
                                   setWhichCard={setWhichCard} linkRef={banerRef4} arrRef={banerArrRef} arrowSize={'7vw'}/>
                    </Link>
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
