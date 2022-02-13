import * as React from "react"
import 'normalize.css'
import Layout from "../components/Layout";
import Introduction from "../components/Introduction";
import {useEffect, useRef} from "react";
import {useAnimationContext} from "../context/AnimationContext";
import {useFloatingCursor} from "../context/FloatingCursorContext";
import {useImageCard} from "../context/ImageCardContext";
import {graphql} from "gatsby";
import PageCounter from "../components/PageCounter";
import {gsap} from "gsap";

const ApproachPage = ({data}) => {

    let frontmatter = data.mdx.frontmatter

    const {gsapTxt, gsapFade, arrMove,pageNav} = useAnimationContext()
    const {setCursorParams, resetCursorParams, setSwiperHover} = useFloatingCursor()
    const {setImageCardDisplay} = useImageCard()

    const {scrollContainerRef} = useRef(null)


    useEffect(() => {
        resetCursorParams()
        setImageCardDisplay(false)
    }, [])
    return (
        <Layout title={frontmatter.head}>
            <Introduction
                backgroundImg={frontmatter.backgroundImg1}
                hStr1={'PUSH'}
                hStr2={'THE BOUNDS OF'}
                hStr3={'POSSIBILITY'}
                bottomText={'We thrive in the unknown, bringing ideas to life. Stem embodies the ethos that ‘no idea is impossible’, preferring to defy the limits of possibility than saying it can’t be done.'}
            />
            <div>
                <Introduction
                    backgroundImg={frontmatter.backgroundImg2}
                    bottomText={'From the products we use through to the disposal of the installations, we aim to leave the smallest environmental footprint possible, honouring people and planet.'}
                />
            </div>
            <div >
                <Introduction
                    backgroundImg={frontmatter.backgroundImg3}
                />
            </div>
            <div>
                <Introduction
                    backgroundImg={frontmatter.backgroundImg4}
                />
            </div>
            <Introduction
                backgroundImg={frontmatter.backgroundImg1}
            />
        </Layout>
    )
}

export const query = graphql`
    query {
        mdx(frontmatter: {path: {eq: "./src/markdown/approach"}}) {
            frontmatter {
                title
                video
                head
                backgroundImg1 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                backgroundImg2 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                backgroundImg3 {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
                backgroundImg4 {
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


export default ApproachPage
