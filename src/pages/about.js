import * as React from "react"
import * as home from "../style/home_page.module.css"
import * as style from "../style/style.module.css"
import * as intro from '../style/introduction.module.css'
import 'normalize.css'
import Layout from "../components/Layout";
import {StaticImage} from "gatsby-plugin-image";
import '../fonts/SilkSerif/stylesheet.css'
import Links from "../components/Links";
import Spacer from "../components/Spacer";
import {useState} from "react";
import Video from "../components/Video";
import {Link, graphql} from "gatsby";
import Introduction from "../components/Introduction";
import Flickity from "react-flickity-component";

const IndexPage = ({data}) => {
    const [whichCard, setWhichCard] = useState(null)
    const frontmatter = data.mdx.frontmatter
    const flickityOptions = {
        initialIndex: 2,
        freeScroll: true,
        contain: false,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
    }
    return (
        <Layout title={frontmatter.head} whichCard={whichCard} setWhichCard={setWhichCard}>
            <Introduction backgroundImg={data.mdx.frontmatter.backgroundImg}
                          alt={frontmatter.backgroundImgAlt}
                          hStr1={'Embrace'}
                          hStr2={'A new'}
                          hStr3={'Reality'}
                          bottomText={'Owned and operated by nicole cooper, stem is a boutique floral practice crafting ' +
                          'unique and scalable botanical arrangements. Whether it’s events, weddings or experimental ' +
                          'arrangements - impossible is our speciality.'}
            />
            <Spacer/>
            <section className={home.internal_page_links} data-scrol-section>
                <div className={home.links_wrapper}>
                    <Links title={'approach'} fontSize={"10vw"} position={style.start} setWhichCard={setWhichCard}/>
                    <Links title={'folio'} fontSize={"10vw"} position={style.start} setWhichCard={setWhichCard}/>
                    <Links title={'films'} fontSize={"10vw"} position={style.end} setWhichCard={setWhichCard}/>
                    <Links title={'about'} fontSize={"10vw"} position={style.start} setWhichCard={setWhichCard}/>
                    <Links title={'store'} fontSize={"10vw"} position={style.center} setWhichCard={setWhichCard}/>
                    <Links title={'contacts'} fontSize={"10vw"} position={style.center} setWhichCard={setWhichCard}/>
                </div>
            </section>
            <Spacer/>
            <section className={home.video_section}>
                <div className={home.video_wrapper}>
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
            <section className={home.specialising} data-scrol-section>
                <p>specialising in</p>
                <div className={home.specialising_header} data-scroll >
                    <div className={intro.h_container}>
                        <h2 className={style.h2}>WEDDINGS</h2>
                    </div>
                    <div className={intro.h_container}>
                        <h2 className={style.h2}>EVENTS &</h2>
                    </div>
                    <div className={intro.h_container}>
                        <h2 className={style.h2}>EXPERIENTIAL</h2>
                    </div>
                    <div className={intro.h_container}>
                        <h2 className={style.h2}>FLORALS</h2>
                    </div>
                </div>
            </section>
            <Spacer/>
            <section className={home.carousel}>
                <div className={home.carousel_top}>
                    <p>Latest and Greatest</p>
                    <p className={home.text_right}>
                        <span>Follow Us</span><br/>
                        <Link to={'https://www.instagram.com/stemdesignflorals'} className={style.link}>
                            <span>@stemdesignflorals</span>
                        </Link>
                    </p>
                </div>
                <Flickity
                    className={home.swiper}
                    options={flickityOptions}
                >
                    <div className={home.carouselImg_container}>
                        <StaticImage className={home.carouselImg} src={'../images/carousel/carousel1.png'} alt={'x'}/>
                    </div>
                    <div className={`${home.carouselImg_container}  ${home.carouselImg_container_small}`}>
                        <StaticImage className={home.carouselImg} src={'../images/carousel/carousel2.png'} alt={'x'}/>
                    </div>
                    <div className={home.carouselImg_container}>
                        <StaticImage className={home.carouselImg} src={'../images/carousel/carousel3.png'} alt={'x'}/>
                    </div>
                    <div className={`${home.carouselImg_container}  ${home.carouselImg_container_small}`}>
                        <StaticImage className={home.carouselImg} src={'../images/carousel/carousel4.png'} alt={'x'}/>
                    </div>
                </Flickity>
            </section>
            <Spacer/>
            <section className={home.banner}>
                <div className={home.links_wrapper}>
                    <h1 className={style.h1}>ready to</h1>
                    <h1 className={style.h1}>create your</h1>
                    <h1 className={style.h1}>mood?</h1>
                    <Links title={'let\'s chat'} fontSize={"10vw"} position={style.start}  setWhichCard={setWhichCard}/>
                </div>
            </section>
            <Spacer/>
            <section className={home.colophon}></section>
        </Layout>
    )
}

export const query = graphql`
    query {
        mdx(id: {eq: "0539a7e1-77f8-5b7a-ad26-3b729d33ab11"}) {
            frontmatter {
                title
                video
                head
                backgroundImg{
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                backgroundImgAlt
            }
            body
            slug
        }
    }
`

export default IndexPage
